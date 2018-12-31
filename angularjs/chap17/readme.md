使用promise 的目的是 获得功能组合和错误冒泡能力的同时，保持代码异步运行的能力


# 如何创建 一个promise 

var defferred = $q.defer();

deferred.resolve({});
deferred.reject(reason)
deferred.notify(message);

# 链式请求
then（）中return 的 数据 传递给下一个 then作为函数的参数

$q.all(promises) 
$q.defer()
$q.reject(reson)

$q.when(value) 

