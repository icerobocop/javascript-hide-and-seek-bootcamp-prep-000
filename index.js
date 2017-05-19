function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
} 

function increaseRankBy(n){
  var goku = document.querySelectorAll(".ranked-list li");
  for(var i = 0; i < goku.length; i ++){
    goku[i].innerHTML = (parseInt(goku[i].innerHTML) + parseInt(n)).toString();
  }
}
function deepestChild(){
var john = document.getElementById("grand-node").querySelector("div");
var megan;
while(john != null){
  megan = john;
  john = john.querySelector("div");
}
return megan;
}