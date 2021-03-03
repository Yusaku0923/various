$(function() {
    var h = $(window).height();

    $('#wrap').css('display', 'none');
    $('#loader-bg ,#loader').height(h).css('display', 'block');
});

$(window).load(function() { //全ての読み込みが完了したら実行
    // sleep(300000);
    $('.right-upper-tx').delay(4000).queue(function() {
        $(this).show(); // はいチーズ表示
        $('.loading-tx').hide();
        $('.complete-tx').show();
    });
    // $('#flash').delay(4900).queue(function() {
    $('.p-flash').delay(5500).queue(function() {
        $(this).toggleClass('open');
        $('#loader-bg').delay(500).fadeOut(100);
        $('#loader').delay(500).fadeOut(100);
        $('#wrap').css('display', 'block');
        $('#flash').delay(1500).fadeOut(1000);
    });
    // $('#loader-bg').delay(4900).fadeOut(800);
    // $('#loader').delay(4600).fadeOut(300);
    // $('#wrap').css('display', 'block');
});

function sleep(waitMsec) {
    var startMsec = new Date();
    console.log('a');

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