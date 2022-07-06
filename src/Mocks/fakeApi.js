export 
const products = [
    {id:'01', name: 'Gibson LesPaul Custom', category: 'instrumentos', description: 'Custom Made', price: '90000', stock: '8', img:'/imgs/gibsonLesPaulCustom.png'},
    {id:'02', name: 'Gibson LesPaul Stardard', category: 'instrumentos', description: 'Standard Made', price: '70000', stock: '5', img:'/imgs/lespaulStandard.png'},
    {id:'03', name: 'Gibson LesPaul Studio', category: 'instrumentos', description: 'Studio Made', price: '45000', stock: '7', img:'/imgs/gibsonlespaulStudio.png'},
    {id:'04', name: 'Fender American Stratocaster', category: 'instrumentos', description: 'Standard Made', price: '85000', stock: '5', img:'/imgs/fenderStrato.png'},
    {id:'05', name: 'Fender American Telecaster', category: 'instrumentos', description: 'Standard Made', price: '80000', stock: '8', img:'/imgs/fenderTelecaster.png'},
    {id:'06', name: 'Marshall JVM205c', category: 'amplificadores', description: 'Tube Amp', price: '125000', stock: '7', img:'/imgs/marshalljvm.png'},
    {id:'07', name: 'Fender Twin Reverb', category: 'amplificadores', description: 'Tube Amp', price: '120000', stock: '8', img:'/imgs/fenderTwinRev.png'},
    {id:'08', name: 'Mesa Boogie Dual Rectifier', category: 'amplificadores', description: 'Tube Amp', price: '120000', stock: '8', img:'/imgs/mesaBoggie.png'},
    {id:'09', name: 'Ibanez Tube Screammer', category: 'efectos', description: 'Overdrive pedal', price: '50000', stock: '8', img:'/imgs/tubeScream.png'},
    {id:'10', name: 'Boss CH-1', category: 'efectos', description: 'Chorus pedal', price: '40000', stock: '8', img:'/imgs/bossChorus.png'},
    {id:'11', name: 'Boss DD-3', category: 'efectos', description: 'Delay pedal', price: '42000', stock: '8', img:'/imgs/bossDelay.png'}
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

export const getItem = (id) => {
    return new Promise ((resolve, reject) => {
        const productoEncontrado = products.find((prod) => prod.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoEncontrado);
        }, 3000);
    });
};
/*export const getData = new Promise ((resolve, reject) => {

    let condition = true;
    setTimeout(() => {
        if(condition){
            resolve(products);
        }else{
            reject(console.log('salio mal :('));
        }
    }, 2000);
});*/

//Para traer solo un producto
/*export const getItem = new Promise ((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
        if(condition) {
            console.log('Promise resolved')
            resolve(products.find(item => item.name === 'Gibson LesPaul Custom'))
        }else{
            reject(console.log('Dont resolved'));
        }
    }, 3000);
});*/
