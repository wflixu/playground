var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}
requirejs.config({
  baseUrl: 'src',
  paths: {
    jquery: 'lib/jquery',
    angular: 'lib/angular',
    angularRoute: 'lib/angular-route',
    angularMocks: 'lib/angular-mocks'
  },
  shim: { underscore: { exports: '_' } },
  deps: tests, // RequireJS完成之后就启动测试
  callback: window.__karma__.start
});
