// Configuration
const gridSize = 20; // Grid size n x n
let words = [];
const wordList = {
    'A': [
        { name: "Accent", pronounce: "/ˈæksent/", meaning: "Giọng", type: "Noun (Danh từ)", example: "She speaks English with a French accent." },
        { name: "Accept", pronounce: "/əkˈsept/", meaning: "Chấp nhận", type: "Verb (Động từ)", example: "I accept your apology." },
        { name: "Acceptable", pronounce: "/əkˈseptəbl/", meaning: "Có thể chấp nhận được", type: "Adjective (Tính từ)", example: "This behavior is not acceptable." },
        { name: "Achieve", pronounce: "/əˈtʃiːv/", meaning: "Đạt được", type: "Verb (Động từ)", example: "She worked hard to achieve her goals." },
        { name: "Achievement", pronounce: "/əˈtʃiːvmənt/", meaning: "Thành tựu", type: "Noun (Danh từ)", example: "Winning the award was a big achievement." },
        { name: "Adventure", pronounce: "/ədˈventʃər/", meaning: "Cuộc phiêu lưu", type: "Noun (Danh từ)", example: "They went on an exciting adventure through the jungle." },
        { name: "Adventurous", pronounce: "/ədˈventʃərəs/", meaning: "Thích phiêu lưu", type: "Adjective (Tính từ)", example: "She is an adventurous person." },
        { name: "Advisable", pronounce: "/ədˈvaɪzəbl/", meaning: "Nên làm", type: "Adjective (Tính từ)", example: "It is advisable to save money for emergencies." },
        { name: "Advise", pronounce: "/ədˈvaɪz/", meaning: "Khuyên bảo", type: "Verb (Động từ)", example: "I advise you to take an umbrella." },
        { name: "Agree", pronounce: "/əˈɡriː/", meaning: "Đồng ý", type: "Verb (Động từ)", example: "They agreed on the decision." },
        { name: "Agreement", pronounce: "/əˈɡriːmənt/", meaning: "Sự đồng ý", type: "Noun (Danh từ)", example: "They reached an agreement after a long discussion." },
        { name: "Alone", pronounce: "/əˈloʊn/", meaning: "Một mình", type: "Adjective (Tính từ)", example: "She was alone in the house." },
        { name: "Altogether", pronounce: "/ˌɔːltəˈɡeðər/", meaning: "Tổng cộng", type: "Adverb (Trạng từ)", example: "Altogether, there were 20 people in the room." },
        { name: "Amazing", pronounce: "/əˈmeɪzɪŋ/", meaning: "Tuyệt vời", type: "Adjective (Tính từ)", example: "The view from the top of the mountain was amazing." },
        { name: "Ancient", pronounce: "/ˈeɪnʃənt/", meaning: "Cổ xưa", type: "Adjective (Tính từ)", example: "They visited ancient ruins in Greece." },
        { name: "Appear", pronounce: "/əˈpɪər/", meaning: "Xuất hiện", type: "Verb (Động từ)", example: "A rainbow appeared after the rain." },
        { name: "Arrange", pronounce: "/əˈreɪndʒ/", meaning: "Sắp xếp", type: "Verb (Động từ)", example: "She arranged the flowers in a vase." },
        { name: "Arrangement", pronounce: "/əˈreɪndʒmənt/", meaning: "Sự sắp xếp", type: "Noun (Danh từ)", example: "They made arrangements for the trip." },
        { name: "Art Gallery", pronounce: "/ˈɑːrt ˈɡæləri/", meaning: "Phòng tranh", type: "Noun (Danh từ)", example: "We visited the art gallery to see the new exhibit." },
        { name: "Artefact", pronounce: "/ˈɑːrtɪfækt/", meaning: "Tạo vật", type: "Noun (Danh từ)", example: "The museum displayed ancient artefacts." },
        { name: "Artist", pronounce: "/ˈɑːrtɪst/", meaning: "Nghệ sĩ", type: "Noun (Danh từ)", example: "She is a famous artist known for her paintings." },
        { name: "Astronaut", pronounce: "/ˈæstrənɔːt/", meaning: "Phi hành gia", type: "Noun (Danh từ)", example: "The astronaut explored the surface of the moon." },
        { name: "Attach", pronounce: "/əˈtætʃ/", meaning: "Đính kèm", type: "Verb (Động từ)", example: "Please attach the file to your email." },
        { name: "Available", pronounce: "/əˈveɪləbl/", meaning: "Có sẵn", type: "Adjective (Tính từ)", example: "The item is available in all sizes." },
        { name: "Awful", pronounce: "/ˈɔːfl/", meaning: "Kinh khủng", type: "Adjective (Tính từ)", example: "The food tasted awful." }
    ],
    'B': [
        { name: "Background", pronounce: "/ˈbækɡraʊnd/", meaning: "Nền", type: "Noun (Danh từ)", example: "The mountains are in the background of the picture." },
        { name: "Bake", pronounce: "/beɪk/", meaning: "Nướng", type: "Verb (Động từ)", example: "She likes to bake bread and cakes." },
        { name: "Bakery", pronounce: "/ˈbeɪkəri/", meaning: "Tiệm bánh", type: "Noun (Danh từ)", example: "I bought fresh bread from the bakery." },
        { name: "Balance", pronounce: "/ˈbæləns/", meaning: "Sự cân bằng", type: "Noun (Danh từ)", example: "She has good balance when she dances." },
        { name: "Bank", pronounce: "/bæŋk/", meaning: "Bờ sông", type: "Noun (Danh từ)", example: "They walked along the bank of the river." },
        { name: "Barge", pronounce: "/bɑːrdʒ/", meaning: "Xà lan", type: "Noun (Danh từ)", example: "A barge carried goods along the canal." },
        { name: "Baseball", pronounce: "/ˈbeɪsbɔːl/", meaning: "Bóng chày", type: "Noun (Danh từ)", example: "He loves playing baseball on weekends." },
        { name: "Basic", pronounce: "/ˈbeɪsɪk/", meaning: "Cơ bản", type: "Adjective (Tính từ)", example: "The room was basic, with only a bed and chair." },
        { name: "Beam", pronounce: "/biːm/", meaning: "Chùm sáng", type: "Noun (Danh từ)", example: "A beam of light shone through the window." },
        { name: "Believable", pronounce: "/bɪˈliːvəbl/", meaning: "Đáng tin", type: "Adjective (Tính từ)", example: "His story was believable." },
        { name: "Believe", pronounce: "/bɪˈliːv/", meaning: "Tin tưởng", type: "Verb (Động từ)", example: "I believe in her abilities." },
        { name: "Bilingual", pronounce: "/baɪˈlɪŋɡwəl/", meaning: "Song ngữ", type: "Adjective (Tính từ)", example: "She is bilingual, speaking both English and French." },
        { name: "Binoculars", pronounce: "/bɪˈnɑːkjələrz/", meaning: "Ống nhòm", type: "Noun (Danh từ)", example: "He used binoculars to see the birds clearly." },
        { name: "Board Game", pronounce: "/bɔːrd ɡeɪm/", meaning: "Trò chơi cờ bàn", type: "Noun (Danh từ)", example: "They enjoyed playing a board game together." },
        { name: "Borrow", pronounce: "/ˈbɔːroʊ/", meaning: "Mượn", type: "Verb (Động từ)", example: "Can I borrow your book?" },
        { name: "Brake", pronounce: "/breɪk/", meaning: "Phanh / Dũng cảm", type: "Noun (Danh từ) / Adjective (tính từ)", example: "She pressed the brake to stop the car. / He is a brave firefighter." },
        { name: "Bravery", pronounce: "/ˈbreɪvəri/", meaning: "Sự dũng cảm", type: "Noun (Danh từ)", example: "The bravery of the soldiers was admired by all." },
        { name: "Break", pronounce: "/breɪk/", meaning: "Làm vỡ", type: "Verb (Động từ)", example: "She accidentally broke the vase." },
        { name: "Breakable", pronounce: "/ˈbreɪkəbl/", meaning: "Dễ vỡ", type: "Adjective (Tính từ)", example: "Be careful, the glasses are breakable." },
        { name: "Brick", pronounce: "/brɪk/", meaning: "Gạch", type: "Noun (Danh từ)", example: "They used bricks to build the house." },
        { name: "Bright", pronounce: "/braɪt/", meaning: "Sáng", type: "Adjective (Tính từ)", example: "The sun was very bright today." },
        { name: "Bug", pronounce: "/bʌɡ/", meaning: "Lỗi (máy tính) / Con bọ", type: "Noun (Danh từ)", example: "They fixed the bug in the software. / There was a bug on the window." },
        { name: "Build", pronounce: "/bɪld/", meaning: "Xây dựng", type: "Verb (Động từ)", example: "They plan to build a new house next year." },
        { name: "Builder", pronounce: "/ˈbɪldər/", meaning: "Thợ xây", type: "Noun (Danh từ)", example: "The builder worked on the new school." },
        { name: "Bumpy", pronounce: "/ˈbʌmpi/", meaning: "Gồ ghề", type: "Adjective (Tính từ)", example: "The road was bumpy and difficult to drive on." },
        { name: "Bunch", pronounce: "/bʌntʃ/", meaning: "Bó, chùm", type: "Noun (Danh từ)", example: "She bought a bunch of flowers." },
        { name: "Busy", pronounce: "/ˈbɪzi/", meaning: "Đông đúc", type: "Adjective (Tính từ)", example: "The market was very busy today." },
        { name: "Buy", pronounce: "/baɪ/", meaning: "Mua", type: "Verb (Động từ)", example: "She went to buy some groceries." },
        { name: "By", pronounce: "/baɪ/", meaning: "Bên cạnh", type: "Preposition (Giới từ)", example: "The house is by the river." }
    ],
    'C': [
        { name: "Cartridge", pronounce: "/ˈkɑːrtrɪdʒ/", meaning: "Hộp mực, cuộn phim", type: "Noun (Danh từ)", example: "The printer needs a new ink cartridge." },
        { name: "Caught", pronounce: "/kɔːt/", meaning: "Bắt được (quá khứ phân từ của catch)", type: "Verb (Động từ)", example: "He was caught stealing the wallet." },
        { name: "Caving", pronounce: "/ˈkeɪvɪŋ/", meaning: "Thám hiểm hang động", type: "Noun (Danh từ)", example: "They went caving over the weekend." },
        { name: "Celebrate", pronounce: "/ˈselɪbreɪt/", meaning: "Kỷ niệm", type: "Verb (Động từ)", example: "We celebrate birthdays with a party." },
        { name: "Century", pronounce: "/ˈsentʃəri/", meaning: "Thế kỷ", type: "Noun (Danh từ)", example: "The invention was made in the 20th century." },
        { name: "Cheap", pronounce: "/tʃiːp/", meaning: "Rẻ", type: "Adjective (Tính từ)", example: "The food at that restaurant is cheap." },
        { name: "Chip", pronounce: "/tʃɪp/", meaning: "Con chip điện tử/ Khoai tây chiên", type: "Noun (Danh từ)", example: "The computer chip controls the device. / He ordered a burger and chips." },
        { name: "Clay", pronounce: "/kleɪ/", meaning: "Đất sét", type: "Noun (Danh từ)", example: "The potter used clay to make a vase." },
        { name: "Clear Away", pronounce: "/klɪr əˈweɪ/", meaning: "Dọn dẹp", type: "Verb (Động từ)", example: "Please clear away your dishes after eating." },
        { name: "Climate", pronounce: "/ˈklaɪmət/", meaning: "Khí hậu", type: "Noun (Danh từ)", example: "The climate here is warm and sunny." },
        { name: "Clue", pronounce: "/kluː/", meaning: "Manh mối", type: "Noun (Danh từ)", example: "The detective found a clue at the crime scene." },
        { name: "Coach", pronounce: "/koʊtʃ/", meaning: "Xe khách", type: "Noun (Danh từ)", example: "They took a coach to travel to the city." },
        { name: "Come Across", pronounce: "/kʌm əˈkrɒs/", meaning: "Tình cờ gặp", type: "Verb (Động từ)", example: "I came across an interesting article yesterday." },
        { name: "Come Back", pronounce: "/kʌm bæk/", meaning: "Trở lại", type: "Verb (Động từ)", example: "She promised to come back soon." },
        { name: "Come In", pronounce: "/kʌm ɪn/", meaning: "Đi vào", type: "Verb (Động từ)", example: "Please come in and have a seat." },
        { name: "Come Off", pronounce: "/kʌm ɒf/", meaning: "Rời ra", type: "Verb (Động từ)", example: "The handle came off the door." },
        { name: "Come On", pronounce: "/kʌm ɒn/", meaning: "Bắt đầu hoạt động", type: "Verb (Động từ)", example: "The lights came on when it got dark." },
        { name: "Come Out", pronounce: "/kʌm aʊt/", meaning: "Xuất hiện", type: "Verb (Động từ)", example: "The sun came out after the rain." },
        { name: "Come Round", pronounce: "/kʌm raʊnd/", meaning: "Thăm", type: "Verb (Động từ)", example: "She will come round to visit in the afternoon." },
        { name: "Come Up", pronounce: "/kʌm ʌp/", meaning: "Xảy ra", type: "Verb (Động từ)", example: "Something important came up and changed my plans." },
        { name: "Comet", pronounce: "/ˈkɒmɪt/", meaning: "Sao chổi", type: "Noun (Danh từ)", example: "They observed the comet through a telescope." },
        { name: "Comfort", pronounce: "/ˈkʌmfərt/", meaning: "Sự thoải mái", type: "Noun (Danh từ)", example: "She enjoys the comfort of her cozy home." },
        { name: "Comfortable", pronounce: "/ˈkʌmftəbl/", meaning: "Thoải mái", type: "Adjective (Tính từ)", example: "The couch is very comfortable." },
        { name: "Communicate", pronounce: "/kəˈmjuːnɪkeɪt/", meaning: "Giao tiếp", type: "Verb (Động từ)", example: "They communicate through sign language." },
        { name: "Compass", pronounce: "/ˈkʌmpəs/", meaning: "La bàn", type: "Noun (Danh từ)", example: "He used a compass to find his way." },
        { name: "Complete", pronounce: "/kəmˈpliːt/", meaning: "Hoàn thành", type: "Adjective (Tính từ)", example: "The project is now complete." },
        { name: "Complication", pronounce: "/ˌkɒmplɪˈkeɪʃən/", meaning: "Phức tạp", type: "Noun (Danh từ)", example: "There was a complication in the plan." },
        { name: "Connect", pronounce: "/kəˈnekt/", meaning: "Kết nối", type: "Verb (Động từ)", example: "He connected the computer to the Internet." },
        { name: "Constellation", pronounce: "/ˌkɒnstəˈleɪʃən/", meaning: "Chòm sao", type: "Noun (Danh từ)", example: "They identified constellations in the night sky." },
        { name: "Continent", pronounce: "/ˈkɒntɪnənt/", meaning: "Lục địa", type: "Noun (Danh từ)", example: "Africa is a large continent." },
        { name: "Cookery", pronounce: "/ˈkʊkəri/", meaning: "Nấu ăn", type: "Noun (Danh từ)", example: "She attended a cookery class." },
        { name: "Coral Reef", pronounce: "/ˈkɒrəl riːf/", meaning: "Rạn san hô", type: "Noun (Danh từ)", example: "They went diving to see the coral reef." },
        { name: "Correct", pronounce: "/kəˈrekt/", meaning: "Đúng", type: "Adjective (Tính từ)", example: "His answer was correct." },
        { name: "Court", pronounce: "/kɔːrt/", meaning: "Sân chơi", type: "Noun (Danh từ)", example: "They played basketball on the court." },
        { name: "Create", pronounce: "/kriˈeɪt/", meaning: "Tạo ra", type: "Verb (Động từ)", example: "She loves to create art." },
        { name: "Cursor", pronounce: "/ˈkɜːrsər/", meaning: "Con trỏ", type: "Noun (Danh từ)", example: "Move the cursor to the right side of the screen." },
        { name: "Cut Down", pronounce: "/kʌt daʊn/", meaning: "Chặt hạ", type: "Verb (Động từ)", example: "They cut down the old tree in the yard." }
    ],
    'D': [
        { name: "Danger", pronounce: "/ˈdeɪndʒər/", meaning: "Nguy hiểm", type: "Noun (Danh từ)", example: "The danger of falling rocks was high in the mountains." },
        { name: "Dangerous", pronounce: "/ˈdeɪndʒərəs/", meaning: "Nguy hiểm", type: "Adjective (Tính từ)", example: "Swimming in the river can be dangerous." },
        { name: "Decorate", pronounce: "/ˈdekəreɪt/", meaning: "Trang trí", type: "Verb (Động từ)", example: "They decorated the room with balloons for the party." },
        { name: "Delicious", pronounce: "/dɪˈlɪʃəs/", meaning: "Ngon", type: "Adjective (Tính từ)", example: "The cake was absolutely delicious." },
        { name: "Deliver", pronounce: "/dɪˈlɪvər/", meaning: "Giao hàng", type: "Verb (Động từ)", example: "They deliver fresh vegetables to our door every week." },
        { name: "Delivery", pronounce: "/dɪˈlɪvəri/", meaning: "Sự giao hàng", type: "Noun (Danh từ)", example: "The delivery was delayed due to bad weather." },
        { name: "Demonstration", pronounce: "/ˌdemənˈstreɪʃən/", meaning: "Sự trình bày", type: "Noun (Danh từ)", example: "The chef gave a demonstration of how to cook pasta." },
        { name: "Deserted", pronounce: "/dɪˈzɜːrtɪd/", meaning: "Hoang vắng", type: "Adjective (Tính từ)", example: "The streets were deserted late at night." },
        { name: "Design", pronounce: "/dɪˈzaɪn/", meaning: "Thiết kế", type: "Verb (Động từ)", example: "She designs clothes for a living." },
        { name: "Dessert", pronounce: "/dɪˈzɜːrt/", meaning: "Món tráng miệng", type: "Noun (Danh từ)", example: "They served ice cream as dessert." },
        { name: "Develop", pronounce: "/dɪˈveləp/", meaning: "Phát triển", type: "Verb (Động từ)", example: "The company developed a new app for learning languages." },
        { name: "Development", pronounce: "/dɪˈveləpmənt/", meaning: "Sự phát triển", type: "Noun (Danh từ)", example: "The development of technology has changed our lives." },
        { name: "Device", pronounce: "/dɪˈvaɪs/", meaning: "Thiết bị", type: "Noun (Danh từ)", example: "This device can monitor your heart rate." },
        { name: "Dialect", pronounce: "/ˈdaɪəlekt/", meaning: "Tiếng địa phương", type: "Noun (Danh từ)", example: "They speak a local dialect in that region." },
        { name: "Diamond", pronounce: "/ˈdaɪəmənd/", meaning: "Kim cương", type: "Noun (Danh từ)", example: "She wore a diamond ring." },
        { name: "Disagree", pronounce: "/ˌdɪsəˈɡriː/", meaning: "Không đồng ý", type: "Verb (Động từ)", example: "They disagree on the best solution to the problem." },
        { name: "Disappear", pronounce: "/ˌdɪsəˈpɪr/", meaning: "Biến mất", type: "Verb (Động từ)", example: "The sun disappeared behind the clouds." },
        { name: "Disconnect", pronounce: "/ˌdɪskəˈnekt/", meaning: "Ngắt kết nối", type: "Verb (Động từ)", example: "Make sure to disconnect from the internet when not in use." },
        { name: "Discover", pronounce: "/dɪˈskʌvər/", meaning: "Khám phá", type: "Verb (Động từ)", example: "They discovered an ancient city buried underground." },
        { name: "Discovery", pronounce: "/dɪˈskʌvəri/", meaning: "Sự khám phá", type: "Noun (Danh từ)", example: "The discovery of penicillin changed medicine." },
        { name: "Disgusting", pronounce: "/dɪsˈɡʌstɪŋ/", meaning: "Kinh tởm", type: "Adjective (Tính từ)", example: "The smell from the garbage was disgusting." },
        { name: "Dish", pronounce: "/dɪʃ/", meaning: "Món ăn", type: "Noun (Danh từ)", example: "Pasta is my favorite dish." },
        { name: "Dishonest", pronounce: "/dɪsˈɒnɪst/", meaning: "Không trung thực", type: "Adjective (Tính từ)", example: "He was caught being dishonest about his expenses." },
        { name: "Dislike", pronounce: "/dɪsˈlaɪk/", meaning: "Không thích", type: "Verb (Động từ)", example: "She dislikes loud music." },
        { name: "Disobey", pronounce: "/ˌdɪsəˈbeɪ/", meaning: "Không tuân theo", type: "Verb (Động từ)", example: "If you disobey the rules, there will be consequences." },
        { name: "Diving", pronounce: "/ˈdaɪvɪŋ/", meaning: "Lặn", type: "Noun (Danh từ)", example: "He enjoys diving in the ocean." },
        { name: "Dominant", pronounce: "/ˈdɒmɪnənt/", meaning: "Chiếm ưu thế", type: "Adjective (Tính từ)", example: "English is a dominant language in many countries." },
        { name: "Download", pronounce: "/ˈdaʊnˌloʊd/", meaning: "Tải xuống", type: "Verb (Động từ)", example: "You can download the document from the website." },
        { name: "Drive", pronounce: "/draɪv/", meaning: "Lái xe", type: "Verb (Động từ)", example: "He learned to drive at 16." },
        { name: "Driver", pronounce: "/ˈdraɪvər/", meaning: "Người lái xe", type: "Noun (Danh từ)", example: "The driver took us to the airport." },
        { name: "Drown", pronounce: "/draʊn/", meaning: "Chết đuối", type: "Verb (Động từ)", example: "He nearly drowned in the river." },
        { name: "Dull", pronounce: "/dʌl/", meaning: "Buồn tẻ", type: "Adjective (Tính từ)", example: "The lecture was dull and uninteresting." },
    ],
    'E': [
        { name: "East", pronounce: "/iːst/", meaning: "Hướng đông", type: "Noun (Danh từ)", example: "The sun rises in the east." },
        { name: "Enjoy", pronounce: "/ɪnˈdʒɔɪ/", meaning: "Thích thú", type: "Verb (Động từ)", example: "She enjoys reading novels." },
        { name: "Enjoyable", pronounce: "/ɪnˈdʒɔɪəbl/", meaning: "Thú vị", type: "Adjective (Tính từ)", example: "The picnic was very enjoyable." },
        { name: "Enjoyment", pronounce: "/ɪnˈdʒɔɪmənt/", meaning: "Sự thích thú", type: "Noun (Danh từ)", example: "He finds great enjoyment in painting." },
        { name: "Entertain", pronounce: "/ˌentərˈteɪn/", meaning: "Giải trí", type: "Verb (Động từ)", example: "The magician entertained the audience." },
        { name: "Entertainment", pronounce: "/ˌentərˈteɪnmənt/", meaning: "Sự giải trí", type: "Noun (Danh từ)", example: "Movies are a popular form of entertainment." },
        { name: "Entrance", pronounce: "/ˈɛntrəns/", meaning: "Lối vào", type: "Noun (Danh từ)", example: "They walked through the main entrance." },
        { name: "Environment", pronounce: "/ɪnˈvaɪrənmənt/", meaning: "Môi trường", type: "Noun (Danh từ)", example: "We must protect the environment." },
        { name: "Equip", pronounce: "/ɪˈkwɪp/", meaning: "Trang bị", type: "Verb (Động từ)", example: "They equipped the lab with new computers." },
        { name: "Equipment", pronounce: "/ɪˈkwɪpmənt/", meaning: "Thiết bị", type: "Noun (Danh từ)", example: "The gym has all the latest equipment." },
        { name: "Erupt", pronounce: "/ɪˈrʌpt/", meaning: "Phun trào", type: "Verb (Động từ)", example: "The volcano erupted with great force." },
        { name: "Evidence", pronounce: "/ˈɛvɪdəns/", meaning: "Bằng chứng", type: "Noun (Danh từ)", example: "There is no evidence to support this claim." },
        { name: "Excite", pronounce: "/ɪkˈsaɪt/", meaning: "Kích thích", type: "Verb (Động từ)", example: "The news excited everyone." },
        { name: "Excitement", pronounce: "/ɪkˈsaɪtmənt/", meaning: "Sự phấn khích", type: "Noun (Danh từ)", example: "There was great excitement at the concert." },
        { name: "Expect", pronounce: "/ɪkˈspekt/", meaning: "Dự đoán", type: "Verb (Động từ)", example: "They expect a big crowd at the event." },
        { name: "Expensive", pronounce: "/ɪkˈspensɪv/", meaning: "Đắt", type: "Adjective (Tính từ)", example: "That dress is very expensive." },
        { name: "Experienced", pronounce: "/ɪkˈspɪəriənst/", meaning: "Có kinh nghiệm", type: "Adjective (Tính từ)", example: "She is very experienced in teaching." },
        { name: "Experiment", pronounce: "/ɪkˈspɛrɪmənt/", meaning: "Thí nghiệm", type: "Noun (Danh từ)", example: "They conducted an experiment on plants." },
        { name: "Experimental", pronounce: "/ɪkˌspɛrɪˈmɛntl/", meaning: "Thử nghiệm", type: "Adjective (Tính từ)", example: "This is an experimental project." },
        { name: "Explore", pronounce: "/ɪkˈsplɔːr/", meaning: "Khám phá", type: "Verb (Động từ)", example: "They explored the island." },
        { name: "Explorer", pronounce: "/ɪkˈsplɔːrər/", meaning: "Nhà thám hiểm", type: "Noun (Danh từ)", example: "She wants to be an explorer." }
    ],
    'F': [
        { name: "Fame", pronounce: "/feɪm/", meaning: "Danh tiếng", type: "Noun (Danh từ)", example: "He rose to fame as a singer." },
        { name: "Famous", pronounce: "/ˈfeɪməs/", meaning: "Nổi tiếng", type: "Adjective (Tính từ)", example: "She is a famous actress." },
        { name: "Fascinating", pronounce: "/ˈfæsɪneɪtɪŋ/", meaning: "Hấp dẫn", type: "Adjective (Tính từ)", example: "The museum has some fascinating exhibits." },
        { name: "Fence", pronounce: "/fɛns/", meaning: "Hàng rào", type: "Noun (Danh từ)", example: "They built a fence around the garden." },
        { name: "Figure", pronounce: "/ˈfɪɡər/", meaning: "Hình dáng", type: "Noun (Danh từ)", example: "A mysterious figure stood in the dark." },
        { name: "First Aid Kit", pronounce: "/ˌfɜːrst ˈeɪd kɪt/", meaning: "Hộp sơ cứu", type: "Noun (Danh từ)", example: "Keep a first aid kit in your car." },
        { name: "Fishing Line", pronounce: "/ˈfɪʃɪŋ laɪn/", meaning: "Dây câu", type: "Noun (Danh từ)", example: "He set up his fishing line by the lake." },
        { name: "Flavour", pronounce: "/ˈfleɪvər/", meaning: "Hương vị", type: "Noun (Danh từ)", example: "The ice cream had a vanilla flavour." },
        { name: "Float", pronounce: "/floʊt/", meaning: "Nổi", type: "Verb (Động từ)", example: "The boat floated on the water." },
        { name: "Flour", pronounce: "/ˈflaʊər/", meaning: "Bột mì", type: "Noun (Danh từ)", example: "She used flour to bake the cake." },
        { name: "Flower", pronounce: "/ˈflaʊər/", meaning: "Hoa", type: "Noun (Danh từ)", example: "The garden was full of beautiful flowers." },
        { name: "Fluent", pronounce: "/ˈfluːənt/", meaning: "Lưu loát", type: "Adjective (Tính từ)", example: "She is fluent in Spanish." },
        { name: "Foreground", pronounce: "/ˈfɔːrˌɡraʊnd/", meaning: "Tiền cảnh", type: "Noun (Danh từ)", example: "The artist painted a tree in the foreground." },
        { name: "Forge", pronounce: "/fɔːrdʒ/", meaning: "Giả mạo", type: "Verb (Động từ)", example: "He tried to forge a signature on the document." },
        { name: "Forgery", pronounce: "/ˈfɔːrdʒəri/", meaning: "Sự giả mạo", type: "Noun (Danh từ)", example: "The painting was found to be a forgery." },
        { name: "Freedom", pronounce: "/ˈfriːdəm/", meaning: "Tự do", type: "Noun (Danh từ)", example: "They fought for freedom." },
        { name: "Furious", pronounce: "/ˈfjʊəriəs/", meaning: "Giận dữ", type: "Adjective (Tính từ)", example: "She was furious when she found out the truth." },
        { name: "Fury", pronounce: "/ˈfjʊəri/", meaning: "Cơn giận dữ", type: "Noun (Danh từ)", example: "He was shaking with fury." }
    ],
    'G': [
        { name: "Garlic", pronounce: "/ˈɡɑːrlɪk/", meaning: "Tỏi", type: "Noun (Danh từ)", example: "She added garlic to the pasta sauce." },
        { name: "Give Up", pronounce: "/ɡɪv ʌp/", meaning: "Từ bỏ", type: "Verb (Động từ)", example: "He decided to give up smoking." },
        { name: "Glow", pronounce: "/ɡloʊ/", meaning: "Phát sáng", type: "Verb (Động từ)", example: "The fireflies glowed in the dark." },
        { name: "Grab", pronounce: "/ɡræb/", meaning: "Chộp lấy", type: "Verb (Động từ)", example: "She grabbed her keys and ran out the door." },
        { name: "Grow", pronounce: "/ɡroʊ/", meaning: "Lớn lên", type: "Verb (Động từ)", example: "The plant grew taller every day." },
        { name: "Guitarist", pronounce: "/ɡɪˈtɑːrɪst/", meaning: "Người chơi guitar", type: "Noun (Danh từ)", example: "The guitarist played an amazing solo." }
    ],
    'H':
        [
            { name: "Hang", pronounce: "/hæŋ/", meaning: "Treo", type: "Verb (Động từ)", example: "He hung the picture on the wall." },
            { name: "Harbour", pronounce: "/ˈhɑːrbər/", meaning: "Bến cảng", type: "Noun (Danh từ)", example: "The ship docked safely in the harbour." },
            { name: "Hazard", pronounce: "/ˈhæzərd/", meaning: "Nguy hiểm", type: "Noun (Danh từ)", example: "Fire is a serious hazard in this area." },
            { name: "Hazardous", pronounce: "/ˈhæzərdəs/", meaning: "Nguy hiểm", type: "Adjective (Tính từ)", example: "Working with chemicals can be hazardous." },
            { name: "Head Off", pronounce: "/hɛd ɔf/", meaning: "Khởi hành", type: "Verb (Động từ)", example: "They decided to head off early in the morning." },
            { name: "Hear", pronounce: "/hɪr/", meaning: "Nghe", type: "Verb (Động từ)", example: "She heard a strange noise outside." },
            { name: "Helicopter", pronounce: "/ˈhɛlɪkɑːptər/", meaning: "Máy bay trực thăng", type: "Noun (Danh từ)", example: "A helicopter landed near the hospital." },
            { name: "Here", pronounce: "/hɪr/", meaning: "Ở đây", type: "Adverb (Trạng từ)", example: "She is waiting here for you." },
            { name: "Historian", pronounce: "/hɪˈstɔːriən/", meaning: "Nhà sử học", type: "Noun (Danh từ)", example: "The historian studied ancient artifacts." },
            { name: "Hit", pronounce: "/hɪt/", meaning: "Đánh", type: "Verb (Động từ)", example: "He accidentally hit his head on the door." },
            { name: "Hollow", pronounce: "/ˈhɑːloʊ/", meaning: "Rỗng", type: "Adjective (Tính từ)", example: "The tree trunk was hollow inside." },
            { name: "Honest", pronounce: "/ˈɑːnɪst/", meaning: "Thật thà", type: "Adjective (Tính từ)", example: "An honest person always tells the truth." },
            { name: "Hot-Air Balloon", pronounce: "/ˈhɑːt ˌɛr bəˈluːn/", meaning: "Khinh khí cầu", type: "Noun (Danh từ)", example: "They went for a ride in a hot-air balloon." },
            { name: "Hour", pronounce: "/aʊər/", meaning: "Giờ", type: "Noun (Danh từ)", example: "The movie lasted for two hours." },
            { name: "Huge", pronounce: "/hjuːdʒ/", meaning: "Khổng lồ", type: "Adjective (Tính từ)", example: "The castle was huge." },
            { name: "Hunt", pronounce: "/hʌnt/", meaning: "Săn bắn", type: "Verb (Động từ)", example: "They went to the forest to hunt." },
            { name: "Hurricane", pronounce: "/ˈhʌrɪkeɪn/", meaning: "Bão", type: "Noun (Danh từ)", example: "The hurricane caused massive damage." },
            { name: "Hut", pronounce: "/hʌt/", meaning: "Túp lều", type: "Noun (Danh từ)", example: "They stayed in a small hut by the beach." }
        ],
    'I':
        [
            { name: "Ice Skating", pronounce: "/ˈaɪs ˌskeɪtɪŋ/", meaning: "Trượt băng", type: "Noun (Danh từ)", example: "She loves ice skating in winter." },
            { name: "Iceberg", pronounce: "/ˈaɪsbɜːrɡ/", meaning: "Tảng băng trôi", type: "Noun (Danh từ)", example: "The ship collided with an iceberg." },
            { name: "Ideal", pronounce: "/aɪˈdiːəl/", meaning: "Lý tưởng", type: "Adjective (Tính từ)", example: "This is the ideal place for a picnic." },
            { name: "Imagine", pronounce: "/ɪˈmædʒɪn/", meaning: "Tưởng tượng", type: "Verb (Động từ)", example: "Can you imagine living in a castle?" },
            { name: "Immature", pronounce: "/ˌɪməˈtjʊr/", meaning: "Chưa trưởng thành", type: "Adjective (Tính từ)", example: "He was acting immature for his age." },
            { name: "Immediately", pronounce: "/ɪˈmiːdiətli/", meaning: "Ngay lập tức", type: "Adverb (Trạng từ)", example: "She called me immediately after the news." },
            { name: "Impatient", pronounce: "/ɪmˈpeɪʃnt/", meaning: "Thiếu kiên nhẫn", type: "Adjective (Tính từ)", example: "He became impatient waiting for the bus." },
            { name: "Impolite", pronounce: "/ˌɪmpəˈlaɪt/", meaning: "Bất lịch sự", type: "Adjective (Tính từ)", example: "Interrupting someone is impolite." },
            { name: "Impossible", pronounce: "/ɪmˈpɑːsəbl/", meaning: "Không thể", type: "Adjective (Tính từ)", example: "It's impossible to finish in one day." },
            { name: "Incomplete", pronounce: "/ˌɪnkəmˈpliːt/", meaning: "Chưa hoàn thiện", type: "Adjective (Tính từ)", example: "The report is incomplete without the final data." },
            { name: "Incorrect", pronounce: "/ˌɪnkəˈrɛkt/", meaning: "Sai", type: "Adjective (Tính từ)", example: "His answer was incorrect." },
            { name: "Incredible", pronounce: "/ɪnˈkrɛdəbl/", meaning: "Đáng kinh ngạc", type: "Adjective (Tính từ)", example: "The view from the mountain was incredible." },
            { name: "Inexperienced", pronounce: "/ˌɪnɪkˈspɪəriənst/", meaning: "Thiếu kinh nghiệm", type: "Adjective (Tính từ)", example: "The worker was inexperienced in this field." },
            { name: "Inhabitant", pronounce: "/ɪnˈhæbɪtənt/", meaning: "Cư dân", type: "Noun (Danh từ)", example: "The inhabitants of the village are very friendly." },
            { name: "Ink", pronounce: "/ɪŋk/", meaning: "Mực", type: "Noun (Danh từ)", example: "He spilled ink on the paper." },
            { name: "Insensitive", pronounce: "/ɪnˈsɛnsɪtɪv/", meaning: "Vô cảm", type: "Adjective (Tính từ)", example: "Her comment was insensitive to his feelings." },
            { name: "Inspiration", pronounce: "/ˌɪnspəˈreɪʃn/", meaning: "Nguồn cảm hứng", type: "Noun (Danh từ)", example: "The artist found inspiration in nature." },
            { name: "Interesting", pronounce: "/ˈɪntrəstɪŋ/", meaning: "Thú vị", type: "Adjective (Tính từ)", example: "The book was very interesting." },
            { name: "International", pronounce: "/ˌɪntərˈnæʃənl/", meaning: "Quốc tế", type: "Adjective (Tính từ)", example: "She works for an international company." },
            { name: "Invent", pronounce: "/ɪnˈvɛnt/", meaning: "Phát minh", type: "Verb (Động từ)", example: "He invented a new type of engine." },
            { name: "Investigation", pronounce: "/ɪnˌvɛstəˈɡeɪʃən/", meaning: "Điều tra", type: "Noun (Danh từ)", example: "They launched an investigation into the incident." },
            { name: "Invisible", pronounce: "/ɪnˈvɪzəbl/", meaning: "Vô hình", type: "Adjective (Tính từ)", example: "The stars are invisible during the day." },
            { name: "Isolated", pronounce: "/ˈaɪsəleɪtɪd/", meaning: "Cô lập", type: "Adjective (Tính từ)", example: "The cabin was in an isolated area." }
        ],
    'J': [
        { name: "Journal", pronounce: "/ˈdʒɜːrnəl/", meaning: "Nhật ký", type: "Noun (Danh từ)", example: "She writes in her journal every night." },
        { name: "Journalist", pronounce: "/ˈdʒɜːrnəlɪst/", meaning: "Nhà báo", type: "Noun (Danh từ)", example: "The journalist interviewed the mayor." },
    ],
    'K': [
        { name: "Know", pronounce: "/noʊ/", meaning: "Biết", type: "Verb (Động từ)", example: "I know the answer to that question." }

    ],
    'L':
        [
            { name: "Landscape", pronounce: "/ˈlændskeɪp/", meaning: "Cảnh quan", type: "Noun (Danh từ)", example: "The painting depicts a beautiful landscape." },
            { name: "Last", pronounce: "/læst/", meaning: "Cuối cùng", type: "Verb (Động từ)", example: "How long did the meeting last?" },
            { name: "Launch", pronounce: "/lɔːntʃ/", meaning: "Phóng", type: "Verb (Động từ)", example: "They will launch the new rocket tomorrow." },
            { name: "Left", pronounce: "/lɛft/", meaning: "Bên trái", type: "Adv (Trạng từ)", example: "Turn left at the intersection." },
            { name: "Left", pronounce: "/lɛft/", meaning: "Đã rời", type: "Past participle (Quá khứ phân từ)", example: "He has left the building." },
            { name: "Lightning", pronounce: "/ˈlaɪtnɪŋ/", meaning: "Sấm sét", type: "Noun (Danh từ)", example: "The lightning struck the tree." },
            { name: "Load", pronounce: "/ləʊd/", meaning: "Tải trọng", type: "Noun (Danh từ)", example: "The truck is carrying a heavy load." },
            { name: "Local", pronounce: "/ˈləʊkl/", meaning: "Địa phương", type: "Adj (Tính từ)", example: "The local people are very friendly." },
            { name: "Log", pronounce: "/lɒɡ/", meaning: "Khúc gỗ", type: "Noun (Danh từ)", example: "They chopped the log into smaller pieces." },
            { name: "Log off", pronounce: "/lɒɡ ɒf/", meaning: "Đăng xuất", type: "Verb (Động từ)", example: "Don't forget to log off from your account." },
            { name: "Log on", pronounce: "/lɒɡ ɒn/", meaning: "Đăng nhập", type: "Verb (Động từ)", example: "You need to log on to access the website." },
            { name: "Look after", pronounce: "/lʊk ˈɑːftər/", meaning: "Chăm sóc", type: "Verb (Động từ)", example: "She looks after the children while their parents are away." },
            { name: "Look ahead", pronounce: "/lʊk əˈhɛd/", meaning: "Nhìn về phía trước", type: "Verb (Động từ)", example: "It's important to look ahead and plan for the future." },
            { name: "Look for", pronounce: "/lʊk fɔːr/", meaning: "Tìm kiếm", type: "Verb (Động từ)", example: "She is looking for her keys." },
            { name: "Look forward to", pronounce: "/lʊk ˈfɔːwəd tə/", meaning: "Mong đợi", type: "Verb (Động từ)", example: "I look forward to meeting you." },
            { name: "Look into", pronounce: "/lʊk ˈɪntuː/", meaning: "Tìm hiểu", type: "Verb (Động từ)", example: "We will look into the problem and get back to you." },
            { name: "Look round", pronounce: "/lʊk raʊnd/", meaning: "Đi xung quanh", type: "Verb (Động từ)", example: "Let's look round the museum." },
            { name: "Look up to", pronounce: "/lʊk ʌp tə/", meaning: "Ngưỡng mộ", type: "Verb (Động từ)", example: "He looks up to his older brother." },
            { name: "Look up", pronounce: "/lʊk ʌp/", meaning: "Tìm kiếm thông tin", type: "Verb (Động từ)", example: "You can look up the word in a dictionary." },
            { name: "Lorry", pronounce: "/ˈlɒri/", meaning: "Xe tải", type: "Noun (Danh từ)", example: "The lorry was loaded with supplies." },
            { name: "Luxurious", pronounce: "/lʌɡˈʒʊərɪəs/", meaning: "Sang trọng", type: "Adj (Tính từ)", example: "They stayed in a luxurious hotel during their vacation." },
            { name: "Luxury", pronounce: "/ˈlʌkʃəri/", meaning: "Sự xa xỉ", type: "Noun (Danh từ)", example: "Living in a penthouse is a luxury." }
        ],
    'M': [
        { name: "Machine", pronounce: "/məˈʃiːn/", meaning: "Máy móc", type: "Noun (Danh từ)", example: "The factory uses advanced machines to produce cars." },
        { name: "Machinery", pronounce: "/məˈʃiːnəri/", meaning: "Máy móc", type: "Noun (Danh từ)", example: "The machinery in the factory needs regular maintenance." },
        { name: "Map", pronounce: "/mæp/", meaning: "Bản đồ", type: "Noun (Danh từ)", example: "We used a map to find our way around the city." },
        { name: "Market", pronounce: "/ˈmɑːrkɪt/", meaning: "Chợ", type: "Noun (Danh từ)", example: "I buy fresh vegetables at the market every morning." },
        { name: "Match", pronounce: "/mætʃ/", meaning: "Que diêm", type: "Noun (Danh từ)", example: "He lit the candle with a match." },
        { name: "Match", pronounce: "/mætʃ/", meaning: "Trận đấu", type: "Noun (Danh từ)", example: "The football match ended in a 2-2 draw." },
        { name: "Mature", pronounce: "/məˈtʃʊə/", meaning: "Chín chắn", type: "Adj (Tính từ)", example: "She is very mature for her age." },
        { name: "Meat", pronounce: "/miːt/", meaning: "Thịt", type: "Noun (Danh từ)", example: "We bought some fresh meat for dinner." },
        { name: "Meet", pronounce: "/miːt/", meaning: "Gặp", type: "Verb (Động từ)", example: "I will meet you at the café later." },
        { name: "Mother tongue", pronounce: "/ˈmʌðər tʌŋ/", meaning: "Tiếng mẹ đẻ", type: "Noun (Danh từ)", example: "English is my second language; my mother tongue is Spanish." },
        { name: "Motorbike", pronounce: "/ˈməʊtəbʌɪk/", meaning: "Xe máy", type: "Noun (Danh từ)", example: "He rides his motorbike to work every day." },
        { name: "Mountain biking", pronounce: "/ˈmaʊntɪn ˈbaɪkɪŋ/", meaning: "Đạp xe đạp leo núi", type: "Noun (Danh từ)", example: "Mountain biking is a popular sport in the hills." },
        { name: "Mountain", pronounce: "/ˈmaʊntɪn/", meaning: "Ngọn núi", type: "Noun (Danh từ)", example: "Mount Everest is the highest mountain in the world." },
        { name: "Mountainous", pronounce: "/ˈmaʊntənəs/", meaning: "Nhiều núi", type: "Adj (Tính từ)", example: "The region is mountainous, with many steep hills." },
        { name: "Mouse", pronounce: "/maʊs/", meaning: "Chuột máy tính", type: "Noun (Danh từ)", example: "I need to buy a new mouse for my computer." },
        { name: "Mouse", pronounce: "/maʊs/", meaning: "Con chuột", type: "Noun (Danh từ)", example: "A mouse ran across the floor." },
        { name: "Move", pronounce: "/muːv/", meaning: "Di chuyển", type: "Verb (Động từ)", example: "He moved to a new house last week." },
        { name: "Movement", pronounce: "/ˈmuːvmənt/", meaning: "Sự di chuyển", type: "Noun (Danh từ)", example: "The movement of the car was smooth on the highway." },
        { name: "Mud", pronounce: "/mʌd/", meaning: "Bùn", type: "Noun (Danh từ)", example: "The path was covered in thick mud after the rain." },
        { name: "Multilingual", pronounce: "/ˌmʌltiˈlɪŋɡwəl/", meaning: "Thông thạo nhiều ngôn ngữ", type: "Adj (Tính từ)", example: "She is multilingual, speaking five languages fluently." },
        { name: "Mural", pronounce: "/ˈmjʊərəl/", meaning: "Bức tranh tường", type: "Noun (Danh từ)", example: "The mural on the wall is a beautiful piece of art." },
        { name: "Mysterious", pronounce: "/mɪˈstɪərɪəs/", meaning: "Huyền bí", type: "Adj (Tính từ)", example: "The mysterious disappearances left everyone puzzled." },
        { name: "Mystery", pronounce: "/ˈmɪstəri/", meaning: "Điều bí ẩn", type: "Noun (Danh từ)", example: "The novel is full of twists and mysteries." }
    ],
    'N': [
        { name: "Nail", pronounce: "/neɪl/", meaning: "Cái đinh / Móng tay, móng chân", type: "Noun (Danh từ)", example: "He hammered the nail into the wooden board. / She painted her nails with bright red polish." },
        { name: "Native speaker", pronounce: "/ˈneɪtɪv ˈspiːkər/", meaning: "Người nói tiếng mẹ đẻ", type: "Noun (Danh từ)", example: "A native speaker of English can help you improve your pronunciation." },
        { name: "Needle and thread", pronounce: "/ˈniːdl ənd θrɛd/", meaning: "Kim và chỉ", type: "Noun (Danh từ)", example: "She used a needle and thread to fix the torn shirt." },
        { name: "Nib", pronounce: "/nɪb/", meaning: "Ngòi bút", type: "Noun (Danh từ)", example: "The nib of the pen broke when I tried to write with it." },
        { name: "North", pronounce: "/nɔːθ/", meaning: "Hướng Bắc", type: "Noun (Danh từ)", example: "The map shows that north is at the top." },
        { name: "Novel", pronounce: "/ˈnɒvəl/", meaning: "Tiểu thuyết", type: "Noun (Danh từ)", example: "She is reading a mystery novel." },
        { name: "Novelist", pronounce: "/ˈnɒvəlɪst/", meaning: "Nhà văn", type: "Noun (Danh từ)", example: "The novelist is famous for writing thrilling stories." },
        { name: "Nurse", pronounce: "/nɜːs/", meaning: "Y tá", type: "Noun (Danh từ)", example: "The nurse took care of the patients in the ward." },
        { name: "Nursery", pronounce: "/ˈnɜːsəri/", meaning: "Nhà trẻ", type: "Noun (Danh từ)", example: "My child goes to nursery while I am at work." }
    ],
    'O': [
        { name: "Oars", pronounce: "/ɔːrz/", meaning: "Cái chèo", type: "Noun (Danh từ)", example: "The sailors used the oars to row the boat across the lake." },
        { name: "Obey", pronounce: "/əˈbeɪ/", meaning: "Tuân theo", type: "Verb (Động từ)", example: "Children should obey their parents and teachers." },
        { name: "Observatory", pronounce: "/əbˈzɜːvətɔːri/", meaning: "Đài thiên văn", type: "Noun (Danh từ)", example: "The astronomers worked at the observatory to study the stars." },
        { name: "Official language", pronounce: "/əˈfɪʃəl ˈlæŋɡwɪdʒ/", meaning: "Ngôn ngữ chính thức", type: "Noun (Danh từ)", example: "In Canada, both English and French are official languages." },
        { name: "Orang-utan", pronounce: "/ˈɔːræŋ ˈuːtæn/", meaning: "Con đười ươi", type: "Noun (Danh từ)", example: "The orang-utan is known for its long red hair and tree-dwelling habits." },
        { name: "Ordinary", pronounce: "/ˈɔːdɪnəri/", meaning: "Thông thường", type: "Adj (Tính từ)", example: "This is just an ordinary day with nothing special happening." },
        { name: "Original", pronounce: "/əˈrɪdʒɪnəl/", meaning: "Gốc, độc đáo", type: "Adj (Tính từ)", example: "Her painting was original and unlike anything I had seen before." }
    ],
    'P': [
        { name: "Package", pronounce: "/ˈpækɪdʒ/", meaning: "Gói hàng", type: "Noun (Danh từ)", example: "The package was delivered to my house yesterday." },
        { name: "Painter", pronounce: "/ˈpeɪntər/", meaning: "Họa sĩ", type: "Noun (Danh từ)", example: "The painter spent weeks working on the mural." },
        { name: "Painting", pronounce: "/ˈpeɪntɪŋ/", meaning: "Bức tranh", type: "Noun (Danh từ)", example: "The painting in the gallery was admired by many visitors." },
        { name: "Paragliding", pronounce: "/ˈpærəˌɡlaɪdɪŋ/", meaning: "Môn thể thao dù lượn", type: "Noun (Danh từ)", example: "He enjoys paragliding during his vacations in the mountains." },
        { name: "Pay", pronounce: "/peɪ/", meaning: "Trả tiền", type: "Verb (Động từ)", example: "I will pay for the tickets when we get there." },
        { name: "Payment", pronounce: "/ˈpeɪmənt/", meaning: "Khoản thanh toán", type: "Noun (Danh từ)", example: "The payment for the goods is due next week." },
        { name: "Peaceful", pronounce: "/ˈpiːsfʊl/", meaning: "Yên bình", type: "Adj (Tính từ)", example: "The garden was a peaceful place to relax." },
        { name: "Pearl", pronounce: "/pɜːrl/", meaning: "Ngọc trai", type: "Noun (Danh từ)", example: "She wore a necklace made of pearls." },
        { name: "Penknife", pronounce: "/ˈpɛnnaɪf/", meaning: "Dao bỏ túi", type: "Noun (Danh từ)", example: "He used a penknife to open the package." },
        { name: "Perfect", pronounce: "/ˈpɜːrfɪkt/", meaning: "Hoàn hảo", type: "Adj (Tính từ)", example: "The weather was perfect for a picnic in the park." },
        { name: "Platform", pronounce: "/ˈplætfɔːrm/", meaning: "Sân ga", type: "Noun (Danh từ)", example: "The speaker stood on the platform to address the crowd." },
        { name: "Poison", pronounce: "/ˈpɔɪzn/", meaning: "Chất độc", type: "Noun (Danh từ)", example: "The snake bite injected poison into the victim's body." },
        { name: "Poisonous", pronounce: "/ˈpɔɪzənəs/", meaning: "Có độc", type: "Adj (Tính từ)", example: "Be careful with that plant; it's poisonous." },
        { name: "Polite", pronounce: "/pəˈlaɪt/", meaning: "Lịch sự", type: "Adj (Tính từ)", example: "It's important to be polite to others." },
        { name: "Population", pronounce: "/ˌpɒpjuˈleɪʃən/", meaning: "Dân số", type: "Noun (Danh từ)", example: "The population of the city has increased significantly in recent years." },
        { name: "Portrait", pronounce: "/ˈpɔːrtrət/", meaning: "Chân dung", type: "Noun (Danh từ)", example: "The artist painted a portrait of the king." },
        { name: "Possible", pronounce: "/ˈpɒsɪbl/", meaning: "Có thể", type: "Adj (Tính từ)", example: "It's possible to finish the project by tomorrow." },
        { name: "Precious", pronounce: "/ˈprɛʃəs/", meaning: "Quý giá", type: "Adj (Tính từ)", example: "She kept the precious ring in a safe place." },
        { name: "Predict", pronounce: "/prɪˈdɪkt/", meaning: "Dự đoán", type: "Verb (Động từ)", example: "Experts predict that the economy will improve next year." },
        { name: "Prefer", pronounce: "/prɪˈfɜːr/", meaning: "Thích hơn", type: "Verb (Động từ)", example: "I prefer coffee to tea in the morning." },
        { name: "Preferable", pronounce: "/ˈprɛfərəbl/", meaning: "Ưu tiên hơn", type: "Adj (Tính từ)", example: "A smaller car is preferable for city driving." },
        { name: "President", pronounce: "/ˈprɛzɪdənt/", meaning: "Tổng thống", type: "Noun (Danh từ)", example: "The president gave a speech about the country's future." },
        { name: "Press", pronounce: "/prɛs/", meaning: "Ấn, nhấn", type: "Verb (Động từ)", example: "Press the button to start the machine." },
        { name: "Private", pronounce: "/ˈpraɪvət/", meaning: "Riêng tư", type: "Adj (Tính từ)", example: "She prefers to keep her private life out of the media." },
        { name: "Protect", pronounce: "/prəˈtɛkt/", meaning: "Bảo vệ", type: "Verb (Động từ)", example: "The guard's job is to protect the building." },
        { name: "Provide", pronounce: "/prəˈvaɪd/", meaning: "Cung cấp", type: "Verb (Động từ)", example: "The organization provides food and shelter to the homeless." },
        { name: "Public", pronounce: "/ˈpʌblɪk/", meaning: "Công cộng", type: "Adj (Tính từ)", example: "The park is a public space open to everyone." }
    ],
    'Q': [
        { name: "Quarry", pronounce: "/ˈkwɔːri/", meaning: "Mỏ đá", type: "Noun (Danh từ)", example: "The workers dug stones from the quarry to build the road." },
    ],
    'R': [
        { name: "Railway", pronounce: "/ˈreɪlweɪ/", meaning: "Đường sắt", type: "Noun (Danh từ)", example: "The railway connects the city with the countryside." },
        { name: "Reason", pronounce: "/ˈriːzn/", meaning: "Lý do", type: "Noun (Danh từ)", example: "The reason I was late was because of the heavy traffic." },
        { name: "Reasonable", pronounce: "/ˈriːzənəbl/", meaning: "Hợp lý", type: "Adj (Tính từ)", example: "It seems reasonable to expect that the project will be completed on time." },
        { name: "Recipe", pronounce: "/ˈrɛsɪpi/", meaning: "Công thức nấu ăn", type: "Noun (Danh từ)", example: "I found a great recipe for homemade pizza online." },
        { name: "Recover", pronounce: "/rɪˈkʌvər/", meaning: "Hồi phục", type: "Verb (Động từ)", example: "He took a few weeks to recover after the surgery." },
        { name: "Recovery", pronounce: "/rɪˈkʌvəri/", meaning: "Sự hồi phục", type: "Noun (Danh từ)", example: "Her recovery from the injury was quicker than expected." },
        { name: "Reservoir", pronounce: "/ˈrɛzəvwɑːr/", meaning: "Khu chứa nước", type: "Noun (Danh từ)", example: "The reservoir provides water to the surrounding area." },
        { name: "Rhino", pronounce: "/ˈraɪnəʊ/", meaning: "Tê giác", type: "Noun (Danh từ)", example: "The rhino is one of the largest land animals." },
        { name: "Rickshaw", pronounce: "/ˈrɪkʃɔː/", meaning: "Xe kéo", type: "Noun (Danh từ)", example: "We took a rickshaw ride through the city streets." },
        { name: "Right", pronounce: "/raɪt/", meaning: "Đúng, chính xác", type: "Adj (Tính từ)", example: "You gave the right answer in the quiz." },
        { name: "Right", pronounce: "/raɪt/", meaning: "Bên phải", type: "Adv (Trạng từ)", example: "Turn right at the next intersection." },
        { name: "Rob", pronounce: "/rɒb/", meaning: "Cướp", type: "Verb (Động từ)", example: "The thief tried to rob the bank last night." },
        { name: "Robbery", pronounce: "/ˈrɒbəri/", meaning: "Vụ cướp", type: "Noun (Danh từ)", example: "The police are investigating the recent robbery at the store." },
        { name: "Rock climbing", pronounce: "/rɒk ˈklaɪmɪŋ/", meaning: "Leo núi đá", type: "Noun (Danh từ)", example: "Rock climbing is an exciting and physically demanding sport." },
        { name: "Rod", pronounce: "/rɒd/", meaning: "Cây gậy, cần câu", type: "Noun (Danh từ)", example: "He used a fishing rod to catch fish in the lake." },
        { name: "Rope", pronounce: "/rəʊp/", meaning: "Dây thừng", type: "Noun (Danh từ)", example: "They used a rope to tie the boat to the dock." },
        { name: "Rotate", pronounce: "/rəʊˈteɪt/", meaning: "Xoay", type: "Verb (Động từ)", example: "You need to rotate the knob to adjust the volume." },
        { name: "Row", pronounce: "/rəʊ/", meaning: "Chèo", type: "Verb (Động từ)", example: "We rowed the boat across the lake." },
        { name: "Rugby", pronounce: "/ˈrʌɡbi/", meaning: "Bóng bầu dục", type: "Noun (Danh từ)", example: "He plays rugby every Saturday with his friends." },
        { name: "Rush", pronounce: "/rʌʃ/", meaning: "Vội vã", type: "Verb (Động từ)", example: "She had to rush to catch the last bus home." }
    ],
    'S': [
        { name: "Sails", pronounce: "/seɪlz/", meaning: "Cánh buồm", type: "Noun (Danh từ)", example: "The sails of the boat caught the wind and it moved quickly." },
        { name: "Sand dune", pronounce: "/sænd duːn/", meaning: "Cồn cát", type: "Noun (Danh từ)", example: "We climbed to the top of the sand dune to get a better view." },
        { name: "Sank", pronounce: "/sæŋk/", meaning: "Chìm", type: "Verb (Động từ)", example: "The ship sank after hitting the iceberg." },
        { name: "Saw", pronounce: "/sɔː/", meaning: "Cưa", type: "Noun (Danh từ)", example: "He used a saw to cut the wood into smaller pieces." },
        { name: "Saw", pronounce: "/sɔː/", meaning: "Đã thấy", type: "Verb (Động từ)", example: "I saw a movie last night." },
        { name: "Scary", pronounce: "/ˈskɛri/", meaning: "Đáng sợ", type: "Adj (Tính từ)", example: "The movie was so scary that I couldn't sleep afterwards." },
        { name: "Scene", pronounce: "/siːn/", meaning: "Cảnh, phân cảnh", type: "Noun (Danh từ)", example: "The scene in the park was beautiful with all the flowers blooming." },
        { name: "Sculpture", pronounce: "/ˈskʌlptʃər/", meaning: "Tác phẩm điêu khắc", type: "Noun (Danh từ)", example: "The museum has many famous sculptures made of marble." },
        { name: "Sea", pronounce: "/siː/", meaning: "Biển", type: "Noun (Danh từ)", example: "The sea was calm and the weather was perfect for sailing." },
        { name: "Seal", pronounce: "/siːl/", meaning: "Hải cẩu", type: "Noun (Danh từ)", example: "We saw a seal swimming near the shore." },
        { name: "Search", pronounce: "/sɜːrtʃ/", meaning: "Tìm kiếm", type: "Verb (Động từ)", example: "She searched for her keys in every room." },
        { name: "See", pronounce: "/siː/", meaning: "Nhìn thấy", type: "Verb (Động từ)", example: "I can see the mountains from my window." },
        { name: "Seen", pronounce: "/siːn/", meaning: "Đã thấy", type: "Verb (Động từ)", example: "I have seen that movie before." },
        { name: "Sensitive", pronounce: "/ˈsɛnsɪtɪv/", meaning: "Nhạy cảm", type: "Adj (Tính từ)", example: "He is very sensitive and gets upset easily." },
        { name: "Sharp", pronounce: "/ʃɑːrp/", meaning: "Sắc, nhọn", type: "Adj (Tính từ)", example: "Be careful, the knife is very sharp." },
        { name: "Shelter", pronounce: "/ˈʃɛltər/", meaning: "Chỗ trú ẩn", type: "Noun (Danh từ)", example: "We found shelter under a tree during the rain." },
        { name: "Shipwreck", pronounce: "/ˈʃɪpˌrɛk/", meaning: "Vụ đắm tàu", type: "Noun (Danh từ)", example: "The shipwreck has become a popular dive site." },
        { name: "Shooting star", pronounce: "/ˈʃuːtɪŋ stɑːr/", meaning: "Sao băng", type: "Noun (Danh từ)", example: "We saw a shooting star while camping in the mountains." },
        { name: "Site", pronounce: "/saɪt/", meaning: "Địa điểm", type: "Noun (Danh từ)", example: "The ancient city was built on a beautiful site near the river." },
        { name: "Sketch", pronounce: "/skɛtʃ/", meaning: "Phác thảo", type: "Noun (Danh từ)", example: "He drew a quick sketch of the landscape." },
        { name: "Skiing", pronounce: "/ˈskiːɪŋ/", meaning: "Môn trượt tuyết", type: "Noun (Danh từ)", example: "They went skiing in the Alps during their vacation." },
        { name: "Skills", pronounce: "/skɪlz/", meaning: "Kỹ năng", type: "Noun (Danh từ)", example: "She has great skills in playing the piano." },
        { name: "Smoke", pronounce: "/smoʊk/", meaning: "Khói", type: "Noun (Danh từ)", example: "There was smoke rising from the campfire." },
        { name: "Snack", pronounce: "/snæk/", meaning: "Bữa ăn nhẹ", type: "Noun (Danh từ)", example: "I had a quick snack before heading out to work." },
        { name: "Snorkelling", pronounce: "/ˈsnɔːrkəlɪŋ/", meaning: "Lặn biển", type: "Noun (Danh từ)", example: "We went snorkeling to explore the coral reefs." },
        { name: "Snow", pronounce: "/snoʊ/", meaning: "Tuyết", type: "Noun (Danh từ)", example: "The ground was covered with fresh snow after the storm." },
        { name: "Snug", pronounce: "/snʌɡ/", meaning: "Ấm cúng, thoải mái", type: "Adj (Tính từ)", example: "I felt snug and warm by the fireplace." },
        { name: "Soil", pronounce: "/sɔɪl/", meaning: "Đất", type: "Noun (Danh từ)", example: "The plants need rich soil to grow properly." },
        { name: "Solar system", pronounce: "/ˈsoʊlər ˈsɪstəm/", meaning: "Hệ mặt trời", type: "Noun (Danh từ)", example: "The Earth is part of the solar system." },
        { name: "Some", pronounce: "/sʌm/", meaning: "Một chút, một ít", type: "Determiner (Định từ)", example: "Can I have some water, please?" },
        { name: "South", pronounce: "/saʊθ/", meaning: "Hướng nam", type: "Noun (Danh từ)", example: "The city is located to the south of the mountain." },
        { name: "Space shuttle", pronounce: "/ˈspeɪs ˈʃʌtl/", meaning: "Tàu con thoi", type: "Noun (Danh từ)", example: "The space shuttle was launched into orbit with a crew of astronauts." },
        { name: "Space station", pronounce: "/ˈspeɪs ˈsteɪʃən/", meaning: "Trạm không gian", type: "Noun (Danh từ)", example: "The astronauts live and work in the space station." },
        { name: "Speaker", pronounce: "/ˈspiːkər/", meaning: "Người diễn thuyết", type: "Noun (Danh từ)", example: "The speaker addressed the audience about climate change." },
        { name: "Speaker", pronounce: "/ˈspiːkər/", meaning: "Loa", type: "Noun (Danh từ)", example: "I connected the speaker to my phone to play music." },
        { name: "Spicy", pronounce: "/ˈspaɪsi/", meaning: "Cay", type: "Adj (Tính từ)", example: "The curry was too spicy for me." },
        { name: "Splash", pronounce: "/splæʃ/", meaning: "Vảy nước", type: "Noun (Danh từ)", example: "A splash of water hit my face as the boat sped across the lake." },
        { name: "Spin", pronounce: "/spɪn/", meaning: "Xoay", type: "Verb (Động từ)", example: "The dancer spun around gracefully on the stage." },
        { name: "Stare", pronounce: "/stɛr/", meaning: "Nhìn chằm chằm", type: "Verb (Động từ)", example: "Don't stare at people; it's rude." },
        { name: "Statue", pronounce: "/ˈstætjuː/", meaning: "Tượng", type: "Noun (Danh từ)", example: "The statue of the king stands tall in the center of the square." },
        { name: "Stimulating", pronounce: "/ˈstɪmjʊleɪtɪŋ/", meaning: "Kích thích, thú vị", type: "Adj (Tính từ)", example: "The lecture was stimulating and kept everyone engaged." },
        { name: "Storm", pronounce: "/stɔːrm/", meaning: "Cơn bão", type: "Noun (Danh từ)", example: "The storm caused power outages across the city." },
        { name: "Strange", pronounce: "/streɪndʒ/", meaning: "Lạ, kỳ lạ", type: "Adj (Tính từ)", example: "I had a strange feeling when I walked into the old house." },
        { name: "String", pronounce: "/strɪŋ/", meaning: "Dây thừng", type: "Noun (Danh từ)", example: "He used string to tie the boxes together." },
        { name: "Submarine", pronounce: "/ˈsʌbməriːn/", meaning: "Tàu ngầm", type: "Noun (Danh từ)", example: "The submarine went deep underwater to explore the ocean." },
        { name: "Sum", pronounce: "/sʌm/", meaning: "Phép cộng, tổng", type: "Noun (Danh từ)", example: "The sum of five and three is eight." },
        { name: "Supplies", pronounce: "/səˈplaɪz/", meaning: "Nguồn cung cấp", type: "Noun (Danh từ)", example: "We need to buy more supplies for the camping trip." },
        { name: "Surf", pronounce: "/sɜːrf/", meaning: "Lướt sóng", type: "Verb (Động từ)", example: "He loves to surf when he's on vacation by the beach." },
        { name: "Surface", pronounce: "/ˈsɜːrfɪs/", meaning: "Bề mặt", type: "Noun (Danh từ)", example: "The surface of the water was calm and still." },
        { name: "Survivor", pronounce: "/sərˈvaɪvər/", meaning: "Người sống sót", type: "Noun (Danh từ)", example: "The survivor shared their story of survival after the disaster." },
        { name: "Sweet", pronounce: "/swiːt/", meaning: "Ngọt", type: "Adj (Tính từ)", example: "The cake was so sweet that I couldn't eat more than one slice." },
        { name: "Sweet", pronounce: "/swiːt/", meaning: "Kẹo", type: "Noun (Danh từ)", example: "She loves eating sweets after dinner." }
    ],
    'T': [
        { name: "Talented", pronounce: "/ˈtæləntɪd/", meaning: "Tài năng", type: "Adj (Tính từ)", example: "She is a talented musician who can play several instruments." },
        { name: "Telescope", pronounce: "/ˈtɛləˌskoʊp/", meaning: "Kính thiên văn", type: "Noun (Danh từ)", example: "He used a telescope to observe the stars in the night sky." },
        { name: "Temple", pronounce: "/ˈtɛmpəl/", meaning: "Đền thờ", type: "Noun (Danh từ)", example: "They visited a beautiful ancient temple during their trip." },
        { name: "Tie", pronounce: "/taɪ/", meaning: "Buộc", type: "Verb (Động từ)", example: "He tied the boat to the dock with a rope." },
        { name: "Tour", pronounce: "/tʊər/", meaning: "Chuyến tham quan", type: "Noun (Danh từ)", example: "We went on a guided tour of the historical site." },
        { name: "Tourist", pronounce: "/ˈtʊərɪst/", meaning: "Khách du lịch", type: "Noun (Danh từ)", example: "The city is full of tourists during the summer season." },
        { name: "Traditional", pronounce: "/trəˈdɪʃənl/", meaning: "Truyền thống", type: "Adj (Tính từ)", example: "They wore traditional costumes for the festival." },
        { name: "Treasure", pronounce: "/ˈtrɛʒər/", meaning: "Kho báu", type: "Noun (Danh từ)", example: "Pirates are often depicted searching for hidden treasure." },
        { name: "Tribe", pronounce: "/traɪb/", meaning: "Bộ lạc", type: "Noun (Danh từ)", example: "The tribe has its own language and customs." }
    ],
    'U': [
        { name: "Underneath", pronounce: "/ˌʌndərˈniːθ/", meaning: "Bên dưới, ở một mức thấp hơn", type: "Prep (Giới từ)", example: "The treasure was hidden underneath the old house." },
        { name: "Understandable", pronounce: "/ˌʌndərˈstændəbl/", meaning: "Có thể hiểu được", type: "Adj (Tính từ)", example: "The explanation was clear and understandable." },
        { name: "Underwater", pronounce: "/ˌʌndərˈwɔːtər/", meaning: "Dưới mặt nước", type: "Prep (Giới từ)", example: "The ship sank underwater after the storm." },
        { name: "Unfortunately", pronounce: "/ʌnˈfɔːrtʃənətli/", meaning: "Đáng tiếc là", type: "Adv (Trạng từ)", example: "Unfortunately, we missed the last train." },
        { name: "Unfriendly", pronounce: "/ʌnˈfrɛndli/", meaning: "Không thân thiện", type: "Adj (Tính từ)", example: "The new neighbor was unfriendly and didn't greet anyone." },
        { name: "Unhappy", pronounce: "/ʌnˈhæpi/", meaning: "Không hạnh phúc", type: "Adj (Tính từ)", example: "She felt unhappy about the decision to move away." },
        { name: "Uninteresting", pronounce: "/ˌʌnˈɪntrəstɪŋ/", meaning: "Không thú vị", type: "Adj (Tính từ)", example: "The movie was uninteresting and I fell asleep halfway." },
        { name: "Unlucky", pronounce: "/ʌnˈlʌki/", meaning: "Không may mắn", type: "Adj (Tính từ)", example: "He was unlucky to lose his wallet during the trip." },
        { name: "Unpopular", pronounce: "/ˌʌnˈpɒpjələr/", meaning: "Không phổ biến", type: "Adj (Tính từ)", example: "The new policy was unpopular with most of the employees." },
        { name: "Untidy", pronounce: "/ʌnˈtaɪdi/", meaning: "Lộn xộn", type: "Adj (Tính từ)", example: "Her room was always untidy, with clothes all over the floor." },
        { name: "Upload", pronounce: "/ˈʌploʊd/", meaning: "Tải lên", type: "Verb (Động từ)", example: "I will upload the photos to the cloud storage." },
        { name: "Use", pronounce: "/juːz/", meaning: "Sử dụng", type: "Verb (Động từ)", example: "Please use the correct tools to complete the task." },
        { name: "Useable", pronounce: "/ˈjuːzəbl/", meaning: "Có thể sử dụng được", type: "Adj (Tính từ)", example: "The old computer is still useable, but a bit slow." }
    ],
    'V': [
        { name: "Valuable", pronounce: "/ˈvæljuəbl/", meaning: "Có giá trị, đáng giá nhiều tiền", type: "Adj (Tính từ)", example: "The necklace was very valuable and could be sold for a lot of money." },
        { name: "Visible", pronounce: "/ˈvɪzəbl/", meaning: "Có thể nhìn thấy", type: "Adj (Tính từ)", example: "The mountains were visible from miles away." },
        { name: "Volunteer", pronounce: "/ˌvɒlənˈtɪə(r)/", meaning: "Tình nguyện viên", type: "Noun (Danh từ)", example: "She is a volunteer at the local animal shelter." },
        { name: "Voyage", pronounce: "/ˈvɔɪɪdʒ/", meaning: "Chuyến đi dài, hành trình bằng tàu", type: "Noun (Danh từ)", example: "The voyage across the Atlantic took several weeks." },
        { name: "Vall", pronounce: "/wɔːl/", meaning: "Bức tường", type: "Noun (Danh từ)", example: "The wall around the garden is made of bricks." },
    ],
    'W': [
        { name: "Water bottle", pronounce: "/ˈwɔːtə(r) ˈbɒtl/", meaning: "Chai nước", type: "Noun (Danh từ)", example: "Make sure to bring a water bottle for the hike." },
        { name: "Weather", pronounce: "/ˈwɛðə(r)/", meaning: "Thời tiết", type: "Noun (Danh từ)", example: "The weather today is sunny with a light breeze." },
        { name: "West", pronounce: "/wɛst/", meaning: "Hướng tây", type: "Noun (Danh từ)", example: "The sun sets in the west." },
        { name: "What", pronounce: "/wɒt/", meaning: "Cái gì, gì", type: "Determiner (Từ chỉ định)", example: "What time does the train leave?" },
        { name: "Wheel", pronounce: "/wiːl/", meaning: "Bánh xe", type: "Noun (Danh từ)", example: "The bike has two wheels and is easy to ride." },
        { name: "Whether", pronounce: "/ˈwɛðə(r)/", meaning: "Liệu, có phải không", type: "Conjunction (Liên từ)", example: "We need to decide whether we should go now or later." },
        { name: "Whistle", pronounce: "/ˈwɪsl/", meaning: "Cái còi", type: "Noun (Danh từ)", example: "The referee blew the whistle to signal the end of the game." },
        { name: "White", pronounce: "/waɪt/", meaning: "Màu trắng", type: "Adj (Tính từ)", example: "She wore a beautiful white dress to the wedding." },
        { name: "Wildlife", pronounce: "/ˈwaɪldlaɪf/", meaning: "Động vật hoang dã", type: "Noun (Danh từ)", example: "The national park is home to a wide variety of wildlife." },
        { name: "Wrap", pronounce: "/ræp/", meaning: "Quấn, bọc", type: "Verb (Động từ)", example: "She wrapped the gift in colorful paper." },
        { name: "Write", pronounce: "/raɪt/", meaning: "Viết", type: "Verb (Động từ)", example: "He likes to write in his journal every night." },
        { name: "Writer", pronounce: "/ˈraɪtə(r)/", meaning: "Nhà văn", type: "Noun (Danh từ)", example: "The writer is working on a new novel." },
        { name: "Wrong", pronounce: "/rɒŋ/", meaning: "Sai, không đúng", type: "Adj (Tính từ)", example: "You have chosen the wrong answer to the question." },
    ],
    'Y': [
        { name: "Yacht", pronounce: "/jɒt/", meaning: "Du thuyền", type: "Noun (Danh từ)", example: "They spent the afternoon sailing on a luxurious yacht." }
    ],
};
let chapters = [];
let manyword = [];
let numberOfWords = 8;
let count = 0;
let currentChapter = 0;
const getRandomWords = (data, numberOfWords) => {
    const chosenWords = new Set();
    const chapters = Object.keys(data);

    while (chosenWords.size < numberOfWords) {
        const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];
        const words = [...data[randomChapter]]; // Sao chép mảng từ

        if (words.length === 0) continue;

        const randomWord = words[Math.floor(Math.random() * words.length)];
        chosenWords.add(randomWord);
    }

    return Array.from(chosenWords);
};
// async function fetchWords() {
//     try {
//         const response = await fetch('../database/fetch_word.php');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
// wordList = data;

