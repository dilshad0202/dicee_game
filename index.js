
function onclickss(){
    var firstRandomNumber = Math.floor(Math.random()* 6) + 1;
    var secondRandomNuber = Math.floor(Math.random() * 6) + 1
    
    
    
    var firstDiceImage = "images/"+"dice"+firstRandomNumber+".png";
    var secondDiceImage = "images/"+"dice"+secondRandomNuber+".png";
    
    
    document.querySelectorAll("img")[0].setAttribute("src",firstDiceImage)
    document.querySelectorAll("img")[1].setAttribute("src",secondDiceImage)
    
    var statuss =  document.querySelector("h1");
    
    if(firstRandomNumber > secondRandomNuber){
    
    statuss.innerHTML = "Player 1 Wins"   
        
    }
    else if(firstRandomNumber < secondRandomNuber){
        statuss.innerHTML = "Player 2 Wins"
    }
    else{
        statuss.innerHTML = "Draw"
    }
    
     
}

