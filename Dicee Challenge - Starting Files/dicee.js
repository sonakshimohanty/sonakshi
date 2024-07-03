var random=Math.floor(Math.random()*6)+1;
var randomimg="dice"+random+".png";
var randomsource="./images/"+randomimg;
var image = document.querySelectorAll("img")[0];
image.setAttribute("src",randomsource);

var random1=Math.floor(Math.random()*6)+1;
var randomimg1="dice"+random1+".png";
var randomsource1="./images/"+randomimg1;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomsource1);

if(random>random1){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 win";
}
else if(random<random1){
    document.getElementsByTagName("h1")[0].innerHTML="player 2 win";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="its tie";
}