//     } catch (error) {
//         console.error('Error fetching words:', error);
//         document.getElementById('result').textContent = 'Không thể tải dữ liệu từ server.';
//     }
// }





// Generate grid container
const gameContainer = document.getElementById("game-container");
gameContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

// Initialize grid and word positions
const grid = [];
for (let i = 0; i < gridSize; i++) {
    grid[i] = new Array(gridSize).fill("");
}


// Place words in grid
const placeWords = () => {
    words.forEach((word) => {
        let placed = false;
        while (!placed) {
            const direction = Math.floor(Math.random() * 3); // 0: horizontal, 1: vertical, 2: diagonal
            const startX = Math.floor(Math.random() * gridSize);
            const startY = Math.floor(Math.random() * gridSize);

            if (direction === 0 && startX + word.length <= gridSize) { // Horizontal
                if (canPlaceWord(word, startX, startY, 1, 0)) {
                    placeWord(word, startX, startY, 1, 0);
                    placed = true;
                }
            } else if (direction === 1 && startY + word.length <= gridSize) { // Vertical
                if (canPlaceWord(word, startX, startY, 0, 1)) {
                    placeWord(word, startX, startY, 0, 1);
                    placed = true;
                }
            } else if (direction === 2 && startX + word.length <= gridSize && startY + word.length <= gridSize) { // Diagonal
                if (canPlaceWord(word, startX, startY, 1, 1)) {
                    placeWord(word, startX, startY, 1, 1);
                    placed = true;
                }
            }
        }
    });
};

