/**
*! 프로그램 세팅값 -- obj 인자값

obj = {
    container = '.jang-slide';
    stageViewDefault = 4;	// 스테이지에 보여질 개수 기준값
    moveCnt = 1; // 한번에 움직여 지는 수 // ? 아직 미구현
    speed = 300;
}
*/

function JYUSlide(obj){
    /**
    *! 전역변수
    */

    this.$container = $(container);
    this.$stage = this.$container.find('.slide-stage');
    this.$wrapper = this.$container.find('.slide-wrapper');
    this.$slide = this.$container.find('.slide');
    this.$btPrev = this.$container.find('.bt-prev');
    this.$btNext = this.$container.find('.bt-next');
    this.$pagerWrapper = this.$container.find('.pager-wrapper');

    this.slideCnt = this.$slide.length; //슬라이드의 총 개수 length
    this.slideLast = this.slideCnt - 1; // 슬라이드의 마지막 index 
    this.slideWid;	// 반응형 - 슬라이드의 width
    this.stageView;	// 반응형 - 스테이지에 보여질 슬라이드 개수 - 변하는 값
    this.now = 0;
    this.direction = 1; //1: 오른쪽으로 이동(Prev) / -1: 외쪽으로 이동(Next)
    this.target;	// Animation($wrapper)될 left값
    return this;
}