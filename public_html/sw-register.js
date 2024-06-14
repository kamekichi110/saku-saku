if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      //今回はDocRoot以下をServiceWorkerのスコープとします
      navigator.serviceWorker.register("./sw.js", { scope: "./" }).then(
        function (registration) {
          // 登録成功
          console.log(
            "サービスワーカーのスクリプトの登録に成功しました。スコープ情報: ",
            registration.scope
          );
          var VerInfo = checkVer();
          if(VerInfo === true) {
            console.log('最新バージョンであることを確認しました。');
          } else if(VerInfo === false) {
            window.alert('利用可能なアップデートが\n提供されています。\n更新プログラムを実行します。');
            registration.update();
          }
        },
        function (err) {
          // 登録失敗
          console.log("サービスワーカーのスクリプトの登録に失敗しました。エラー情報: ", err);
        }
      );
    });
  }

function checkVer() {
    var jsonDataInfo;
    loadJson('./now-version.json').then(data => {
        jsonDataInfo = data;
    })
    var latestVerData = localStorage.getItem('pwa-info');
    if(latestVerData) {
    var versionInfo = JSON.parse(latestVerData);
    console.log(versionInfo);
    var version = versionInfo.ver;
    if(version === jsonDataInfo.version) {
        console.log('最新バージョンをご利用中です。');
        return true;
    } else {
        var jsonConverted = JSON.stringify(jsonDataInfo);
        localStorage.setItem('pwa-info', jsonConverted);
        console.log('新しいバージョンが利用可能です。\nバージョンを更新します');
        return false;
    }
    } else {
        var jsonConverted = JSON.stringify(jsonDataInfo);
        localStorage.setItem('pwa-info', jsonConverted);
        console.log('最新バージョンをご利用中です。');
        return true;
    }
}