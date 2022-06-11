$('document').ready(function () {
  /*
   * main.js 의 위치가 head 에 있어서
   * body 요소들을 읽기 전에 실행되기 때문에 오류가 발생합니다.
   * 문서가 다 준비되고 나서 실행되도록 document ready 상태에서 실행되도록 하였습니다.
   */

  /* 포트폴리오 : Swiper 슬라이더를 적용합니다. */
  const portfolioSwiper = new Swiper('.portfolio-slides', {
    // default parameters
    slidesPerView: 4,
    spaceBetween: 30,

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // navigation
    navigation: {
      nextEl: '.portfolio-slide-wrap .next',
      prevEl: '.portfolio-slide-wrap .prev',
    },

    // responsive
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });

  /* 모바일 : 메뉴 토글 버튼 */
  const
    menuToggleBtn = $('.menu-toggle-btn'),
    mainMenu = $('.main-menu');
  menuToggleBtn.click(function () {
    /* fixme : jQuery slide 적용 시 인라인 스타일로 display:none 이 추가되면서
    *   모바일 화면이 가로로 회전될 때 상단 메뉴가 안 보이게 됨 */
    const opened = mainMenu.hasClass('opened');
    if (opened) {
      mainMenu.removeClass('opened');
    } else {
      mainMenu.addClass('opened');
      mainMenu.show();
    }
  });
}); // document ready
