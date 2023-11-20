document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0]; // 選択されたファイルを取得

  // video要素のIDを取得して、その要素を取得
  const videoPreview = document.getElementById('preview');

  // Fileオブジェクトが存在するかチェック
  if (file) {
    videoPreview.src = URL.createObjectURL(file);
  } else {
    videoPreview.src = '';
  }
});
var MvPosition = 0;
function MV() {
  if (MvPosition === 0) {
    document.getElementById('preview').currentTime = 0;
    document.getElementById('preview').play();
    MvPosition = 1;
  } else if (MvPosition === 1) {
    document.getElementById('preview').pause();
    MvPosition = 0;
  }
}
const def = "../def.png";
const smile = "../smile.png";
const img = document.getElementById("model");
const chatText = document.getElementById("chat");
const comment = document.getElementById("text");
function chat() {
  img.src = smile;
  comment.innerHTML = chatText.value;
  chatText.value = "";
  chatText.focus();
  setTimeout(() => {
    img.src = def;
    comment.innerHTML = "";
  }, 2000);
}
function preset() {
  img.src = def;
  document.getElementById('preview').src = "";
}
window.onload = preset();