// function * hg (){
//     console.log('start');
//     yield 'hello';
//     yield 'generator';
//     yield 'ending';
    
// }

// let hgi = hg();
// console.log('1',hgi.next());
// console.log('2',hgi.next());
// console.log('3',hgi.next());
// console.log('4',hgi.next());
//


// async/await
async function getStockPriceByName (){
    const symbol = await getStockSymbol(name);
    const stockPrice = await getStockPriceByName('syncbol');
    return stockPrice;
}

