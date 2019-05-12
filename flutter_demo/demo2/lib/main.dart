import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          // This is the theme of your application.
          //
          // Try running your application with "flutter run". You'll see the
          // application has a blue toolbar. Then, without quitting the app, try
          // changing the primarySwatch below to Colors.green and then invoke
          // "hot reload" (press "r" in the console where you ran "flutter run",
          // or simply save your changes to "hot reload" in a Flutter IDE).
          // Notice that the counter didn't reset back to zero; the application
          // is not restarted.
          primarySwatch: Colors.blue,
        ),
        home: new ListHerDemo());
  }
}

//水平列表组件
class ListHerDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(title: new Text('水平列表')),
        body: Container(
          margin: EdgeInsets.symmetric(vertical: 20.0),
          height: 200.0,
          child: new ListView(
            scrollDirection: Axis.horizontal,
            children: <Widget>[
              Container(
                  width: 160.0,
                  color: Colors.lightBlue,
                ),
              Container(
                  width: 160.0,
                  color: Colors.redAccent,
                ),
              Container(
                  width: 160.0,
                  color: Colors.lightBlue,
                ),
             
            ],
          ),
        )
    );
  }
}

class ListDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(title: new Text('列表')),
        body: new ListView(
          children: <Widget>[
            ListTile(
              leading: Icon(Icons.alarm),
              title: Text('alarn'),
            ),
            ListTile(
              leading: Icon(Icons.alarm),
              title: Text('alarn'),
            ),
            ListTile(
              leading: Icon(Icons.alarm),
              title: Text('alarn'),
            ),
          ],
        ));
  }
}

class LayoutDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(title: new Text('图标组件示例')),
      body: new Center(
        // child: new IconButton(
        //   icon: Icon(Icons.volume_up,size: 48.0,),
        //   tooltip: '按下操作',
        //   onPressed: (){
        //     print('按下操作');
        //   },
        child: new RaisedButton(
          onPressed: () {
            print('tap!!!!!!');
          },
          child: new Text('raisedButton'),
        ),
      ),
    );
  }
}

class ImageDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Center(
        child: new Image.network('https://s2.ax1x.com/2019/04/29/E3bc90.md.jpg',
            fit: BoxFit.fitWidth));
  }
}

class TextDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('文本组件'),
      ),
      body: new Column(
        children: <Widget>[
          new Text('红色+黑色删除线+25号',
              style: new TextStyle(
                color: const Color(0xffff0000),
                decoration: TextDecoration.lineThrough,
                decorationColor: const Color(0xff000000),
                fontSize: 25.0,
              )),
          new Text(
            '红色+下划线+25号',
            style: new TextStyle(
              color: const Color(0xffff9900),
              decoration: TextDecoration.underline,
              decorationColor: const Color(0xff000000),
              fontSize: 24.0,
            ),
          )
        ],
      ),
    );
  }
}
