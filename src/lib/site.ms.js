/* -------------------------------------------------------------------------- */
/*  Bahasa Melayu content                                                      */
/*                                                                             */
/*  Same contract as site.zh.js: only translatable text lives here, and         */
/*  everything structural (slugs, hrefs, images, numbers, dates, ordering) is   */
/*  inherited from the English source so the trees cannot drift apart. Adding    */
/*  a product or a post to `site.js` and forgetting this file degrades to        */
/*  English for that entry rather than crashing.                                */
/*                                                                             */
/*  Register: business Malay as an owner in KL or JB would actually write it.    */
/*  Loanwords that the trade uses in practice are kept rather than replaced      */
/*  with formal coinages nobody says out loud — `dashboard`, `database`,        */
/*  `spreadsheet`, `outlet`, `stok` — because the reader is a shopkeeper, not    */
/*  a terminology committee. `anda` throughout, never `awak`.                   */
/*                                                                             */
/*  `posts` is deliberately NOT translated: the blog is bylined, cites its own   */
/*  sample sizes and carries an editorial policy promising a named reviewer.     */
/*  Machine-translating that without a Malay-speaking reviewer would break the   */
/*  promise the policy makes, so the posts fall back to English until someone    */
/*  reviews them. Everything a visitor reads outside the blog is translated.     */
/* -------------------------------------------------------------------------- */

import {
  authors as enAuthors,
  comparison as enComparison,
  company as enCompany,
  editorialPolicy as enEditorial,
  faqs as enFaqs,
  industries as enIndustries,
  nav as enNav,
  pillars as enPillars,
  posts as enPosts,
  products as enProducts,
  rollout as enRollout,
  stats as enStats,
  testimonials as enTestimonials,
  values as enValues,
} from '@/lib/site';

/** Merges a translated list over the English one, index by index. */
const zip = (en, ms = [], merge) =>
  en.map((item, i) => (ms[i] ? (merge ? merge(item, ms[i]) : { ...item, ...ms[i] }) : item));

/* -------------------------------------------------------------------------- */
/*  Company, navigation                                                        */
/* -------------------------------------------------------------------------- */

export const company = {
  ...enCompany,
  tagline: 'Dashboard dan database untuk perniagaan yang masih berjalan atas spreadsheet.',
  location: 'Kuala Lumpur, Malaysia',
};

export const nav = zip(enNav, [
  { label: 'Produk' },
  { label: 'Industri' },
  { label: 'Blog' },
  { label: 'Kerjaya' },
  { label: 'Hubungi Kami' },
]);

/* -------------------------------------------------------------------------- */
/*  Products                                                                   */
/* -------------------------------------------------------------------------- */

