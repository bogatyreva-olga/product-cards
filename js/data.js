const catalog = [
    {
        id: "1",
        title: "Шорты женские Kailas",
        image: "img/catalog/clothes/shot-paint-kailas.webp",
        price: 5000,
        sex: "female",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "pink",
                name: "Розовый",
            },
            {
                slug: "black",
                name: "Чёрный",
            }
        ],
        category: "clothes",
    },
    {
        id: "2",
        title: "Брелок-карабин Kong",
        image: "img/catalog/accessories/kong-carabine.webp",
        price: 300,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "light-blue",
                name: "Голубой",
            },
            {
                slug: "grey",
                name: "Серый",
            },
            {
                slug: "green",
                name: "Голубой",
            },
        ],
        category: " accessories",

    },
    {
        id: "3",
        title: "Кроссовки женские Kayland",
        image: "img/catalog/shoes/kayland-woman-shoes.webp",
        price: 9000,
        sex: "female",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "grey",
                name: "Серый",
            },
            {
                slug: "black",
                name: "Чёрный",
            },
        ],
        category: "shoes",

    },
    {
        id: "4",
        title: "Брюки женские Kayland",
        image: "img/catalog/clothes/chillaz-women-pant.webp",
        price: 7800,
        sex: "female",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "white",
                name: "Белый",
            },
            {
                slug: "green",
                name: "Зелёный",
            },
        ],
        category: "clothes",

    },
    {
        id: "5",
        title: "Тапки женские Jack Wolfskin",
        image: "img/catalog/shoes/slippers-woman-jw.webp",
        price: 6900,
        sex: "female",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "beige",
                name: "Бежевый",
            },
            {
                slug: "pink",
                name: "Розовый",
            },
        ],
        category: "shoes",
    },
    {
        id: "6",
        title: "Платье Jack Wolfskin",
        image: "img/catalog/clothes/dress-j-w.webp",
        price: 3500,
        sex: "female",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "blue",
                name: "Синий",
            },
            {
                slug: "yellow",
                name: "Жёлтый",
            },
        ],
        category: "clothes",
    },
    {
        id: "7",
        title: "Кроссовки мужские Dolomite",
        image: "img/catalog/shoes/sneakers-man-dolomite.webp",
        price: 11500,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "beige",
                name: "Бежевый",
            },
        ],
        category: "shoes",
    },
    {
        id: "8",
        title: "Леггинсы мужские Moloya",
        image: "img/catalog/clothes/leggings-man-moloya.webp",
        price: 7200,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "black",
                name: "Чёрный",
            },
        ],
        category: "clothes",
    },
    {
        id: "9",
        title: "Кроссовки мужские Kailas",
        image: "img/catalog/shoes/sneakers-man-kailas.webp",
        price: 9100,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "red",
                name: "Красный",
            },
            {
                slug: "white",
                name: "Белый",
            },
        ],
        category: "shoes",
    },
    {
        id: "10",
        title: "Футболка мужская Jack Wolfskin",
        image: "img/catalog/clothes/t-shirt-man-jw.webp",
        price: 2800,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "grey",
                name: "Серый",
            },
            {
                slug: "white",
                name: "Белый",
            },
        ],
        category: "clothes",
    },
    {
        id: "11",
        title: "Куртка мужская Sivera",
        image: "img/catalog/clothes/jacket-man-sivera-hort.webp",
        price: 30000,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "beige",
                name: "Бежевый",
            },
            {
                slug: "black",
                name: "Черный",
            },
        ],
        category: "clothes",
    },
    {
        id: "11",
        title: "Страховочное устройство Piranha",
        image: "img/catalog/equipment/belay-device-piranha.webp",
        price: 3500,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "light-blue",
                name: "Голубой",
            },
        ],
        category: "equipment",
    },
    {
        id: "12",
        title: "Ледоруб Dron",
        image: "img/catalog/equipment/ice-ax-dron.webp",
        price: 12000,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "red",
                name: "Красный",
            },
            {
                slug: "grey",
                name: "Серый",
            },
        ],
        category: "equipment",
    },
    {
        id: "13",
        title: "Веревка Edelrid",
        image: "img/catalog/equipment/rope-edelrid.webp",
        price: 11700,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "red",
                name: "Красный",
            },
            {
                slug: "yellow",
                name: "Жёлтый",
            },
        ],
        category: "equipment",
    },
    {
        id: "13",
        title: "Брюки горнолыжные Jack Wolfskin",
        image: "img/catalog/clothes/man-jack_wolfskin_big_snow_pants.webp",
        price: 13100,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "green",
                name: "Зелёный",
            },
            {
                slug: "yellow",
                name: "Жёлтый",
            },
        ],
        category: "clothes",
    },
    {
        id: "14",
        title: "Куртка мембранная Jack Wolfskin",
        image: "img/catalog/clothes/jacket-membrain-jw.webp",
        price: 10000,
        sex: "female",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "blue",
                name: "Синий",
            },
            {
                slug: "red",
                name: "Красный",
            },
        ],
        category: "clothes",
    },
    {
        id: "15",
        title: "Ветровка Kailas",
        image: "img/catalog/clothes/jacket-kailas.webp",
        price: 9800,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "blue",
                name: "Синий",
            },
            {
                slug: "black",
                name: "Чёрный",
            },
        ],
        category: "clothes",
    },
    {
        id: "16",
        title: "Шапка Satila wool",
        image: "img/catalog/accessories/cap-wool.webp",
        price: 2400,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "grey",
                name: "Серый",
            },
            {
                slug: "black",
                name: "Чёрный",
            },
            {
                slug: "red",
                name: "Красный",
            },
        ],
        category: "accessories",
    },
    {
        id: "17",
        title: "Скайхук Kong",
        image: "img/catalog/equipment/skyhook-kong-m.webp",
        price: 2000,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "black",
                name: "Чёрный",
            },
        ],
        category: "equipment",
    },
    {
        id: "18",
        title: "Кроссовки Merrel",
        image: "img/catalog/shoes/sneakers-merrel-man.webp",
        price: 8000,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "beige",
                name: "Бежевый",
            },
            {
                slug: "light-grey",
                name: "Светло-серый",
            },
        ],
        category: "shoes",
    },
    {
        id: "18",
        title: "Кроссовки Merrel",
        image: "img/catalog/shoes/sneakers-merrel-man.webp",
        price: 8000,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "beige",
                name: "Бежевый",
            },
            {
                slug: "light-grey",
                name: "Светло-серый",
            },
        ],
        category: "shoes",
    },
    {
        id: "19",
        title: "Бандана Buff Wool",
        image: "img/catalog/accessories/buff-wool.webp",
        price: 3700,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "beige",
                name: "Бежевый",
            },
            {
                slug: "light-grey",
                name: "Светло-серый",
            },
            {
                slug: "terracotta",
                name: "Терракотовый",
            },
        ],
        category: "accessories",
    },
    {
        id: "20",
        title: "Велоперчатки Grip",
        image: "img/catalog/accessories/gloves-velo.webp",
        price: 2900,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "blue",
                name: "Синий",
            },
            {
                slug: "black",
                name: "Черный",
            },
            {
                slug: "green",
                name: "Зелёный",
            },
        ],
        category: "accessories",
    },
    {
        id: "21",
        title: "Ботинки Arcteryx",
        image: "img/catalog/shoes/shoes-arcteryx-man.webp",
        price: 13000,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "black",
                name: "Черный",
            },
            {
                slug: "beige",
                name: "Бежевый",
            },
        ],
        category: "shoes",
    },
    {
        id: "22",
        title: "Устройство страховочное Rig",
        image: "img/catalog/equipment/belay-device-rig.webp",
        price: 18000,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "black",
                name: "Черный",
            },
            {
                slug: "orange",
                name: "Оранжевый",
            },
        ],
        category: "equipment",
    },
    {
        id: "23",
        title: "Петля Kong",
        image: "img/catalog/equipment/loop-kong.webp",
        price: 2100,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "white",
                name: "Белый",
            },
        ],
        category: "equipment",
    },
    {
        id: "24",
        title: "Жилетка TNF",
        image: "img/catalog/clothes/vest-tnf-man.webp",
        price: 11500,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "orange",
                name: "Оранжевый",
            },
            {
                slug: "black",
                name: "Чёрный",
            },
        ],
        category: "clothes",
    },
    {
        id: "25",
        title: "Ботинок Asolo",
        image: "img/catalog/shoes/shoes-asolo-woman.webp",
        price: 20500,
        sex: "female",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "turquoise",
                name: "Бирюзовый",
            },
            {
                slug: "cherry",
                name: "Вишневый",
            },
        ],
        category: "shoes",
    },
    {
        id: "26",
        title: "Ботинок Gar Sport",
        image: "img/catalog/shoes/garsport-shoes-man.webp",
        price: 12500,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "brown",
                name: "Коричневый",
            },
        ],
        category: "shoes",
    },
    {
        id: "27",
        title: "Носки спортивные",
        image: "img/catalog/accessories/socks-sport.webp",
        price: 800,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "white",
                name: "Белый",
            },
            {
                slug: "red",
                name: "Красный",
            },
            {
                slug: "orange",
                name: "Оранжевый",
            },
            {
                slug: "blue",
                name: "Синий",
            },
        ],
        category: "accessories",
    },
    {
        id: "28",
        title: "Кроссовок Jack Wolfskin",
        image: "img/catalog/shoes/sneakers-man-jack-wolfskin.webp",
        price: 11300,
        sex: "male",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "brown",
                name: "Коричневый",
            },
        ],
        category: "shoes",
    },
    {
        id: "29",
        title: "Карабин Vertikal овал",
        image: "img/catalog/equipment/carabine-vertikal.webp",
        price: 750,
        sex: "unisex",
        publicationDate: "01.01.2024",
        colors: [
            {
                slug: "grey",
                name: "Серый",
            },
        ],
        category: "equipment",
    },
    {
        id: "30",
        title: "Футболка женская Maloja",
        image: "img/catalog/clothes/maloja_womens_dambelm_sport_shirt.webp",
        price: 5500,
        sex: "female",
        publicationDate: "01.31.2024",
        colors: [
            {
                slug: "blue",
                name: "Синий",
            },
        ],
        category: "clothes",
    },
];

