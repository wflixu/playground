var _ = require('lodash');
let input = [{index: 0, bg: "rgba(134,115,230,0.55)", discount: 250},
{index: 1, bg: "rgba(134,115,230,0.55)", discount: 250},
{index: 2, bg: "rgba(134,115,230,0.55)", discount: 250},
{index: 3, bg: "rgba(97,199,242,0.4)", discount: 0},
{index: 4, bg: "rgba(97,199,242,0.4)", discount: 0}]

let temp = _.uniqBy(input,'discount');
console.log(temp);

let result = temp.map(item=>{
    if(item.discount ===250){
        return {
            index:'00:00-02:00',
            discount:250,
        }
    }else if(item.discount ===0){
        return {index:'03:00:04:00', discount: 0}
    }
})

console.log(result);



