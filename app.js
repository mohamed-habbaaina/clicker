// ****************** Selector *********************/
// *************************************************/

const scors = document.querySelector('.scors p');
const clickerBtn = document.querySelector('.logo button');
const levels = document.querySelectorAll('.btnLevel');

// ****************** variables ********************/
// *************************************************/

let click = 0;

// setIntervals
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

clickerBtn.addEventListener('click', clic);
levels[0].addEventListener('click', level_1);
levels[1].addEventListener('click', level_2);
levels[2].addEventListener('click', level_3);
levels[3].addEventListener('click', level_4);




function clic(){

    click++;
    scors.innerHTML = 'Scors:<br>' + click + ' pt.';

    if (click >= 10 && disabledLevel1 === true) {

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

    if(click >= 10){
        click -= 10;
        set_1 = setInterval(clic, 1000)

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

        // display button == disabled.
        levels[1].disabled = true;
        disabledLevel2 = false;


    }



}

function level_3(){


    if(click >= 100){
        click -= 100;
        set_3 = setInterval(clic, 200)

        // display button == disabled.
        levels[2].disabled = true;
        disabledLevel3 = false;


    }


}

function level_4(){


    if(click >= 200){
        click -= 200;
        set_4 = setInterval(clic, 50)

        // display button == disabled.
        levels[3].disabled = true;
        disabledLevel4 = false;


    }


}