const canPlaceWord = (word, x, y, dx, dy) => {
    for (let i = 0; i < word.length; i++) {
        if (grid[y + i * dy][x + i * dx] !== "") {
            return false;
        }
    }
    return true;
};

const placeWord = (word, x, y, dx, dy) => {
    for (let i = 0; i < word.length; i++) {
        grid[y + i * dy][x + i * dx] = word[i];
    }
};

// Fill remaining empty cells with random letters
const fillGrid = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            if (grid[y][x] === "") {
                grid[y][x] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
};

// Render the grid to the DOM
const renderGrid = () => {
    gameContainer.innerHTML = "";
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = grid[y][x].toUpperCase();
            cell.dataset.x = x;
            cell.dataset.y = y;
            gameContainer.appendChild(cell);
        }
    }
};

// Display the word list
const renderWordList = () => {
    const wordList = document.getElementById("word-list");
    wordList.innerHTML = "";
    words.forEach((word) => {
        const wordItem = document.createElement("div");
        wordItem.textContent = word;
        wordItem.classList.add("word");
        wordItem.id = `word-${word}`;
        wordList.appendChild(wordItem);
    });
};

// Initialize game


// Add selection functionality
let selectedCells = [];
gameContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell") && !e.target.classList.contains("found")) {
        e.target.classList.toggle("selected");
        const x = parseInt(e.target.dataset.x, 10);
        const y = parseInt(e.target.dataset.y, 10);

        const cellIndex = selectedCells.findIndex((c) => c.x === x && c.y === y);
        if (cellIndex >= 0) {
            selectedCells.splice(cellIndex, 1);
        } else {
            selectedCells.push({ x, y });
        }

        checkWordSelection();
    }
});

