const misProductos = [
    {
        id: 1,
        nombre: "King of seduction Absolute",
        marca: "ANTONIO BANDERAS",
        tamano: 100,
        genero: "Hombre",
        precio: 43000,
        img: "./public/img/perfumes/antonioBanderasKingOfSeductionAbsoluteMan.jpg"
    },

    {
        id: 2,
        nombre: "Forever",
        marca: "BOOS",
        tamano: 100,
        genero: "Mujer",
        precio: 53000,
        img: "./public/img/perfumes/boosForeverWoman.png"
    },

    {
        id: 3,
        nombre: "Midnight",
        marca: "BOOS",
        tamano: 100,
        genero: "Mujer",
        precio: 42800,
        img: "./public/img/perfumes/boosMidnightWoman.webp"
    },

    {
        id: 4,
        nombre: "N°5",
        marca: "CHANNEL",
        tamano: 100,
        genero: "Mujer",
        precio: 63000,
        img: "./public/img/perfumes/channelN5Woman.webp"
    },

    {
        id: 5,
        nombre: "Be",
        marca: "CALVIN KLEIN",
        tamano: 150,
        genero: "Hombre",
        precio: 48900,
        img: "./public/img/perfumes/ckBeMan.jpg"
    },

    {
        id: 6,
        nombre: "Gentleman",
        marca: "GIVENCHY",
        tamano: 100,
        genero: "Hombre",
        precio: 44300,
        img: "./public/img/perfumes/givenchyGentlemanMan.webp"
    },

    {
        id: 7,
        nombre: "Le Male",
        marca: "JEAN PAUL GAULTIER",
        tamano: 200,
        genero: "Hombre",
        precio: 71000,
        img: "./public/img/perfumes/jeanPaulGaultierLeMaleMan.jpg"
    },

    {
        id: 8,
        nombre: "Perfect",
        marca: "MARC JACOBS",
        tamano: 100,
        genero: "Mujer",
        precio: 47800,
        img: "./public/img/perfumes/marcJacobsPerfectWoman.jpg"
    },

    {
        id: 9,
        nombre: "Julie",
        marca: "MUJERCITAS",
        tamano: 50,
        genero: "Niña",
        precio: 20000,
        img: "./public/img/perfumes/mujercitasJulieGirl.png"
    },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}


