
var Game = {

	rejoueBtn : 0,
	audio : 0,
	choix : -1,
	//
	//  preload
	//
	preload: function() {

	    game.load.image("button", "./assets/images/button-92x31.png", false);
		game.load.audio('bravo', 'assets/audio/Fr-bravo.ogg');
		game.load.audio('recommencer', 'assets/audio/Fr-recommencer.ogg');

	    // chargement des images
	    for (i = 1 ; i<= NbImagesTotale; i++) {
	    	game.load.image("img"+i, "./assets/images/"+i+".png", false);	
	    }
	    
	    // chargement des son
	    for (i = 1 ; i<= NbImagesTotale; i++) {
			game.load.audio('son'+i, 'assets/audio/'+i+'.ogg');
		}
		

	},
	//
	// click
	//
	click : function() {
		this.audio.play();
	},
	//
    // 
    //
    clickImage: function (button){

		console.log('my:'+button.my+' Choix:'+this.choix);

       	if (button.my == this.choix) {
			this.bravoSon.play();

			this.state.start('Game');
    	}
       	else {
       		this.recommencerSon.play();
       	}
        // selection le bouton
        button.tint = 0x0000ff;        
    },
	//
	//  create
	//
	create : function()  {
		var startList = new Array();
		var choixList = new Array();

		this.bravoSon = game.add.audio('bravo');
		this.recommencerSon = game.add.audio('recommencer');

		var pos = LargeurJeuxPixel / (NbImages + 1);


		// remplie un liste avec toute les images
		for(i = 1; i<= NbImagesTotale; i++) {
			startList.push(i);
		}

		console.log("startList" + startList)	;	
		// 
		for (i = 1; i <= NbImages; i++) {
			img = game.rnd.integerInRange(1,startList.length)-1; 
			
			console.log('-----');
			console.log('rnd :'+img);
			console.log("startList" + startList)	;
		
			val = startList[img];
			choixList.push(val);
			tmp = game.add.button(pos * (i - 1), 30, 'img'+val, this.clickImage, this);
			tmp.scale.setTo(0.5, 0.5);
			tmp.my = val;	

			console.log("choixList" + choixList)	;
			startList.splice( img, 1);
			
		}
	
		console.log("startList" + startList)	;
		console.log("choixList" + choixList)	;
		// 
		sonChoisi = game.rnd.integerInRange(1,choixList.length) - 1;
		this.choix = choixList[sonChoisi];
		console.log("choix" + this.choix);

		// bouton pour relancer le son du mot.
		this.rejoueBtn = game.add.button(pos * 3, 90, "button", this.click, this);
        this.rejoueBtn.addChild(new Phaser.Text(this.game, 6, 4, "Mot", { font: "bold 18px sans-serif", fill: '#ffffff' }));
        
		this.audio = game.add.audio('son'+sonChoisi);
        this.audio.play();

	},

	//
	// update
	//
	update : function() {
	}
	   
}