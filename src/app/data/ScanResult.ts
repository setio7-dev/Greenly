import plastic from '../../../public/image/scan/result/plastic/image.png';
import video4Plastic from '../../../public/image/scan/result/plastic/video4.png';
import video1Plastic from '../../../public/image/scan/result/plastic/video1.png';
import video2Plastic from '../../../public/image/scan/result/plastic/video2.png';
import video3Plastic from '../../../public/image/scan/result/plastic/video3.png';

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
        iframe: "https://www.youtube.com/embed/GVIk408ovts?si=MCeFX_7CMMQlvjcL",
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
                title: "Membuat Bunga dari Botol Bekas",
                desc: "Tidak hanya plastik , botol bekas juga bisa diubah menjadi berbagai produk, sehingga membantu mengurangi limbah dan menjaga kelestarian bumi!",
                link: "https://youtu.be/GVIk408ovts?si=s4L6RxIi6anW7d0l"
            },
        ]
    }
];