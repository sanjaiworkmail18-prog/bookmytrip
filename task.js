 
document.getElementById("menuToggle").onclick = function () {
  document.getElementById("menuLinks").classList.toggle("open");
};

 
document.getElementById("hotelsLink").onclick = function (event) {
  event.preventDefault();
  document.getElementById("dropdown").classList.toggle("show");
};

 
document.getElementById("searchBtn").onclick = function () {
  const city = document.getElementById("where").value;
  const cards = document.querySelectorAll(".hotel-card");

  for (let i = 0; i < cards.length; i++) {
    if (city === "" || cards[i].getAttribute("data-city") === city) {
      cards[i].classList.remove("hide");
    } else {
      cards[i].classList.add("hide");
    }
  }
};

 
const cards = document.querySelectorAll(".hotel-card");

for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {
    document.getElementById("where").value = cards[i].getAttribute("data-city");
  };
}