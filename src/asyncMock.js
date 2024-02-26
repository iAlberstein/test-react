const products = [
    {
        id: '1',
        name: 'elemento 1',
        price: 10000,
        category: 'musica',
        img: "https://placekitten.com/g/250/250",
        stock: 446,
        description: 'Descripción de elemento 1'
    },
    {
        id: '2',
        name: 'elemento 2',
        price: 7000,
        category: 'teatro',
        img: "https://placekitten.com/g/250/250",
        stock: 446,
        description: 'Descripción de elemento 2'
    },
    {
        id: '3',
        name: 'elemento 3',
        price: 500,
        category: 'sociales',
        img: "https://placekitten.com/g/250/250",
        stock: 446,
        description: 'Descripción de elemento 3'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}