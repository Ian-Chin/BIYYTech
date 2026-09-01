/* -------------------------------------------------------------------------- */
/*  Legal pages, Bahasa Melayu                                                 */
/*                                                                             */
/*  A translation, not a second policy. The English text in legal.js is the     */
/*  operative version; this exists so a Malay reader can understand the same    */
/*  commitments. If one changes, change both in the same commit.                */
/* -------------------------------------------------------------------------- */

import {
  cookies as enCookies,
  privacy as enPrivacy,
  terms as enTerms,
} from '@/lib/legal';

const merge = (en, ms) => ({
  ...en,
  ...ms,
  sections: en.sections.map((s, i) => (ms.sections[i] ? { ...s, ...ms.sections[i] } : s)),
});

export const privacy = merge(enPrivacy, {
  title: 'Privasi',
  headline: 'Apa yang laman ini kumpulkan, dan jawapannya hampir tiada apa-apa.',
  intro:
    'Dasar ini meliputi yiy.tech, iaitu laman web ini. Ia tidak meliputi produk Dashboard & Database, Laman Web atau Data, yang ditadbir oleh perjanjian perkhidmatan yang anda tandatangan semasa onboarding dan oleh terma pemprosesan data yang dilampirkan padanya.',
  sections: [
    {
      heading: 'Apa yang laman ini kumpulkan',
      paragraphs: [
        'Di pihak kami, tiada apa-apa. Laman ini tidak menetapkan cookie, tidak memuatkan analitik, dan tidak membenamkan skrip pihak ketiga. Fon dan imej dihidangkan daripada domain kami sendiri, jadi tiada permintaan pergi kepada syarikat lain semasa anda membaca.',
        'Satu perkara sahaja ditulis ke dalam pelayar anda: pilihan yang anda buat pada sepanduk cookie, disimpan dalam localStorage di bawah yiy.consent. Ia kekal atas peranti anda, tidak pernah dihantar kepada kami, dan wujud semata-mata supaya kami tidak bertanya lagi. Dasar cookie menerangkannya sepenuhnya.',
        'Anda boleh sahkan semua ini sendiri. Buka alat pembangun pelayar anda, lihat panel rangkaian dan panel storan, dan anda tidak akan jumpa penjejak atau cookie.',
      ],
    },
    {
      heading: 'Log pelayan',
      paragraphs: [
        'Apabila satu halaman dihidangkan, penyedia hosting kami menulis log pelayan web standard: alamat IP, cap masa, URL yang diminta dan user agent pelayar. Begitulah cara pelayan web berfungsi, dan kami tidak boleh mematikannya tanpa mematikan laman ini.',
        'Kami tidak menggunakan log itu untuk membina profil tentang anda, dan kami tidak menggabungkannya dengan apa-apa yang lain.',
      ],
    },
    {
      heading: 'Borang tempahan lawatan',
      paragraphs: [
        'Borang di halaman hubungi tidak menghantar apa-apa ke pelayan. Ia menyusun apa yang anda taip menjadi draf e-mel dan membukanya dalam klien e-mel anda sendiri. Tiada apa dihantar sehingga anda menekan hantar dalam aplikasi e-mel anda; kalau anda tutup draf itu, kami tidak akan pernah melihatnya.',
        'Apabila anda benar-benar menghantar, kami menerima e-mel biasa berisi nama anda, nama perniagaan, alamat e-mel, nombor telefon jika diberi, produk yang anda minati, saiz perniagaan, dan apa yang anda tulis dalam kotak mesej. Ia mendarat dalam peti masuk dan CRM kami, disimpan selagi kami berhubung, dan selepas itu selama yang diperlukan untuk rekod kami sendiri.',
        'Kami membalas sekali, daripada seorang manusia. Kami tidak menambah anda ke dalam senarai berita, urutan pemasaran atau khalayak iklan, dan kami tidak menjual, menyewakan atau berkongsi pertanyaan itu dengan sesiapa di luar BIYY Tech.',
      ],
    },
    {
      heading: 'Pembantu sembang',
      paragraphs: [
        'Pembantu sembang di laman ini berjalan sepenuhnya dalam pelayar anda. Ia pemadan kata kunci, bukan model bahasa, dan tiada permintaan rangkaian di belakangnya. Apa yang anda taip tidak pernah dihantar ke mana-mana dan hilang apabila anda menutup tab.',
      ],
    },
    {
      heading: 'Hak anda',
      paragraphs: [
        'Di bawah Akta Perlindungan Data Peribadi 2010 Malaysia, anda boleh bertanya data peribadi anda yang kami simpan, meminta pembetulan, meminta pemadaman, dan menarik balik persetujuan untuk kami terus menghubungi anda. Tulis kepada alamat di bawah dan kami akan lakukannya.',
        'Kalau anda pernah menghantar pertanyaan tetapi mahu kami tidak menyimpannya, beritahu sahaja dan kami padam. Anda tidak perlu memberi sebab.',
      ],
    },
    {
      heading: 'Perubahan',
      paragraphs: [
        'Kalau kami menambah apa-apa pada laman ini yang mengumpul data, kami akan mengemas kini halaman ini dalam perubahan yang sama yang menambahnya, dan menggerakkan tarikh di atas.',
      ],
    },
  ],
});

