
var buttons = document.querySelectorAll('.button');
var body = document.querySelector('body');

buttons.forEach(function(b){
    b.addEventListener('click',function(e){
       switch(e.target.id){
        case 'grey' :
            body.style.backgroundColor = 'grey';
            break;

        case 'white' :
        body.style.backgroundColor = 'white';
        break;

        case 'blue' :
        body.style.backgroundColor = 'blue';
        break;

        case 'yellow' :
        body.style.backgroundColor = 'yellow';
        break;

        default: console.log("l");
       }
       
   
    })
})