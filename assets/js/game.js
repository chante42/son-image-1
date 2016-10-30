
var Game = {

	rejoueBtn : 0,
	audio : 0,
	//
	//  preload
	//
	preload: function() {

	    game.load.image("button", "./assets/images/button-92x31.png", false);

	    // chargement des images
	    game.load.image("img1", "./assets/images/1.png", false);
	    game.load.image("img2", "./assets/images/2.png", false);
	    game.load.image("img3", "./assets/images/3.png", false);

	    // chargement des son
		game.load.audio('son1', 'assets/audio/1.ogg');
		game.load.audio('son2', 'assets/audio/2.ogg');
		game.load.audio('son3', 'assets/audio/3.ogg');

	},
	//
	// click
	//
	click : function() {
		this.audio.play();
	},
	//
	//  create
	//
	create : function()  {

		var pos = LargeurJeuxPixel / 4;
		var sprite1 = game.add.sprite(pos * 0, 30, 'img1');
		var sprite2 = game.add.sprite(pos * 1, 30, 'img2');
		var sprite3 = game.add.sprite(pos * 2, 30, 'img3');

		sprite1.scale.setTo(0.5, 0.5);
		sprite2.scale.setTo(0.5, 0.5);
		sprite3.scale.setTo(0.5, 0.5);
		
		// 
		sonChoisi = game.rnd.integerInRange(1,NbImages);

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