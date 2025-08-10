import plastic from '../../../public/image/scan/result/plastic/image.png';
import video4Plastic from '../../../public/image/scan/result/plastic/video4.png';
import video1Plastic from '../../../public/image/scan/result/plastic/video1.png';
import video2Plastic from '../../../public/image/scan/result/plastic/video2.png';
import video3Plastic from '../../../public/image/scan/result/plastic/video3.png';
import glass from '../../../public/image/scan/result/glass/image.png';
import video4Glass from '../../../public/image/scan/result/glass/video4.png';
import video1Glass from '../../../public/image/scan/result/glass/video1.png';
import video2Glass from '../../../public/image/scan/result/glass/video2.png';
import video3Glass from '../../../public/image/scan/result/glass/video3.png';
import cardboard from '../../../public/image/scan/result/cardboard/image.png';
import video4Cardboard from '../../../public/image/scan/result/cardboard/video4.png';
import video1Cardboard from '../../../public/image/scan/result/cardboard/video1.png';
import video2Cardboard from '../../../public/image/scan/result/cardboard/video2.png';
import video3Cardboard from '../../../public/image/scan/result/cardboard/video3.png';
import paper from '../../../public/image/scan/result/paper/image.png';
import video4Paper from '../../../public/image/scan/result/paper/video4.png';
import video1Paper from '../../../public/image/scan/result/paper/video1.png';
import video2Paper from '../../../public/image/scan/result/paper/video2.png';
import video3Paper from '../../../public/image/scan/result/paper/video3.png';

