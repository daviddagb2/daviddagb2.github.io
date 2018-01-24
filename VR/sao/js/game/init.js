

/*Var declaration*/
      //---------------------------------------------
      AFRAME.registerComponent('log', {
        schema: {type: 'string'},
        init: function () {
          var stringToLog = this.data;
          console.log(stringToLog);
        }
      });

  
      //--------------------------------------------
      AFRAME.registerComponent('set-sky', {
        schema: {default: ''},
        init() {

          createjs.Sound.registerSound("assets/audio/music.mp3", "x");
       

          const sky = document.querySelector('a-sky');

          this.el.addEventListener('click', () => {
            console.log(this.data);
            sky.setAttribute('src', this.data);
          });


          // MOUSE ENTER EVENT
          this.el.addEventListener('mouseenter', () => {
                console.log("enter to enter");
              /*  var vid = document.getElementById("bgmusic"); 
                vid.play(); */
                 createjs.Sound.play("x");
                
           });


          // MOUSE ENTER EVENT
          this.el.addEventListener('mouseleave', () => {
                console.log("leave object");
                /*var vid = document.getElementById("bgmusic"); 
                vid.pause(); */
                createjs.Sound.stop("x");
          });

        }
      });


//--------------------------------------------
      AFRAME.registerComponent('init-anim', {
        schema: {default: ''},
        init() {

          createjs.Sound.registerSound("assets/audio/navigate.wav", "nav");
          
          //const sky = document.querySelector('a-sky');
          
          var sceneEl = document.querySelector('a-scene');
          console.log(sceneEl.querySelector('#myTimeline'));

          var mytm = sceneEl.querySelector('#myTimeline');
          console.log(mytm);

          this.el.addEventListener('click', () => {
            console.log(this.data);
            //sky.setAttribute('src', this.data);            
            createjs.Sound.play("nav");
          });

          // MOUSE ENTER EVENT
          this.el.addEventListener('mouseenter', () => {
                console.log("enter to enter");               
           });

          // MOUSE ENTER EVENT
          this.el.addEventListener('mouseleave', () => {
                console.log("leave object");
          });

        }
      });




//------------------------------------------
AFRAME.registerComponent('begingame', {
  schema: {type: 'boolean', default: false},
  init: function () {

  	var sceneEl = document.querySelector('#txtWelcome1');
  	console.log(sceneEl);


  	createjs.Sound.registerSound("assets/audio/music_rpg_town.mp3", "rpgtown");


    var stringToLog = this.data;
    console.log(stringToLog);
  },
  update: function () {

  		var isactive = this.data;
    	console.log(isactive);
    	if(isactive == true){
    		console.log("se actualizo la escenaaa")
    		createjs.Sound.play("rpgtown");
    	}
  		
  }




});