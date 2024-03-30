
const tabBtns = document.querySelectorAll(".tab-btn");
const basicTab = document.querySelector(".basic-tab");
const standardTab = document.querySelector(".standard-tab");
const premiumTab = document.querySelector(".premium-tab");

const iconSetPrice = document.querySelector(".icon_set_price");
const cardSubtitle = document.querySelector(".card_subtitle");
const isAvailable = document.querySelector(".is_available i");

//Function to remove all backgrounds

function removeBackgrounds() {
  tabBtns.forEach((tab) => {
    tab.style.backgroundColor = "unset";
    tab.style.color = "#454546f1";
  })
}


//Function for basic mode

function basicModeHandler() {
  removeBackgrounds();  
  iconSetPrice.textContent = "$60";
  cardSubtitle.textContent = "BASIC";
  isAvailable.classList.remove("fa-check");
  isAvailable.classList.add("fa-xmark");
  isAvailable.style.color = "rgb(234, 10, 10)";
  
  this.style.backgroundColor = "#45A69A";
  this.style.color = "#FFFFFF";
}

//Function for standard mode

function standardModeHandler() {
  removeBackgrounds();  
  iconSetPrice.textContent = "$120";
  cardSubtitle.textContent = "STANDARD";
  isAvailable.classList.add("fa-check");
  isAvailable.classList.remove("fa-xmark");  
  isAvailable.style.color = "#4E4CA5";

  
  this.style.backgroundColor = "#45A69A";
  this.style.color = "#FFFFFF";
}

//Function for premium mode

function premiumModeHandler() {
  removeBackgrounds();  
  iconSetPrice.textContent = "$180";
  cardSubtitle.textContent = "PREMIUM";
  isAvailable.classList.add("fa-check");
  isAvailable.classList.remove("fa-xmark");  
  isAvailable.style.color = "#4E4CA5"; 

  this.style.backgroundColor = "#45A69A";
  this.style.color = "#FFFFFF";
}

//Adding events on taBs

basicTab.addEventListener("click",basicModeHandler);
standardTab.addEventListener("click",standardModeHandler);
premiumTab.addEventListener("click",premiumModeHandler);

document.addEventListener("load",standardModeHandler);

