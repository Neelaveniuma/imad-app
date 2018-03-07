/*var button = document.getElementById('counter');

button.onclick = function(){
    
      var request = new XMLHttpRequest();
    
       request.onreadystatechange= function(){
            if(request.readyState === XMLHttpRequest.DONE){
                 if(request.status === 200){
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                 }
            }
       }; 
       request.open('GET', 'http://neelsvicky.imad.hasura-app.io/counter', true);
       request.send(null);
};

//Submit Name

var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange= function(){
        if(request.readyState === XMLHttpRequest.DONE){
             if(request.status === 200){
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                     for(var i =0; i<names.length; i++){
                         list += '<li>'+ names[i] +'</li>';
                     }
                     var ul = document.getElementById('namelist');
                     ul.innerHTML = list;
             }
        }
    };
     var nameInput = document.getElementById('name');
     var name = nameInput.value;
     request.open('GET', 'http://neelsvicky.imad.hasura-app.io/submit-name?name=' + name , true);
     request.send(null);
    
};*/

//Submit Username and password

var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange= function(){
        if(request.readyState === XMLHttpRequest.DONE){
             if(request.status === 200){
                    console.log('User Logged in');
                    alert('Logged in successfully');
             }else if(request.status === 403){
                 alert('Username/Password is incorrect');
             }else if(request.status === 500){
                 alert('Something wrong on server');
             }
        }
    };
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     console.log(username);
     console.log(password);
     request.open('POST', 'http://neelsvicky.imad.hasura-app.io/login' , true);
     request.setRequestHeader('Content-Type', 'application/json');
     request.send(JSON.stringify({username:username, password:password}));
};

//Submit Comment

var submit = document.getElementById('submit_btn1');
submit.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange= function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                 var words = request.responseText;
                    words = JSON.parse(words);
                    var para = '';
                    for(var i = 0; i<words.length; i++){
                        para+= '<p>'+ words[i] + '</p>';
                    }
                    var comments = document.getElementById('para');
                    comments.innerHTML = para;
            }
            
        }
    };
     var commentInput = document.getElementById('comment');
     var comment = commentInput.value;
     request.open('GET', 'http://neelsvicky.imad.hasura-app.io/submit-comment?comment=' + comment , true);
     request.send(null);
    
};
               
















































/*console.log('Loaded!');

var element = document.getElementById('main-text');



//move img

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft += 1;
    img.style.marginLeft = marginLeft+ 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};*/

