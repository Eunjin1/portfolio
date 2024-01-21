$(document).ready(function () {
  
  $('#mo_nav > ul').hide();
  $('#menu_icon').click(function () {
    $('#mo_nav > ul').show();
    $('#menu_icon').hide();
  });
  $('#x_icon').click(function () {
    $('#mo_nav > ul').hide();
    $('#menu_icon').show();
  })
  $('.scroll_move').click(function () {
    $('#mo_nav > ul').hide();
    $('#menu_icon').show();
  }) // header_mo_menu

  $(".circle").each(function (index, node) {
    let perNum = $(this).attr('circleProgress');
    let fillColors = ["#ff6b6b", "#ee6123", "#f0c32d", "#1a535c", "#4ecdc4"] // 그래프의 색상 배열
    let fillColor = fillColors[index];

    $(this).circleProgress({
      size: 150, // 그래프 크기
      value: perNum / 100, // 그래프에 표시될 값
      startAngle: 300, // 시작지점
      thickness: 15, // 그래프 두께
      fill: { // 그래프 선 색
        color: fillColor
      },
      animation: {
        duration: 1200,
      },
      lineCap: "round", // 그래프 선 모양
      reverse: false // 그래프가 진행되는 방향
    });
  }); //circle 그래프


  $(".scroll_move").click(function(event) {
    console.log(".scroll_move");
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
  //header 스크롤이벤트

})//end