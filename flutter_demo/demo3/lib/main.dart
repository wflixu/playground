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
      home:new LayoutColumnDemo(),
    );
  }
}


class LayoutColumnDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title: Text('水平布局示例'),
      ),
      body:new Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
         new Text('flutter column'),
          new Text('垂直布局'),
          new Expanded(
            child: new FittedBox(
              fit:BoxFit.contain,
              child: const FlutterLogo(),
            )
          )
        ],
      )
    );
  }
}

class LayoutRowDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title: Text('剧中布局示例'),
      ),
      body:new Row(
        children: <Widget>[
          new Expanded(
            child: new Text('右侧文本',textAlign:TextAlign.center),
          ),
          new Expanded(
            child: new Text('中间文本',textAlign:TextAlign.center),
          ),
          new Expanded(
            child: new FittedBox(
              fit:BoxFit.contain,
              child: const FlutterLogo(),
            )
          )
        ],
      )
    );
  }
}




class LayoutDemo2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title: Text('剧中布局示例'),
      ),
      body:new Stack(
           children: <Widget>[
             new Align(
               alignment: new FractionalOffset(0.0, 0.0),
               child: new Image.asset('images/1.jpg',width: 128.0,height: 128.0,),
             ),
             new Align(
               alignment: new FractionalOffset(1.0, 0.0),
               child: new Image.asset('images/1.jpg',width: 128.0,height: 128.0,),
             ),
             new Align(
               alignment:FractionalOffset.center,
               child: new Image.asset('images/2.jpg',width: 128.0,height: 128.0,),
             ),
             new Align(
               alignment:FractionalOffset.bottomLeft,
               child: new Image.asset('images/3.jpg',width: 128.0,height: 128.0,),
             ),
             new Align(
               alignment:FractionalOffset.bottomRight,
               child: new Image.asset('images/4.jpg',width: 128.0,height: 128.0,),
             ),
            
           ],
      ),
    );
  }
}


class LayoutDemo1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title: Text('剧中布局示例'),
      ),
      body:new Center(
        child: new Container(
          width: 300.0,
          height: 300.0,
          padding: EdgeInsets.all(10.0),
          decoration: new BoxDecoration(
            color: Colors.white,
            border: new Border.all(
              color:Colors.green,
              width: 8.0
            )
          ),
          child: new Container(
            width: 200.0,
            height: 200.0,
            decoration: new BoxDecoration(
              color: Colors.white,
              border: new Border.all(
                color: Colors.blue,
                width: 8.0
              )
            ),
            child: new FlutterLogo(),
          ),

        )
        
      ),
    );
  }
}

class LayoutDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title: Text('Container 布局容器示例'),
      ),
      body:new Container(
        decoration: new BoxDecoration(
          color: Colors.grey
        ),
        child:new Column(
          children: <Widget>[
            new Row(
              children: <Widget>[
                new Expanded(
                  child: new Container(
                    width: 150.0,
                    height: 150.0,
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 10.0,color:Colors.blueGrey),
                      borderRadius: const BorderRadius.all(const Radius.circular(8.0))
                    ),
                    margin: const EdgeInsets.all(4.0),
                    child: new Image.asset('images/1.jpg'),
                  )
                ),
                new Expanded(
                  child: new Container(
                    width: 150.0,
                    height: 150.0,
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 10.0,color:Colors.blueGrey),
                      borderRadius: const BorderRadius.all(const Radius.circular(8.0))
                    ),
                    margin: const EdgeInsets.all(4.0),
                    child: new Image.asset('images/2.jpg'),
                  )
                ),
                new Expanded(
                  child: new Container(
                    width: 150.0,
                    height: 150.0,
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 10.0,color:Colors.blueGrey),
                      borderRadius: const BorderRadius.all(const Radius.circular(8.0))
                    ),
                    margin: const EdgeInsets.all(4.0),
                    child: new Image.asset('images/3.jpg'),
                  )
                ),
              ],
            ),
            new Row(
              children: <Widget>[
                new Expanded(
                  child: new Container(
                    width: 150.0,
                    height: 150.0,
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 10.0,color:Colors.blueGrey),
                      borderRadius: const BorderRadius.all(const Radius.circular(8.0))
                    ),
                    margin: const EdgeInsets.all(4.0),
                    child: new Image.asset('images/1.jpg'),
                  )
                ),
                new Expanded(
                  child: new Container(
                    width: 150.0,
                    height: 150.0,
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 10.0,color:Colors.blueGrey),
                      borderRadius: const BorderRadius.all(const Radius.circular(8.0))
                    ),
                    margin: const EdgeInsets.all(4.0),
                    child: new Image.asset('images/2.jpg'),
                  )
                ),
                new Expanded(
                  child: new Container(
                    width: 150.0,
                    height: 150.0,
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 10.0,color:Colors.blueGrey),
                      borderRadius: const BorderRadius.all(const Radius.circular(8.0))
                    ),
                    margin: const EdgeInsets.all(4.0),
                    child: new Image.asset('images/3.jpg'),
                  )
                ),
              ],
            )
          ],
        ) ,
      ),
    );
  }
}
