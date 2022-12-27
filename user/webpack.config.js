const path = require("path");
// import path from 'path';

module.exports = {
   name: "boricha-setting",
   mode: "development", //실 서비스 production
   devtool: "eval", //빠르게
   resolve: {
      extensions: [".js", ".jsx"], // 아래의 entry에 적지않은 확장자들을 여기서 찾아서 맞춰준다.
   },

   //중요
   entry: {
      app: ["./client"], // client.jsx에서 다른 파일을 불러올 경우 따로 설정 할 필요는 없다.
   }, //입력

   module: {
      rules: [
         {
            test: /\.jsx?/, //js파일과 jsx파일을 이 룰을 적용하겠다는 의미.
            loader: "babel-loader", // babel-loader를 적용해 문법호환이 가능하게 만들기위함
            options: {
               presets: [
									[
                     "@babel/preset-env",  
                     {
                        targets: {
														// 현재 포함 2버전만지원 그리고 한국에서 점유율 5%이상 지원
                        
                           browsers: ["> 5% in KR", "last 2 chrome versions"],  },
									debug: true,
                     },
                  ], 
									"@babel/preset-react"], //플러그인의 모음
               plugins: ["@babel/plugin-proposal-class-properties"],
            }, //바벨의 옵션
         },
      ],
   }, //entry 의 파일을 읽고 적용할 module

   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/dist/',
   },
   devServer: {
      devMiddleware: { publicPath: '/dist' },
      static: { directory: path.resolve(__dirname) },
      hot: true
   },
};