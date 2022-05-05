// // Focus div based on nav button click
// function addNavButtonListener(button, focusID, func){
//     button.addEventListener("click", function(){
//         let focus = document.getElementById(focusID);
//         console.log(focus);
//         let active = document.getElementsByClassName("active");
//         func(focus);

//         document.getElementById("home").className = "hidden";
//         activateFocusDiv(active, focus);
//     });
// }

// function activeFocusDiv(divs, newFocus){
//     for(let i = 0; i < divs.length; i++){
//         divs[i].className = "hidden";
//     }
//     newFocus.className = newFocus.id == "home" ? "" : "active";
//     newFocus.className = "active";
// }

// async function getData(url = "", data = {}) {
//     let response = await fetch(url, {
//         method: "GET",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         redirect: "follow",
//         referrerPolicy: "no-referrer"
//     });

//     return response.json();
// }

// async function postData(url = "", data = {}) {
//     let response = await fetch(url, {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         redirect: "follow",
//         referrerPolicy: "no-referrer",
//         body: JSON.stringify(data)
//     });

//     return response.json();
// }

// function createImageElement(filename, className){
//     return `<img src="${filename}" class="${className || "smallcoin"}">`
// }

// function addCoin(result){
//     if (result === "heads"){
//         return createImageElement("assets/img/heads.png")
//     }
    
//     if (result === "tails"){
//         return createImageElement("assets/img/tails.png")
//     }
//     return focus.innerHTML = createImageElement("assets/img/coin.png")
// }

// let home = document.getElementById("homeNav");
// let single = document.getElementById("singleNav");
// let multi = document.getElementById("multiNav");
// let guess = document.getElementById("guessNav");

// // Flip one coin and show coin image to match result when button clicked
// function addCoinButtonListener(button, coinID, func){

// }

// // Flip multiple coins and show coin images in table as well as summary results
// // Enter number and press button to activate coin flip series

// // Guess a flip by clicking either heads or tails button

const coin = document.getElementById("flipOne")
coin.addEventListener("click", flipCoin)
async function flipCoin() {
    const endpoint = "app/flip/"
    const url = document.baseURI+endpoint
    await fetch(url).then(function(response) {
    		    return response.json();
  		      }).then(function(result) {
				    console.log(result);
				    document.getElementById("result").innerHTML = result.flip;
				    document.getElementById("quarter").setAttribute("src", "assets/img/"+result.flip+".png");
				  });
};

