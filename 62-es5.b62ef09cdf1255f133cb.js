(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"0+Bq":function(e,t,i){"use strict";i.r(t),i.d(t,"ion_modal",(function(){return p}));var o=i("mrSG"),n=i("0t5z"),a=(i("ttJE"),i("N8eg"),i("jupw")),r=(i("ocqh"),i("CTpc")),s=i("Jky2"),d=i("v7+D"),l=i("NjEx"),c=function(e){var t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.4),o.addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").addAnimation([i,o])},h=function(e){var t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)(),n=e.querySelector(".modal-wrapper"),r=n.getBoundingClientRect();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.4,0),o.addElement(n).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY("+(e.ownerDocument.defaultView.innerHeight-r.top)+"px)"),t.addElement(e).easing("ease-out").duration(250).addAnimation([i,o])},m=function(e){var t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([i,o])},b=function(e){var t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)(),n=e.querySelector(".modal-wrapper");return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),o.addElement(n).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,o])},p=function(){function e(e){var t=this;Object(n.l)(this,e),this.presented=!1,this.mode=Object(n.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.onBackdropTap=function(){t.dismiss(void 0,r.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onLifecycle=function(e){var i=t.usersElement,o=u[e.type];if(i&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});i.dispatchEvent(n)}},Object(r.e)(this.el),this.didPresent=Object(n.d)(this,"ionModalDidPresent",7),this.willPresent=Object(n.d)(this,"ionModalWillPresent",7),this.willDismiss=Object(n.d)(this,"ionModalWillDismiss",7),this.didDismiss=Object(n.d)(this,"ionModalDidDismiss",7)}return e.prototype.present=function(){return Object(o.b)(this,void 0,void 0,(function(){var e,t,i;return Object(o.e)(this,(function(o){switch(o.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".modal-wrapper")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),i=this,[4,Object(d.a)(this.delegate,e,this.component,["ion-page"],t)];case 1:return i.usersElement=o.sent(),[4,Object(l.a)(this.usersElement)];case 2:return o.sent(),[2,Object(r.f)(this,"modalEnter",c,m)]}}))}))},e.prototype.dismiss=function(e,t){return Object(o.b)(this,void 0,void 0,(function(){var i;return Object(o.e)(this,(function(o){switch(o.label){case 0:return[4,Object(r.g)(this,e,t,"modalLeave",h,b)];case 1:return(i=o.sent())?[4,Object(d.b)(this.delegate,this.usersElement)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,i]}}))}))},e.prototype.onDidDismiss=function(){return Object(r.h)(this.el,"ionModalDidDismiss")},e.prototype.onWillDismiss=function(){return Object(r.h)(this.el,"ionModalWillDismiss")},e.prototype.render=function(){var e,t,i=Object(n.e)(this);return Object(n.i)(n.a,{"no-router":!0,"aria-modal":"true",class:Object.assign((e={},e[i]=!0,e),Object(s.b)(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(n.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(n.i)("div",{role:"dialog",class:(t={},t["modal-wrapper"]=!0,t[i]=!0,t)}))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"},enumerable:!0,configurable:!0}),e}(),u={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);