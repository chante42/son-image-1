
var game;


var LargeurJeuxPixel = 1024 ;
var HauteurJeuxPixel = 600;
var NbImagesColonne = 3;
var NbImagesTotale = 10;
var HauteurImage = 200;
var LargeurImage = 200;
var NbImages = 2;
var Score = 0;
var Config=null;
// Nombre de ligne dans le tableau de resultataa avant de changer de colonne.
var MaxResultColumn = 12;

// Create a new game instance 600px wide and 450px tall:
game = new Phaser.Game(LargeurJeuxPixel, HauteurJeuxPixel, Phaser.CANVAS, 'phaser-example');

function UrlParametre (sVar) {
  return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}


// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);
game.state.add('Game_Win', Game_Win);
game.state.add('Game_Resultat', Game_Resultat);
game.state.add('Game_Description', Game_Description);




// recupération du json de configuration
var  configFile = UrlParametre("config");
if ( configFile){
        console.log("config externe loading..."+configFile);

        $.getJSON("./assets/config.json/extern1.json", function(result) {
        	console.log("config externe loaded : "+Config);
        	Config = result;
        	NbImagesTotale = Config.objects.length;
        	
        	// initialise les compteurs:
			for (i = 0 ; i< NbImagesTotale; i++) {
			    Config.objects[i].enonce = 0;
			    Config.objects[i].bon1 = 0;
			    Config.objects[i].bon2 = 0;
			    Config.objects[i].faux = 0;
			}
        
        });
        
        
        
}
else {
    console.log("config interne");
    Config = {
        name : "interne",
        description : "description d'interne",
        objects : [
            {   img : './assets/images/cadeau.png', son : './assets/audio/Fr-cadeau.ogg', nom: 'cadeau'},
            {   img : './assets/images/fleur.png', son : './assets/audio/Fr-fleur.ogg', nom: 'fleur'},
            {   img : './assets/images/sapin.png', son : './assets/audio/Fr-sapin.ogg', nom: 'sapin'},
            {   img : './assets/images/feu.png', son : './assets/audio/Fr-feu.ogg', nom: 'feu'},
            {   img : './assets/images/cuillere.png', son : './assets/audio/Fr-cuillere.ogg', nom: 'cuillere'},
            {   img : './assets/images/fourchette.png', son : './assets/audio/Fr-fourchette.ogg', nom: 'fourchette'},
            {   img : './assets/images/couteau.png', son : './assets/audio/Fr-couteau.ogg', nom: 'couteau'},
            {   img : './assets/images/soleil.png', son : './assets/audio/Fr-soleil.ogg', nom: 'soleil'},
            {   img : './assets/images/nuage.png', son : './assets/audio/Fr-nuage.ogg', nom: 'nuage'},
            {   img : './assets/images/etoile.png', son : './assets/audio/Fr-etoile.ogg', nom: 'etoile'},
        ]
    }

    NbImagesTotale = Config.objects.length;

    // initialise les compteurs:
	for (i = 0 ; i< NbImagesTotale; i++) {
	    Config.objects[i].enonce = 0;
	    Config.objects[i].bon1 = 0;
	    Config.objects[i].bon2 = 0;
	    Config.objects[i].faux = 0;
	}
        
}




game.state.start('Menu');
//game.state.start('Game');