import 'package:flutter/material.dart';

void main() {
  runApp(new MaterialApp(
    title: '按下处理Demo',
    home: new DismissibleDemo(),
  ));
}

class DismissibleDemo extends StatelessWidget {
  List<String> items = new List<String>.generate(30, (i)=>"列表项${i+1}");
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: new AppBar(
         title: Text('滑动删除示例'),
       ),
       body: new ListView.builder(
         itemCount: items.length,
         itemBuilder: (context,index){
           final item = items[index];
           return new Dismissible(
             key: new Key(item),
             onDismissed: (direction){
               items.removeAt(index);
               Scaffold.of(context).showSnackBar(
                 new SnackBar(content:new Text('$item 被删除了'))
               );
             },
             child: new ListTile(
               title: new Text('$item'),
             ),
           );
         },
       ),
    );
  }
}

class MyButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new GestureDetector(
      onTap: () {
        final snackBar = new SnackBar(content: new Text("你已按下"));
        Scaffold.of(context).showSnackBar(snackBar);
      },
      child: new Container(
        padding: new EdgeInsets.all(12.0),
        decoration: new BoxDecoration(
          color: Theme.of(context).buttonColor,
          borderRadius: new BorderRadius.circular(10.0),
        ),
        child: new Text('测试按钮'),
      ),
    );
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          title: new Text('按下处理Demo'),
        ),
        body: new Center(
          child: new MyButton(),
        ));
  }
}
