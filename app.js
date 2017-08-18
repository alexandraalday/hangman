$(() => {

// console.log('loaded bro')


  let lives = 7;
  let input = "";

  const wordsArray = ["BALLOON", "AMERICA", "GRANDMOTHER", "AIRPLANE", "BOAT",
  "ORANGE", "POCKET", "WALKING", "HEARTBEAT", "DRINK", "BUTTER", "CHICKEN",
  "BEAUTIFUL", "FUTURE", "SURPRISE", "PENCIL", "BREAKFAST", "WILDLIFE", "BONES", "ISLAND", "DRAGON", "BROTHER", "IMPORTANT", "BAZOOKA"];
  
  let hiddenWord = "";
  let hiddenArray = [];
  
  let guessWord = [];
  let holderArray = [];


// RANDOM WORD AND PLACEHOLDERS
  
    hiddenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]; 
    for (let i = 0; i < hiddenWord.length; i++) { 
      guessWord.push(hiddenWord[i]);
      hiddenArray.push("_ "); 
  	}

     $(".hidden-word").append(hiddenArray);


// WIN OR LOSE MESSAGE MODAL

	const createModal = (message) => {
	let mdl = document.createElement('div')
	let mdlMessage = document.createElement('h1')

	mdlMessage.innerText = message;
	mdlMessage.textAlign = 'center'
	mdlMessage.style.margin = '30%'
	mdlMessage.style.backgroundColor = 'white'
	mdlMessage.style.borderRadius = '3%'
	mdlMessage.style.padding = '2%'

	mdl.style.position = 'fixed'
	mdl.style.zIndex = '1'
	mdl.style.width = '100%'
	mdl.style.height = '100%'
	mdl.style.backgroundColor = "rgba(0,0,0,0.4)"
	mdl.id = 'game-over'

  	$('body').prepend(mdl)
  	$(mdl).append(mdlMessage)

}


// WIN EVENT

//need to tidy up this code in the future. 

    $(".letter-buttons .btn").click(function(){
		//hide button on click
        $(this).hide();
        let input = this.innerHTML; 
        for (let i = 0; i < hiddenWord.length; i++) { 
          if (input === hiddenWord[i]) {
            hiddenArray[i] = input;
            lives += 1; 
        	} 
        }
      	$(".hidden-word").text(hiddenArray.join(" "));
      	if (hiddenArray.indexOf("_ ") === -1)  {
        	createModal("Winner, winner, chicken dinner!");
        	setTimeout(function() {
          		window.location.reload(true);
        	},"2500");  
        };
    });


// GAME OVER EVENT

//need to tidy up this code in the future. 
     
    $(".letter-buttons .btn").click(function() { 
        lives -= 1;
        if (lives === 0) {
         	createModal("Game Over!");
         	$(".hidden-word").text(hiddenWord);
         	setTimeout(function() {
           		window.location.reload(true);
         },"2000");  
        };
        $("#guesses").text(lives);
     });






});