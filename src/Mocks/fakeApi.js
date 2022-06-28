const products = [
    {id:'01', name: 'Gibson LesPaul Custom', description: 'Custom Made', price: '90000', stock: '8'},
    {id:'02', name: 'Gibson LesPaul Stardard', description: 'Standard Made', price: '70000', stock: '5'}
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
