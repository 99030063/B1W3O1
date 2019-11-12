var pickDoor;
var swapdoor;
var userChoiceSave;
var winDoor;
var loseDoor; 
var swap;
var secondChoice;

// function getRandomInt(max) { 
// return Math.floor(Math.random() * Math.floor(max)); 
// }
var doors = [false, false, false];
doors[getRandomInt(0,2)] = true;

console.log (doors); //voor testdoeleinden geeft dit de correcte antwoorden van de deuren weer
//genereerd een willekeurige waarde tussen 0 en 2
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max+1 - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
document.getElementsByClassName("title-for-game")[0].innerHTML = step1;

//eerste keuze van deuren + responses
function pickDoor(userChoice){
    userChoiceSave = userChoice;
    var openNewDoor = true;
    var numberInArray = 0;{
        alert ("Je hebt gekozen voor deur nummer " +  (eval(userChoice+1)));
        alert ("Ik zal je nu een deur laten zien waar een geit achter zit.")
    doors.forEach(function(i) { //line 27 to 49 opent een deur die niet gekozen is door de speler en die niet de auto bevat
        if(openNewDoor == true) {
            if(i == false){
                if(userChoice != numberInArray) {
                    console.log('deur '+eval(numberInArray+1));
                    // (numberInArray + 1).setAttribute('src='img/goat.png);
                    switch(numberInArray) {
                        case 0:
                            document.getElementById("1").setAttribute('src', "img/goat.png");
                            document.getElementById("1").removeAttribute('onclick');
                            swap1()
                            break;
                        case 1:
                            document.getElementById("2").setAttribute('src', "img/goat.png");
                            document.getElementById("2").removeAttribute('onclick');
                            swap2()
                            break;
                        case 2:
                            document.getElementById("3").setAttribute('src', "img/goat.png");
                            document.getElementById("3").removeAttribute('onclick');
                            swap3()
                            break;
                    }
                    openNewDoor = false;
                }
            }
            numberInArray += 1;
        };
    });
    }


    function swap1(){
        document.getElementById("2").setAttribute('onclick', 'swapDoor(1)')
        document.getElementById("3").setAttribute('onclick', 'swapDoor(2)')
            if(userChoiceSave==1){
                console.log("userChoiceSave = "+userChoiceSave)
                setTimeout(function(){alert(swapAlert3)}, 500)
                document.getElementsByClassName("title-for-game")[0].innerHTML = step2;
            }else if(userChoiceSave==2){
                console.log("userChoiceSave = "+userChoiceSave)
                setTimeout(function(){alert(swapAlert5)}, 500)
                document.getElementsByClassName("title-for-game")[0].innerHTML = step2;
                // document.getElementsByClassName("")
            }
    }

    function swap2(){
        document.getElementById("1").setAttribute('onclick', 'swapDoor(0)')
        document.getElementById("3").setAttribute('onclick', 'swapDoor(2)')
            if(userChoiceSave==0){
                console.log("userChoiceSave = "+userChoiceSave);
                setTimeout(function(){alert(swapAlert1)}, 500);
                document.getElementsByClassName("title-for-game")[0].innerHTML = step2;
            }else if(userChoiceSave==2){
                console.log("userChoiceSave = "+userChoiceSave),
                setTimeout(function(){alert(swapAlert6)}, 500);
                document.getElementsByClassName("title-for-game")[0].innerHTML = step2;
            }  
    }

    function swap3(){
        document.getElementById("1").setAttribute('onclick', 'swapDoor(0)')
        document.getElementById("2").setAttribute('onclick', 'swapDoor(1)')
            if(userChoiceSave==0){
                console.log("userChoiceSave = "+userChoiceSave);
                setTimeout(function(){alert(swapAlert2)},500);
                document.getElementsByClassName("title-for-game")[0].innerHTML = step2;
            }else if(userChoiceSave==1){
                console.log("userChoiceSave = "+userChoiceSave),
                setTimeout(function(){alert(swapAlert4)},500);
                document.getElementsByClassName("title-for-game")[0].innerHTML = step2;
            }  
    }
}
//tweede keer een deur kiezen + responses
function swapDoor(secondChoice){
    secondChoiceSave=secondChoice
    console.log("secondChoice: "+secondChoiceSave)
    console.log ('userChoiceSave :' + userChoiceSave)
    if(secondChoiceSave==userChoiceSave){
        alert(swapDeny)
        console.log("doors = "+doors[(secondChoiceSave)])
        if(doors[(secondChoiceSave)]==false){
            // alert("geit")
            console.log(secondChoiceSave)
            document.getElementById(secondChoiceSave+1).setAttribute('src', "img/goat.png");
            document.getElementsByClassName("door")[0].removeAttribute('onclick');
            document.getElementsByClassName("door")[1].removeAttribute('onclick');
            document.getElementsByClassName("door")[2].removeAttribute('onclick');
            setTimeout(function(){alert(lossStick)}, 1000);
            document.getElementsByClassName("title-for-game")[0].innerHTML = loss;
        } else if (doors[(secondChoiceSave)] == true){
            // alert("auto")
            console.log(secondChoiceSave)
            document.getElementById(secondChoiceSave+1).setAttribute('src', "img/car.png");
            document.getElementsByClassName("door")[0].removeAttribute('onclick');
            document.getElementsByClassName("door")[1].removeAttribute('onclick');
            document.getElementsByClassName("door")[2].removeAttribute('onclick');
            document.getElementsByClassName("title-for-game")[0].innerHTML = win;
            setTimeout(function(){alert(winStick)}, 1000);
        }
    }else if(secondChoiceSave != userChoiceSave){
        alert(swapAccept)
        if(doors[(secondChoiceSave)]==false){
            // alert("geit")
            console.log(secondChoiceSave)
            document.getElementById(secondChoiceSave+1).setAttribute('src', "img/goat.png");
            document.getElementsByClassName("door")[0].removeAttribute('onclick');
            document.getElementsByClassName("door")[1].removeAttribute('onclick');
            document.getElementsByClassName("door")[2].removeAttribute('onclick');
            document.getElementsByClassName("title-for-game")[0].innerHTML = loss;
            setTimeout(function(){alert(lossSwap)}, 1000);
        } else if (doors[(secondChoiceSave)] == true){
            // alert("auto")
            console.log(secondChoiceSave)
            document.getElementById(secondChoiceSave+1).setAttribute('src', "img/car.png");
            document.getElementsByClassName("door")[0].removeAttribute('onclick');
            document.getElementsByClassName("door")[1].removeAttribute('onclick');
            document.getElementsByClassName("door")[2].removeAttribute('onclick');
            document.getElementsByClassName("title-for-game")[0].innerHTML = win;
            setTimeout(function(){alert(winSwap)}, 1000);
        }
    }
}
//waarom gaat swapDoor altijd naar de else if en waarom skipt het de eerste if ookal is deze van kracht

