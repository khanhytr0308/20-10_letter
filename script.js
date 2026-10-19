// ============================================================
//  script.js — Logic chính cho website gửi thư 20/10
//  Dữ liệu thư được load từ: letters/letters-data.js
// ============================================================

// ────────────────────────────────────────────────────────────
// 1. BIẾN TRẠNG THÁI
// ────────────────────────────────────────────────────────────
let detectedName = "";      // Họ tên đầy đủ (fullName) để hiển thị lời chào
let selectedLetter = null;  // Bức thư sẽ hiển thị

// ────────────────────────────────────────────────────────────
// 2. HÀM CHUẨN HÓA CHUỖI
//    Bỏ dấu tiếng Việt, viết thường, loại bỏ ký tự lạ, gộp khoảng trắng
// ────────────────────────────────────────────────────────────
function normalizeStr(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  // xóa dấu tổ hợp Unicode
    .replace(/đ/g, "d")               // đ → d
    .replace(/Đ/g, "d")               // Đ → d
    .replace(/[^a-z0-9\s]/g, " ")     // thay ký tự lạ, dấu câu thành khoảng trắng
    .replace(/\s+/g, " ")            // gộp khoảng trắng thừa
    .trim();
}

// ────────────────────────────────────────────────────────────
// 3. HÀM KIỂM TRA TÊN — CƠ CHẾ 2 TẦNG ƯU TIÊN (PRIORITY MATCHING)
//    - Ưu tiên 1 (Exact Match): Khớp chính xác 100% fullName
//    - Ưu tiên 2 (Alias Match): Khớp với bất kỳ tên gọi tắt nào trong aliases
//    Trả về true nếu tìm thấy thư, false nếu không tìm thấy
// ────────────────────────────────────────────────────────────
function checkName(inputValue) {
  const normInput = normalizeStr(inputValue);
  if (!normInput) return false;

  const data = window.lettersData;
  if (!data) {
    console.error("Dữ liệu window.lettersData chưa được tải!");
    return false;
  }

  const list = Object.values(data);

  // ── ƯU TIÊN 1 (Exact Match): So sánh inputValue với fullName ──
  for (const item of list) {
    if (item && item.fullName) {
      if (normalizeStr(item.fullName) === normInput) {
        detectedName = item.fullName;
        selectedLetter = item;
        return true;
      }
    }
  }

  // ── ƯU TIÊN 2 (Alias Match): Kiểm tra inputValue có nằm trong aliases không ──
  for (const item of list) {
    if (item && Array.isArray(item.aliases)) {
      const isAliasMatch = item.aliases.some(alias => normalizeStr(alias) === normInput);
      if (isAliasMatch) {
        detectedName = item.fullName;
        selectedLetter = item;
        return true;
      }
    }
  }

  return false;
}

// ────────────────────────────────────────────────────────────
// 5. XỬ LÝ SUBMIT FORM NHẬP TÊN
// ────────────────────────────────────────────────────────────
function handleNameSubmit() {
  const input = document.getElementById("nameInput");
  const errorMsg = document.getElementById("errorMsg");
  const inputValue = input.value.trim();

  if (!inputValue) {
    shakeError(errorMsg, "Vui lòng nhập tên của bạn nhé! 🌸");
    return;
  }

  if (checkName(inputValue)) {
    errorMsg.classList.remove("visible");
    transitionToFrame2();
  } else {
    shakeError(errorMsg, "Bức thư này không tìm thấy tên bạn... 💔 Thử lại nhé!");
  }
}

// ────────────────────────────────────────────────────────────
// 6. CHUYỂN TỪ FRAME 1 → FRAME 2
// ────────────────────────────────────────────────────────────
function transitionToFrame2() {
  const frame1 = document.getElementById("frame1");
  const frame2 = document.getElementById("frame2");
  const greeting = document.getElementById("greetingText");

  greeting.textContent = "Bức thư gửi đến " + detectedName + "... 💌";

  // Fade out Frame 1
  frame1.style.opacity = "0";
  frame1.style.transform = "scale(0.95)";
  frame1.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  setTimeout(() => {
    frame1.classList.add("hidden");

    // Fade in Frame 2
    frame2.classList.remove("hidden");
    frame2.style.opacity = "0";
    frame2.style.transform = "translateY(20px)";
    frame2.style.transition = "none";
    frame2.offsetHeight; // force reflow
    frame2.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    frame2.style.opacity = "1";
    frame2.style.transform = "translateY(0)";
  }, 600);
}


// ────────────────────────────────────────────────────────────
// 7. HIỆU ỨNG LẮC KHI BÁO LỖI
// ────────────────────────────────────────────────────────────
function shakeError(el, message) {
  el.textContent = message;
  el.classList.add("visible");
  el.classList.remove("shake");
  el.offsetHeight; // trigger reflow
  el.classList.add("shake");
}