export const terms = merge(enTerms, {
  title: 'Terma',
  headline: 'Terma yang terpakai pada laman web ini.',
  intro:
    'Terma ini meliputi penggunaan yiy.tech oleh anda. Ia bukan kontrak perisian. Kalau anda menjadi pelanggan, produk Dashboard & Database, Laman Web atau Data ditadbir oleh perjanjian perkhidmatan berasingan yang anda tandatangan semasa onboarding, dan perjanjian itu mengatasi apa-apa di sini.',
  sections: [
    {
      heading: 'Menggunakan laman ini',
      paragraphs: [
        'Baca, petik, hantar kepada rakan sekerja. Anda tidak boleh mengikisnya pada kadar yang menjejaskan orang lain, cuba menceroboh masuk, atau membentangkan kandungannya sebagai kerja anda sendiri.',
      ],
    },
    {
      heading: 'Angka di laman ini',
      paragraphs: [
        'Angka yang dipetik di sini, termasuk jam pentadbiran yang pulang, masa menghimpun laporan dan tempoh pelaksanaan, datang daripada data tanpa nama yang dikumpul merentas pelaksanaan BIYY Tech. Setiap artikel blog menyatakan saiz sampel, tetingkap pengukuran dan kaedahnya sendiri, serta menamakan had perbandingannya.',
        'Ia keputusan berarah daripada sampel kecil, bukan jaminan, dan bukan janji tentang apa yang perniagaan anda akan capai. Titik permulaan anda menentukan sebahagian besarnya. Kami akan beri anggaran khusus semasa lawatan, sebelum anda bayar apa-apa.',
        'Kalau anda rasa satu angka di sini salah, tulis kepada corrections@yiy.tech. Kami akan semak, betulkan kalau anda betul, dan catat perubahannya.',
      ],
    },
    {
      heading: 'Harga yang ditunjukkan di sini',
      paragraphs: [
        'Laman ini menyatakan model harganya, iaitu yuran bulanan tetap bagi setiap cawangan tanpa caj setiap transaksi, tanpa yuran pelaksanaan dan tanpa ikatan tahunan untuk bermula. Ia tidak menyatakan satu harga, sebab angkanya bergantung pada bilangan cawangan dan produk yang anda guna.',
        'Sebut harga menjadi mengikat apabila kami memberikannya kepada anda secara bertulis, bukan sebelum itu.',
      ],
    },
    {
      heading: 'Ketersediaan',
      paragraphs: [
        'Ciri yang diterangkan untuk Dashboard & Database serta Laman Web & Integrasi mencerminkan apa yang produk itu buat sekarang. Di mana sesuatu masih dalam pelan dan belum dihantar, kami nyatakan pada halaman berkenaan.',
      ],
    },
    {
      heading: 'Kandungan dan tanda',
      paragraphs: [
        'Tulisan, susun atur dan kod di laman ini milik BIYY Technologies. Nama dan tanda BIYY Tech adalah milik kami. Fotografi dilesenkan melalui Pexels di bawah lesen mereka, dengan beberapa imej yang dilepaskan ke domain awam di bawah CC0 melalui StockSnap.',
        'Anda dialu-alukan memetik daripada blog dengan atribusi dan pautan.',
      ],
    },
    {
      heading: 'Liabiliti',
      paragraphs: [
        'Laman ini disediakan seadanya. Kami mengambil langkah munasabah untuk memastikan ia tepat dan boleh dicapai, tetapi kami tidak menjamin ia bebas ralat atau sentiasa boleh dihubungi, dan kami tidak bertanggungjawab atas keputusan yang dibuat semata-mata berdasarkan satu halaman pemasaran. Bercakap dengan kami sebelum anda komit kepada apa-apa.',
        'Tiada apa di sini menghadkan liabiliti yang tidak boleh dihadkan di sisi undang-undang.',
      ],
    },
    {
      heading: 'Undang-undang yang mentadbir',
      paragraphs: [
        'Terma ini ditadbir oleh undang-undang Malaysia, dan mahkamah Malaysia mempunyai bidang kuasa ke atas sebarang pertikaian yang timbul daripadanya.',
      ],
    },
  ],
});

