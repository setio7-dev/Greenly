import plastic from '../../../public/image/scan/result/plastic.png';
import video1Plastic from '../../../public/image/scan/result/video1-plastic.png';
import video2Plastic from '../../../public/image/scan/result/video2-plastic.png';
import video3Plastic from '../../../public/image/scan/result/video3-plastic.png';

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
        recycle: [
            {
                id: 1,
                title: "Cara membuat pot tanaman dari botol bekas",
                image: video1Plastic.src,
                link: "https://www.youtube.com/watch?v=example1"
            },
            {
                id: 2,
                title: "Cara membuat Celengan dari botol bekas",
                image: video2Plastic.src,
                link: "https://www.youtube.com/watch?v=example1"
            },
            {
                id: 3,
                title: "Cara membuat Celengan dari botol bekas",
                image: video3Plastic.src,
                link: "https://www.youtube.com/watch?v=example1"
            },
        ]
    }
];