
# 3函数
## 3.1函数定义
## 3.2可选参数
## 3.3 剩余参数
## 3.4 默认参数

## 3.5函数重载

## 3.6 箭头函数


# 4 类
## 4.1 es5 类
- 冒充继承
- 原型链继承

##  4.2 ts 中的类

- class 关键字定义类
- extends 继承

##  类中的修饰符

- public  
- protected
- private

# 接口


接口，
## 可选属性

```
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

```
## 只读属性


## 函数类型的接口

可索引接口

数组限制接口

类类型接口

接口的扩展



# 泛型

## 泛型定义
## 泛型函数
## 泛型类
## 泛型接口

 



