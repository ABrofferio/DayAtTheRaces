let mycar1 = document.getElementById("car1"); 
let mycar2 = document.getElementById("car2"); 
let mycar3 = document.getElementById("car3"); 
let mycar4 = document.getElementById("car4"); 
let myflag = document.getElementById("flag");

function myMove(elem, pos, speed) {
    let id = setInterval(frame, speed);
    function frame() {
        if (pos == 97) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.left = pos + '%'; 
        }
    }
}

$('body').on('keydown', function(){
    //$('#flag').animate({ left: "+=500px" }, 100);
    myMove(myflag,0,10);
    myMove(mycar1,0,5);
    myMove(mycar2,0,4);
    myMove(mycar3,0,2);
    myMove(mycar4,0,10);
});