const msProducts = [
  {
    status: 'Sudah tersedia',
    name: 'Dashboard & Database',
    short: 'Dashboard',
    tagline: 'Dashboard yang menjalankan perniagaan anda, dengan database sebenar di bawahnya',
    audience: 'PKS yang menjalankan perniagaan atas spreadsheet',
    headline: 'Semua yang anda rekod dalam spreadsheet, pada satu dashboard yang tidak boleh jadi lapuk.',
    summary:
      'Kami ambil spreadsheet yang benar-benar menjalankan perniagaan anda, letak database yang betul di bawahnya, dan bina dashboard yang dibuka pasukan anda setiap pagi. Skrinnya dibentuk mengikut industri anda, bukan template umum; angkanya bergerak semasa kerja berlaku, bukan bila ada orang teringat untuk eksport semula; dan hanya ada satu versi fail, sebab tiada fail langsung.',
    bullets: [
      'Database yang direka mengikut cara perniagaan anda merekod kerja, bukan spreadsheet yang disalin ke dalam SQL',
      'Dashboard disusun untuk industri anda: peruncitan, pengedaran, klinik, salun, pusat tuisyen, hartanah',
      'Setiap angka hidup, jadi tiada siapa membaca eksport hari Selasa pada hari Jumaat',
      'Peranan dan kebenaran, supaya pengurus cawangan nampak cawangannya dan pemilik nampak semuanya',
      'Borang dan kemasukan data telefon yang menggantikan fail kongsi dan gambar WhatsApp nota tulisan tangan',
      'Sejarah penuh dan jejak audit pada setiap rekod, termasuk siapa yang ubah dan bila',
      'Migrasi daripada spreadsheet yang ada sekarang, termasuk yang berulang',
      'Eksport ke Excel dan CSV bila-bila masa, sebab keluar sepatutnya tidak berkos apa-apa',
    ],
    metrics: [
      { suffix: ' jam', label: 'Jam pentadbiran yang pulang setiap minggu' },
      { suffix: ' mgg', label: 'Dari lawatan pertama sehingga hidup' },
      { suffix: '', label: 'Versi kebenaran, bukan sembilan' },
    ],
    features: [
      {
        title: 'Satu skrin untuk sepanjang hari',
        body: 'Angka yang pengurus anda bina semula dengan tangan setiap pagi, disusun sekali dan mengemas kini sendiri. Turun daripada kumpulan ke satu cawangan, satu pelanggan atau satu baris tanpa buka fail lain.',
      },
      {
        title: 'Database, bukan spreadsheet yang lebih besar',
        body: 'Jadual, hubungan dan kekangan yang betul di bawahnya. Dua orang boleh bekerja serentak, tiada apa yang tertimpa, dan kemasukan yang salah ditolak, bukan disimpan diam-diam.',
      },
      {
        title: 'Disusun untuk industri anda',
        body: 'Dashboard pengedar dan dashboard klinik mengukur benda berbeza. Kami bina skrin mengelilingi keputusan mingguan perniagaan anda, bukan mengelilingi demo yang kena sesuai untuk semua orang.',
      },
      {
        title: 'Kemasukan data di tempat kerja berlaku',
        body: 'Borang atas telefon di kaunter, di bay atau di kaunter depan. Kalau pasukan anda boleh guna WhatsApp, mereka boleh masukkan rekod, dan dashboard bergerak sebaik sahaja mereka buat.',
      },
      {
        title: 'Setiap perubahan ada namanya',
        body: 'Sejarah rekod penuh dan jejak audit. Bila satu angka nampak pelik, anda boleh lihat nilainya dahulu, siapa yang ubah dan bila, bukan membandingkan empat salinan fail yang sama.',
      },
    ],
    value: [
      {
        title: 'Pagi Isnin bukan lagi kerja bina semula',
        body: 'Laporan yang seseorang himpunkan daripada empat eksport sudah ada atas skrin sebelum dia duduk. Satu jam itu pulang setiap minggu, kepada orang yang paling anda tak mampu biarkan buat kemasukan data.',
      },
      {
        title: 'Hanya ada satu versi',
        body: 'Tiada final, tiada final_v2, tiada "yang mana satu kita hantar pada akauntan". Semua orang membaca rekod yang sama, dan dua orang menyunting serentak jadi hari Selasa yang biasa, bukan satu petang yang hilang.',
      },
      {
        title: 'Angkanya angka hari ini',
        body: 'Spreadsheet ialah gambar pada saat seseorang terakhir kemas kini. Dashboard atas database hidup ialah bendanya sendiri, dan itulah beza antara bertindak pada hari Selasa dan baru tahu pada hujung bulan.',
      },
      {
        title: 'Silap ditangkap semasa dimasukkan',
        body: 'Database boleh menolak pembekal berulang, tarikh mustahil atau kuantiti yang tiada siapa berniat taip. Spreadsheet terima ketiga-tiganya dan hulurkan akibatnya kepada anda enam minggu kemudian.',
      },
      {
        title: 'Akhirnya anda boleh tanya soalan kedua',
        body: '"Pelanggan mana yang berhenti datang" dan "barisan mana yang rugi" jadi dua klik, bukan satu projek, sebaik sahaja data berstruktur. Itulah sebab sebenar meninggalkan spreadsheet, dan ia hanya jadi kalau skemanya dibina betul dahulu.',
      },
      {
        title: 'Ia kekal selepas orang yang membinanya pergi',
        body: 'Kebanyakan spreadsheet PKS ada satu penulis dan tiada dokumentasi. Bila dia berhenti, perniagaan mewarisi fail yang tiada siapa berani ubah. Database dengan peranan, sejarah dan eksport bukan situasi tebusan.',
      },
    ],
    limits: [
      'Menggantikan pakej perakaunan anda. Kami eksport dalam format yang diterima perisian perakaunan PKS biasa dan biarkan lejar di tempatnya.',
      'Gudang data perusahaan, saluran penstriman dan apa-apa yang perlukan penganalisis sepenuh masa untuk mengendalikannya. Kalau itu yang anda betul-betul perlukan, kami akan cakap dan namakan orang yang buat kerja itu.',
      'Dashboard sekali guna atas spreadsheet yang anda tetap kemas kini dengan tangan. Tanpa database di bawahnya, dashboard itu hiasan dan ia jadi lapuk dalam dua minggu.',
      'Pembelajaran mesin atas beberapa ratus baris. Ramalan perlukan sejarah, dan kami lebih rela beritahu anda daripada menjualnya.',
      'Membina semula sistem yang berfungsi. Kalau susunan anda sekarang elok, kami akan integrasi dengannya, beri sebut harga lebih rendah, dan cakap begitu pada panggilan pertama.',
    ],
    faqs: [
      {
        q: 'Apa sebenarnya jadi pada spreadsheet kami?',
        a: 'Kami baca, kenal pasti struktur yang tersembunyi di dalamnya, dan reka jadual yang sepadan dengan cara perniagaan anda betul-betul merekod kerja. Kemudian kami pindahkan isinya. Rekod berulang, tiga ejaan untuk pembekal yang sama dan lajur yang bertukar maksud di pertengahan akan ditanda untuk anda putuskan, bukan diteka.',
      },
      {
        q: 'Apa bezanya dengan alat BI yang dihalakan pada fail kami?',
        a: 'Alat BI melukis carta atas apa sahaja yang anda suapkan, jadi ia mewarisi setiap rekod berulang dan setiap eksport lapuk. Kami ganti sumbernya: data masuk ke database sebenar dengan kekangan, dan dashboard membaca daripada situ. Cartanya bahagian yang senang.',
      },
      {
        q: 'Apa maksud "disesuaikan untuk industri" dalam praktik?',
        a: 'Perniagaan pengedaran perlukan umur stok, lead time dan margin setiap barisan. Klinik perlukan kadar penggunaan, senarai panggil semula dan kadar tidak hadir. Pusat tuisyen perlukan pendaftaran dan kehadiran mengikut kelas. Kami mula daripada skrin yang industri itu betul-betul perlukan, bukan menghantar satu dashboard dan meminta anda menyesuaikan diri.',
      },
      {
        q: 'Boleh pasukan kami terus guna Excel?',
        a: 'Boleh, dan kebanyakan pasukan guna untuk analisis sekali sekala. Setiap paparan boleh dieksport ke Excel atau CSV dengan satu klik. Bezanya, Excel berhenti jadi tempat data tinggal dan bertukar jadi tempat seseorang sekali sekala ambil salinan.',
      },
      {
        q: 'Siapa yang memiliki database itu?',
        a: 'Anda. Eksport penuh bila-bila masa, dalam format standard, tanpa yuran keluar. Kalau anda pergi, anda bawa data dan skemanya, bukan PDF beberapa carta.',
      },
      {
        q: 'Berapa lama sebelum kami benar-benar boleh guna?',
        a: 'Dua minggu adalah biasa: lawatan pada hari 0, skema dan migrasi hari 1 hingga 4, satu pasukan atau cawangan hidup hari 5 hingga 10, yang selebihnya dan serah tugas hari 11 hingga 14. Spreadsheet sumber yang bersepah menolaknya ke tiga atau empat minggu, dan kami beritahu anda yang mana satu sebelum anda bayar apa-apa.',
      },
      {
        q: 'Kalau kami perlukan sesuatu yang tiada pada dashboard?',
        a: 'Paparan dan medan baharu adalah konfigurasi, bukan pembinaan semula, sebab database direka untuk perniagaan itu, bukan disalin daripada spreadsheet. Minta dalam bulan pertama dan biasanya ia hidup minggu yang sama.',
      },
    ],
  },
  /* `connections` carries nulls in the English source, and `zip` merges by index
     with spread, so a translated row must repeat `reads: null` / `writes: null`
     rather than omit it. Omitting the key would let the English string survive
     the merge and print inside a Malay table. */
  {
    status: 'Sudah tersedia',
    name: 'Laman Web & Integrasi',
    short: 'Laman Web',
    tagline: 'Laman web baharu untuk perniagaan anda, disambung terus ke database yang menjalankannya',
    audience: 'PKS yang melancarkan atau menggantikan laman web',
    headline: 'Laman web baharu yang menjual, menjawab dan kekal betul tanpa disentuh sesiapa.',
    summary:
      'Kami reka dan bina laman web baharu anda, kemudian sambungkannya ke database BIYY anda supaya ia berhenti jadi risalah. Pelanggan nampak harga sebenar dan ketersediaan sebenar, mereka memesan dan bertanya semasa anda tutup, dan apa yang mereka hantar mendarat pada dashboard anda, bukan dalam peti masuk yang tiada tuan. Tiga minggu dari perbualan pertama, satu yuran projek tetap, dan domain, repositori serta hosting atas nama anda dari hari pertama.',
    bullets: [
      'Laman baharu direka dan dibina untuk perniagaan anda, bukan template dengan logo anda dilekatkan',
      'Teks ditulis bersama anda dalam satu sesi, daripada apa yang pelanggan betul-betul tanya',
      'Setiap halaman yang pelanggan perlukan: apa yang anda jual, di mana anda berada, dan bagaimana hendak hubungi anda',
      'Halaman statik dihidang daripada CDN, tanpa CMS dan tanpa plugin untuk ditampal',
      'Diuji atas telefon Android pertengahan pada data mudah alih, sebab itulah yang dipegang pelanggan anda',
      'Harga, ketersediaan, staf dan waktu buka datang daripada database anda dan berubah bila operasi anda berubah',
      'Data berstruktur, peta laman, URL bersih dan satu halaman sebenar bagi setiap cawangan dengan waktunya sendiri',
      'Domain, DNS, repositori dan akaun hosting atas nama anda dari hari pertama pembinaan',
    ],
    features: [
      {
        title: 'Dibina untuk perniagaan anda, bukan daripada template',
        body: 'Kami reka halaman mengelilingi apa yang anda betul-betul jual dan cara pelanggan betul-betul bertanya. Ayatnya datang daripada dua jam bersama sesiapa yang menjawab telefon anda, jadi laman itu berbunyi seperti jurujual terbaik anda pada hari terbaiknya.',
      },
      {
        title: 'Halaman yang membaca database hidup',
        body: 'Harga, ketersediaan dan lead time setiap barisan dan setiap cawangan, dibaca daripada jadual yang sama dengan dashboard anda. Laman itu tidak boleh mengiklankan sesuatu yang berubah pagi tadi.',
      },
      {
        title: 'Borang yang menulis rekod, bukan e-mel',
        body: 'Pesanan atau pertanyaan tiba sebagai satu baris dalam database anda berserta halaman asalnya, sedia atas dashboard, bukan sebagai satu lagi mesej dalam peti masuk kongsi.',
      },
      {
        title: 'Laman yang tidak boleh hanyut',
        body: 'Waktu buka, harga dan butiran cawangan dibaca semasa binaan daripada data anda sendiri. Tiada siapa perlu ingat untuk kemas kini laman web, sebab tiada siapa mengemas kini laman web.',
      },
    ],
    value: [
      {
        title: 'Pelanggan boleh beli dan bertanya pada pukul 11 malam',
        body: 'Laman itu menerima pesanan atau pertanyaan semasa anda tutup, dan ia menunggu sebagai rekod dalam sistem yang sama yang dibuka pasukan anda pada waktu pagi. Tiada pesanan suara untuk diselak, tiada apa yang ditaip semula.',
      },
      {
        title: 'Telefon berhenti berdering untuk enam soalan yang sama',
        body: 'Waktu buka, harga, ada stok atau tidak, terima walk-in atau tidak. Dijawab atas halaman dan diambil daripada database anda sendiri, jadi jawapannya betul hari ini, bukan betul pada 2023.',
      },
      {
        title: 'Laman yang tidak boleh jadi basi',
        body: 'Harga, staf, ketersediaan dan waktu cuti datang daripada BIYY. Tiada siapa perlu ingat untuk kemas kini laman web, sebab tiada siapa mengemas kini laman web.',
      },
      {
        title: 'Dijumpai oleh orang yang memang sedang mencari anda',
        body: 'Data berstruktur, URL bersih dan satu halaman sebenar bagi setiap cawangan dengan alamat dan waktunya. Separuh struktur dalam carian, disiapkan sekali dan diserahkan kepada anda, bukan disewakan balik bulanan.',
      },
      {
        title: 'Laju atas telefon murah',
        body: 'Diuji atas Android pertengahan pada data mudah alih. Laman yang mengambil lapan saat untuk dimuatkan sudah pun kehilangan pelanggan yang berdiri di luar kedai anda menimbang sama ada hendak masuk.',
      },
      {
        title: 'Tiada bayaran bulanan, dan tiada tuan tanah',
        body: 'Satu yuran projek tetap, hosting termasuk dalam harga bulanan setiap cawangan yang anda sudah bayar, dan domain, repositori serta akaun hosting atas nama anda dari hari pertama. Tiada apa untuk dirunding semula kemudian.',
      },
    ],
    connections: [
      {
        surface: 'Halaman katalog',
        reads: 'Harga, ketersediaan dan lead time secara langsung, setiap barisan dan setiap cawangan',
        writes: null,
      },
      {
        surface: 'Pesanan dalam talian',
        reads: 'Ketersediaan, supaya laman tidak boleh menjual apa yang berubah pagi tadi',
        writes: 'Mencipta rekod pesanan dan membuka kerja di cawangan yang betul',
      },
      {
        surface: 'Borang pertanyaan',
        reads: null,
        writes: 'Mendarat sebagai rekod atas dashboard berserta halaman asalnya',
      },
      {
        surface: 'Portal pelanggan',
        reads: 'Rekod pelanggan itu sendiri, dan tiada apa milik orang lain',
        writes: 'Merekod apa yang mereka ubah, dengan cap masa dan nama mereka',
      },
      {
        surface: 'Halaman cawangan',
        reads: 'Alamat, waktu urus niaga dan penutupan cuti daripada jadual anda sendiri',
        writes: null,
      },
      {
        surface: 'WhatsApp',
        reads: 'Status pesanan dan pertanyaan',
        writes: 'Merekod mesej dan balasan pelanggan pada rekod berkenaan',
      },
    ],
    platforms: [
      {
        name: 'Binaan tersuai',
        depth: 'Penuh',
        body: 'Harga dan ketersediaan dipaparkan di server, sama seperti laman ini. Tiada apa dimuatkan dua kali dan tiada apa berkelip dengan data lapuk.',
      },
      {
        name: 'WordPress',
        depth: 'Penuh',
        body: 'Satu plugin ditulis khusus untuk tema anda. Kami juga akan beritahu terus terang sama ada tema itu berbaloi dikekalkan sebelum kami menulisnya.',
      },
      {
        name: 'Shopify',
        depth: 'Dua hala',
        body: 'Katalog dan ketersediaan disegerakkan dua hala. Pembayaran kekal dalam Shopify, dan di situlah tempatnya.',
      },
      {
        name: 'Wix, Squarespace, GoDaddy',
        depth: 'Benam sahaja',
        body: 'Satu borang dan satu penanda langsung. Selebihnya halaman itu tidak boleh dicapai dari luar, dan berapa banyak kerja pun di pihak kami tidak mengubahnya.',
      },
    ],
    stages: [
      {
        when: 'Minggu 0',
        title: 'Sesi kandungan',
        body: 'Dua jam bersama sesiapa yang menjawab telefon. Apa yang pelanggan tanya, apa yang mereka salah faham, apa yang anda ulang setiap hari. Perbualan itu menjadi teksnya.',
        owner: 'Anda + kami, di lokasi',
      },
      {
        when: 'Minggu 1',
        title: 'Pembinaan',
        body: 'Halaman naik ke pautan pratonton yang boleh anda hantar kepada sesiapa. Gambar sebenar dan ayat sebenar dari awal, jadi tiada siapa diminta membayangkan melepasi teks penanda tempat.',
        owner: 'Kami bina, disemak setiap hari',
      },
      {
        when: 'Minggu 2',
        title: 'Penyambungan',
        body: 'Harga, ketersediaan dan borang disambung ke database BIYY anda. Kami uji dengan cara merosakkannya: pesanan untuk barang yang berubah sejam lalu, borang dihantar dua kali.',
        owner: 'Kami, atas data anda',
      },
      {
        when: 'Minggu 3',
        title: 'Pelancaran',
        body: 'DNS bertukar di luar waktu urus niaga. Laman lama kekal boleh dicapai selama dua minggu, dan repositori diserahkan kepada anda pada hari itu.',
        owner: 'Domain anda, repo anda',
      },
    ],
    limits: [
      'Khidmat pemasaran bulanan, pengurusan iklan atau laporan SEO bulanan. Kami bina separuh strukturnya sekali dan serahkan kepada anda.',
      'Logo, identiti jenama dan akaun media sosial. Kami boleh bekerjasama dengan pereka anda, atau namakan seseorang yang lebih mahir daripada kami.',
      'Kedai rentas sempadan dengan peraturan cukai berbilang mata wang dan katalog enam angka. Beli Shopify untuk itu dan biar kami sambungkan BIYY ke dalamnya.',
      'Sebarang peratusan daripada jualan laman itu. Satu yuran projek, dan hosting dalam harga bulanan setiap cawangan yang anda sudah bayar.',
      'Membina semula laman yang berfungsi. Kalau laman anda elok, kami integrasi dengannya, beri sebut harga lebih rendah, dan cakap begitu pada panggilan pertama.',
    ],
    faqs: [
      {
        q: 'Perlukah kami jadi pelanggan BIYY dahulu untuk dapat laman web?',
        a: 'Pada praktiknya ya. Kami ambil kerja laman web apabila ada database untuk disambungkan, sama ada yang anda sudah guna atau yang akan hidup dalam suku yang sama. Laman risalah tanpa apa-apa di belakangnya bukan sesuatu yang kami buat lebih baik daripada studio tempatan, dan kami lebih rela beritahu anda daripada mengambil kerja itu.',
      },
      {
        q: 'Berapa kos membina laman web?',
        a: 'Satu yuran projek tetap, disebut harga selepas sesi kandungan apabila bilangan halaman dan bilangan permukaan yang disambung sudah diketahui, tambah hosting yang dilipat ke dalam harga bulanan setiap cawangan sedia ada. Tiada caj setiap transaksi dan tiada yuran terikat kepada jualan laman itu.',
      },
      {
        q: 'Kenapa tidak bina sendiri atas Wix atau Squarespace?',
        a: 'Untuk laman risalah semata-mata, buatlah. Ia lebih murah dan ia memadai. Sebab untuk kami membinanya ialah separuh yang alat itu tidak boleh capai: harga dan ketersediaan yang hidup, bukan ditaip masuk; pesanan dan pertanyaan yang mendarat dalam sistem yang pasukan anda sudah guna setiap hari; dan halaman yang kekal terkini selepas semua orang berhenti mengambil berat tentang laman web itu. Kalau tiada satu pun berkenaan dengan perniagaan anda, kami akan cakap pada panggilan pertama.',
      },
      {
        q: 'Boleh kami sunting laman itu sendiri?',
        a: 'Perkara yang berubah setiap minggu — harga, ketersediaan, staf dan waktu buka — diubah dalam BIYY dan laman mengikut dalam masa seminit. Teks tinggal dalam satu fail bagi setiap halaman dan kami tunjukkan cara menyuntingnya. Tiada CMS, sebab CMS hanyalah satu lagi sistem untuk ditampal dan satu lagi kata laluan untuk hilang.',
      },
      {
        q: 'Siapa memiliki laman itu bila siap?',
        a: 'Anda. Domain, DNS, repositori dan akaun hosting atas nama anda dari hari pertama pembinaan, bukan dipindahkan pada akhirnya. Keluar tidak berkos apa-apa dan tidak memindahkan apa-apa.',
      },
      {
        q: 'Kami sudah ada laman web yang kami suka. Boleh ia disambung ke BIYY?',
        a: 'Biasanya boleh. Sedalam mana bergantung pada apa ia dibina. Laman tersuai dan WordPress boleh integrasi sepenuhnya, Shopify menyegerak dua hala, dan pembina terhos seperti Wix hanya menerima benaman dan tidak lebih dalam. Kami periksa sebelum memberi sebut harga, bukan selepas.',
      },
      {
        q: 'Adakah anda bina dalam bahasa Melayu dan Cina juga?',
        a: 'Ya. Bahasa Inggeris, Cina dan Melayu sebagai standard. Satu fail terjemahan bagi setiap bahasa, jadi satu waktu buka atau satu harga ditulis sekali dan kekal betul dalam semuanya.',
      },
    ],
  },
  {
    status: 'Sudah tersedia',
    name: 'Pembangunan AI',
    short: 'AI',
    tagline: 'AI yang dibina atas database yang perniagaan anda sudah gunakan',
    audience: 'PKS yang sudah ada database berfungsi dan kerja yang berbaloi diautomasikan',
    headline: 'AI yang menjawab daripada rekod anda sendiri, dan menunjukkan dari mana jawapan itu datang.',
    summary:
      'Sebaik kerja anda berada dalam database sebenar, model boleh dihalakan kepadanya. Kami bina bahagian yang sempit dan boleh disemak, yang berbaloi dengan duitnya: tanya data anda sendiri dalam bahasa biasa, laporan minggu itu sudah dirangka sebelum sesiapa duduk, invois atau nota penghantaran dibaca terus menjadi rekod dan bukan ditaip semula, dan perkara luar biasa timbul sendiri tanpa sesiapa perlu menjalankan laporan untuk mencarinya. Setiap jawapan membawa rekod asalnya, dan apa sahaja yang model tidak pasti diserahkan kepada manusia, bukan dimasukkan ke dalam database.',
    bullets: [
      'Tanya data anda dalam bahasa Melayu, Inggeris atau Cina dan dapat angkanya berserta rekod di belakangnya',
      'Dokumen dibaca terus jadi rekod: invois, nota penghantaran, pesanan belian dan borang tulisan tangan',
      'Laporan dan ringkasan dirangka mengikut jadual, dalam laras bahasa yang perniagaan anda sudah guna',
      'Perkara luar biasa dikesan dan ditanda, supaya pesanan yang ganjil sampai kepada manusia pada hari ia berlaku',
      'Pengelasan dan penghalaan untuk apa yang masuk sepanjang hari: pertanyaan, tiket, pesanan, mesej',
      'Ramalan hanya apabila sejarahnya cukup untuk menyokongnya, dan jawapan jujur apabila tidak',
      'Setiap keluaran menunjukkan rekod sumbernya, jadi satu angka boleh disemak, bukan sekadar dipercayai',
      'Ambang keyakinan dan satu langkah manusia pada apa sahaja yang menulis, supaya tiada apa dikomit secara senyap',
    ],
    features: [
      {
        title: 'Satu soalan, bukan permintaan laporan',
        body: '"Pelanggan mana yang memesan kurang suku ini berbanding suku lepas" dijawab atas jadual anda sendiri, dengan senarai pelanggan di bawahnya. Jawapannya ialah pertanyaan yang ditulis model dan boleh anda baca, bukan angka yang dikeluarkan daripada ingatannya.',
      },
      {
        title: 'Kertas berhenti ditaip dua kali',
        body: 'Invois pembekal yang difoto di kaunter tiba sebagai rekod draf dengan barisan, kuantiti dan jumlah sudah diisi. Apa sahaja yang model tidak pasti dibiarkan kosong dan ditanda, bukan diteka dan ditimbus.',
      },
      {
        title: 'Perkara luar biasa mencari anda',
        body: 'Harga yang berubah, pesanan tiga kali ganda saiz biasa, pelanggan yang senyap. Disemak berterusan terhadap sejarah anda sendiri dan dihantar kepada orang yang boleh bertindak, bukan menunggu disedari pada hujung bulan.',
      },
      {
        title: 'Berasas, dan boleh diaudit',
        body: 'Jawapan diambil daripada rekod anda dan memetiknya. Tiada apa ditulis balik tanpa melepasi ambang keyakinan dan, di tempat yang penting, seorang manusia. Bila ia tidak tahu, ia cakap tidak tahu dan menyerahkannya.',
      },
    ],
    value: [
      {
        title: 'Soalan itu akhirnya ditanya, sebab bertanya jadi murah',
        body: 'Kebanyakan soalan dalam PKS tidak pernah dijawab, bukan sebab datanya tiada tetapi sebab seseorang kena luangkan satu petang. Bila jawapannya mengambil satu ayat, orang akan tanya soalan kedua dan ketiga juga.',
      },
      {
        title: 'Taip semula berhenti',
        body: 'Invois, nota penghantaran dan borang tiba sebagai draf, bukan sebagai longgokan yang seseorang kunci masuk selepas waktu kerja. Orang itu masih menyemak. Dia cuma tidak menaipnya lagi.',
      },
      {
        title: 'Anda dengar pada hari itu juga',
        body: 'Margin yang tergelincir atau pelanggan yang berhenti memesan ialah masalah semasa ia kecil dan kerugian bila ia muncul pada hujung tahun. Semakan berterusan itulah bezanya.',
      },
      {
        title: 'Jawapannya boleh disemak',
        body: 'Setiap angka datang dengan rekod asal pengiraannya. Itulah yang memisahkan sesuatu yang boleh dijadikan asas menjalankan perniagaan daripada satu ayat yang yakin tetapi kebetulan salah.',
      },
      {
        title: 'Ia sempit dengan sengaja',
        body: 'Kami bina tiga atau empat perkara yang berbaloi dengan duitnya dan tolak selebihnya. Pembantu yang buat semua benda dengan teruk akan ditinggalkan dalam sebulan, dan anda sudah bayar juga.',
      },
      {
        title: 'Tiada apa menulis tanpa kebenaran',
        body: 'Keyakinan rendah pergi kepada manusia, bukan masuk ke dalam database. Rekod anda mengekalkan sifat yang menjadikannya berbaloi dibina: bila dashboard cakap sesuatu, ia benar.',
      },
    ],
    connections: [
      {
        surface: 'Tanya data anda',
        reads: 'Jadual yang orang itu memang sudah dibenarkan lihat, dan tiada yang lain',
        writes: null,
      },
      {
        surface: 'Pembacaan dokumen',
        reads: 'Pembekal, senarai harga dan pesanan terbuka, untuk dipadankan dengan apa yang dibacanya',
        writes: 'Mencipta rekod draf dan menanda setiap medan yang ia tidak pasti',
      },
      {
        surface: 'Laporan berjadual',
        reads: 'Jadual yang sama dibaca dashboard, pada saat ia dijadualkan berjalan',
        writes: null,
      },
      {
        surface: 'Pemantauan luar biasa',
        reads: 'Sejarah anda sendiri, supaya "biasa" bermaksud biasa bagi perniagaan anda',
        writes: 'Menimbulkan item bertanda berserta rekod yang mencetuskannya',
      },
      {
        surface: 'Penghalaan pertanyaan',
        reads: 'Pelanggan sedia ada dan kerja terbuka, untuk meletakkan apa yang baru masuk',
        writes: 'Memfailkan mesej pada rekod yang betul dan menugaskannya',
      },
      {
        surface: 'Draf balasan',
        reads: 'Pesanan atau kerja yang mesej itu berkenaan',
        writes: 'Meninggalkan draf untuk dihantar oleh manusia. Ia tidak menghantar sendiri.',
      },
    ],
    stages: [
      {
        when: 'Minggu 0',
        title: 'Pilih kerjanya',
        body: 'Setengah hari mencari kerja berulang yang betul-betul berbaloi diautomasikan, dan menyebut dengan jelas bahagian mana yang tidak. Kami lebih rela potong dua daripada empat idea anda sekarang daripada menghantar empat yang sederhana.',
        owner: 'Anda + kami, di lokasi',
      },
      {
        when: 'Minggu 1',
        title: 'Sambung ke data anda',
        body: 'Model disambung ke jadual anda di bawah kebenaran sedia ada, dan set penilaian dibina daripada dokumen sebenar dan soalan sebenar anda, termasuk yang menyusahkan.',
        owner: 'Kami, atas data anda',
      },
      {
        when: 'Minggu 2–3',
        title: 'Ukur',
        body: 'Kami jalankan terhadap kes yang jawapannya sudah diketahui dan tunjukkan skornya, termasuk di mana ia gagal. Ambang datang daripada angka itu, bukan daripada sangkaan baik, dan apa sahaja di bawahnya dihalakan kepada manusia.',
        owner: 'Kami, disemak bersama anda',
      },
      {
        when: 'Minggu 4',
        title: 'Hidup, dengan manusia dalam gelung',
        body: 'Ia hidup dengan menyemak, bukan mengomit. Setelah sebulan keluarannya disemak dan bertahan, kami luaskan apa yang boleh dibuatnya sendiri, satu langkah pada satu masa.',
        owner: 'Pasukan anda, sokongan kami',
      },
    ],
    limits: [
      'AI di atas spreadsheet. Tanpa database di bawahnya, model mewarisi setiap rekod berulang dan setiap eksport lapuk, dan jawapan salah yang yakin lebih buruk daripada tiada jawapan. Database dahulu.',
      'Ramalan atas beberapa ratus baris. Ramalan perlukan sejarah, dan kalau anda tiada, kami akan cakap dan bukan menjualnya.',
      'Apa-apa yang menulis ke rekod anda tanpa penyeliaan pada hari pertama. Ambang keyakinan dan langkah manusia bukan fasa yang kami buang diam-diam kemudian.',
      'Bot yang menjawab pelanggan anda tanpa semakan. Kami bina draf dan penghalaan; manusia tetap menekan hantar.',
      'Melatih apa-apa atas data anda untuk pihak lain, atau memindahkan rekod anda ke tempat yang anda belum luluskan secara bertulis.',
      'Menggantikan pasukan anda. Kalau jawapan jujurnya kerja itu perlukan manusia, itulah jawapan yang anda dapat pada panggilan pertama.',
    ],
    faqs: [
      {
        q: 'Perlukah kami guna database anda dahulu?',
        a: 'Pada praktiknya ya. Setiap bahagian berguna di sini berasaskan rekod berstruktur: tanpanya model hanya meneka atas eksport, dan ia akan meneka dengan lancar. Kalau anda sudah hidup atas Dashboard & Database, kami boleh mula serta-merta. Kalau belum, projek itu dahulu, dan kami akan cakap begitu dan bukan mengambil kerja ini.',
      },
      {
        q: 'Bagaimana kami tahu jawapannya betul?',
        a: 'Dua cara. Setiap jawapan menunjukkan rekod asalnya, jadi ia boleh disemak dengan satu klik, bukan sekadar dipercayai. Dan sebelum apa-apa hidup, kami beri markah terhadap kes yang anda sudah tahu jawapannya, tunjukkan keputusannya termasuk kegagalannya, dan tetapkan ambang keyakinan daripada angka itu.',
      },
      {
        q: 'Ke mana data kami pergi?',
        a: 'Masuk ke panggilan model untuk soalan itu sahaja, dan tiada tempat lain. Ia tidak melatih apa-apa, kami tidak menyimpan apa-apa selain log yang boleh anda baca, dan pembekal yang memprosesnya dinamakan dalam perjanjian, bukan dibiarkan kabur. Kalau sesuatu beban kerja mesti kekal dalam negara atau atas perkakasan anda sendiri, sebut semasa lawatan dan kami akan skop begitu atau beritahu ia tidak ekonomik.',
      },
      {
        q: 'Apa jadi bila ia silap?',
        a: 'Untuk apa-apa yang menulis, keyakinan rendah tidak pernah sampai ke rekod anda: ia tiba sebagai draf dengan medan tidak pasti ditanda. Untuk jawapan, petikan itulah jaring keselamatannya, dan jawapan salah dimasukkan semula ke dalam set penilaian supaya kesilapan jenis sama ditangkap kali berikutnya.',
      },
      {
        q: 'Ini cuma chatbot atas laman web kami?',
        a: 'Bukan. Pembantu laman web ialah benda lain yang jauh lebih kecil. Ini automasi kerja dalaman: membaca dokumen jadi rekod, merangka laporan yang seseorang himpun dengan tangan, memantau perkara luar biasa, menghalakan apa yang masuk. Ia diukur dengan jam yang pulang, bukan bilangan perbualan.',
      },
      {
        q: 'Berapa kosnya?',
        a: 'Satu yuran projek tetap bagi setiap kerja, disebut harga selepas setengah hari memilih kerjanya, tambah penggunaan model pada kos dengan angka bulanan ditunjukkan kepada anda. Tiada lesen AI setiap pengguna dan tiada peratusan daripada apa yang ia jimatkan.',
      },
      {
        q: 'Bagaimana kalau model yang kami guna bukan lagi yang terbaik?',
        a: 'Prom, set penilaian dan lapisan sambungan data itu milik anda; model hanyalah pembekal. Kami kekalkan set penilaian yang sama dan tukar model bila ada yang lebih baik, dan itu perubahan konfigurasi, bukan pembinaan semula.',
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Industries                                                                 */
/* -------------------------------------------------------------------------- */

const msIndustries = [
  {
    name: 'Kedai gunting & salun',
    short: 'Kedai gunting',
    product: 'Dashboard salun',
    headline: 'Kerusi, waktu dan pelanggan tetap, atas satu skrin dan bukan tiga buku nota.',
    summary:
      'Kedai gunting berjalan atas siapa yang ada di kerusi, siapa yang patut datang balik, dan stylist mana yang benar-benar berbaloi dengan stesennya. Kebanyakan itu tinggal dalam buku janji temu, kumpulan WhatsApp dan ingatan seseorang. Kami masukkan ke dalam satu database dan susun skrinnya mengikut cara lantai kedai berfikir.',
    pains: [
      'Buku janji temu, mesin daftar dan stok pewarna ialah tiga rekod berasingan yang tidak pernah sepadan',
      'Tiada siapa boleh cakap stylist mana yang kurang tempahan pada hari Selasa sehingga bulan itu tamat',
      'Pelanggan tetap berhenti datang diam-diam dan tiada senarai siapa mereka',
      'Penggunaan produk berbanding jualan runcit hanya diteka, jadi susut nilai tidak pernah timbul',
      'Pengiraan komisen mengambil satu petang dan tetap dipertikaikan',
    ],
    panels: [
      {
        title: 'Penggunaan kerusi mengikut jam',
        body: 'Kerusi mana dan jam mana yang betul-betul menampung kosnya, supaya waktu buka ditetapkan daripada lengkung itu dan bukan daripada tabiat.',
      },
      {
        title: 'Pelanggan tetap yang sudah lama tak datang',
        body: 'Satu senarai nama, bukan peratusan churn. Semua orang yang dulu datang setiap lima minggu dan sudah dua belas minggu tidak muncul.',
      },
      {
        title: 'Campuran servis dan purata bil',
        body: 'Mengikut stylist dan mengikut minggu, supaya perbualan latihan bermula daripada angka dan bukan daripada tanggapan.',
      },
      {
        title: 'Pewarna dan runcit dalam simpanan',
        body: 'Apa yang ada di belakang kaunter, apa yang terpakai berbanding apa yang terjual, dan apa yang perlu dipesan sebelum hari Sabtu.',
      },
    ],
    faqs: [
      {
        q: 'Adakah ini menggantikan aplikasi tempahan kami?',
        a: 'Ia boleh berjalan bersebelahan. Kami import daripada kebanyakan alat tempahan, dan kalau anda lebih suka menempah dalam BIYY kami bina itu sebagai sebahagian database. Apa yang kami tidak akan buat ialah membiarkan buku janji temu dalam satu sistem dan duit dalam satu lagi.',
      },
      {
        q: 'Kami ada dua kedai. Pemilik nampak kedua-duanya?',
        a: 'Ya. Peranannya standard: setiap pengurus nampak kedainya, pemilik nampak kumpulan dengan kemudahan turun ke mana-mana satu.',
      },
      {
        q: 'Berapa lama pelaksanaan untuk salun?',
        a: 'Dua minggu adalah biasa, termasuk mengimport senarai pelanggan dan dua tahun sejarah janji temu supaya senarai pelanggan tetap yang hilang berguna pada hari pertama.',
      },
    ],
  },
  {
    name: 'Klinik pergigian & perubatan',
    short: 'Klinik',
    product: 'Dashboard klinik',
    headline: 'Penggunaan, panggil semula dan penghutang, tanpa spreadsheet hari Jumaat.',
    summary:
      'Klinik sebenarnya sudah merekod hampir semua yang diperlukannya. Cuma ia bertaburan antara sistem klinik, satu fail Excel untuk tuntutan, senarai panggil semula bercetak dan nota kaunter depan sendiri. Kami masukkan itu ke dalam satu database dan bina skrin yang boleh digunakan pengurus klinik untuk menjalankan minggu itu.',
    pains: [
      'Penggunaan kerusi dan bilik hanya diketahui selepas bulan ditutup',
      'Senarai panggil semula tinggal dalam cetakan dan tiada siapa mengejar orang yang tidak menjawab',
      'Tuntutan tertunggak dan baki pesakit dijejaki dalam buku kerja berasingan',
      'Produktiviti pengamal dipertikaikan dan bukan diukur',
      'Penggunaan bahan guna habis bagi setiap prosedur tidak pernah dipadankan dengan apa yang dipesan',
    ],
    panels: [
      {
        title: 'Penggunaan kerusi dan pengamal',
        body: 'Mengikut jam dan mengikut hari, supaya jurang yang paling mahal kelihatan semasa masih ada masa untuk mengisinya.',
      },
      {
        title: 'Panggil semula yang tertunggak dan tidak dijawab',
        body: 'Siapa yang patut datang, siapa yang sudah dihubungi, dan siapa yang senyap selepas dua percubaan. Satu senarai kerja, bukan laporan.',
      },
      {
        title: 'Penghutang dan umur tuntutan',
        body: 'Apa yang tertunggak, daripada siapa, dan berapa lama, di tempat yang sama dengan janji temu yang menjanakannya.',
      },
      {
        title: 'Bahan guna habis berbanding prosedur',
        body: 'Apa yang sepatutnya digunakan setiap prosedur berbanding apa yang keluar dari stor, supaya perbezaannya timbul dalam minggu ia bermula.',
      },
    ],
    faqs: [
      {
        q: 'Adakah ini menyentuh rekod klinikal?',
        a: 'Tidak. Kami bina lapisan operasi: penjadualan, penggunaan, panggil semula, penghutang dan bahan guna habis. Nota klinikal kekal dalam sistem klinik anda, dan kami integrasi pada sempadan operasi dan bukan menduplikasi rekod pesakit.',
      },
      {
        q: 'Bagaimana dengan data pesakit dan PDPA?',
        a: 'Database itu milik anda, peranan dikuatkuasakan setiap rekod, dan setiap capaian dilog. Kami bekerja mengikut terma pemprosesan data yang dilampirkan pada perjanjian perkhidmatan anda, dan kami akan skop apa yang betul-betul perlu dan bukan mengimport semuanya secara lalai.',
      },
      {
        q: 'Boleh ia membaca daripada perisian pengurusan klinik sedia ada?',
        a: 'Biasanya boleh. Kebanyakannya mengeksport mengikut jadual dan beberapa ada API. Kami periksa semasa lawatan dan beritahu sebelum memberi sebut harga sama ada ia suapan langsung atau fail malam.',
      },
    ],
  },
  {
    name: 'Restoran & kafe',
    short: 'Restoran',
    product: 'Dashboard dapur',
    headline: 'Kos makanan, pembaziran dan tenaga kerja atas skrin yang sama dengan jumlah tetamu yang menyebabkannya.',
    summary:
      'Restoran mengukur jualan dan meneka yang selebihnya. POS tahu apa yang terjual, fail pembekal tahu apa yang dibeli, dan jurang antara keduanya itulah tempat margin hilang. Kami modelkan resipi, belian dan jumlah tetamu dalam satu database supaya jurang itu jadi angka, bukan perasaan.',
    pains: [
      'Kos makanan teori dan kos makanan sebenar tidak pernah dibandingkan, sebab tiada siapa ada masa buat dengan tangan',
      'Pembaziran dan makanan staf ditulis atas papan klip dan ditaip bila ada orang teringat',
      'Tenaga kerja sebagai bahagian daripada jualan diketahui bulanan, dan itu terlalu lewat untuk mengubah jadual syif',
      'Kenaikan harga pembekal berlalu tanpa disedari sehingga akauntan menandanya pada hujung bulan',
      'Kos resipi tinggal dalam buku kerja yang terakhir dikemas kini dua menu lalu',
    ],
    panels: [
      {
        title: 'Kos makanan teori berbanding sebenar',
        body: 'Apa yang resipi kata sepatutnya digunakan berbanding apa yang betul-betul keluar dari stor, mengikut minggu dan mengikut bahagian.',
      },
      {
        title: 'Tenaga kerja berbanding tetamu mengikut waktu',
        body: 'Jadual syif dibentangkan atas permintaan sebenar, supaya makan tengah hari Selasa yang lebih staf dan servis Jumaat yang kurang staf kedua-duanya kelihatan.',
      },
      {
        title: 'Pergerakan harga pembekal',
        body: 'Barisan mana yang bergerak, sebanyak mana, sejak bila. Isyarat untuk berunding semula atau ubah resipi sebelum bulan ditutup.',
      },
      {
        title: 'Pembaziran dan layanan percuma',
        body: 'Direkod di kaunter hidangan atas telefon, dijumlahkan mengikut sebab dan bahagian, bukan dicampur daripada papan klip pada hujung bulan.',
      },
    ],
    faqs: [
      {
        q: 'Adakah anda menggantikan POS?',
        a: 'Tidak. POS kekal. Kami baca jualan daripadanya dan letakkannya bersebelahan pembelian, resipi, pembaziran dan tenaga kerja, iaitu tempat soalan margin sebenarnya berada.',
      },
      {
        q: 'Kami ada beberapa cawangan dengan menu berbeza. Boleh?',
        a: 'Boleh. Resipi dan harga adalah mengikut cawangan di tempat yang perlu dan dikongsi di tempat yang tidak perlu, dan itulah jenis perkara yang spreadsheet uruskan dengan teruk dan database uruskan sebagai perkara biasa.',
      },
      {
        q: 'Berapa banyak kemasukan data yang dapur kena buat?',
        a: 'Penghantaran dan pembaziran, atas telefon, pada masa ia berlaku. Selebihnya dibaca daripada sistem yang anda sudah guna. Kalau kemasukan itu mengambil masa lebih lama daripada papan klip, kami sudah bina salah.',
      },
    ],
  },
  {
    name: 'Rangkaian peruncitan',
    short: 'Peruncitan',
    product: 'Dashboard peruncitan',
    headline: 'Setiap cawangan atas satu skrin, dan satu versi senarai harga.',
    summary:
      'Peruncitan berbilang cawangan ialah tempat spreadsheet gagal paling awal: setiap cawangan diam-diam menyimpan salinannya sendiri, dan menjelang suku kedua tiada dua yang sepadan. Satu database, peranan mengikut cawangan, dan dashboard yang menjawab soalan yang kumpulan itu betul-betul tanya pada hari Isnin.',
    pains: [
      'Sebelas versi senarai harga yang sama, satu bagi setiap cawangan, masing-masing tersasar sedikit',
      'Prestasi kumpulan dihimpun dengan tangan daripada eksport cawangan setiap minggu',
      'Barisan yang bergerak perlahan hanya dikesan bila ada orang berjalan di lantai',
      'Promosi dinilai dengan perasaan, sebab perbandingan sebelum dan selepas perlu dibina semula setiap kali',
      'Pengurus cawangan nampak semuanya atau tiada apa-apa, sebab kebenaran tidak pernah dimodelkan',
    ],
    panels: [
      {
        title: 'Kumpulan dan cawangan atas satu paksi',
        body: 'Keseluruhan rangkaian, kemudian mana-mana satu cawangan, tanpa membuka fail lain. Kemudahan turun itulah intinya.',
      },
      {
        title: 'Barisan yang berhenti bergerak',
        body: 'Disusun mengikut modal yang tersadai, bagi setiap cawangan, supaya perbualan penurunan harga bermula dengan senarai yang betul.',
      },
      {
        title: 'Satu senarai harga, dengan sejarahnya',
        body: 'Dari mana satu harga datang, siapa yang mengubahnya dan bila. Cawangan membacanya; mereka tidak menyelenggara versi sendiri.',
      },
      {
        title: 'Promosi sebelum dan selepas',
        body: 'Tetingkap yang sama tahun lalu dan minggu-minggu sebelum serta selepasnya, dibina sekali dan bukan dibina semula setiap kempen.',
      },
    ],
    faqs: [
      {
        q: 'Perlukah kami tinggalkan POS kami?',
        a: 'Tidak. Kami baca daripadanya. Intinya ialah lapisan pelaporan berhenti jadi longgokan eksport dan bertukar jadi satu database yang setiap cawangan tulis ke dalamnya.',
      },
      {
        q: 'Boleh pengurus cawangan nampak cawangan lain?',
        a: 'Hanya kalau anda kata boleh. Peranan adalah mengikut cawangan secara lalai, dan pemilik nampak kumpulan. Itu konfigurasi, bukan pembinaan semula.',
      },
      {
        q: 'Kami buka dua cawangan lagi tahun ini. Apa yang berubah?',
        a: 'Cawangan baharu ialah satu baris, bukan satu projek. Harga adalah bulanan tetap setiap cawangan, jadi bilnya bergerak dan tiada apa lagi yang berubah.',
      },
    ],
  },
  {
    name: 'Borong & pengedaran',
    short: 'Pengedaran',
    product: 'Dashboard pengedaran',
    headline: 'Umur stok, lead time dan margin selepas kos penghantaran, akhirnya di satu tempat.',
    summary:
      'Pengedaran ialah industri di mana spreadsheetnya paling besar dan akibatnya paling pantas. Stok yang menua, lead time pembekal dan margin mendarat sebenar semuanya wujud dalam rekod anda; cuma ia berada dalam empat fail yang terakhir dipadankan pada bulan Mac.',
    pains: [
      'Kos mendarat dikira setiap penghantaran dalam helaian sekali guna dan tidak pernah disuap balik ke dalam margin',
      'Stok yang menua disemak setiap suku tahun, dan itu satu suku terlambat',
      'Lead time pembekal diingat dan bukan diukur, jadi titik pesanan semula hanyalah tekaan',
      'Keuntungan pada peringkat pelanggan selepas penghantaran dan pemulangan tidak diketahui',
      'Senarai induk item ada rekod berulang yang tiada siapa berani gabungkan',
    ],
    panels: [
      {
        title: 'Umur stok mengikut nilai',
        body: 'Apa yang lama, berapa kosnya, dan berapa banyak tunai tersadai di dalamnya. Disusun supaya perbualan pertama ialah yang mahal.',
      },
      {
        title: 'Lead time pembekal, diukur',
        body: 'Yang dijanjikan berbanding yang sebenar, bagi setiap pembekal dan setiap barisan, supaya titik pesanan semula datang daripada bukti dan bukan cerita mulut.',
      },
      {
        title: 'Margin selepas kos mendarat',
        body: 'Penghantaran, duti dan pengendalian dibahagikan dengan betul, setiap barisan dan setiap pelanggan, bukan dianggarkan sekali setahun.',
      },
      {
        title: 'Keuntungan pelanggan',
        body: 'Hasil tolak pemulangan, penghantaran dan terma pembayaran. Sebahagian akaun terbesar anda bukan akaun terbaik anda.',
      },
    ],
    faqs: [
      {
        q: 'Senarai induk item kami bersepah. Ada masalah?',
        a: 'Itulah kerjanya, dan kami skop dengan jujur pada hari 0. Rekod berulang dan penamaan tidak konsisten ialah sebab paling biasa kami memberi sebut harga tiga hingga empat minggu dan bukan dua. Kami lebih rela cakap sebelum invois.',
      },
      {
        q: 'Boleh ia mengurus stok konsainan?',
        a: 'Boleh, sebagai jenis lokasi tersendiri dengan umur stoknya sendiri. Apa yang perisian tidak boleh buat ialah memaksa rakan kongsi melapor dengan jujur dan tepat masa; ia cuma boleh menjadikan jurangnya kelihatan.',
      },
      {
        q: 'Adakah ia buat pesanan belian?',
        a: 'Pembelian tinggal dalam database bersama yang lain, jadi cadangan pesanan semula membawa bukti lead time di belakangnya. Sama ada anda meluluskan dalam BIYY atau dalam pakej perakaunan anda, itu terpulang kepada anda.',
      },
    ],
  },
  {
    name: 'Pengendali e-dagang',
    short: 'E-dagang',
    product: 'Dashboard perdagangan',
    headline: 'Pasar dalam talian, kedai sendiri dan gudang membaca daripada jadual yang sama.',
    summary:
      'Menjual merentas kedai sendiri dan dua pasar dalam talian bermakna tiga dashboard, tiga struktur yuran dan seorang yang sangat penat mengeksport CSV pada hari Ahad. Kami satukan saluran itu ke dalam satu database supaya sumbangan setiap pesanan jadi satu lajur, bukan satu projek.',
    pains: [
      'Setiap saluran ada laporannya sendiri, model yuran sendiri dan tafsiran sendiri tentang apa itu jualan',
      'Sumbangan sebenar setiap pesanan, selepas yuran, penghantaran dan pemulangan, tidak pernah dikira',
      'Pemulangan diuruskan secara operasi tetapi tidak pernah disuap balik ke dalam margin peringkat produk',
      'Perbelanjaan iklan berada dalam tab lain dan dibandingkan dengan hasil, bukan dengan sumbangan',
      'Stok dikomit pada dua saluran serentak sebab kiraannya adalah salinan',
    ],
    panels: [
      {
        title: 'Sumbangan setiap pesanan',
        body: 'Selepas yuran saluran, penghantaran, pembungkusan dan kadar pemulangan bagi barisan itu. Angka yang menentukan sama ada patut terus menjualnya.',
      },
      {
        title: 'Saluran bersebelahan',
        body: 'Dinormalkan supaya pesanan pasar dalam talian dan pesanan kedai sendiri benar-benar boleh dibandingkan, termasuk yurannya.',
      },
      {
        title: 'Pemulangan mengikut sebab dan barisan',
        body: 'Produk mana yang dipulangkan, kenapa, dan apa kesannya pada marginnya setelah pengendalian dikira.',
      },
      {
        title: 'Satu angka boleh dijual',
        body: 'Satu kiraan komit dan tersedia yang dibaca setiap saluran, bukan tiga salinan yang hanyut berasingan.',
      },
    ],
    faqs: [
      {
        q: 'Pasar dalam talian mana yang anda boleh baca?',
        a: 'Yang utama di rantau ini mengeksport mengikut jadual dan beberapa ada API. Kami sahkan yang mana antara milik anda ialah suapan dan yang mana ialah fail semasa lawatan, sebelum memberi sebut harga.',
      },
      {
        q: 'Adakah anda menggantikan 3PL atau alat penghantaran kami?',
        a: 'Tidak. Kami baca daripadanya. Nilainya ialah mempunyai yuran, penghantaran dan pemulangan dalam jadual yang sama dengan pesanan, dan itu satu-satunya cara sumbangan keluar dengan betul.',
      },
      {
        q: 'Boleh ia tolak stok balik ke saluran?',
        a: 'Untuk platform yang ada API tulis, boleh. Di mana platform hanya membenarkan benaman atau fail, kami cakap sebelum anda beli, bukan selepas.',
      },
    ],
  },
  {
    name: 'Bengkel & workshop',
    short: 'Bengkel',
    product: 'Dashboard bengkel',
    headline: 'Kerja, bay dan alat ganti, dijejak dari lantai dan bukan dari papan klip.',
    summary:
      'Bengkel tahu apa yang masuk dan apa yang keluar. Apa yang jarang diketahuinya ialah berapa lama setiap kerja betul-betul mengambil masa, sebut harga mana yang bertukar jadi kerja, dan sama ada markup alat ganti bertahan selepas bertembung dengan realiti. Ketiga-tiganya boleh diselamatkan daripada apa yang lantai itu sudah pun catat.',
    pains: [
      'Kad kerja adalah kertas, jadi jam buruh dianggarkan semasa invois dan bukan direkod',
      'Sebut harga yang tidak menjadi kerja tidak dijejak, jadi tiada siapa tahu kadar menang',
      'Alat ganti yang dikeluarkan untuk satu kerja dan yang dibeli untuk kerja itu dipadankan dengan ingatan',
      'Penggunaan bay tidak kelihatan sehingga seorang pelanggan terpaksa ditolak',
      'Kos waranti dan kerja ulang diserap ke dalam buruh am dan hilang',
    ],
    panels: [
      {
        title: 'Kerja dalam proses mengikut bay',
        body: 'Apa yang ada di setiap bay, sudah berapa lama, dan menunggu apa. Perjumpaan pagi, atas satu skrin.',
      },
      {
        title: 'Sebut harga berbanding sebenar',
        body: 'Jam dan alat ganti yang dianggarkan berbanding apa yang kerja itu betul-betul makan, supaya sebut harga seterusnya dihargakan atas bukti.',
      },
      {
        title: 'Penukaran sebut harga',
        body: 'Apa yang disebut harga, apa yang menang, apa yang senyap, dan siapa yang susul. Biasanya duit paling cepat dalam bangunan itu.',
      },
      {
        title: 'Kerja ulang dan waranti',
        body: 'Diasingkan daripada buruh am, mengikut juruteknik dan jenis kerja, sebab ia hanya boleh dibetulkan setelah kelihatan.',
      },
    ],
    faqs: [
      {
        q: 'Adakah juruteknik akan benar-benar guna?',
        a: 'Mereka masukkan mula kerja, tamat kerja dan alat ganti yang dipakai, atas telefon, dengan sebelah tangan. Kalau ia mengambil masa lebih lama daripada kad kerja kertas, kami sudah bina salah dan kami akan cakap begitu dalam minggu perintis.',
      },
      {
        q: 'Boleh ia keluarkan invois?',
        a: 'Ia menghasilkan kerja yang sudah berharga. Sama ada invois dikeluarkan dalam BIYY atau diserahkan kepada pakej perakaunan anda bergantung pada yang mana anda guna, dan kami sahkan itu semasa lawatan.',
      },
      {
        q: 'Kami buat kontrak armada dan juga kerja runcit. Sesuai?',
        a: 'Sesuai, sebagai jenis pelanggan berasingan dengan kadar dan pelaporan tersendiri. Kerja campuran runcit dan kontrak ialah salah satu kes paling jelas untuk database berbanding spreadsheet.',
      },
    ],
  },
  {
    name: 'Robotik & automasi',
    short: 'Robotik',
    product: 'Dashboard armada',
    headline: 'Masa aktif, jarak servis dan alat ganti untuk armada yang anda hantar, bukan untuk makmal.',
    summary:
      'Syarikat robotik membina telemetri yang sangat baik dan kemudian menjalankan bahagian komersial armada itu atas spreadsheet: unit mana di pelanggan mana, apa yang masih dalam waranti, alat ganti mana yang sudah dikomit, dan barisan model mana yang memakan belanjawan servis. Separuh itu juga berhak mendapat database.',
    pains: [
      'Padanan unit kepada pelanggan tinggal dalam helaian yang hanya seorang jurutera selenggara',
      'Jarak servis dijejak mengikut pelanggan dan bukan mengikut unit, jadi ada unit terlepas',
      'Pendedahan waranti mengikut barisan model tidak diketahui sehingga sekumpulan tuntutan muncul',
      'Alat ganti dipesan secara reaktif sebab penggunaannya tidak pernah dimodelkan',
      'Telemetri menjawab soalan teknikal dengan cantik dan soalan komersial tidak langsung',
    ],
    panels: [
      {
        title: 'Armada mengikut unit dan tapak',
        body: 'Setiap nombor siri, di mana ia berada, firmware apa yang dipakainya, dan siapa yang memiliki kontraknya. Satu rekod bagi setiap unit, dengan sejarahnya.',
      },
      {
        title: 'Servis tertunggak dan lewat',
        body: 'Mengikut unit dan bukan mengikut akaun, supaya pelanggan dengan sembilan mesin tidak menyembunyikan satu yang sudah lewat.',
      },
      {
        title: 'Kegagalan mengikut barisan model',
        body: 'Semakan mana yang gagal, pada umur berapa, sedang buat apa. Input kepada kejuruteraan dan juga peruntukan waranti.',
      },
      {
        title: 'Penggunaan dan liputan alat ganti',
        body: 'Apa yang pangkalan terpasang akan perlukan suku depan berbanding apa yang ada atas rak, bukan pesanan tergesa-gesa setiap kali.',
      },
    ],
    faqs: [
      {
        q: 'Boleh ia menerima telemetri kami?',
        a: 'Ia boleh menerima isyarat ringkas yang penting secara komersial: jam berjalan, kod kerosakan, versi firmware. Kami tidak menggantikan timbunan siri masa anda, dan kami akan cakap begitu dan bukan berpura-pura sebaliknya.',
      },
      {
        q: 'Sebahagian penempatan kami belum menjana hasil. Terlalu awal?',
        a: 'Mungkin, dan kami akan beritahu. Kesnya jadi kuat lebih kurang pada titik lebih daripada seorang perlu tahu di mana satu unit berada dan apa yang terhutang padanya.',
      },
      {
        q: 'Adakah anda uruskan kontrak dan jadual bil?',
        a: 'Kontrak, tempohnya dan apa yang ia layakkan kepada pelanggan adalah rekod seperti yang lain, dan itulah yang menjadikan pendedahan waranti boleh dikira. Pengeluaran invois sendiri kekal dalam pakej perakaunan anda.',
      },
    ],
  },
  {
    name: 'Pasukan data & analitik',
    short: 'Pasukan data',
    product: 'Dashboard operasi',
    headline: 'Untuk penganalisis yang pada masa ini memang dialah databasenya.',
    summary:
      'Sesetengah perniagaan sudah ada orang yang buat ini: seorang yang berkebolehan menahan satu model dengan formula, eksport dan rutin mingguan. Ini versi di mana orang itu berhenti jadi titik kegagalan tunggal dan mula membuat analisis yang menjadi sebab dia diambil bekerja.',
    pains: [
      'Seorang memiliki model itu, dan perniagaan berhenti kalau dia ambil cuti',
      'Separuh minggu bekerja habis menghimpun input dan bukan menjawab soalan',
      'Setiap soalan baharu bermakna fail baharu, dan fail lama tidak pernah ditamatkan',
      'Tiada salasilah data: bila satu angka dipersoalkan, jawapannya ialah pembinaan semula',
      'Tiada apa boleh diuji, jadi satu kesilapan ditemui oleh sesiapa yang perasan di hujung rantaian',
    ],
    panels: [
      {
        title: 'Jadual bermodel, bukan eksport',
        body: 'Hubungannya tinggal dalam skema, jadi satu soalan ialah satu pertanyaan dan bukan pembinaan semula buku kerja bulan lepas.',
      },
      {
        title: 'Salasilah pada setiap angka',
        body: 'Dari mana satu angka datang, apa yang menyuapnya, siapa yang mengubah inputnya dan bila. Pertanyaan dijawab dalam beberapa minit.',
      },
      {
        title: 'Berjadual, bukan rutin',
        body: 'Pakej berulang membina dirinya sendiri. Penganalisis tiba untuk menyemaknya, bukan untuk menghimpunnya.',
      },
      {
        title: 'Eksport yang kekal jadi eksport',
        body: 'Excel dan CSV daripada setiap paparan, untuk kerja sekali guna yang Excel memang bagus, tanpa ia jadi sumber semula.',
      },
    ],
    faqs: [
      {
        q: 'Kami sudah ada Power BI. Apa lagi yang ini tambah?',
        a: 'Sumber yang boleh dipercayai. Alat BI melukis carta atas apa sahaja yang diberi dan mewarisi setiap rekod berulang dan eksport lapuk. Kami bina database di bawahnya, dan anda dialu-alukan terus menghalakan alat sedia ada anda kepadanya.',
      },
      {
        q: 'Boleh penganalisis kami buat pertanyaan terus?',
        a: 'Boleh. Ia database sebenar dengan jadual sebenar, bukan produk pelaporan tertutup. Capaian baca dan skema yang boleh mereka fahami adalah sebahagian daripada serah tugas.',
      },
      {
        q: 'Adakah ini gudang data?',
        a: 'Bukan, dan kami akan cakap terus terang. Ini database operasi dan lapisan pelaporan untuk PKS. Kalau anda betul-betul perlukan gudang dengan saluran penstriman, kami akan beritahu dan namakan orang yang buat kerja itu.',
      },
    ],
  },
  {
    name: 'Pusat tuisyen',
    short: 'Tuisyen',
    product: 'Dashboard tuisyen',
    headline: 'Pendaftaran, kehadiran dan yuran, kelas demi kelas, penggal demi penggal.',
    summary:
      'Seluruh ekonomi sebuah pusat terletak pada tiga angka setiap kelas: berapa yang mendaftar, berapa yang masih datang, dan berapa yang sudah bayar. Itu tinggal dalam buku daftar, kumpulan WhatsApp dan buku kerja yuran. Satu database menjadikan penggal itu kelihatan semasa ia masih berjalan.',
    pains: [
      'Kehadiran yang merosot hanya disedari pada hujung penggal, bila pendaftaran sudah pun hilang',
      'Tunggakan yuran dikejar daripada buku kerja yang jadi tanggungjawab seorang sahaja',
      'Keuntungan peringkat kelas, selepas kos tutor dan bilik, tidak pernah dikira',
      'Pertembungan tutor dan bilik diselesaikan dengan ingatan merentas cawangan',
      'Pengekalan antara penggal ialah perasaan dan bukan senarai nama',
    ],
    panels: [
      {
        title: 'Kehadiran merosot mengikut kelas',
        body: 'Yang mendaftar berbanding yang betul-betul hadir, minggu demi minggu, supaya kelas yang diam-diam mengosong ditangkap pada minggu keempat.',
      },
      {
        title: 'Yuran tertunggak dan lewat',
        body: 'Mengikut pelajar dan mengikut kelas, dengan apa yang sudah dikejar dan bila, bukan buku kerja tunggakan berasingan.',
      },
      {
        title: 'Sumbangan kelas',
        body: 'Yuran tolak kos tutor dan bilik, bagi setiap kelas, supaya jadual penggal depan dibina atas bukti.',
      },
      {
        title: 'Pengekalan antara penggal',
        body: 'Siapa yang kembali, siapa yang tidak, dan mereka dalam kelas mana. Satu senarai yang ada nama di dalamnya.',
      },
    ],
    faqs: [
      {
        q: 'Boleh ia uruskan tutor dan bilik yang diperlukan serentak?',
        a: 'Boleh. Satu kelas memegang setiap sumber yang diperlukannya atau ia tidak wujud. Memodelkan itu sebagai kekangan dalam database itulah yang menghentikan kalendar kedua atas papan putih.',
      },
      {
        q: 'Ibu bapa dapat capaian?',
        a: 'Paparan ibu bapa untuk kehadiran dan yuran anak mereka sahaja adalah pilihan standard, dibina atas kebenaran yang sama dengan semua yang lain.',
      },
      {
        q: 'Kami ada tiga cawangan dengan tutor berkongsi. Boleh?',
        a: 'Itu salah satu kes yang spreadsheet uruskan paling teruk dan database uruskan sebagai perkara biasa, sebab seorang tutor ialah satu rekod yang dikongsi merentas cawangan dan bukan satu nama yang ditaip ke dalam tiga fail.',
      },
    ],
  },
  {
    name: 'Agensi hartanah',
    short: 'Hartanah',
    product: 'Dashboard agensi',
    headline: 'Umur penyenaraian, penukaran lawatan dan komisen, tanpa pemacu kongsi.',
    summary:
      'Agensi berjalan atas saluran jualan yang tinggal dalam telefon setiap ejen. Pejabat nampak transaksi yang tutup dan sangat sedikit tentang apa yang membawa ke situ. Satu database menjadikan penyenaraian, lawatan dan tawaran sebagai saluran yang boleh benar-benar diurus oleh pengarah.',
    pains: [
      'Umur penyenaraian hanya disedari bila tuan rumah menelefon untuk merungut',
      'Penukaran lawatan kepada tawaran bagi setiap ejen tidak diketahui, jadi bimbingan hanyalah tekaan',
      'Pembahagian komisen dikira dalam buku kerja dan dipertikaikan semasa pembayaran',
      'Petunjuk daripada laman web dan portal mendarat dalam peti masuk berbeza dan hilang',
      'Bila seorang ejen berhenti, saluran jualannya pergi bersama telefonnya',
    ],
    panels: [
      {
        title: 'Penyenaraian mengikut umur dan julat harga',
        body: 'Apa yang sudah terlalu lama, pada harga berapa, dengan siapa. Isyarat untuk perbualan penurunan harga.',
      },
      {
        title: 'Lawatan kepada tawaran, mengikut ejen',
        body: 'Aktiviti dan penukaran bersebelahan, supaya ejen yang sibuk dan ejen yang berkesan berhenti jadi angka yang sama.',
      },
      {
        title: 'Saluran jualan milik agensi',
        body: 'Petunjuk, lawatan dan tawaran sebagai rekod dengan pemilik dan sejarah, bukan sebagai mesej dalam telefon seseorang.',
      },
      {
        title: 'Komisen, dikira',
        body: 'Pembahagian dan bahagian rujukan dikira daripada rekod transaksi, supaya pembayaran jadi satu laporan dan bukan satu rundingan.',
      },
    ],
    faqs: [
      {
        q: 'Adakah ini CRM?',
        a: 'Ia meliputi saluran operasi yang agensi betul-betul urus: penyenaraian, lawatan, tawaran dan komisen. Kalau anda mahu automasi pemasaran di atasnya, kami integrasi dan bukan membinanya semula.',
      },
      {
        q: 'Boleh ejen kemas kini dari telefon semasa lawatan?',
        a: 'Itulah andaian rekaannya. Kalau mengemas kini keputusan satu lawatan mengambil masa lebih lama daripada satu mesej WhatsApp, ia tidak akan dibuat dan datanya mati.',
      },
      {
        q: 'Apa jadi bila seorang ejen berhenti?',
        a: 'Rekodnya kekal dengan agensi dan ditugaskan semula. Itulah sebahagian besar sebab pengarah membeli ini.',
      },
    ],
  },
  {
    name: 'Kumpulan berbilang cawangan',
    short: 'Berbilang cawangan',
    product: 'Dashboard kumpulan',
    headline: 'Satu paparan kumpulan, kebenaran sebenar, dan tiada cawangan menyimpan salinan sendiri.',
    summary:
      'Apa pun bidangnya, masalah berbilang cawangan adalah sama: setiap lokasi menyimpan versi kebenaran sendiri, dan ibu pejabat menghimpun gambaran kumpulan dengan tangan setiap minggu. Ini susunan untuk orang yang terpaksa menjawab bagi kesemuanya.',
    pains: [
      'Pakej kumpulan mingguan dihimpun secara manual daripada penghantaran cawangan',
      'Cawangan menghantar pada masa berbeza dan dalam format berbeza',
      'Cawangan yang mula hanyut dikesan sebulan lewat, semasa mesyuarat semakan',
      'Kebenaran adalah semua atau tiada, jadi sama ada semua orang nampak semuanya atau ibu pejabat jadi halangan',
      'Membandingkan cawangan dengan adil mustahil sebab setiap satu merekod sesuatu dengan cara berbeza sedikit',
    ],
    panels: [
      {
        title: 'Liga cawangan, setara dengan setara',
        body: 'Takrifan yang sama di mana-mana, supaya perbandingan itu benar-benar perbandingan dan bukan pertengkaran tentang kaedah.',
      },
      {
        title: 'Kumpulan turun ke satu cawangan',
        body: 'Satu laluan turun daripada angka kumpulan kepada rekod yang menghasilkannya, tanpa membuka fail lain.',
      },
      {
        title: 'Perkara luar biasa, bukan penghantaran',
        body: 'Apa yang bergerak di luar julat biasanya minggu ini, mengikut cawangan, supaya semakan bermula dengan empat yang perlu perhatian.',
      },
      {
        title: 'Kebenaran yang sepadan dengan carta organisasi',
        body: 'Peranan cawangan, wilayah dan kumpulan, dikuatkuasakan setiap rekod dan dilog, supaya capaian berhenti jadi kata laluan spreadsheet.',
      },
    ],
    faqs: [
      {
        q: 'Cawangan kami dalam bidang berbeza. Boleh satu dashboard?',
        a: 'Lapisan kumpulan dikongsi dan setiap bidang mengekalkan skrin operasinya sendiri. Pembahagian itu ialah keputusan skema yang kami buat pada hari 0, dan itulah tujuan utama lawatan.',
      },
      {
        q: 'Bagaimana harganya merentas banyak cawangan?',
        a: 'Bulanan tetap setiap cawangan, tanpa caj setiap transaksi. Cawangan baharu ialah satu baris pada bil, bukan satu projek.',
      },
      {
        q: 'Boleh ibu pejabat halang cawangan menyunting data kongsi?',
        a: 'Boleh. Rujukan kongsi seperti senarai harga adalah baca sahaja bagi cawangan secara lalai, dan biasanya itulah satu perubahan yang menamatkan masalah sebelas versi.',
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Home page collections                                                      */
/* -------------------------------------------------------------------------- */

export const pillars = zip(enPillars, [
  {
    title: 'Database, bukan fail yang lebih besar',
    body: 'Jadual, hubungan dan kekangan di bawah setiap skrin. Dua orang boleh bekerja serentak, dan kemasukan yang salah ditolak, bukan disimpan diam-diam.',
  },
  {
    title: 'Dibentuk untuk industri anda',
    body: 'Klinik dan pengedar mengukur benda berbeza. Kami bina skrin mengelilingi keputusan mingguan perniagaan anda, bukan mengelilingi demo yang kena sesuai untuk semua orang.',
  },
  {
    title: 'Berjalan atas telefon',
    body: 'Memasukkan rekod di kaunter, di bay atau di kaunter depan. Kalau pasukan anda boleh guna WhatsApp, mereka boleh guna BIYY. Tiada minggu latihan diperlukan.',
  },
  {
    title: 'Harga yang jujur',
    body: 'Bulanan tetap setiap cawangan. Tiada potongan setiap transaksi, tiada yuran pelaksanaan mengejut, tiada ikatan tahunan untuk ditandatangan hari ini.',
  },
  {
    title: 'Data anda kekal milik anda',
    body: 'Eksport penuh bila-bila masa, dalam format yang akauntan anda kenal. Keluar sepatutnya semudah masuk.',
  },
  {
    title: 'Hidup dalam dua minggu',
    body: 'Onboarding berpandu, migrasi keluar daripada spreadsheet yang ada sekarang, dan manusia sebenar atas WhatsApp untuk bulan pertama.',
  },
]);

export const stats = zip(enStats, [
  { suffix: ' mgg', label: 'Masa biasa untuk mula hidup' },
  { suffix: '', label: 'Versi kebenaran, bukan sembilan salinan satu fail' },
  { suffix: ' jam', label: 'Jam pentadbiran dijimatkan setiap minggu' },
  { suffix: '', label: 'Yuran setiap transaksi, yuran keluar atau ikatan tahunan' },
]);

export const comparison = zip(enComparison, [
  {
    option: 'Spreadsheet & WhatsApp',
    cost: 'Percuma, sehingga ia tidak lagi percuma',
    speed: 'Serta-merta',
    verdict: 'Rosak pada pengguna kedua. Tiada jejak audit, tiada angka hidup, dan empat salinan fail yang sama.',
  },
  {
    option: 'Alat BI atas spreadsheet anda',
    cost: 'Satu langganan, tambah masa anda',
    speed: '2–6 minggu',
    verdict: 'Carta lebih cantik atas sumber yang sama rosaknya. Ia mewarisi setiap rekod berulang dan setiap eksport lapuk.',
  },
  {
    option: 'Suite ERP penuh',
    cost: 'Enam angka + perunding',
    speed: '9–18 bulan',
    verdict: 'Dibina untuk perusahaan besar. Anda bayar untuk 90% modul yang anda tidak akan buka.',
  },
  {
    option: 'BIYY Tech',
    cost: 'Bulanan tetap setiap cawangan',
    speed: '2 minggu',
    verdict: 'Database sebenar dan dashboard yang dibina untuk industri anda, bersaiz PKS.',
  },
]);

export const testimonials = zip(enTestimonials, [
  {
    quote:
      'Laporan Isnin kami dulu mengambil masa seorang pekerja sehingga waktu makan tengah hari, mencantum empat eksport. Sekarang ia sudah ada atas skrin sebelum dia duduk.',
    name: 'Ketua operasi',
    role: 'Kumpulan peruncitan sembilan cawangan',
  },
  {
    quote:
      'Kami ada sebelas versi senarai harga yang sama. Sekarang ada satu, dan cawangan tidak boleh diam-diam simpan versi sendiri.',
    name: 'Pengasas',
    role: 'Pengedar borong',
  },
  {
    quote:
      'Dashboard itu disusun mengikut cara klinik betul-betul berfikir, bukan mengikut template umum. Tiada siapa perlukan latihan untuk menggunakannya.',
    name: 'Pengurus klinik',
    role: 'Klinik pergigian, dua cawangan',
  },
  {
    quote:
      'Spreadsheet itu ada satu penulis dan tiada dokumentasi. Bila dia berhenti kami tersekat. Itu tidak boleh berulang.',
    name: 'Pengarah pusat',
    role: 'Pusat tuisyen',
  },
]);

export const rollout = zip(enRollout, [
  {
    when: 'Hari 0',
    title: 'Lawatan',
    body: 'Tiga puluh minit di lantai atau kaunter depan anda yang sebenar, dengan spreadsheet sebenar anda dibuka. Kami petakan apa yang direkod, oleh siapa, dan ke mana ia pergi selepas itu.',
    owner: 'Anda + kami, di lokasi',
  },
  {
    when: 'Hari 1–4',
    title: 'Skema & migrasi',
    body: 'Kami reka jadual mengikut cara anda betul-betul merekod kerja, kemudian import apa yang ada. Apa sahaja yang kabur kembali kepada anda sebagai keputusan, bukan sebagai tekaan.',
    owner: 'Kami, dengan data anda',
  },
  {
    when: 'Hari 5–10',
    title: 'Pasukan perintis',
    body: 'Satu cawangan atau satu pasukan berjalan hidup selama seminggu atas dashboard sebenar. Mereka rosakkan, kami betulkan, dan susunannya mengeras mengelilingi apa yang mereka betul-betul buka.',
    owner: 'Satu pasukan, rekod sebenar',
  },
  {
    when: 'Hari 11–14',
    title: 'Pelaksanaan & serah tugas',
    body: 'Semua yang lain mula hidup, staf dilatih atas peranti mereka sendiri, dan anda kekal ada talian WhatsApp terus selama sebulan.',
    owner: 'Setiap cawangan, pasukan anda',
  },
]);

export const faqs = zip(enFaqs, [
  {
    q: 'Berapa lama sebenarnya untuk mula hidup?',
    a: 'Dua minggu adalah biasa apabila spreadsheet sumber agak konsisten. Perniagaan yang ada bertahun-tahun ketidakkonsistenan terkumpul mengambil tiga hingga empat. Kami beritahu anda yang mana satu semasa lawatan, sebelum anda bayar apa-apa.',
  },
  {
    q: 'Ini dashboard sahaja, atau ia menggantikan spreadsheet?',
    a: 'Ia menggantikannya. Dashboard ialah separuh yang kelihatan; database di bawahnya ialah bahagian yang penting. Dashboard yang duduk atas fail yang seseorang masih kemas kini dengan tangan akan jadi lapuk dalam dua minggu, jadi kami tidak bina yang begitu.',
  },
  {
    q: 'Apa jadi pada data sedia ada saya?',
    a: 'Kami pindahkan. Setiap helaian, tab dan lajur yang anda betul-betul guna. Rekod berulang, penamaan tidak konsisten dan lajur yang bertukar maksud di pertengahan akan ditanda untuk anda putuskan, bukan diteka secara senyap.',
  },
  {
    q: 'Boleh kami terus guna Excel?',
    a: 'Boleh, untuk analisis sekali sekala, dan setiap paparan boleh dieksport ke Excel atau CSV dengan satu klik. Excel berhenti jadi tempat data tinggal dan bertukar jadi tempat seseorang sekali sekala ambil salinan.',
  },
  {
    q: 'Boleh ia bercakap dengan sistem perakaunan saya?',
    a: 'Boleh. Kami eksport dalam format yang diterima pakej perakaunan PKS standard, dan kami ada integrasi terus dalam pelan untuk sistem Malaysia dan Singapura yang biasa. Beritahu kami sistem anda semasa lawatan.',
  },
  {
    q: 'Bagaimana kalau kami membesar melepasi keupayaannya?',
    a: 'Eksport data penuh, bila-bila masa, tanpa yuran keluar, termasuk skema. Kami lebih rela anda pergi dengan bersih daripada tinggal dengan rasa tidak puas hati, dan itu memaksa kami jujur dalam usaha mendapatkan pembaharuan.',
  },
]);

/* -------------------------------------------------------------------------- */
/*  Editorial                                                                  */
/* -------------------------------------------------------------------------- */

export const authors = {
  ianChin: {
    ...enAuthors.ianChin,
    role: 'Pengasas Bersama BIYY Tech',
    credential:
      'Mengasaskan bersama BIYY Tech dan masih menjalankan pelaksanaan di lokasi. Sudah duduk bersama spreadsheet pemilik sendiri di kumpulan peruncitan, borong dan klinik di Malaysia dan Singapura sejak 2021.',
  },
  yeWen: {
    ...enAuthors.yeWen,
    role: 'Pengasas Bersama BIYY Tech',
    credential:
      'Mengasaskan bersama BIYY Tech selepas sedekad membina perisian operasi, termasuk platform data di sebalik rangkaian barangan runcit 40 cawangan.',
  },
  yongHan: {
    ...enAuthors.yongHan,
    role: 'Pengasas Bersama BIYY Tech',
    credential:
      'Mengasaskan bersama BIYY Tech dan memegang kerja reka bentuk skema serta migrasi. Menghabiskan kebanyakan minggu memadankan spreadsheet yang sudah berhenti bersetuju antara satu sama lain.',
  },
};

export const editorialPolicy = {
  ...enEditorial,
  summary:
    'Setiap angka di laman ini sama ada datang daripada data terkumpul tanpa nama merentas pelaksanaan BIYY Tech, atau ditanda dengan jelas sebagai anggaran. Setiap artikel menamakan penulisnya, membawa tarikh semakan, dan menyatakan sampel di sebalik sebarang dakwaan.',
};

/** Maps an English author object onto its translated counterpart. */
const authorKey = (a) => Object.keys(enAuthors).find((k) => enAuthors[k] === a);
const localAuthor = (a) => (a ? (authors[authorKey(a)] ?? a) : a);

/**
 * Posts keep their English body on purpose — see the note at the top of this
 * file. The author and reviewer blocks are still swapped for the Malay ones so
 * the byline, role and credential under a post read in the page's language even
 * while the prose above them does not.
 */
export const posts = enPosts.map((post) => ({
  ...post,
  author: localAuthor(post.author),
  reviewer: localAuthor(post.reviewer),
}));

export const roles = [];

export const values = zip(enValues, [
  {
    title: 'Hantar terus ke lantai',
    body: 'Setiap orang di sini menghabiskan masa di pejabat belakang pelanggan dan di kaunter depan, membaca spreadsheet yang sebenar. Pendapat yang terbentuk dalam bilik mesyuarat tidak dikira.',
  },
  {
    title: 'Sebut angka yang pahit',
    body: 'Kalau satu pelaksanaan akan ambil empat minggu, kami cakap empat minggu sebelum invois, bukan selepas. Ia merugikan kami beberapa kontrak dan mengekalkan kami boleh diambil bekerja.',
  },
  {
    title: 'Permukaan kecil, kerja dalam',
    body: 'Kami lebih rela satu produk benar-benar bagus daripada enam produk boleh didemokan. Menjaga skop itulah kerjanya.',
  },
  {
    title: 'Pergi dengan bersih',
    body: 'Pelanggan boleh eksport semuanya, termasuk skema, dan beredar. Kekangan itu mengekalkan produk ini jujur, dan ia terpakai juga pada cara kami melayan satu sama lain.',
  },
]);

/* -------------------------------------------------------------------------- */
/*  Merged exports                                                             */
/*                                                                             */
/*  Same shape as site.zh.js: the English entry is the base and the Malay one   */
/*  is spread over it, with nested lists zipped index by index so a missing     */
/*  translation degrades that one row rather than dropping the section.         */
/* -------------------------------------------------------------------------- */

export const products = zip(enProducts, msProducts, (en, ms) => ({
  ...en,
  ...ms,
  features: zip(en.features ?? [], ms.features ?? []),
  metrics: zip(en.metrics ?? [], ms.metrics ?? []),
  ...(en.value ? { value: zip(en.value, ms.value) } : {}),
  ...(en.connections ? { connections: zip(en.connections, ms.connections) } : {}),
  ...(en.platforms ? { platforms: zip(en.platforms, ms.platforms) } : {}),
  ...(en.stages ? { stages: zip(en.stages, ms.stages) } : {}),
  ...(en.faqs ? { faqs: zip(en.faqs, ms.faqs) } : {}),
}));

export const industries = zip(enIndustries, msIndustries, (en, ms) => ({
  ...en,
  ...ms,
  panels: zip(en.panels ?? [], ms.panels ?? []),
  faqs: zip(en.faqs ?? [], ms.faqs ?? []),
}));
