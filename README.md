# 20250502上課筆記
**第一條指令**
```javascript=
let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始影像，僅顯示在畫布上
}

function draw() {
  background('#b8bedd'); // 背景顏色為 b8bedd
  let x = (width - capture.width) / 2; // 計算影像的水平中心位置
  let y = (height - capture.height) / 2; // 計算影像的垂直中心位置
  image(capture, x, y, capture.width, capture.height); // 在畫布中間顯示影像
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新影像大小
}

```
