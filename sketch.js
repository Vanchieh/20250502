let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始影像，僅顯示在畫布上

  // 建立與視訊畫面相同大小的圖形
  overlayGraphics = createGraphics(capture.width, capture.height);
  drawOverlayGraphics(); // 繪製 overlayGraphics 的內容
}

function draw() {
  background('#b8bedd'); // 背景顏色為 b8bedd
  translate(width, 0); // 將畫布的原點移到右上角
  scale(-1, 1); // 水平翻轉畫布

  let x = (width - capture.width) / 2; // 計算影像的水平中心位置
  let y = (height - capture.height) / 2; // 計算影像的垂直中心位置

  // 顯示攝影機影像
  image(capture, x, y, capture.width, capture.height);

  // 顯示 overlayGraphics 圖形在視訊畫面上方
  image(overlayGraphics, x, y, capture.width, capture.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新影像大小
  overlayGraphics = createGraphics(capture.width, capture.height); // 重新建立 overlayGraphics
  drawOverlayGraphics(); // 重新繪製 overlayGraphics 的內容
}

function drawOverlayGraphics() {
  overlayGraphics.background(0); // 設定背景為黑色
  for (let i = 0; i < overlayGraphics.width; i += 20) {
    for (let j = 0; j < overlayGraphics.height; j += 20) {
      let col = capture.get(i, j); // 擷取 capture 對應位置的顏色
      overlayGraphics.fill(col); // 設定圓的顏色
      overlayGraphics.noStroke();
      overlayGraphics.ellipse(i + 10, j + 10, 15, 15); // 繪製圓
    }
  }
}