let getItemsByCategory = (categoryName) => catalog.filter(item => item.category === categoryName);

let getDayInfo = (date) => {
    const dateObj = new Date(date);
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    let localeDate = dateObj.toLocaleDateString('ru-RU', options);

    let weekOfMonth = getWeekOfMonth(dateObj);

    let localDateSplit = localeDate.split(",");
    let dateSplit = localDateSplit[1].trim().split(" ");

    let monthName = dateSplit[1];
    monthName = monthName[0].toUpperCase() + monthName.slice(1);

    let year = dateSplit[2];

    let dayOfWeekName = localDateSplit[0];
    dayOfWeekName = dayOfWeekName[0].toUpperCase() + dayOfWeekName.slice(1);

    return `${dayOfWeekName}, ${weekOfMonth} неделя ${monthName} ${year} года`;
};

function getWeekOfMonth(date) {
    const startWeekDayIndex = 1; // 1 MonthDay 0 Sundays
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDay = firstDate.getDay();

    let weekNumber = Math.ceil((date.getDate() + firstDay) / 7);
    if (startWeekDayIndex === 1) {
        if (date.getDay() === 0 && date.getDate() > 1) {
            weekNumber -= 1;
        }

        if (firstDate.getDate() === 1 && firstDay === 0 && date.getDate() > 1) {
            weekNumber += 1;
        }
    }

    return weekNumber;
}

export {getItemsByCategory, getDayInfo};

