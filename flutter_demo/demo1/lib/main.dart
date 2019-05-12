// import 'package:url_launcher/url_launcher.dart';
import 'package:flutter/material.dart';
// import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:io';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  void getWeatherData() async {
    try{
      
      HttpClient httpClient = new HttpClient();
      HttpClientRequest request = await httpClient.getUrl(
        Uri.parse('http://t.weather.sojson.com/api/weather/city/101030100')
      );
      HttpClientResponse response = await request.close();
      var result = await response.transform(utf8.decoder).join();
      print(result);
      httpClient.close();
    }catch(e){
      print('请求失败：$e');
    }
  }

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '使用第三方库',
      
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text('httpClient请求'),
        ),
        body:new Center(
          child: new RaisedButton(
            onPressed: getWeatherData,
            child:new Text('获取天气数据')
          ),
        ),
      ),
    );
  }
}


