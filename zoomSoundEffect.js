// 画面の拡大率を監視する関数
function observeZoom() {
    // 監視する要素を取得（ここではbody要素を対象とする）
    var body = document.body;
  
    // MutationObserverを使用して要素の変更を監視
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        // 要素のスケールを取得
        var scale = getComputedStyle(body).transform;
  
        // スケールが変更された場合は拡大/縮小のイベントとして扱う
        if (scale !== 'none') {
          // 拡大/縮小のイベントが発生したら効果音を再生する
          playZoomSound();
          var audio = new Audio('sounds/click-sound.mp3');
      // 音声を再生する
      audio.play();
        }
      });
    });
  
    // 監視を開始
    observer.observe(body, { attributes: true, attributeFilter: ['style'] });
  }
  
  // 効果音を再生する関数
  function playZoomSound() {
    // 効果音の再生コードをここに追加する
    var audio = new Audio('sounds/click-sound.mp3');
      // 音声を再生する
      audio.play();
  }
  
  // 監視を開始
  observeZoom();  