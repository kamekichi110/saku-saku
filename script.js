// scripts.js

const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');

        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', function () {
      var loadingContainer = document.getElementById('loadingContainer');
      loadingContainer.style.display = 'none';
    });

    function topPage() {
        window.location.href = "https://si-kuma.f5.si/"
    }


    
    const images = [
        'bg/image1.jpeg',
        'bg/image2.jpeg',
        'bg/image3.jpeg',
        'bg/image4.jpeg'
        // 追加の画像パスを必要な数だけ追加
      ];
      let index = 0;
      
      function changeBackground() {
        document.body.style.opacity = 0; // フェードアウト
        setTimeout(function() {
          document.body.style.backgroundImage = `url(${images[index]})`;
          index = (index + 1) % images.length;
          document.body.style.opacity = 1; // フェードイン
        }, 1000); // フェードアウトの1秒後に切り替えとフェードインを行う
      }
      
      setInterval(changeBackground, 5000); // 5秒ごとに背景画像を切り替える
      
      // 初期背景画像の設定（必要に応じて）
      document.body.style.backgroundImage = `url(${images[index]})`;
      