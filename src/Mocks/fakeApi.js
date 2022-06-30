const products = [
    {id:'01', name: 'Gibson LesPaul Custom', description: 'Custom Made', price: '90000', stock: '8', img:'/imgs/gibsonLesPaulCustom.png'},
    {id:'02', name: 'Gibson LesPaul Stardard', description: 'Standard Made', price: '70000', stock: '5', img:'/imgs/lespaulStandard.png'},
    {id:'03', name: 'Gibson LesPaul Studio', description: 'Studio Made', price: '45000', stock: '7', img:'/imgs/gibsonlespaulStudio.png'},
    {id:'04', name: 'Fender American Stratocaster', description: 'Standard Made', price: '85000', stock: '5', img:'/imgs/fenderStrato.png'},
    {id:'05', name: 'Fender American Telecaster', description: 'Standard Made', price: '80000', stock: '8', img:'/imgs/fenderTelecaster.png'}
];

export const getData = new Promise ((resolve, reject) => {

    let condition = true;
    setTimeout(() => {
        if(condition){
            resolve(products);
        }else{
            reject(console.log('salio mal :('));
        }
    }, 3000);
});
