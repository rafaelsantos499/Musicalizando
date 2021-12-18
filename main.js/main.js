(()=>{"use strict";const e=document.querySelectorAll(".know-more"),t=document.querySelectorAll(".content-description");e.forEach(((e,i)=>{e.addEventListener("click",(()=>{!function(e){t[e].classList.toggle("active")}(i)}))})),function(e){const t=e.innerHTML.split("");e.innerHTML="",t.forEach(((t,i)=>{setTimeout((()=>{e.innerHTML+=t}),100*i)}))}(document.querySelector('[data-anime="typewriter-p"]')),function(){const e=document.getElementById("btn-mobile"),t=document.querySelector(".sidebar-menu"),i=document.querySelector(".hamburger"),s=["click","touchstart"];function n(n){n.preventDefault(),e.classList.add("active"),t.classList.add("active"),i.classList.add("active"),function(s,n,o){const r=document.documentElement,a="data-outside";function c(o){s.contains(o.target)||(s.removeAttribute(a),n.forEach((e=>{r.removeEventListener(e,c)})),e.classList.remove("active"),t.classList.remove("active"),i.classList.remove("active"))}s.hasAttribute(a)||(n.forEach((e=>{setTimeout((()=>{r.addEventListener(e,c)}),0)})),s.setAttribute(a,""))}(t,s)}s.forEach((t=>{e.addEventListener(t,n)}));const o=document.querySelectorAll("#header");function r(){const e=.2*window.innerHeight;o.forEach((t=>{const s=t.getBoundingClientRect().top-e;-t.offsetHeight>s?i.classList.add("active-color"):i.classList.remove("active-color")}))}r(),window.addEventListener("scroll",r);const a=document.querySelectorAll('[data-Menu="closer-menu"] a[href^="#"]');document.querySelector('[data-Menu="closer-menu"]').addEventListener("click",(function(){a.forEach((()=>{e.classList.remove("active"),t.classList.remove("active"),i.classList.remove("active")}))}))}(),new Swiper(".mySwiper",{slidesPerView:2,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{900:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:1,spaceBetween:10},360:{slidesPerView:1,spaceBetween:20}}}),function(){const e=document.querySelectorAll('[data-anime="show-scroll"]');function t(){const t=.7*window.innerHeight;e.forEach((e=>{e.getBoundingClientRect().top-t<0?e.classList.add("active"):e.classList.contains("active")&&e.classList.remove("active")}))}window.addEventListener("scroll",t),t()}(),function(){const e=document.querySelector("#galery"),t=document.querySelector(".modal"),i=document.querySelector(".close");e.addEventListener("click",(()=>{t.classList.add("active")})),i.addEventListener("click",(()=>{t.classList.remove("active")}))}();const i=new class extends class{constructor(e,t){this.slide=document.querySelector(e),this.wrapper=document.querySelector(t),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}transition(e){this.slide.style.transition=e?"transform .3s":""}moveSlide(e){this.dist.movePosition=e,this.slide.style.transform=`translate3d(${e}px, 0px, 0px)`}updatePosition(e){return this.dist.movement=1.6*(this.dist.startX-e),this.dist.finalPosition-this.dist.movement}onStart(e){let t;"mousedown"===e.type?(e.preventDefault(),this.dist.startX=e.clientX,t="mousemove"):(this.dist.startX=e.changedTouches[0].clientX,t="touchmove"),this.wrapper.addEventListener(t,this.onMove),this.transition(!1)}onMove(e){const t="mousemove"===e.type?e.clientX:e.changedTouches[0].clientX,i=this.updatePosition(t);this.moveSlide(i)}onEnd(e){const t="mouseup"===e.type?"mousemove":"touchmove";this.wrapper.removeEventListener(t,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}changeSlideOnEnd(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}addSlideEvent(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}slidePosition(e){const t=(this.wrapper.offsetWidth-e.offsetWidth)/2;return-(e.offsetLeft-t)}slidersConfig(){this.slideArray=[...this.slide.children].map((e=>({position:this.slidePosition(e),element:e})))}slideIndexNav(e){const t=this.slideArray.length-1;this.index={prev:e?e-1:void 0,active:e,next:e===t?void 0:e+1}}changeSlide(e){const t=this.slideArray[e].position;this.moveSlide(t),this.slideIndexNav(e),this.dist.finalPosition=t,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}changeActiveClass(){this.slideArray.forEach((e=>e.element.classList.remove(this.activeClass))),this.slideArray[this.index.active].element.classList.add(this.activeClass)}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}onResize(){setTimeout((()=>{this.slidersConfig(),this.changeSlide(this.index.active)}),1e3)}addResizeEvent(){window.addEventListener("resize",this.onResize)}init(){return this.bindEvents(),this.transition(!0),this.addSlideEvent(),this.slidersConfig(),this.addResizeEvent(),this.changeSlide(0),this}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=function(e,t){let i;return(...t)=>{i&&clearTimeout(i),i=setTimeout((()=>{e(...t),i=null}),200)}}(this.onResize.bind(this))}}{constructor(e,t){super(e,t),this.bindControlEvents()}addArrow(e,t){this.prevElement=document.querySelector(e),this.nextElement=document.querySelector(t),this.addArrowEvent()}addArrowEvent(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const e=document.createElement("ul");return e.dataset.control="slide",this.slideArray.forEach(((t,i)=>{e.innerHTML+=`<li><a href="#slide${i+1}">${i+1}</a></li>`})),this.wrapper.appendChild(e),e}eventControl(e,t){e.addEventListener("click",(e=>{e.preventDefault(),this.changeSlide(t)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}activeControlItem(){this.controlArray.forEach((e=>{e.classList.remove(this.activeClass)})),this.controlArray[this.index.active].classList.add(this.activeClass)}addControl(e){this.control=document.querySelector(e)||this.createControl(),this.controlArray=[...this.control.children],this.activeControlItem(),this.controlArray.forEach(this.eventControl)}bindControlEvents(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}(".slide",".wrapper");i.init(),i.addArrow(".prev",".next"),i.addControl()})();