(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{V0P2:function(t,e,i){"use strict";i.r(e),i.d(e,"amplify_s3_image_picker",function(){return l});var a=i("hKmi"),c=i("Nt7R"),r=i("JIIv"),h=i("H8iN"),n=i("sPRy"),s=(i("/vcS"),i("l1VB"),i("Y0ez"));const o=new c.a("S3ImagePicker"),l=class{constructor(t){Object(a.k)(this,t),this.contentType="binary/octet-stream",this.level=h.a.Public,this.headerTitle=n.a.IMAGE_PICKER_TITLE,this.headerHint=n.a.IMAGE_PICKER_HINT,this.placeholderHint=n.a.IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=n.a.IMAGE_PICKER_BUTTON_TEXT,this.handlePick=async t=>{const{path:e="",level:i,track:a,identityId:c,fileToKey:r}=this,h=e+Object(s.b)(t,r);try{await Object(s.e)(h,t,i,a,t.type,o),this.src=await Object(s.c)(h,i,a,c,o)}catch(n){throw o.error(n),new Error(n)}}}render(){return Object(a.i)(a.b,null,Object(a.i)("slot",{name:"photo-picker"},Object(a.i)("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:r.a.get(this.headerTitle),headerHint:r.a.get(this.headerHint),placeholderHint:r.a.get(this.placeholderHint),buttonText:r.a.get(this.buttonText)})))}}}}]);