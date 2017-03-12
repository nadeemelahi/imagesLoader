/* copyright * 2016 * Nadeem Elahi * nadeem.elahi@gmail.com */
"use strict";

function ldimgs(imgsrclist,cb){
   var len = imgsrclist.length;
   var lddcount = 0;
   var imglist = [];
   for(var i=0; i<len; i++){
      ldimg(i,imgsrclist[i]);
   }
   function ldimg(i,imgsrc){
      var img = new Image();
      img.orderIdx = i;
      img.addEventListener("load", imgldd, false);
      img.src = imgsrc;
   }
   function imgldd(){
      imglist[this.orderIdx] = this;
      lddcount++;
      if(lddcount > len-1) cb(imglist);
   }
}

var imgList = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
load(imgList,function(imgs){
   //imgs is array of those image
});
