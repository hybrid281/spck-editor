const button = document.querySelector(".switch");
const bell = document.querySelector(".bell");

const groupOne = document.querySelector(".group-one");

groupOne.innerHTML = "Testing out elements being added into HTML page from JS using Query Selectors.";

button.addEventListener("click", function(){ 
    if(bell.classList.contains("show")) {
    
    bell.classList.remove("show");
    bell.classList.add("hide");
    bell.src = "img/bell-slash.svg";
    button.innerText = "SILENCE";
    } else {
    bell.classList.add("show");
    bell.classList.remove("hide");
    button.innerText = "SOUND";
    
    }
});
