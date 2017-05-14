const mycar1 = document.getElementById("car1"); 
const mycar2 = document.getElementById("car2"); 
const mycar3 = document.getElementById("car3"); 
const mycar4 = document.getElementById("car4"); 

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
    $('img').attr("title","begin");
    let speed1 = Math.floor((Math.random() * 10) + 5);
    let speed2 = Math.floor((Math.random() * 10) + 5);
    let speed3 = Math.floor((Math.random() * 10) + 5);
    let speed4 = Math.floor((Math.random() * 10) + 5);
    myMove(mycar1,0,speed1);
    myMove(mycar2,0,speed2);
    myMove(mycar3,0,speed3);
    myMove(mycar4,0,speed4);
    let winner = Math.min(speed1, speed2, speed3, speed4);
    if (winner === speed1){
        $('#winner').delay(2000)
        .queue(()=> {
            $('#winner').html("Car One is the winner!");
            $('#winner').attr("title","win");
        });
    }
    else if (winner === speed2){
        $('#winner').delay(2000)
        .queue(()=> {
            $('#winner').html("Car Two is the winner!");
            $('#winner').attr("title","win");
        });
    }
    else if (winner === speed3){
        $('#winner').delay(2000)
        .queue(()=> {
            $('#winner').html("Car Three is the winner!");
            $('#winner').attr("title","win");
        });
    }
    else if (winner === speed4){
        $('#winner').delay(2000)
        .queue(()=> {
            $('#winner').html("Car Four is the winner!");
            $('#winner').attr("title","win");
        });
    }
});

$('button').on('click', function(){
    $('img').removeAttr("title");
    $('#winner').removeAttr("title");
    mycar1.style.left = 0+"%";
    mycar2.style.left = 0+"%";
    mycar3.style.left = 0+"%";
    mycar4.style.left = 0+"%";
});
    

