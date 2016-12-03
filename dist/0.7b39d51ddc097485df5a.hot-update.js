webpackHotUpdate(0,{

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	var p5 = __webpack_require__(39);
	new p5();

	var video;
	var referencex1 = [];
	var referencex2 = [];
	var referencey1 = [];
	var referencey2 = [];
	var actualx1 = [];
	var actualy1 = [];
	var actualx2 = [];
	var actualy2 = [];
	var reference_state = false;
	window.setup = function() {
	  createCanvas(320,240);
	  video = p5.createCapture(VIDEO);
	  video.size(320,240);

	}

	window.draw = function() {
	  rect(400,100,300,200)
	}

	window.keyPressed = function() {

	  if(reference_state == false){
	    image(video,0,0);
	    for(var x = 0;x<20;x++){
	      referencex1[x] = get(x*16,10)[0];
	      referencex2[x] = get(x*16,230)[0];
	    }
	    for(var y = 0;y<16;y++){
	      referencey1[y] = get(10,y*15)[0];
	      referencey2[y] = get(310,y*15)[0];
	    }

	    reference_state = true;
	  }
	  else{
	    var difX1 = 0;
	    var difY1 = 0;
	    var difX2 = 0;
	    var difY2 = 0;
	    var FinalX = 0;
	    var FinalY = 0;
	    line(0,10,320,10);
	    line(0,230,320,230);
	    line(10,0,10,240);
	    line(320,0,320,240);
	    image(video,0,0);
	     for(var x = 0;x<20;x++){
	      actualx1[x] = get(x*16,10)[0];
	      actualx2[x] = get(x*16,230)[0];
	    }

	    for(var y = 0;y<16;y++){
	      actualy1[y] = get(10,y*15)[0];
	      actualy2[y] = get(310,y*15)[0];
	    }


	    for(var i = 0;i<20;i++){
	      difX1 = (abs(referencex1[i]-actualx1[i]))+difX1;
	      difX2 = (abs(referencex2[i]-actualx2[i]))+difX2;


	    }
	    for(var j = 0; j<15;j++){
	      difY1 = (abs(referencey1[j]-actualy1[j]))+difY1;
	      difY2 = (abs(referencey2[j]-actualy2[j]))+difY2;
	    }


	    FinalX = difX1+difX2;
	    FinalY = difY1+difY2;
	    if(abs(FinalX-FinalY) > 90){
	      if(FinalX>FinalY){
	        print('Verticle')
	      }
	      if(FinalY>FinalX){
	        print('Horizontal')
	      }
	    }

	  }

	}


/***/ }

})