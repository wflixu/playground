const setDelay = (millisecond) => {
    return new Promise((resolve, reject)=>{
        if (typeof millisecond != 'number') reject(new Error('参数必须是number类型'));
        setTimeout(()=> {
            resolve(`我延迟了${millisecond}毫秒后输出的`);
        }, millisecond);
    });
};

// setDelay(3000);
// .then((result)=>{
//     console.log(result); // 输出“我延迟了2000毫秒后输出的”
// });

// setDelay('我是字符串')
//     .then((result)=>{
//         console.log(result); // 不进去了
//     })
//     .catch((err)=>{
//         console.log(err); // 输出错误：“参数必须是number类型”
//     });

const setDelaySecond = (seconds) => {
    return new Promise((resolve, reject)=>{
        if (typeof seconds != 'number' || seconds > 10) reject(new Error('参数必须是number类型，并且小于等于10'));
        setTimeout(()=> {
            console.log(`先是setDelaySeconds函数输出，延迟了${seconds}秒，一共需要延迟${seconds+2}秒`);
            resolve(setDelay(2000)); // 这里依赖上一个Promise
        }, seconds * 1000);
    });
};

setDelaySecond(3).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});
