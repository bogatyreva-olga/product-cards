const catalog = [
    {
        id: "1",
        title: "Шорты женские Kailas",
        image: "img/catalog/clothes/shot-paint-kailas.webp",
        price: 5000,
        sex: "female", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#bb1f6c",
                name: "Розовый",
            },
            {
                hex: "#000",
                name: "Чёрный",
            }
        ],
        category: "clothes", //equipment, clothes, accessories, shoes
    },
    {
        id: "2",
        title: "Брелок-карабин Kong",
        image: "img/catalog/accessories/kong-carabine.webp",
        price: 300,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#37c1d5",
                name: "Голубой",
            },
        ],
        category: " accessories", //equipment, clothes, accessories, shoes

    },
    {
        id: "3",
        title: "Кроссовки женские Kayland",
        image: "img/catalog/shoes/kayland-woman-shoes.webp",
        price: 9000,
        sex: "female", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#a5b2b2",
                name: "Серый",
            },
            {
                hex: "#050404",
                name: "Чёрный",
            },
        ],
        category: "shoes", //equipment, clothes, accessories, shoes

    },
    {
        id: "4",
        title: "Брюки женские Kayland",
        image: "img/catalog/clothes/chillaz-women-pant.webp",
        price: 7800,
        sex: "female", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#f1f6f6",
                name: "Белый",
            },
            {
                hex: "#4e7729",
                name: "Зелёный",
            },
        ],
        category: "clothes", //equipment, clothes, accessories, shoes

    },
    {
        id: "5",
        title: "Тапки женские Jack Wolfskin",
        image: "img/catalog/shoes/slippers-woman-jw.webp",
        price: 6900,
        sex: "female", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#8d8282",
                name: "Бежевый",
            },
            {
                hex: "#ec9bbb",
                name: "Розовый",
            },
        ],
        category: "shoes", //equipment, clothes, accessories, shoes
    },
    {
        id: "6",
        title: "Платье Jack Wolfskin",
        image: "img/catalog/clothes/dress-j-w.webp",
        price: 3500,
        sex: "female", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#1b597c",
                name: "Синий",
            },
            {
                hex: "#ded77c",
                name: "Жёлтый",
            },
        ],
        category: "clothes", //equipment, clothes, accessories, shoes
    },
    {
        id: "7",
        title: "Кроссовки мужские Dolomite",
        image: "img/catalog/shoes/sneakers-man-dolomite.webp",
        price: 11500,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#837c7c",
                name: "Бежевый",
            },
        ],
        category: "shoes", //equipment, clothes, accessories, shoes
    },
    {
        id: "8",
        title: "Леггинсы мужские Moloya",
        image: "img/catalog/clothes/leggings-man-moloya.webp",
        price: 7200,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#000000",
                name: "Чёрный",
            },
        ],
        category: "clothes", //equipment, clothes, accessories, shoes
    },
    {
        id: "9",
        title: "Кроссовки мужские Kailas",
        image: "img/catalog/shoes/sneakers-man-kailas.webp",
        price: 9100,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#bd3838",
                name: "Красный",
            },
            {
                hex: "#ffffff",
                name: "Белый",
            },
        ],
        category: "shoes", //equipment, clothes, accessories, shoes
    },
    {
        id: "10",
        title: "Футболка мужская Jack Wolfskin",
        image: "img/catalog/clothes/t-shirt-man-jw.webp",
        price: 2800,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#868686",
                name: "Серый",
            },
            {
                hex: "#ffffff",
                name: "Белый",
            },
        ],
        category: "clothes", //equipment, clothes, accessories, shoes
    },
    {
        id: "11",
        title: "Куртка мужская Sivera",
        image: "img/catalog/clothes/jacket-man-sivera-hort.webp",
        price: 30000,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#837c7c",
                name: "Бежевый",
            },
            {
                hex: "#000000",
                name: "Черный",
            },
        ],
        category: "clothes", //equipment, clothes, accessories, shoes
    },
    {
        id: "11",
        title: "Страховочное устройство Piranha",
        image: "img/catalog/equipment/belay-device-piranha.webp",
        price: 3500,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#37dcd7",
                name: "Голубой",
            },
        ],
        category: "equipment", //equipment, clothes, accessories, shoes
    },
    {
        id: "12",
        title: "Ледоруб Dron",
        image: "img/catalog/equipment/ice-ax-dron.webp",
        price: 12000,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#f60606",
                name: "Красный",
            },
            {
                hex: "#838383",
                name: "Серый",
            },
        ],
        category: "equipment", //equipment, clothes, accessories, shoes
    },
    {
        id: "13",
        title: "Веревка Edelrid",
        image: "img/catalog/equipment/rope-edelrid.webp",
        price: 11700,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#f60606",
                name: "Красный",
            },
            {
                hex: "#ded77c",
                name: "Жёлтый",
            },
        ],
        category: "equipment", //equipment, clothes, accessories, shoes
    },
    {
        id: "13",
        title: "Брюки горнолыжные Jack Wolfskin",
        image: "img/catalog/clothes/man-jack_wolfskin_big_snow_pants.webp",
        price: 13100,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#19944f",
                name: "Зелёный",
            },
            {
                hex: "#ded77c",
                name: "Жёлтый",
            },
        ],
        category: "clothes", //equipment, clothes, accessories, shoes
    },
    {
        id: "14",
        title: "Куртка мембранная Jack Wolfskin",
        image: "img/catalog/clothes/man-jack_wolfskin_big_snow_pants.webp",
        price: 10000,
        sex: "female", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#3145ab",
                name: "Синий",
            },
            {
                hex: "#f60606",
                name: "Красный",
            },
        ],
        category: "clothes", //equipment, clothes, accessories, shoes
    },
    {
        id: "15",
        title: "Ветровка Kailas",
        image: "img/catalog/clothes/jacket-kailas.webp",
        price: 9800,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#3145ab",
                name: "Синий",
            },
            {
                hex: "#090909",
                name: "Чёрный",
            },
        ],
        category: "clothes", //equipment, clothes, accessories, shoes
    },
    {
        id: "16",
        title: "Шапка Satila wool",
        image: "img/catalog/accessories/cap-wool.webp",
        price: 2400,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#626161",
                name: "Серый",
            },
            {
                hex: "#090909",
                name: "Чёрный",
            },
            {
                hex: "#d01919",
                name: "Красный",
            },
        ],
        category: "accessories", //equipment, clothes, accessories, shoes
    },
    {
        id: "17",
        title: "Скайхук Kong",
        image: "img/catalog/equipment/skyhook-kong-m.webp",
        price: 2000,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#090909",
                name: "Чёрный",
            },
        ],
        category: "equipment", //equipment, clothes, accessories, shoes
    },
    {
        id: "18",
        title: "Кроссовки Merrel",
        image: "img/catalog/shoes/sneakers-merrel-man.webp",
        price: 8000,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#837c7c",
                name: "Бежевый",
            },
            {
                hex: "#9d9d9d",
                name: "Светло-серый",
            },
        ],
        category: "shoes", //equipment, clothes, accessories, shoes
    },
    {
        id: "18",
        title: "Кроссовки Merrel",
        image: "img/catalog/shoes/sneakers-merrel-man.webp",
        price: 8000,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#837c7c",
                name: "Бежевый",
            },
            {
                hex: "#9d9d9d",
                name: "Светло-серый",
            },
        ],
        category: "shoes", //equipment, clothes, accessories, shoes
    },
    {
        id: "19",
        title: "Бандана Buff Wool",
        image: "img/catalog/accessories/buff-wool.webp",
        price: 3700,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#837c7c",
                name: "Бежевый",
            },
            {
                hex: "#9d9d9d",
                name: "Светло-серый",
            },
            {
                hex: "#805239",
                name: "Горчичный",
            },
        ],
        category: "accessories", //equipment, clothes, accessories, shoes
    },
    {
        id: "20",
        title: "Велоперчатки Grip",
        image: "img/catalog/accessories/gloves-velo.webp",
        price: 2900,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#3751d5",
                name: "Синий",
            },
            {
                hex: "#070101",
                name: "Черный",
            },
            {
                hex: "#068633",
                name: "Зелёный",
            },
        ],
        category: "accessories", //equipment, clothes, accessories, shoes
    },
    {
        id: "21",
        title: "Ботинки Arcteryx",
        image: "img/catalog/shoes/shoes-arcteryx-man.webp",
        price: 13000,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#070101",
                name: "Черный",
            },
            {
                hex: "#837c7c",
                name: "Бежевый",
            },
        ],
        category: "shoes", //equipment, clothes, accessories, shoes
    },
    {
        id: "22",
        title: "Устройство страховочное Rig",
        image: "img/catalog/equipment/belay-device-rig.webp",
        price: 18000,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#070101",
                name: "Черный",
            },
            {
                hex: "#d76813",
                name: "Оранжевый",
            },
        ],
        category: "equipment", //equipment, clothes, accessories, shoes
    },
    {
        id: "23",
        title: "Петля Kong",
        image: "img/catalog/equipment/loop-kong.webp",
        price: 2100,
        sex: "unisex", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#ffffff",
                name: "Белый",
            },
        ],
        category: "equipment", //equipment, clothes, accessories, shoes
    },
    {
        id: "24",
        title: "Жилетка TNF",
        image: "img/catalog/clothes/vest-tnf-man.webp",
        price: 11500,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#d76813",
                name: "Оранжевый",
            },
            {
                hex: "#000000",
                name: "Чёрный",
            },
        ],
        category: "clothes", //equipment, clothes, accessories, shoes
    },
    {
        id: "25",
        title: "Ботинок Asolo",
        image: "img/catalog/shoes/shoes-asolo-woman.webp",
        price: 20500,
        sex: "female", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#0daf97",
                name: "Бирюзовый",
            },
            {
                hex: "#75235b",
                name: "Малиновый",
            },
        ],
        category: "shoes", //equipment, clothes, accessories, shoes
    },
    {
        id: "26",
        title: "Ботинок Gar Sport",
        image: "img/catalog/shoes/garsport-shoes-man.webp",
        price: 12500,
        sex: "male", // female, unisex, male
        publicationDate: "01.01.2022",
        colors: [
            {
                hex: "#5e4747",
                name: "Коричневый",
            },
        ],
        category: "shoes", //equipment, clothes, accessories, shoes
    },
];

let getItemsByCategory = (categoryName) => catalog.filter(item => item.category === categoryName);

export {catalog, getItemsByCategory};

