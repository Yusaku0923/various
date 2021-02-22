$(function() {
    var h = $(window).height();

    $('#wrap').css('display', 'none');
    $('#loader-bg ,#loader').height(h).css('display', 'block');
});

$(window).load(function() { //全ての読み込みが完了したら実行
    // sleep(5000);
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('#wrap').css('display', 'block');
});

function sleep(waitMsec) {
    var startMsec = new Date();

    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
}

//10秒たったら強制的にロード画面を非表示
// $(function(){
//   setTimeout('stopload()',10000);
// });

// function stopload(){
//   $('#wrap').css('display','block');
//   $('#loader-bg').delay(900).fadeOut(800);
//   $('#loader').delay(600).fadeOut(300);
// }