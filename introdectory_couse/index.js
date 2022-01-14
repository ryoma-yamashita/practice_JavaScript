// 変数
let word = 'Hello World!';

// word = 'Hello World2!!';

// 定数
const bigWord = 'He..Hell...Hello World!';

// bigWord = 'Hello World2!'

const inoki = ['いーち', 'にー', 'さーん', 'ダーー！！'];

// ループ文
// let index = 0;
// while(index < inoki.length) {
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++; // 無限ループにならないよう必ず記述
// }

// if / else
// if(inoki.length > 5) {
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...！');
// }

// 関数
const test = (arg) => {
  // ここに実行したい命令を書く
  if(inoki.length > arg) {
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...！');
  }
};

// オブジェクト
const object = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  wordTo: () => {
    console.log('Hello World!');
  }
};

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  // 命令を書く
  window.alert('Hello World!');
});