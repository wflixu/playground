function mockdata(){
    var arr=[];
    for(let i=0;i<10;i++){
        arr.push(Math.floor(Math.random()*100))
    }
    return arr;
}


function bb(arr){
   var len=arr.length;
   for(let i=len-1;i>len-3;i--){
       for(let j=len-1;j>len-i-1;j--){
              if(arr[j]>arr[j-1]){
                  let temp = arr[j-1];
                  arr[j-1]=arr[j];
                  arr[j]=temp;
              }
       }
   }
   return arr;
}

let testarr= mockdata();

console.log(testarr);

let resarr=bb(testarr);
console.log(resarr);


var addressMap ={
    '01':'北京',
    '02':'西安',
}
