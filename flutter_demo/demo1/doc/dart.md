## dart 重要概念及常用开发库
- dart 语言特性：
dart 是AOT编译的和JIT 编译
内存回收
不需要声明式布局语言
- dart 重要概念：
所有东西都是对象
弱类型语言，指定类型使得程序合理分配内存空间
代码在运行前解析
有统一的程序入口
没有 public protected  private  私有变量和函数前加下划线来表示
dart 工具可以检查出警告信息，错误信息可以式编译时，也可以时运行时，编译时错误阻止程序运行，运行时错误将以异常的方式呈现
支持 async/await
## 2 变量和基本类型
### 2.1 常量和固定值

final
const 编译时的常量
### 2.2基本数据类型

- Number
        int 
         double
- String
       '''  可以用来添加多行数据
- Boolean
   
- List
 
- Map
3 函数
可选参数 [ ]
参数默认值
main 函数
返回值    所有函数都会有返回值/ 默认返回值null  

## 4 运算符
 1. 算术运算
    - ~/  结果取整

 2. 关系运算
 3. 类型测试运算符
    - as 
    - is 
    - is! 
 4. 赋值操作符
 5. 逻辑运算符
 6. 位运算符
 7. 条件表达式
     第二种表达式   expr1??expr2
 8. 级联操作

## 5 流程控制语句

1. if /else
2. for
3. while/do-while
4. break continue
5. switch case
6. assert 当assert 判断条件为false 时流程发生中断

## 6 异常处理
1. 抛出异常

```dart
throw FromatException('异常')
throw '异常信息';
```
2. 捕获异常
```
try{
    //
}on Exception catch(e){
    //
}catch(e,s){
    //
}finally{
    // do something
}

```



## 7 对象

1. 成员变量
2. 构造函数
```
class User{
    String name;
    int age;
    User(String name,int age){
        this.name = name;
        this.age = age;
    }
}
//简写

class User{
    String name;
    init age;
    User(this.name,this.age);
}
```

- 命名构造函数
- 构造函数初始化列表

3. 读取和写入
    
4. 重载操作
5. 继承类
6. 抽象类
7. 枚举类型
8. Mixins   用with 关键字来实现
## 8 泛型

 1. 用于集合雷诺高兴
 2. 用于构造函数中参数化
## 9 库的使用

  1. 引用库
    - import 引用
    - 语言提供的库用 dart:xx
    - 第三方库用 package:xx
   2. 指定库的前缀 用 as 类似于命名空间
   3. 引用库的一部分 
     - show  只用一部分
     - hide  排除一部分
## 10 异步的支持
```dart
   await readFile();
   fileOperate () async {
       var file =await readFile();
       // 其他处理
   }
```

## 11 元数据

- @deprecated 被弃用的
- @override 重写
- @proxy 代理







new 关键字可以省略
final 声明的属性只有getter 方法
方法不能被重载
私有 类和方法 以 _ 开始；
计算属性


构造方法

构造函数语法糖；
Person(this.name,this.age)
有名的构造方法-解决构造方法不能重载的问题

工厂构造方法

静态成员


对象操作符

Object?.property
as 
is 
is!
.. 级联操作符

对象的call() 方法


继承





