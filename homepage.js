
var navLinks = document.getElementsByClassName("nav-links");
window.onload = function(){
for(var i = 0, j = this.navLinks.length; i < j; i++){
    this.navLinks[i].style.transition = "color 3s";
    this.navLinks[i].style.color = "black";
}
    
}