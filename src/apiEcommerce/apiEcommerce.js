const apiProducts = [
    // {
    //     id: 1,
    //     title: 'Sabre Pro Champion S',
    //     description: 'Mouse gamer corsair negro y celeste',
    //     price: 15600,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1663187438349.jpg',
    //     category: 'mouses',
    //     stock: 12
    // },
    // {
    //     id: 2,
    //     title: 'M65 Rgb Elite ',
    //     description: 'Mouse corsair ajustable blanco con gris',
    //     price: 14900,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1663687899466.jpg',
    //     category: 'mouses',
    //     stock: 19
    // },
    // {
    //     id: 3,
    //     title: 'Harpoon Rgb  Slipstream',
    //     description: 'Mouse gamer corsair wireless',
    //     price: 13400,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1663188439405.jpg',
    //     category: 'mouses',
    //     stock: 25
    // },
    // {
    //     id: 4,
    //     title: 'Cobra M711-fps',
    //     description: 'Mouse Redragon rgb',
    //     price: 6900,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1653918838272.jpg',
    //     category: 'mouses',
    //     stock: 17
    // },
    // {
    //     id: 5,
    //     title: 'K70 Rgb Mk.2 Rapidfire',
    //     description: 'Teclado corsair low profile speed',
    //     price: 36800,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1663773345881.jpg',
    //     category: 'teclados',
    //     stock: 9
    // },
    // {
    //     id: 6,
    //     title: 'Corsair K100 RGB',
    //     description: 'Teclado corsair Switch Opx Black',
    //     price: 54500,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1663772449430.jpg',
    //     category: 'teclados',
    //     stock: 21
    // },
    // {
    //     id: 7,
    //     title: 'Corsair K70 Rgb',
    //     description: 'Teclado tkl cherry mx speed',
    //     price: 35000,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1663775210143.jpg',
    //     category: 'teclados',
    //     stock: 5
    // },
    // {
    //     id: 8,
    //     title: 'Corsair K55',
    //     description: 'Teclado pro xt english',
    //     price: 17500,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1663775597390.jpg',
    //     category: 'teclados',
    //     stock: 13
    // },
    // {
    //     id: 9,
    //     title: 'Virtuoso Wireless Rgb',
    //     description: 'Auricular corsair color blanco',
    //     price: 54500,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1663183241148.jpg',
    //     category: 'auriculares',
    //     stock: 16
    // },
    // {
    //     id: 10,
    //     title: 'Corsair HS70',
    //     description: 'Auricular bluetooth',
    //     price: 30000,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1663611553086.jpg',
    //     category: 'auriculares',
    //     stock: 12
    // },
    // {
    //     id: 11,
    //     title: 'HS60 Haptic Bass',
    //     description: 'Auricular corsair',
    //     price: 23500,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/1652366044966.jpg',
    //     category: 'auriculares',
    //     stock: 6
    // },
    // {
    //     id: 12,
    //     title: 'HS45 Carbon',
    //     description: 'Auricular corsair gaming',
    //     price: 16800,
    //     pictureUrl: 'https://www.megatecnologia.com.ar/images/AURICULAR-CORSAIR-GAMING-HS45-CARBON1604255167280.jpg',
    //     category: 'auriculares',
    //     stock: 15
    // }
];

export const getProductById = (id) => {
    
    return apiProducts.find(product => product.id === parseInt(id));
}

export default apiProducts;