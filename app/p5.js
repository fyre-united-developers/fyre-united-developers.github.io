var p5 = require('p5');
p5.dom = require('p5/lib/addons/p5.dom');




module.exports = {
  promptPassword: function(callback) {
    var password = "";
    var p5Dialog = document.getElementById("p5");
    var p5CurrentCombo = document.getElementById("p5__current-combo")
    var p5State = document.getElementById("p5__state");
    var p5Holder = document.getElementById("p5__holder");

    p5Holder.hidden = false;

    function displayState(state) {
      p5State.textContent = "Currently: " + state;
    }

    function updateCombo(gestures) {
      p5CurrentCombo.textContent = "Current combination: " + gestures.join('-');
    }

    new p5(function (p) {
      var video;
      var referencex1 = [];
      var referencex2 = [];
      var referencey1 = [];
      var referencey2 = [];
      var actualx1 = [];
      var actualy1 = [];
      var actualx2 = [];
      var actualy2 = [];
      var FinalState = 0;
      var ges = [];
      var count = 0;
      var reference_state = false;
      p.setup = function() {
        require('./blurAll')();
        dialogPolyfill.registerDialog(p5Dialog);
        p5Dialog.showModal();
        p.createCanvas(320,240).parent('p5__holder');
        video = p.createCapture(p.VIDEO).parent('p5__holder');
        video.size(320,240);
      };

      p.draw = function() {
          if(reference_state == true){
          var difX1 = 0;
          var difY1 = 0;
          var difX2 = 0;
          var difY2 = 0;
          var FinalX = 0;
          var FinalY = 0;
          p.image(video,0,0);
           for(var x = 0;x<20;x++){
            actualx1[x] = p.get(x*16,10)[0];
            actualx2[x] = p.get(x*16,230)[0];
          }

          for(var y = 0;y<16;y++){
            actualy1[y] = p.get(10,y*15)[0];
            actualy2[y] = p.get(310,y*15)[0];
          }


          for(var i = 0;i<20;i++){
            difX1 = (p.abs(referencex1[i]-actualx1[i]))+difX1;
            difX2 = (p.abs(referencex2[i]-actualx2[i]))+difX2;


          }
          for(var j = 0; j<15;j++){
            difY1 = (p.abs(referencey1[j]-actualy1[j]))+difY1;
            difY2 = (p.abs(referencey2[j]-actualy2[j]))+difY2;
          }


          FinalX = difX1+difX2;
          FinalY = difY1+difY2;
          if(p.abs(FinalX-FinalY) > 90){
            if(FinalX>FinalY){
              displayState('Vertical');
              FinalState = 1;
            }
            if(FinalY>FinalX){
              displayState('Horizontal');
              FinalState = 2;
            }
          }
          }

      }

      p.keyPressed = function(){
        if (p.keyCode === p.ENTER) {
          p.remove();
          p5Dialog.close();
          callback(ges.join(''));
        } else {
          if(reference_state == false){
            p.image(video,0,0);
            for(var x = 0;x<20;x++){
              referencex1[x] = p.get(x*16,10)[0];
              referencex2[x] = p.get(x*16,230)[0];
            }
            for(var y = 0;y<16;y++){
              referencey1[y] = p.get(10,y*15)[0];
              referencey2[y] = p.get(310,y*15)[0];
            }

            reference_state = true;
          }
          else{
            if(FinalState == 1){
              ges[count] = "Vertical";
            }
            else{
              ges[count] = "Horizontal";
            }
            count = count+1;
            updateCombo(ges);
          }
        }
      }
    });
  }
};
