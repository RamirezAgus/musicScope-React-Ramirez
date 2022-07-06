export 
const products = [
    {id: 1, name: 'Gibson LesPaul Custom', category: 'instrumentos', description: 'Custom Made', price: '90000', stock: '8', img:'/imgs/gibsonLesPaulCustom.png'},
    {id: 2, name: 'Gibson LesPaul Stardard', category: 'instrumentos', description: 'Standard Made', price: '70000', stock: '5', img:'/imgs/lespaulStandard.png'},
    {id: 3, name: 'Gibson LesPaul Studio', category: 'instrumentos', description: 'Studio Made', price: '45000', stock: '7', img:'/imgs/gibsonlespaulStudio.png'},
    {id: 4, name: 'Fender American Stratocaster', category: 'instrumentos', description: 'Standard Made', price: '85000', stock: '5', img:'/imgs/fenderStrato.png'},
    {id: 5, name: 'Fender American Telecaster', category: 'instrumentos', description: 'Standard Made', price: '80000', stock: '8', img:'/imgs/fenderTelecaster.png'},
    {id: 6, name: 'Marshall JVM205c', category: 'amplificadores', description: 'Tube Amp', price: '125000', stock: '7', img:'/imgs/marshalljvm.png'},
    {id: 7, name: 'Fender Twin Reverb', category: 'amplificadores', description: 'Tube Amp', price: '120000', stock: '8', img:'/imgs/fenderTwinRev.png'},
    {id: 8, name: 'Mesa Boogie Dual Rectifier', category: 'amplificadores', description: 'Tube Amp', price: '120000', stock: '8', img:'/imgs/mesaBoggie.png'},
    {id: 9, name: 'Ibanez Tube Screammer', category: 'efectos', description: 'Overdrive pedal', price: '50000', stock: '8', img:'/imgs/tubeScream.png'},
    {id: 10, name: 'Boss CH-1', category: 'efectos', description: 'Chorus pedal', price: '40000', stock: '8', img:'/imgs/bossChorus.png'},
    {id: 11, name: 'Boss DD-3', category: 'efectos', description: 'Delay pedal', price: '42000', stock: '8', img:'/imgs/bossDelay.png'}
];
//Para traer los productos

export const getData = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const productosFiltrados = products.filter((prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(products);
        }, 2000);
    });
};

//Para traer un solo producto
export const getItem = (id) => {
    return new Promise ((resolve, reject) => {
        const productoEncontrado = products.find((prod) => prod.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoEncontrado);
        }, 3000);
    });
};