const checkWordSelection = () => {
    if (selectedCells.length < 2) return;

    // Sort cells by their positions
    selectedCells.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y));

    const dx = selectedCells[1].x - selectedCells[0].x;
    const dy = selectedCells[1].y - selectedCells[0].y;

    // Ensure all selected cells are in a straight line
    for (let i = 1; i < selectedCells.length; i++) {
        const currentDx = selectedCells[i].x - selectedCells[i - 1].x;
        const currentDy = selectedCells[i].y - selectedCells[i - 1].y;
        if (currentDx !== dx || currentDy !== dy) {
            return; // Invalid selection
        }
    }

    // Form the word from selected cells
    const selectedWord = selectedCells.map((c) => grid[c.y][c.x]).join("");
    if (words.includes(selectedWord)) {
        document.getElementById(`word-${selectedWord}`).classList.add("found");
        selectedCells.forEach((c) => {
            const cell = gameContainer.querySelector(`.cell[data-x="${c.x}"][data-y="${c.y}"]`);
            cell.classList.add("found");
            cell.classList.remove("selected");
            cell.style.pointerEvents = "none"; // Disable further clicks
        });
        count++;
        selectedCells = [];
    }
    if (count === numberOfWords) {
        showPopup();
        return;
    }
};


function resetGame() {
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            grid[y][x] = "";
        }
    }
    //fetchWords();
    count = 0;
    manyword = [];
    selectedCells = [];
}


function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function startNewGame() {
    resetGame();
    hidePopup();
    // Thêm logic chơi mới tại đây
    chapters = Object.keys(wordList);
    manyword = getRandomWords(wordList, numberOfWords);
    for (i = 0; i < numberOfWords; i++) {
        words[i] = manyword[i]['name'];
    }
    placeWords();
    fillGrid();
    renderGrid();
    renderWordList();
}

function goToHomePage() {
    hidePopup();
    // Hoặc chuyển hướng tới trang chủ
    // window.location.href = "index.html";
}

// Ẩn popup khi bấm vào overlay
document.getElementById('overlay').onclick = hidePopup;



chapters = Object.keys(wordList);
manyword = getRandomWords(wordList, numberOfWords);
for (i = 0; i < numberOfWords; i++) {
    words[i] = manyword[i]['name'];
}
placeWords();
fillGrid();
renderGrid();
renderWordList();