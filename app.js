// ****************** Selector *********************/
// *************************************************/

let click = localStorage.getItem("click") || 0;


const scors = document.querySelector('.scors p');
const clickerBtn = document.querySelector('.logo button');
const levels = document.querySelectorAll('.btnLevel');

// ****************** variables ********************/
// *************************************************/

// Stored levels (bonus).
let setLcale_1 = JSON.parse(localStorage.getItem("setLcale_1")) || false;
let setLcale_2 = JSON.parse(localStorage.getItem("setLcale_2")) || false;;
let setLcale_3 = JSON.parse(localStorage.getItem("setLcale_3")) || false;;
let setLcale_4 = JSON.parse(localStorage.getItem("setLcale_4")) || false;;


let set_1;
let set_2;
let set_3;
let set_4;

// Handle the display of the levels buttons "disabled".
let disabledLevel1 = true;
let disabledLevel2 = true;
let disabledLevel3 = true;
let disabledLevel4 = true;

// ****************** Listener *********************/
// *************************************************/

// buttons
clickerBtn.addEventListener('click', clic);
levels[0].addEventListener('click', level_1);
levels[1].addEventListener('click', level_2);
levels[2].addEventListener('click', level_3);
levels[3].addEventListener('click', level_4);

// load bonus
window.addEventListener('load', loadGame);


function loadGame() {

    if(setLcale_1 === true){
        set_1 = setInterval(clic, 1000);
        disabledLevel1 = false;
    }

    if(setLcale_2 === true){
        set_2 = setInterval(clic, 500);
        disabledLevel2 = false;
    }

    if(setLcale_3 === true){
        set_3 = setInterval(clic, 200);
        disabledLevel3 = false;
    }

    if(setLcale_4 === true){
        set_4 = setInterval(clic, 50);
        disabledLevel4 = false;
    }

    
}

function clic(){

    click++;
    
    localStorage.setItem("click", click);

    scors.innerHTML = click + ' pt.';


    // todo: level dynamic
    // levelValue = levels[0].textContent;
    // let clickValue = click + ' pt.';
    // console.log(levelValue, clickValue);
    

    if (click == 10 && disabledLevel1 === true) {

        // display button level 1
        levels[0].disabled = false;
    }
    if (click >= 20 && disabledLevel2 === true) {

        // display button level 1
        levels[1].disabled = false;
    }
    if (click >= 50 && disabledLevel3 === true) {

        // display button level 1
        levels[2].disabled = false;
    }
    if (click >= 100 && disabledLevel4 === true) {

        // display button level 1
        levels[3].disabled = false;
    }




}

function level_1(){




    if(click >= 10 || setLcale_1 === true){
        click -= 10;
        set_1 = setInterval(clic, 1000)

        localStorage.setItem("setLcale_1", JSON.stringify(true));


        // display button == disabled.
        levels[0].disabled = true;
        disabledLevel1 = false;


    }

    // levels[0].style.display = 'none';

}

function level_2(){

    if(click >= 30){
        click -= 30;
        set_2 = setInterval(clic, 500)

        localStorage.setItem("setLcale_2", JSON.stringify(true));


        // display button == disabled.
        levels[1].disabled = true;
        disabledLevel2 = false;


    }



}

function level_3(){


    if(click >= 50){
        click -= 50;
        set_3 = setInterval(clic, 200)

        localStorage.setItem("setLcale_3", JSON.stringify(true));

        // display button == disabled.
        levels[2].disabled = true;
        disabledLevel3 = false;


    }


}

function level_4(){


    if(click >= 100){
        click -= 100;
        set_4 = setInterval(clic, 50)

        localStorage.setItem("setLcale_4", JSON.stringify(true));

        // display button == disabled.
        levels[3].disabled = true;
        disabledLevel4 = false;


    }


}
