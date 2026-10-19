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
    content: `Gửi Gia Hân,
    Chúc bạn 20/10 vui vẻ nhé, tuy là có tiếp xúc và chơi cầu long chung với bạn từ 1 năm trước,nhưng hình như mình vân chưa nói chuyện với bạn lần nào 😅.
  kết lời chúc bạn luôn thành công trên trên con đường của bạn, thành công trong việc học hành và tung bay như một quả tên lửa nhá 🚀\n
    All best,
    Bún Lèo
    19/10/2026`
  },// xong

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
    content: `𝐆ử𝐢 𝐇𝐮𝐲ề𝐧,

𝐇ô𝐦 𝐧𝐚𝐲 𝐥à 𝟐𝟎/𝟏𝟎 á! 💐, 𝐆ử𝐢 𝐇𝐮𝐲ề𝐧 𝐛ứ𝐜 𝐭𝐡ư 𝐧à𝐲. 𝐂𝐡ú𝐜 𝐇𝐮𝐲ề𝐧 𝐥ú𝐜 𝐧à𝐨 𝐜ũ𝐧𝐠 𝐤𝐡ỏ𝐞 𝐤𝐡ắ𝐧, 𝐦ạ𝐧𝐡 𝐦ẽ 𝐯à 𝐯𝐮𝐢 𝐯ẻ ☀️✨.

𝐁𝐢ế𝐭 𝐭í𝐧𝐡 𝐇𝐮𝐲ề𝐧 𝐦ạ𝐧𝐡 𝐦ẽ, 𝐥ú𝐜 𝐧à𝐨 𝐜ũ𝐧𝐠 𝐠𝐚𝐥ă𝐧𝐠, 𝐜𝐡𝐮 đá𝐨 𝐥𝐨 𝐥ắ𝐧𝐠 𝐜𝐡𝐨 𝐧𝐠ườ𝐢 𝐭𝐚 𝐦à 𝐧𝐡𝐢ề𝐮 𝐤𝐡𝐢 𝐪𝐮ê𝐧 𝐦ấ𝐭 𝐧𝐠𝐡ĩ 𝐜𝐡𝐨 𝐛ả𝐧 𝐭𝐡â𝐧 ❤️. 𝐂ơ 𝐦à 𝐦ạ𝐧𝐡 𝐦ẽ 𝐭ớ𝐢 đâ𝐮 𝐭𝐡ì 𝐭ớ𝐢 𝐜ũ𝐧𝐠 𝐩𝐡ả𝐢 𝐪𝐮𝐚𝐧 𝐭â𝐦 𝐜𝐡𝐨 𝐜𝐡í𝐧𝐡 𝐛ả𝐧 𝐭𝐡â𝐧 𝐦ì𝐧𝐡 𝐧𝐡𝐢ề𝐮 𝐡ơ𝐧 𝐧𝐡𝐚, 𝐭𝐮𝐢 𝐜𝐡ú𝐜 𝐇𝐮𝐲ề𝐧 𝐥ú𝐜 𝐧à𝐨 𝐜ũ𝐧𝐠 𝐭𝐡à𝐧𝐡 𝐜ô𝐧𝐠 𝐭𝐫𝐨𝐧𝐠 𝐜ô𝐧𝐠 𝐯𝐢ệ𝐜 💼, 𝐡ạ𝐧𝐡 𝐩𝐡ú𝐜 𝐯à 𝐡ọ𝐜 𝐭𝐡𝐢ệ𝐭 𝐠𝐢ỏ𝐢 𝐧𝐡𝐚 🎓🌟.

𝐂𝐡ú𝐜 𝐇𝐮𝐲ề𝐧 𝟐𝟎/𝟏𝟎 𝐭𝐡𝐢ệ𝐭 𝐯𝐮𝐢 𝐯ẻ, 𝐭𝐫ọ𝐧 𝐯ẹ𝐧 𝐯à 𝐥ú𝐜 𝐧à𝐨 𝐜ũ𝐧𝐠 𝐥à 𝐜𝐡í𝐧𝐡 𝐦ì𝐧𝐡! 🍀🎁🔥`
  },// xong

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
    content: `Hello chị Mẫn giữa trời đông cô đơn,
    sài AI giải là gận luôn á nha
MA_TRAN = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G'], 
    ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
    ['O', 'P', 'Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z', '0', '1'],
    ['2', '3', '4', '5', '6', '7', '8'],
    ['9', ' ', '/', '!', '?', '#', '*']
]

DANH_SACH_TOA_DO = [
    [0, 2], [1, 0], [2, 6], [0, 2], [5, 1],      
    [0, 2], [1, 0], [1, 1], [5, 1],              
    [4, 0], [3, 5], [5, 2], [3, 6], [4, 0], [5, 1],
    [3, 0], [2, 6], [1, 1], [5, 1],               
    [3, 0], [0, 4]                                
]

def giai_ma(toa_do_list, ma_tran):
    #GỢI Ý:
    #Mỗi phần tử trong toa_do_list là một cặp [hang, cot].
    #Hãy lấy ký tự tương ứng từ ma_tran[hang][cot] và ghép lại!

    thong_diep = ""
    # viet code phia duoi nha:

    return thong_diep

# CHẠY THỬ
ket_qua = giai_ma(DANH_SACH_TOA_DO, MA_TRAN)
print("Có sài AI hong đó 👀:", ket_qua)`
  }, // xong

  // ──────────────────────────────────────────────────────────
  // 7. Hà
  // ──────────────────────────────────────────────────────────
  "NguyenNgocDoanNghi": {
    fullName: "Nguyễn Ngọc Đoan Nghi",
    aliases: ["Đoan Nghi", "Nghi"],
    type: "text",
    content: `Hello Đoan Ngi nha,
    tuy là chưa nói chuyện với bạn bao giờ cứ coi như đây là lời chúc 20/10 ẩn danh he
    20/10 chúc bạn luôn xinh, luôn được điểm A trong ngành mà bạn theo đuổi nè.
    cuối lời mong mọi điều hạnh phúc đến với bạn`
  },// xong

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
    content: `𝐆ử𝐢 𝐍𝐠ọ𝐜 𝐧𝐡𝐞𝐞! 💖,

𝐇ô𝐦 𝐧𝐚𝐲 𝐥à 𝟐𝟎/𝟏𝟎 𝐫ồ𝐢 𝐧è! 💐 𝐓𝐮𝐢 𝐠ử𝐢 𝐥ờ𝐢 𝐜𝐡ú𝐜 𝐭ớ𝐢 𝐍𝐠ọ𝐜 𝐧è, 𝐜𝐡ú𝐜 𝐍𝐠ọ𝐜 𝐥ú𝐜 𝐧à𝐨 𝐜ũ𝐧𝐠 𝐱𝐢𝐧𝐡 𝐱ắ𝐧, 𝐯𝐮𝐢 𝐯ẻ 𝐯ớ𝐢 
𝐠𝐢ữ 𝐡𝐨à𝐢 𝐜á𝐢 𝐧é𝐭 𝐝ễ 𝐭𝐡ươ𝐧𝐠, đá𝐧𝐠 𝐲ê𝐮 𝐧à𝐲 𝐧𝐡𝐚 ✨.

𝐂ả𝐦 ơ𝐧 𝐍𝐠ọ𝐜 𝐯ì 𝐥ú𝐜 𝐧à𝐨 𝐜ũ𝐧𝐠 𝐦𝐚𝐧𝐠 𝐧ă𝐧𝐠 𝐥ượ𝐧𝐠 𝐭í𝐜𝐡 𝐜ự𝐜 𝐯ớ𝐢 𝐧ụ 𝐜ườ𝐢 𝐭ươ𝐢 🌸 𝐜𝐡𝐨 𝐦ọ𝐢 𝐧𝐠ườ𝐢 𝐱𝐮𝐧𝐠 𝐪𝐮𝐚𝐧𝐡. 
𝐂𝐡ú𝐜 𝐍𝐠ọ𝐜 𝐜ô𝐧𝐠 𝐯𝐢ệ𝐜, 𝐡ọ𝐜 𝐡à𝐧𝐡 𝐠ì 𝐜ũ𝐧𝐠 𝐬𝐮ô𝐧 𝐬ẻ, 𝐠ặ𝐩 𝐭𝐨à𝐧 𝐜𝐡𝐮𝐲ệ𝐧 𝐦𝐚𝐲 𝐦ắ𝐧 𝐯à 𝐥ú𝐜 𝐧à𝐨 𝐜ũ𝐧𝐠 đượ𝐜 𝐜ư𝐧𝐠 𝐜𝐡𝐢ề𝐮, 𝐡ạ𝐧𝐡 𝐩𝐡ú𝐜 𝐧𝐡𝐚 🍀🥰.

𝐂𝐡ú𝐜 𝐍𝐠ọ𝐜 𝐜ó 𝐦ộ𝐭 𝐧𝐠à𝐲 𝟐𝟎/𝟏𝟎 𝐭𝐡𝐢ệ𝐭 𝐭𝐫ọ𝐧 𝐯ẹ𝐧 𝐯à 𝐭𝐫ú𝐧𝐠 𝐩𝐡ó𝐜 𝐧𝐡ữ𝐧𝐠 đ𝐢ề𝐮 𝐍𝐠ọ𝐜 𝐡ằ𝐧𝐠 𝐦𝐨𝐧𝐠 ướ𝐜! 🎉🎁🎀`
  },// xong

  // ──────────────────────────────────────────────────────────
  // 10. Linh
  // ──────────────────────────────────────────────────────────
  "LeNguyenNgocNhi": {
    fullName: "Lê Nguyễn Ngọc Nhi",
    aliases: ["Ngọc Nhi", "Nhi"],
    type: "text",
    content: `gửi bạn nhi,

chúc b có một ngày 20/10 thật vui vẻ. 
mong b được những điều mà mình muốn nhen`
  },// xong

  // ──────────────────────────────────────────────────────────
  // 11. Mai
  // ──────────────────────────────────────────────────────────
  "VoHongNhung": {
    fullName: "Võ Hông Nhung",
    aliases: ["Nhung", "Hồng Nhung"],
    type: "text",
    content: `Gửi Nhung nhân ngày 20/10,

Theo Nhung thì ý nghĩa của ngày 20/10 là gì. Theo MDAD thấy thì nó là ngày tôn vinh những nét đẹp và sự cống hiến của phụ nữ Việt Nam, 
ngoài ra thì nó còn là ngày mà mấy đứa con trai tụi tui viết thư xong tặng quà cho những người con gái mà tụi tui thấy đặc biệt. MDAD nói vậy Nhung đừng hiểu nhầm gì nha không phải là tui tỏ tình gì đâu tui chỉ muốn nói là nữ trong lớp mình ai cũng có nét đặc biệt riêng hết Nhung cũng là 1 người tui thấy rất đặc biệt .
 Nhung là một người theo tui thấy rất là lowkey, hiền và xinh đẹp, Nhung cũng là 1 người có 1 nguồn năng lượng tích cực lúc nào tui cũng thấy Nhung đối xử với mọi thứ xung quanh rất là dịu dàng cho tới hiện tại thì tui chưa thấy Nhung cáu gắt với ai hết á. 
 Nhân ngày 20/10 thì MDAD xin chúc Nhung sẽ luôn giữa được sự dịu dàng này, luôn luôn xinh đẹp và rực rỡ và mong mọi thứ xung quanh sẽ luôn đối xử dịu dàng với Nhung nhaa. 
 Ps đừng có cho ai coi cái này nha mắc cỡ lắm, lúc bạn đọc là tui sẽ quan sát bạn đó nhớ nha🙏💀`
  }, // xong

  // ──────────────────────────────────────────────────────────
  // 12. My
  // ──────────────────────────────────────────────────────────
  "TranThiMinhThao": {
    fullName: "Trần Thị Minh Thảo",
    aliases: ["Minh Thảo", "Thảo"],
    type: "text",
    content: `văn ăn năn,

chúc bạn 20/10 ngày càng xinh gái, 
hãy luôn là chính mình và chúc bạn có nhiều thành công trong tương lai`
  },// xong

  // ──────────────────────────────────────────────────────────
  // 13. Ngân
  // ──────────────────────────────────────────────────────────
  "PhamNguyenKieuThu": {
    fullName: "Phạm Nguyễn Kiều Thư",
    aliases: ["Kiều Thư", "Thư"],
    type: "text",
    content: `Gửi Thư,

Hôm nay là 20/10 ngày phụ nữ Việt Nam. Tui đã nghĩ khá lâu không biết nên viết gì cho Thư, cuối cùng tui quyết định viết ra những điều đơn giản nhất.
Trước tiên, tui chúc Thư có một ngày 20/10 thật vui vẻ, luôn xinh đẹp, bình an và gặp được thật nhiều điều tốt đẹp trong cuộc sống. 
Mong rằng những ngày tháng sau này, cậu sẽ luôn có đủ dũng khí để theo đuổi những điều mình thích, đủ mạnh mẽ để vượt qua những lúc khó khăn và luôn có những người thật lòng yêu thương, trân trọng cậu bên cạnh.
Tui mong Thư sẽ luôn mỉm cười thật nhiều, sẽ luôn tìm được một lý do nhỏ bé nào đó để cảm thấy hạnh phúc. 
Và nếu có những lúc mệt mỏi, mong Thư nhớ rằng Thư cũng xứng đáng được nghỉ ngơi, được quan tâm và được yêu thương.
Thật ra, tui nghĩ những lời chúc tốt đẹp không nhất thiết chỉ dành riêng cho ngày 20/10. 
Tui hy vọng không chỉ hôm nay mà cả những ngày bình thường khác, Thư vẫn sẽ được đối xử bằng sự dịu dàng và chân thành mà Thư xứng đáng nhận được.

Cuối cùng, chúc Thư có một ngày 20/10 thật hạnh phúc. 
Mong Thư luôn là chính mình, luôn được sống theo cách Thư mong muốn và rồi sẽ gặp được thật nhiều điều khiến Thư cảm thấy cuộc sống này đáng yêu biết bao.

20/10 vui vẻ.
`
  },// xong

  "NguyenThiNgocTram": {
    fullName: "Nguyễn Thị Ngọc Trâm",
    aliases: ["Ngọc Trâm"],
    type: "text",
    content: `Hello Bạn,
    Chúc bạn 20/10 vui vẻ, điểm A ngập tràng nha`
  },// xong

  "PhungTuTram": {
    fullName: "Phùng Tú Trâm",
    aliases: ["Tú Trâm"],
    type: "text",
    content: `hong bíc nói j hơn,

chúc b có một ngày 20/10 thật là vui vẻ và hạnh phúc.
Chúc bạn lun học thật tốt đạt nhiều mong muốn mà bạn đang theo đuổi nhen`
  }, // xong

  // ──────────────────────────────────────────────────────────
  // 16. Thảo
  // ──────────────────────────────────────────────────────────
  "NguyenPhamThuyTrinh": {
    fullName: "Nguyễn Phạm Thuỳ Trinh",
    aliases: ["Thuỳ Trinh", "Trinh"],
    type: "text",
    content: `Chúc 20/11 Hạnh phúc,

Dear 𝑻𝒉𝒖̀𝒚 𝑻𝒓𝒊𝒏𝒉,

Lá thư nì gửi tới Trinh vào ngày 20/10💐💐 , Tui chúc Trinh lúc nào cũng tươi tắn, xinh xắn như bông 🌹🌺🌷💮
và tràn đầy năng lượng như mặt trời 🌞, lúc nào cũng cười thiệt là nhiều không có chịn gì 
buồn cái gì hết trơn.

Tính Trinh vừa hiền lành, vừa dễ thương gần gũi nên mang lại nhiều cái tích cực cho mọi người á mong Trinh 
nhận lại những thứ tốt nhất đến với Trinh 🎁. Chúc Trinh học hành gì cũng hanh thông, gặp nhiều may mắn 
và lúc nào cũng có người cưng chiều, trân trọng!!.

Chúc Trinh có một ngày 20/10 thiệt vui, nhận được thiệt nhiều là nhiều quà nha.

𝑺𝒂𝒚 𝒃𝒚𝒆𝒆!!🌸🌸🌸🌸`
  }, // xong

  // ──────────────────────────────────────────────────────────
  // 17. Thư
  // ──────────────────────────────────────────────────────────
  "NguyenNgocTuongVy": {
    fullName: "Nguyễn Ngọc Tường Vy",
    aliases: ["Tường Vy"],
    type: "text",
    content: `Gửi Tường Vy nè,

Lời đầu tiên mình chúc bạn 20/10 vui vẻ nha, trong lớp thiệt sự có thể là mình chưa bao giờ nói chuyện với bạn luôn á 🥲.
tui với bạn như kiểu đối lập vậy á tui thì ồn quá trời, chắc hơi lạc đề ời he :)))
cuối lời mình xin chúc bạn luôn xinh nè, luôn mạnh mẽ khi gặp thách thức 20/10 vui vẻ nha 🥳\n
mong mọi điều tốt lành
      Bún Lèo
    19/10/2026`
  },// xong 

  // ──────────────────────────────────────────────────────────
  // 18. Trang
  // ──────────────────────────────────────────────────────────
  "NguyenLeKhanhVy": {
    fullName: "Nguyễn Lê Khánh Vy",
    aliases: ["Khánh Vy"],
    type: "text",
    content: `Gửi Khánh Vy.
   Nhân ngày 20/10. MDAD chúc bn có một ngày 20/10 thật là dui dẻ và tràn đầy năng lượng, MDAD bật mí cho bạn là hình ảnh bạn trong bộ não này của tui lúc nào cũng rất là mạnh mẽ, 
   rạng rỡ và tràn đầy năng lượng đó nên mong bạn lúc nào cũng giữa được nguồn năng lượng tích cực này của bạn nha. 
   Nhân tiện đây thì đám con trai tụi tui cũng có chút quà tặng bn, mong khi bạn nhìn vào cái móc khoá này thì lúc nào cũng nhớ tới tấm lòng của tụi tui nha. 
   Ps đừng cho ai đọc cái này nghe mắc cỡ lắm sống chết gì cũng đừng nói nghe chưa!? 💀🙏`
  },// xong

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
  }, // xong

  // ──────────────────────────────────────────────────────────
  // 20. Yến
  // ──────────────────────────────────────────────────────────
  "NguyenNgocPhiYen": {
    fullName: "Nguyễn Ngọc Phi Yến",
    aliases: ["Phi Yến", "Yến"],
    type: "text",
    content: `Hello bạn nha,

Biết gì hong hôm nay là 20/10 rồi á, mới đây nhanh ghê ngày nào mình còn học tiếng Anh mà giờ đổi qua mấy cái quái quỷ gì rồi :)))
Bún Lèo cũng hong biết nói gì thêm nói chung là chúc bạn thành công vững vàng luôn có nhiều điểm A trong học tập nhé.\n
Best Wishes,
  Bún Lèo
19/10/2026

`
  }, // xong 

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
