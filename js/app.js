function openMenu(){
  document.getElementsByClassName("sidebar")[0].style.display = "block";
};
function closeMenu(){
  document.getElementsByClassName("sidebar")[0].style.display = "none";
};

let search = document.getElementById("search");
let card = document.getElementById("card");
search.addEventListener("click", function (e) {
  card.style.display = "block";
});
