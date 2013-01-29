enchant(); //…①
var picNumber = 0; //…②
window.onload = function() { //…③
var game = new Game(320, 480); //…④
game.preload('http://enchantjs.com/assets/images/chara3.gif'); //…⑤
game.onload = function() { //…⑥
var bear = new Sprite(96, 96); //…⑦
bear.image = //…⑧
game.assets['http://enchantjs.com/assets/images/chara3.gif'];
bear.frame = 0; //…⑨
bear.addEventListener(Event.ENTER_FRAME, function() { //…⑩
picNumber++; //…⑪
if (picNumber > 3) { //…⑫
picNumber = 0;
}
bear.frame = picNumber; //…⑬
bear.x += 2; //…⑭
});
game.rootScene.addChild(bear); //…⑮
};
game.start(); //…⑯
};