export const scanResult = [
    {
        id: 1,
        data: 'plastic',
        image: plastic.src,
        title: "Sampah Plastik",
        desc: "Sampah plastik adalah bahan plastik yang telah digunakan dan dibuang. Plastik adalah bahan sintetis yang tidak mudah terurai secara alami. Contohnya termasuk botol air, kantong plastik, dan kemasan makanan. Karena sifatnya yang tahan lama, plastik sering kali menumpuk di tempat pembuangan sampah dan lingkungan, menimbulkan masalah bagi ekosistem.",
        tips: "Sampah plastik bisa merusak lingkungan jika tidak ditangani dengan baik. Kita bisa menguranginya dengan membawa tas belanja sendiri, menggunakan tumbler, serta memilih produk dengan kemasan ramah lingkungan. Hindari sedotan plastik dan biasakan memilah sampah di rumah. Belanja secukupnya dan daur ulang barang yang masih bisa dimanfaatkan. Dengan langkah kecil seperti ini, kita bisa membantu bumi tetap bersih dan sehat.",
        impact1: "Sampah plastik dapat mencemari tanah, sungai, dan lautan. Plastik yang terurai menjadi mikroplastik dapat dimakan oleh hewan dan merusak rantai makanan. Sampah plastik juga dapat menyebabkan banjir dengan menyumbat saluran air.",
        impact2: "Mikroplastik yang masuk ke dalam tubuh manusia melalui makanan dan minuman dapat menimbulkan risiko kesehatan seperti gangguan hormon dan penyakit pernapasan. Plastik yang terbakar juga menghasilkan polutan berbahaya.",
        iframe: "https://www.youtube.com/embed/xmQ20jqltHM?si=8AGTN1ehVNENiCAR",
        recycle: [
            {
                id: 1,
                image: video1Plastic.src,
            },
            {
                id: 2,
                image: video2Plastic.src,
            },
            {
                id: 3,
                image: video3Plastic.src,
            },
            {
                id: 4,
                image: video4Plastic.src,
            },
        ],
        how: [
            {
                id: 1,
                title: "Membuat Bunga dari Botol Bekas",
                desc: "Tidak hanya plastik , botol bekas juga bisa diubah menjadi berbagai produk, sehingga membantu mengurangi limbah dan menjaga kelestarian bumi!",
                link: "https://youtu.be/GVIk408ovts?si=s4L6RxIi6anW7d0l"
            },
            {
                id: 2,
                title: "Membuat Celengan Minion dari Botol Bekas",
                desc: "Botol plastik bekas bisa diubah menjadi celengan Minion lucu, mengajak menabung sekaligus mengurangi sampah plastik!",
                link: "https://youtu.be/QWGqvB38Snc?si=yShLCLKdolVo0yNH"
            },
            {
                id: 3,
                title: "Membuat Tempat Pensil dari Botol Bekas",
                desc: "Botol plastik bekas dapat diubah menjadi tempat pensil yang praktis, membantu mengurangi sampah sambil menambah kerapian meja belajar.",
                link: "https://www.youtube.com/watch?si=GnNHpy5ELayaMzYh&v=DgeQPME2lp4&feature=youtu.be"
            },
            {
                id: 4,
                title: "Membuat Pot Lucu dari Botol Bekas",
                desc: "Botol plastik bekas bisa disulap menjadi pot lucu, menghias ruangan sekaligus mengurangi sampah plastik.",
                link: "https://youtu.be/qDT4TS1UzL4?si=6q97GMKMbQQjDirh"
            },
        ]
    },
    {
        id: 2,
        data: 'glass',
        image: glass.src,
        title: "Limbah Kaca",
        desc: "Sampah kaca adalah bahan berbasis silika seperti botol, gelas, dan wadah makanan yang sudah tidak terpakai. Karena sulit terurai dan dapat pecah menjadi pecahan tajam, sampah kaca berpotensi membahayakan manusia serta menumpuk di lingkungan.",
        tips: "Sampah kaca berbahaya jika tidak dikelola dengan baik. Kurangi dengan memakai ulang botol atau stoples, menyerahkannya ke bank sampah, dan membungkus rapat pecahan kaca sebelum dibuang agar tidak melukai manusia atau hewan.",
        impact1: "Sampah kaca yang dibuang sembarangan dapat mencemari tanah, merusak habitat hewan, dan pecahannya berpotensi memicu kebakaran saat terkena sinar matahari langsung.",
        impact2: "Pecahan kaca dapat melukai manusia dan hewan, bahkan menimbulkan infeksi atau cedera permanen jika tidak ditangani dengan hati-hati.",
        iframe: "https://www.youtube.com/embed/Z7uNDey426Q?si=tjeYSvadhi8EK2ap",
        recycle: [
            {
                id: 1,
                image: video1Glass.src,
            },
            {
                id: 2,
                image: video2Glass.src,
            },
            {
                id: 3,
                image: video3Glass.src,
            },
            {
                id: 4,
                image: video4Glass.src,
            },
        ],
        how: [
            {
                id: 1,
                title: "Membuat Lampu Tidur dari Kaca Bekas",
                desc: "Kaca bekas dapat dimanfaatkan menjadi lampu tidur unik, menambah estetika ruangan sekaligus mengurangi limbah kaca.",
                link: "https://youtu.be/GVIk408ovts?si=s4L6RxIi6anW7d0l"
            },
            {
                id: 2,
                title: "Membuat Vas Bunga dari Kaca Bekas",
                desc: "Kaca bekas bisa diolah menjadi vas bunga cantik, memperindah ruangan sekaligus membantu mengurangi sampah kaca.",
                link: "https://youtu.be/w91ayV3VYKI?si=qU0SO3Atbdf_9EAJ"
            },
            {
                id: 3,
                title: "Membuat Lampu Hias dari Kaca Bekas",
                desc: "Kaca bekas bisa disulap menjadi lampu hias menawan yang memancarkan cahaya unik, memperindah suasana ruangan sambil berkontribusi mengurangi sampah kaca.",
                link: "https://youtube.com/shorts/1GxziIj8LTo?si=mwQNdlHPQ0Yb3CEW"
            },
            {
                id: 4,
                title: "Membuat Vas Hias dari Kaca Bekas",
                desc: "Kaca bekas dapat diubah menjadi vas hias elegan yang mempercantik ruangan sekaligus membantu mengurangi limbah kaca.",
                link: "https://youtu.be/8abEL3LHuS0?si=m8pXN5pagsCgUETe"
            },
        ]
    },
    {
        id: 3,
        data: 'cardboard',
        image: cardboard.src,
        title: "Sampah Kardus",
        desc: "Sampah kardus adalah limbah kertas tebal dari kemasan atau kotak penyimpanan. Meski dapat terurai, penumpukan kardus tetap bisa mencemari lingkungan.",
        tips: "Gunakan kembali kardus untuk penyimpanan atau pengiriman barang, dan jika sudah tak layak, potong serta lipat agar mudah dibawa ke tempat daur ulang. Simpan kardus di tempat kering untuk mencegah jamur dan hama.",
        impact1: "Kardus yang menumpuk di area terbuka dapat menarik rayap dan serangga serta mengganggu kebersihan. Jika tidak dikelola, penumpukannya juga bisa menghambat aliran air dan memicu banjir.",
        impact2: "Kardus lembap dapat menjadi sarang jamur yang memicu alergi dan gangguan pernapasan, sementara debunya dapat mengiritasi saluran pernapasan",
        iframe: "https://www.youtube.com/embed/PqU5DS6orUw?si=Yd1-25T1vNzdHIjD",
        recycle: [
            {
                id: 1,
                image: video1Cardboard.src,
            },
            {
                id: 2,
                image: video2Cardboard.src,
            },
            {
                id: 3,
                image: video3Cardboard.src,
            },
            {
                id: 4,
                image: video4Cardboard.src,
            },
        ],
        how: [
            {
                id: 1,
                title: "Membuat  Nakas Kecil dari Kardus",
                desc: "Nakas kecil dari kardus ini mudah dibuat dan ramah lingkungan. Cocok untuk menyimpan barang-barang kecil dengan cara yang praktis dan ekonomis di rumah.",
                link: "https://youtu.be/8gtf6kOEIC0?si=hMCQT3mTXbIbtMmz"
            },
            {
                id: 2,
                title: "Membuat Frame Hias dari Kardus",
                desc: "Kardus bekas dapat diubah menjadi frame hias kreatif, mempercantik tampilan foto atau karya seni sekaligus mengurangi limbah.",
                link: "https://youtu.be/xplcqlpYfbw?si=ldoBqnGhvl5Wop_N"
            },
            {
                id: 3,
                title: "Membuat Jam Dinding dari Kardus",
                desc: "Kardus bekas bisa disulap menjadi jam dinding unik, menjadi dekorasi fungsional sekaligus membantu mengurangi sampah kardus.",
                link: "https://youtu.be/yvKz89-N6qY?si=QtSXsGta8ovEGXjg"
            },
            {
                id: 4,
                title: "Membuat Sofa dari Kardus",
                desc: "Kardus bekas dapat diolah menjadi sofa kreatif dan fungsional, memberikan solusi furnitur ramah lingkungan sekaligus mengurangi limbah.",
                link: "https://youtube.com/shorts/0lOiBAqq-FQ?si=uqgaF9-pS_uh2whD"
            },
        ]
    },
    {
        id: 4,
        data: 'paper',
        image: paper.src,
        title: "Sampah Kertas",
        desc: "Sampah kertas adalah limbah berbahan serat kayu seperti koran, buku, dan kertas kemasan. Meski mudah terurai, produksi kertas yang berlebihan dapat memicu penebangan pohon secara masif.",
        tips: "Gunakan kertas dengan hemat dengan memanfaatkan kedua sisinya untuk menulis atau mencetak, lalu kumpulkan kertas bekas untuk didaur ulang. Pilih produk berlabel ramah lingkungan atau yang terbuat dari kertas daur ulang.",
        impact1: "Produksi kertas berlebihan dapat mempercepat deforestasi, sementara sampah kertas yang menumpuk di tempat lembap bisa menimbulkan bau tidak sedap dan menarik hama.",
        impact2: "Debu dari kertas lama dapat memicu alergi dan iritasi pernapasan, sedangkan kertas yang terkontaminasi bahan kimia berpotensi membahayakan kesehatan.",
        iframe: "https://www.youtube.com/embed/-upvBrf89XM?si=81B3Qt5e2OJzR8fw",
        recycle: [
            {
                id: 1,
                image: video1Paper.src,
            },
            {
                id: 2,
                image: video2Paper.src,
            },
            {
                id: 3,
                image: video3Paper.src,
            },
            {
                id: 4,
                image: video4Paper.src,
            },
        ],
        how: [
            {
                id: 1,
                title: "Membuat  Kertas Kembali dari Kertas Bekas",
                desc: "Kertas bekas dapat diolah kembali menjadi kertas baru, mengurangi limbah sekaligus menghemat penggunaan sumber daya alam.",
                link: "https://youtu.be/1UoskWBm1h0?si=RqGWLBNatL6JCScG"
            },
            {
                id: 2,
                title: "Membuat Lampion Hias dari Kertas",
                desc: "Kertas bekas bisa disulap menjadi lampion hias cantik, menambah keindahan ruangan sekaligus mengurangi limbah kertas.",
                link: "https://youtu.be/LQ_e510-MeY?si=uiZc49xjuMCslJn3"
            },
            {
                id: 3,
                title: "Membuat Storage dari Kertas",
                desc: "Kertas bekas dapat diolah menjadi storage unik dan fungsional, membantu merapikan barang sekaligus mengurangi limbah kertas.",
                link: "https://youtu.be/E-AlBsa0wx4?si=g4-OAlKq8MyQMMtk"
            },
            {
                id: 4,
                title: "Membuat Berbagai barang dari Kertas",
                desc: "Kertas bekas dapat diubah menjadi berbagai barang kreatif seperti hiasan, kotak penyimpanan, atau kerajinan tangan, sekaligus membantu mengurangi limbah dan menjaga lingkungan.",
                link: "https://youtu.be/B6ZUBXMpkpY?si=bPyPZoeVtat77jlP"
            },
        ]
    },
];