export const cookies = merge(enCookies, {
  title: 'Cookie',
  headline: 'Dasar cookie untuk laman yang tidak menetapkan cookie.',
  intro:
    'Kebanyakan dasar cookie ditulis untuk melindungi timbunan penjejakan yang pelawat tidak dapat lihat. Yang ini meliputi yiy.tech, yang tiada timbunan penjejakan. Ia menyatakan tujuan sepanduk itu, apa satu-satunya nilai yang disimpan, dan cara mengubah fikiran anda.',
  sections: [
    {
      heading: 'Apa yang kami tetapkan hari ini',
      paragraphs: [
        'Tiada cookie. Bukan milik kami, dan bukan milik sesiapa yang lain. Tiada tag analitik, tiada piksel pengiklanan, tiada video terbenam, tiada fon terhos dan tiada widget sembang daripada pihak ketiga. Fon dan imej datang daripada domain kami sendiri.',
        'Pembantu sembang di laman ini ialah pemadan kata kunci yang berjalan dalam pelayar anda. Ia tidak membuat panggilan rangkaian dan tidak menyimpan apa-apa antara lawatan.',
      ],
    },
    {
      heading: 'Satu perkara yang disimpan dalam pelayar anda',
      paragraphs: [
        'Apabila anda menjawab sepanduk itu, kami simpan jawapan anda dalam localStorage di bawah kunci yiy.consent. Ia merekod kategori mana yang anda benarkan dan tarikh anda memutuskan, dan tiada apa lagi. Ia bukan cookie, jadi ia tidak pernah dilampirkan pada permintaan dan tidak pernah sampai ke pelayan kami.',
        'Kalau anda menolak semuanya, keputusan itulah yang disimpan. Menyimpan penolakan ialah satu-satunya cara untuk berhenti bertanya kepada anda.',
      ],
    },
    {
      heading: 'Kategori-kategorinya',
      paragraphs: [
        'Perlu sepenuhnya meliputi penghidangan halaman dan mengingati jawapan anda. Ia tiada suis, sebab laman ini tidak boleh berfungsi tanpanya dan ia tidak menjejaki anda.',
        'Analitik akan meliputi statistik halaman dan trafik tanpa nama. Pemasaran akan meliputi tag pengiklanan dan pemasaran semula milik syarikat lain. Kedua-duanya dimatikan secara lalai dan tiada satu pun dimuatkan hari ini, jadi membenarkannya sekarang tidak menghidupkan apa-apa. Rekod itu wujud supaya kalau kami pernah menambah satu, ia hanya berjalan untuk orang yang sudah pun bersetuju.',
      ],
    },
    {
      heading: 'Menolak ialah pilihan yang sebenar',
      paragraphs: [
        'Tolak semua terletak bersebelahan Terima semua, bersaiz sama, dan mengambil satu klik yang sama. Tiada apa di laman ini ditahan, dilemahkan atau dilengahkan kalau anda menolak. Tiada dinding cookie dan tiada gesaan kedua.',
        'Menutup sepanduk tanpa memilih tidak dianggap sebagai persetujuan. Tiada apa dihidupkan sehingga anda memilih.',
      ],
    },
    {
      heading: 'Mengubah fikiran anda',
      paragraphs: [
        'Gunakan pautan Keutamaan cookie di bahagian bawah mana-mana halaman. Ia membuka semula sepanduk dengan tetapan semasa anda, dan menyimpan akan menulis ganti serta-merta.',
        'Membersihkan data laman dalam pelayar anda memadam jawapan yang disimpan sepenuhnya, dan sepanduk itu akan bertanya lagi pada lawatan anda yang seterusnya.',
      ],
    },
    {
      heading: 'Log pelayan',
      paragraphs: [
        'Berasingan daripada semua ini, penyedia hosting kami menulis log pelayan web standard apabila satu halaman dihidangkan: alamat IP, cap masa, URL dan user agent. Begitulah cara pelayan web berfungsi dan ia bukan sesuatu yang boleh dimatikan oleh persetujuan. Kami tidak membina profil anda dengannya. Dasar privasi menerangkannya dengan lebih terperinci.',
      ],
    },
    {
      heading: 'Perubahan',
      paragraphs: [
        'Kalau kami menambah apa-apa yang menetapkan cookie atau memuatkan skrip pihak ketiga, kami akan mengemas kini halaman ini dalam perubahan yang sama yang menambahnya, menggerakkan tarikh di atas, dan bertanya kepada anda semula dan bukan menganggap jawapan lama masih meliputinya.',
      ],
    },
  ],
});

export const legalPages = [privacy, terms, cookies];
