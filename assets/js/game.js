
var Game = {
	//
	//  preload
	//
	preload: function() {

	    game.load.tilemap('matching', './assets/images/phaser_tiles.json', null, Phaser.Tilemap.TILED_JSON);

		if (UrlParametre("typeMemory") == 'AlphaCursif'){
				game.load.image('tiles', './assets/images/phaser_tiles - Alpha cursif.png');
		}
		else if (UrlParametre("typeMemory") == 'AlphaScript'){
				game.load.image('tiles', './assets/images/phaser_tiles - Alpha script.png');
		}
		else if (UrlParametre("typeMemory") == 'CursifScript'){
				game.load.image('tiles', './assets/images/phaser_tiles - cursif script.png');
		}
		else {
	    	game.load.image('tiles', './assets/images/phaser_tiles.png');
	    }
	    game.load.image('fondScore', './assets/images/fondScore.png');
	    game.load.image("button", "./assets/images/button-92x31.png", false);

	    // Repositionne toutes les variables ici, pour le cas ou on rejoue
	    //
	    masterCounter=0;
	    timeLimit = 1 * (LargeurJeux * HauteurJeux) * (LargeurJeux * HauteurJeux)/LargeurJeux + game.time.totalElapsedSeconds();

	    timeCheck = 0;
		flipFlag = false;

		startList = new Array();
		squareList = new Array();

		InfoPosX = LargeurJeux *HauteurCase +20;
		timesUp = '+';
	},


	//
	//  create
	//
	create : function()  {

		map = game.add.tilemap('matching');


	    map.addTilesetImage('Desert', 'tiles');

	    //tileset = game.add.tileset('tiles');

	    layer = map.createLayer('Ground');//.tilemapLayer(0, 0, 600, 600, tileset, map, 0);

	    //layer.resizeWorld();

	    marker = game.add.graphics();
	    marker.lineStyle(2, 0xFF0000, 1);
	    marker.drawRect(0, 0, HauteurCase, HauteurCase);
	    marker.x = 0;
	    marker.y = 0;

	    this.randomizeTiles();
   

	    this.leftKey   = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	    this.rightKey  = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	    this.downKey   = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	    this.upKey     = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	    this.spaceKey  = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	    //  Stop the following keys from propagating up to the browser
	    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, 
	        Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR ]);
	    
	    fondScore = game.add.tileSprite(LargeurJeux* HauteurCase, 0, 210 , 800,'fondScore');

	    // positionne le bouton menu
	    var menuBtn = game.add.button(InfoPosX, 100, "button", () => {this.state.start('Menu');}, this);
        menuBtn.addChild(new Phaser.Text(this.game, 17, 3, "Menu", { font: "bold 22px sans-serif", fill: '#ffffff' }));

	    //debug
	    //flipOverAll();
	},

	//
	// update
	//
	update : function() {
	},
	   
	//
	// countDownTimer
	//
	countDownTimer: function() {
	    mySeconds = game.time.totalElapsedSeconds();
	    myCountdownSeconds = timeLimit - mySeconds;
	    
	    if (myCountdownSeconds <= 0) 
	        {
	        // time is up
	        timesUp = 'Time is up!'; 
	        myCountdownSeconds = 0;
	         this.state.start('Game_Over');

	    }
	}

}