const products = [
    {id:'01', name: 'Gibson LesPaul Custom', description: 'Custom Made', price: '90000', stock: '8', img:'/imgs/gibsonLesPaulCustom.png'},
    {id:'02', name: 'Gibson LesPaul Stardard', description: 'Standard Made', price: '70000', stock: '5', img:'/imgs/lespaulStandard.png'},
    {id:'03', name: 'Gibson LesPaul Studio', description: 'Studio Made', price: '45000', stock: '7', img:'/imgs/gibsonlespaulStudio.png'},
    {id:'04', name: 'Fender American Stratocaster', description: 'Standard Made', price: '85000', stock: '5', img:'/imgs/fenderStrato.png'},
    {id:'05', name: 'Fender American Telecaster', description: 'Standard Made', price: '80000', stock: '8', img:'/imgs/fenderTelecaster.png'},
    {id:'06', name: 'Marshall JVM205c', description: 'Tube Amp', price: '125000', stock: '7', img:'/imgs/marshalljvm.png'},
    {id:'07', name: 'Fender Twin Reverb', description: 'Tube Amp', price: '120000', stock: '8', img:'/imgs/fenderTwinRev.png'},
    {id:'08', name: 'Mesa Boogie Dual Rectifier', description: 'Tube Amp', price: '120000', stock: '8', img:'/imgs/mesaBoggie.png'},
    {id:'09', name: 'Ibanez Tube Screammer', description: 'Overdrive pedal', price: '50000', stock: '8', img:'/imgs/tubeScream.png'},
    {id:'10', name: 'Boss CH-1', description: 'Chorus pedal', price: '40000', stock: '8', img:'/imgs/bossChorus.png'},
    {id:'11', name: 'Boss DD-3', description: 'Delay pedal', price: '42000', stock: '8', img:'/imgs/bossDelay.png'}
];
//Para traer los productos
export const getData = new Promise ((resolve, reject) => {

    let condition = true;
    setTimeout(() => {
        if(condition){
            resolve(products);
        }else{
            reject(console.log('salio mal :('));
        }
    }, 2000);
});

//Para traer solo un producto
export const getItem = new Promise ((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
        if(condition) {
            console.log('Promise resolved')
            resolve(products.find(item => item.name === 'Gibson LesPaul Custom'))
        }else{
            reject(console.log('Dont resolved'));
        }
    }, 3000);
});
