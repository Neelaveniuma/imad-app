console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = "New Value";

//move img

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft += 10;
    img.style.marginLeft = marginLeft+ '500px';
}

img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};

