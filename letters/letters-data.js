// ================================================================
//  letters/letters-data.js
//  Dữ liệu thư 20/10 — MỖI NGƯỜI MỘT BỨC THƯ RIÊNG BIỆT
//
//  👉 CẤU TRÚC MỖI MỤC:
//     "Key": {
//       fullName: "Họ và tên đầy đủ",
//       aliases:  ["tên gọi tắt", "tên lót", "tên không dấu", ...],
//       type:     "text",          // hoặc "image" nếu dùng ảnh thư tay
//       content:  `Nội dung thư...`
//       // src:   "images/thu_tay.jpg" // (nếu type là "image")
//     }
//
//  💡 CƠ CHẾ TÌM KIẾM 2 TẦNG (Priority Matching):
//     - Tầng 1 (Ưu tiên 1): Khớp chính xác 100% họ tên (fullName)
//     - Tầng 2 (Ưu tiên 2): Khớp với bất kỳ tên gọi tắt / tên lót nào trong (aliases)
// ================================================================

window.lettersData = {

  // ──────────────────────────────────────────────────────────
  // 1. Tiêu Bùi Như Ý
  // ──────────────────────────────────────────────────────────
  "TieuBuiNhuY": {
    fullName: "Tiêu Bùi Như Ý",
    aliases: ["tiêu bùi như ý", "tieu bui nhu y", "bùi như ý", "bui nhu y", "như ý", "nhu y", "ý", "y"],
    type: "text",
    content: `Happi Woman's Day,
chúc Như Ý có một ngày thật là vui vẻ, tận hưởng trọn vẹn, tiền lúc nào cũng vô túi ào ào, 
đạt mọi điểm A ở các kì ở tất cả các môn, cũng như là lụm học bổng dài dài, 
cuối cùng là luôn đẹp gáiii nhen!!!`
  },// xong

  // ──────────────────────────────────────────────────────────
  // 2. Nguyễn Như Ý (Ví dụ trường hợp trùng tên nhưng khác họ tên lót)
  // ──────────────────────────────────────────────────────────
  "BuiPhamGiaHan": {
    fullName: "Bùi Phạm Gia Hân",
    aliases: ["Gia Hân"],
    type: "text",
    content: `Gửi Như Ý thân mến,

Chúc bạn một ngày 20/10 ngập tràn niềm vui, nụ cười rạng rỡ và luôn thành công trên mọi nẻo đường! 🌸`
  },

  // ──────────────────────────────────────────────────────────
  // 3. Bích
  // ──────────────────────────────────────────────────────────
  "VoNgocHan": {
    fullName: "Võ Ngọc Hân",
    aliases: ["Ngọc Hân"],
    type: "text",
    content: `Chúc mừng 20/10 vv,

Chúc bạn lun vv , học tập châm chỉ , gặp được nhiều điều may mắn`
  },// xong

  // ──────────────────────────────────────────────────────────
  // 4. Chi
  // ──────────────────────────────────────────────────────────
  "TranThiNgocHuyen": {
    fullName: "Trần Thị Ngọc Huyền",
    aliases: ["Ngọc Huyền", "Huyền"],
    type: "text",
    content: `Chi ơi,

Mỗi lần gặp em, tôi lại thấy lòng nhẹ hơn một chút — có lẽ vì em luôn mang theo năng lượng tích cực mà không nhận ra điều đó.

Hôm nay là ngày của em. Không cần phải làm gì lớn lao, không cần phải hoàn hảo — chỉ cần được là chính mình là đủ rồi, Chi ạ 🌺

Trân trọng và yêu quý,
Người bạn luôn ở đây 🌸`
  },

  // ──────────────────────────────────────────────────────────
  // 5. Dung
  // ──────────────────────────────────────────────────────────
  "NguyenNgocMai": {
    fullName: "Nguyễn Ngọc Mai",
    aliases: ["Ngọc Mai", "Mai"],
    type: "text",
    content: `Dear Mai,

Hoa đơm kết quả ngọt lành
Nắng thu dịu nhẹ long lanh góc trời
Nụ cười rạng rỡ thắm tươi 
Mừng ngày tuyệt đẹp hai mươi tháng mười`
  }, // xong 

  // ──────────────────────────────────────────────────────────
  // 6. Em (từ khoá phổ thông)
  // ──────────────────────────────────────────────────────────
  "NgoTrieuMan": {
    fullName: "Ngô Triệu Mẫn",
    aliases: ["Triệu Mẫn", "Mẫn"],
    type: "text",
    content: `Gửi em yêu quý,

Bức thư này được viết dành riêng cho em — người đặc biệt đang đọc những dòng chữ này.

Hôm nay là ngày 20/10, ngày của những người phụ nữ phi thường. Và em — dù em có tin hay không — em chính là một trong số đó 🌟

Cảm ơn em vì đã luôn cố gắng, luôn quan tâm và luôn lan toả yêu thương đến mọi người xung quanh.

Chúc mừng ngày Phụ nữ em nhé! 🌸
Mãi yêu em 💌`
  },

  // ──────────────────────────────────────────────────────────
  // 7. Hà
  // ──────────────────────────────────────────────────────────
  "NguyenNgocDoanNghi": {
    fullName: "Nguyễn Ngọc Đoan Nghi",
    aliases: ["Đoan Nghi", "Nghi"],
    type: "text",
    content: `Đoan Ngi,

Người ta hay nói "im lặng là vàng" — nhưng với Hà thì khác, mỗi lần em nói đều khiến người ta nhớ mãi, theo cách riêng thật đẹp.

Nhân ngày 20/10, chúc em luôn giữ được nụ cười ấy — nụ cười mà tôi luôn thấy ấm lòng mỗi khi nhìn thấy 😊

Hạnh phúc và khỏe mạnh nhé Hà!
Gửi em thật nhiều hoa và yêu thương 🌹`
  },

  // ──────────────────────────────────────────────────────────
  // 8. Hương
  // ──────────────────────────────────────────────────────────
  "HuynhDiepNhuNgoc": {
    fullName: "Huỳnh Diệp Như Ngọc",
    aliases: ["Như Ngọc"],
    type: "text",
    content: `Chúc em 20/10 vv hp,

Nhân dịp 20/10, anh muốn gửi lời chúc trân thành nhất đến em. Chúc em luôn xin đẹp, vui vẻ, 
hạnh phúc và đạt được nhìu dự định trong cuộc sống
Mọi điều tốt đẹp nhất sẽ đến với em!!!! Nhuw Ngocj`
  }, // xong

  // ──────────────────────────────────────────────────────────
  // 9. Lan
  // ──────────────────────────────────────────────────────────
  "NguyenBaoNgoc": {
    fullName: "Nguyễn Bảo Ngọc",
    aliases: ["Bảo Ngọc"],
    type: "text",
    content: `Lan yêu quý ơi,

Hoa lan nở đẹp không phải vì được chăm sóc đặc biệt, mà vì trong bản thân nó đã mang sẵn vẻ đẹp tinh tế từ bên trong.

Em cũng vậy — Lan của tôi. Dù trong hoàn cảnh nào, em vẫn tỏa sáng theo cách rất riêng, rất Lan.

Chúc mừng ngày 20/10! Cảm ơn em vì đã là em 🌸
Với tất cả yêu thương 💌`
  },

  // ──────────────────────────────────────────────────────────
  // 10. Linh
  // ──────────────────────────────────────────────────────────
  "LeNguyenNgocNhi": {
    fullName: "Lê Nguyễn Ngọc Nhi",
    aliases: ["Ngọc Nhi", "Nhi"],
    type: "text",
    content: `Linh ơi,

Có những người bước vào cuộc đời ta thật nhẹ nhàng, nhưng lại thay đổi rất nhiều thứ — em là người như thế.

Ngày 20/10 này, tôi muốn nói thật to rằng: Tôi biết ơn vì có em. Sự thông minh, sự tận tâm và trái tim ấm áp của em là những món quà quý giá mà em mang đến cho tất cả mọi người.

Chúc mừng ngày Phụ nữ, Linh! ✨
Trân trọng gửi em 💕`
  },

  // ──────────────────────────────────────────────────────────
  // 11. Mai
  // ──────────────────────────────────────────────────────────
  "VoHongNhung": {
    fullName: "Võ Hông Nhung",
    aliases: ["Nhung", "Hồng Nhung"],
    type: "text",
    content: `Gửi Mai,

Giống như hoa mai nở vào đúng thời điểm nó cần — em cũng vậy. Luôn xuất hiện đúng lúc, đúng chỗ, với đúng những gì mà mọi người cần.

Hôm nay ngày 20/10, tôi muốn tặng lại cho em điều mà em hay tặng cho người khác: sự quan tâm chân thành và lời nhắn nhủ rằng em rất tuyệt vời 🌼

Chúc mừng ngày Phụ nữ Mai nhé!
Gửi em đầy ắp yêu thương 🌸`
  },

  // ──────────────────────────────────────────────────────────
  // 12. My
  // ──────────────────────────────────────────────────────────
  "TranThiMinhThao": {
    fullName: "Trần Thị Minh Thảo",
    aliases: ["Minh Thảo", "Thảo"],
    type: "text",
    content: `My yêu,

Tên em ngắn gọn nhưng ấn tượng — giống hệt em: không ồn ào, không phô trương, nhưng ai gặp rồi cũng nhớ mãi.

Nhân ngày 20/10, tôi chỉ muốn nói một điều thôi: Em thật sự rất đặc biệt, theo cách mà không ai có thể thay thế được.

Chúc mừng ngày Phụ nữ Việt Nam!
Luôn yêu em 💗`
  },

  // ──────────────────────────────────────────────────────────
  // 13. Ngân
  // ──────────────────────────────────────────────────────────
  "PhamNguyenKieuThu": {
    fullName: "Phạm Nguyễn Kiều Thư",
    aliases: ["Kiều Thư", "Thư"],
    type: "text",
    content: `Gửi Thư,

Hôm nay là 20/10 ngày phụ nữ Việt Nam. Tui đã nghĩ khá lâu không biết nên viết gì cho Thư, cuối cùng tui quyết định viết ra những điều đơn giản nhất.
Trước tiên, tui chúc Thư có một ngày 20/10 thật vui vẻ, luôn xinh đẹp, bình an và gặp được thật nhiều điều tốt đẹp trong cuộc sống. Mong rằng những ngày tháng sau này, cậu sẽ luôn có đủ dũng khí để theo đuổi những điều mình thích, đủ mạnh mẽ để vượt qua những lúc khó khăn và luôn có những người thật lòng yêu thương, trân trọng cậu bên cạnh.
Tui mong Thư sẽ luôn mỉm cười thật nhiều, sẽ luôn tìm được một lý do nhỏ bé nào đó để cảm thấy hạnh phúc. Và nếu có những lúc mệt mỏi, mong Thư nhớ rằng Thư cũng xứng đáng được nghỉ ngơi, được quan tâm và được yêu thương.
Thật ra, tui nghĩ những lời chúc tốt đẹp không nhất thiết chỉ dành riêng cho ngày 20/10. Tui hy vọng không chỉ hôm nay mà cả những ngày bình thường khác, Thư vẫn sẽ được đối xử bằng sự dịu dàng và chân thành mà Thư xứng đáng nhận được.

Cuối cùng, chúc Thư có một ngày 20/10 thật hạnh phúc. Mong Thư luôn là chính mình, luôn được sống theo cách Thư mong muốn và rồi sẽ gặp được thật nhiều điều khiến Thư cảm thấy cuộc sống này đáng yêu biết bao.

20/10 vui vẻ.`
  },

  "NguyenThiNgocTram": {
    fullName: "Nguyễn Thị Ngọc Trâm",
    aliases: ["Ngọc Trâm"],
    type: "text",
    content: `Như thân mến,

Biết không — đôi khi người ta cứ tìm kiếm những điều xa xôi, nhưng thứ đặc biệt nhất lại ở ngay bên cạnh. Em chính là điều đặc biệt đó với rất nhiều người.

Ngày 20/10 năm nay, hãy nhớ rằng em được yêu thương nhiều hơn em nghĩ, được trân trọng nhiều hơn em biết.

Chúc mừng ngày Phụ nữ Việt Nam! 🌷
Gửi em thật nhiều hoa 💐`
  },

  "PhungTuTram": {
    fullName: "Phùng Tú Trâm",
    aliases: ["Tú Trâm"],
    type: "text",
    content: `Phương yêu quý,

Mỗi hướng đều có vẻ đẹp riêng — và Phương của tôi cũng vậy. Dù đứng ở góc độ nào, em cũng đều toả ra điều gì đó thật đẹp: sự kiên định, sự ấm áp, hay đơn giản là nụ cười của em.

Chúc mừng ngày 20/10! Chúc em luôn tìm được phương hướng đúng đắn và hạnh phúc trên con đường đó 🧭

Mãi yêu và trân trọng em,
Người gửi thư 💌`
  },

  // ──────────────────────────────────────────────────────────
  // 16. Thảo
  // ──────────────────────────────────────────────────────────
  "NguyenPhamThuyTrinh": {
    fullName: "Nguyễn Phạm Thuỳ Trinh",
    aliases: ["Thuỳ Trinh", "Trinh"],
    type: "text",
    content: `Thảo ơi,

Người ta hay nói "tốt gỗ hơn tốt nước sơn" — và Thảo chính là người có cả hai: đẹp từ bên trong lẫn bên ngoài, chân thành từ lời nói đến hành động.

Hôm nay ngày 20/10, tôi muốn gửi tặng Thảo thứ duy nhất xứng đáng với em: lời cảm ơn chân thành vì em đã luôn là em — tốt bụng, chăm chỉ và đáng yêu như vậy.

Chúc mừng ngày Phụ nữ! 🌿
Gửi em tất cả yêu thương 💚`
  },

  // ──────────────────────────────────────────────────────────
  // 17. Thư
  // ──────────────────────────────────────────────────────────
  "NguyenNgocTuongVy": {
    fullName: "Nguyễn Ngọc Tường Vy",
    aliases: ["Tường Vy"],
    type: "text",
    content: `Gửi Thư — cũng là gửi thư 😊,

Trùng hợp duyên dáng khi một bức thư được gửi đến người tên Thư, phải không?

Thư ơi, tôi muốn em biết rằng: giống như một bức thư viết tay — em mang trong mình sự chân thành, sự tỉ mỉ và cái ấm áp mà không công nghệ nào có thể thay thế được.

Chúc mừng ngày 20/10 — ngày của em, ngày của những người phụ nữ tuyệt vời! 📬
Yêu em nhiều lắm 💌`
  },

  // ──────────────────────────────────────────────────────────
  // 18. Trang
  // ──────────────────────────────────────────────────────────
  "NguyenLeKhanhVy": {
    fullName: "Nguyễn Lê Khánh Vy",
    aliases: ["Khánh Vy"],
    type: "text",
    content: `Điều bất ngờ dành cho bạn ở đây nè 
    (Nhớ Đăng Nhập Bằng Mail CTU Nhé): \n
    Link: https://www.olp.vn/tin-t%E1%BB%A9c/olympic-icpc/th%C3%B4ng-b%C3%A1o`
  },

  // ──────────────────────────────────────────────────────────
  // 19. Vy
  // ──────────────────────────────────────────────────────────
  "TranLeYenVY": {
    fullName: "Trần Lê Yến Vy",
    aliases: ["Yến Vy"],
    type: "text",
    content: `Hello!,

Hôm nay là 20/10 đó! 
Chúc bà có một ngày 20/10 thật là vui vẻ, tràn đầy sắc màu, 
tiền luôn xuất hiện trong túi và không bao giờ cạn, 
cũng như là đạt nhiều con điểm A ở tất cả các môn nha. 💗`
  },

  // ──────────────────────────────────────────────────────────
  // 20. Yến
  // ──────────────────────────────────────────────────────────
  "NguyenNgocPhiYen": {
    fullName: "Nguyễn Ngọc Phi Yến",
    aliases: ["Phi Yến", "Yến"],
    type: "text",
    content: `Yến yêu quý,

Loài chim én báo hiệu mùa xuân — còn Yến của tôi thì báo hiệu điều gì? Tôi nghĩ là sự ấm áp, là tiếng cười, là những buổi tụ họp vui vẻ mà thiếu em thì sẽ kém vui đi một nửa.

Nhân ngày 20/10, tôi chỉ muốn nói: Cảm ơn em vì đã luôn là nguồn năng lượng tích cực cho tất cả mọi người xung quanh.

Chúc mừng ngày Phụ nữ Việt Nam, Yến nhé! 🐦
Mãi yêu em 💌`
  },

  // ──────────────────────────────────────────────────────────
  // 21. Admin (Khánh)
  // ──────────────────────────────────────────────────────────
  "Admin": {
    fullName: "Khánh",
    aliases: ["admin", "khánh", "khanh", "quản trị viên", "nguyễn văn khánh"],
    type: "text",
    content: `khánh thân mến,

chúc bạn 20/10 sớm cao 1m8! 😊
 và sớm có người yêu nhé!`
  }

};