// ────────────────────────────────────────────────────────────
// 8. BẮN PHÁO HOA CÁNH HOA & TRÁI TIM (CONFETTI BURST)
// ────────────────────────────────────────────────────────────
function triggerConfettiBurst(buttonEl) {
  if (typeof confetti !== "function") return;

  const rect = buttonEl.getBoundingClientRect();
  const originX = (rect.left + rect.width / 2) / window.innerWidth;
  const originY = (rect.top + rect.height / 2) / window.innerHeight;

  // Đợt 1: Bắn bung tỏa các hạt sắc màu pastel từ tâm phong bì
  confetti({
    particleCount: 50,
    spread: 360,
    startVelocity: 32,
    ticks: 100,
    origin: { x: originX, y: originY },
    colors: ["#e91e8c", "#f48fb1", "#ff4081", "#ffd700", "#ffffff", "#f8bbd9"],
    zIndex: 9999
  });

  // Đợt 2: Cánh hoa đào 🌸 và trái tim 💖 bay bổng
  try {
    const flower = confetti.shapeFromText({ text: "🌸", scalar: 2.2 });
    const heart = confetti.shapeFromText({ text: "💖", scalar: 2.0 });
    const sparkle = confetti.shapeFromText({ text: "✨", scalar: 1.8 });
    const rose = confetti.shapeFromText({ text: "🌹", scalar: 2.2 });

    confetti({
      shapes: [flower, heart, sparkle, rose],
      particleCount: 26,
      spread: 120,
      startVelocity: 26,
      scalar: 1,
      ticks: 130,
      origin: { x: originX, y: originY - 0.04 },
      zIndex: 9999
    });
  } catch (e) {
    // Dự phòng nếu trình duyệt không hỗ trợ shapeFromText
    confetti({
      particleCount: 30,
      spread: 120,
      startVelocity: 25,
      origin: { x: originX, y: originY },
      colors: ["#ff69b4", "#ff1493", "#ffd700"]
    });
  }

  // Đợt 3: Pháo hoa phụ từ hai mép màn hình khi modal vừa mở
  setTimeout(() => {
    confetti({
      particleCount: 22,
      angle: 60,
      spread: 50,
      origin: { x: 0.05, y: 0.65 },
      colors: ["#e91e8c", "#ff4081", "#f8bbd9", "#ffd700"],
      zIndex: 9999
    });
    confetti({
      particleCount: 22,
      angle: 120,
      spread: 50,
      origin: { x: 0.95, y: 0.65 },
      colors: ["#e91e8c", "#ff4081", "#f8bbd9", "#ffd700"],
      zIndex: 9999
    });
  }, 320);
}

// ────────────────────────────────────────────────────────────
// 9. MỞ MODAL BỨC THƯ (KÈM ANIMATION BUNG PHONG BÌ)
// ────────────────────────────────────────────────────────────
function openLetter() {
  const openBtn = document.getElementById("openLetterBtn");

  // Kích hoạt animation nhún và bùng sáng cho phong bì
  openBtn.classList.add("opening");

  // Bắn pháo hoa cánh hoa & tim ngay từ vị trí phong bì
  triggerConfettiBurst(openBtn);

  // Mở modal thư sau khoảng delay ngắn để người dùng kịp thấy phong bì nhún và bung hoa
  setTimeout(() => {
    const modal = document.getElementById("letterModal");
    const letterTitle = document.getElementById("letterTitle");
    const letterBody = document.getElementById("letterBody");

    // Lời chào cá nhân hóa
    letterTitle.textContent = "Gửi " + detectedName + "... 💌";

    // Render nội dung thư
    letterBody.innerHTML = "";

    if (selectedLetter.type === "text") {
      const pre = document.createElement("pre");
      pre.className = "letter-text";
      pre.textContent = selectedLetter.content;
      letterBody.appendChild(pre);

    } else if (selectedLetter.type === "image") {
      const img = document.createElement("img");
      img.src = selectedLetter.src;
      img.alt = "Thư tay gửi " + detectedName;
      img.className = "letter-image";
      letterBody.appendChild(img);
    }

    // Hiện modal
    modal.classList.remove("hidden");
    modal.style.opacity = "0";
    modal.offsetHeight; // reflow
    modal.style.transition = "opacity 0.4s ease";
    modal.style.opacity = "1";

    // Hiệu ứng mở phong bì 3D cho modal-content
    const modalContent = modal.querySelector(".modal-content");
    modalContent.style.animation = "none";
    modalContent.offsetHeight;
    modalContent.style.animation = "openEnvelope 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards";

    // Gỡ class opening khỏi nút phong bì
    setTimeout(() => {
      openBtn.classList.remove("opening");
    }, 600);
  }, 200);
}

// ────────────────────────────────────────────────────────────
// 10. ĐÓNG MODAL
// ────────────────────────────────────────────────────────────
function closeLetter() {
  const modal = document.getElementById("letterModal");
  modal.style.transition = "opacity 0.3s ease";
  modal.style.opacity = "0";
  setTimeout(() => modal.classList.add("hidden"), 300);
}

// ────────────────────────────────────────────────────────────
// 11. TẠO TRÁI TIM BAY
// ────────────────────────────────────────────────────────────
function createFloatingHearts() {
  const container = document.getElementById("heartsContainer");
  const heartSymbols = ["♥", "♡", "🌸", "✿", "❀"];

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (0.8 + Math.random() * 1.4) + "rem";
    heart.style.animationDelay = Math.random() * 10 + "s";
    heart.style.animationDuration = (7 + Math.random() * 8) + "s";
    heart.style.opacity = (0.25 + Math.random() * 0.45).toString();

    container.appendChild(heart);
  }
}

// ────────────────────────────────────────────────────────────
// 12. KHỞI ĐỘNG KHI TRANG TẢI
// ────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  createFloatingHearts();

  document.getElementById("confirmBtn")
    .addEventListener("click", handleNameSubmit);

  document.getElementById("nameInput")
    .addEventListener("keydown", (e) => { if (e.key === "Enter") handleNameSubmit(); });

  document.getElementById("openLetterBtn")
    .addEventListener("click", openLetter);

  document.getElementById("closeLetterBtn")
    .addEventListener("click", closeLetter);



  // Click vùng ngoài modal → đóng
  document.getElementById("letterModal")
    .addEventListener("click", (e) => {
      if (e.target === document.getElementById("letterModal")) closeLetter();
    });
});
