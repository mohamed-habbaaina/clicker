// ****************** Selector *********************/
// *************************************************/

let click = localStorage.getItem("click") || 0;


const scors = document.querySelector('.scors p');
const clickerBtn = document.querySelector('.logo button');
const levels = document.querySelectorAll('.btnLevel');
const reset = document.querySelector('.reset');



// ****************** variables ********************/
// *************************************************/

// Stored levels (bonus).
let setLcale_1 = JSON.parse(localStorage.getItem("setLcale_1")) || false;
let setLcale_2 = JSON.parse(localStorage.getItem("setLcale_2")) || false;;
let setLcale_3 = JSON.parse(localStorage.getItem("setLcale_3")) || false;;
let setLcale_4 = JSON.parse(localStorage.getItem("setLcale_4")) || false;;

// setInterval
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

// reset game
reset.addEventListener('click', resetGame);

// load bonus
window.addEventListener('load', loadGame);


// ****************** Function *********************/
// *************************************************/


// ** handles the storage of scores and bonuses when the page is loaded.

function loadGame() {

    scors.innerHTML = click + ' pt.';       // display scors.

    if(setLcale_1 === true){

        set_1 = setInterval(clic, 500);  // aplicated setinterval level 1
        disabledLevel1 = false;           // button disabled

        // display button reset
        reset.classList.remove('displayNone');

        levels[0].classList.add("transpart");   // add classList transparant color , return: 50 pt. => ''

    }

    if(setLcale_2 === true){
        set_2 = setInterval(clic, 200); // aplicated setinterval level 2
        disabledLevel2 = false;         // button disabled

        levels[0].classList.add("transpart");   // add classList transparant color , return: 120 pt. => ''

    }

    if(setLcale_3 === true){
        set_3 = setInterval(clic, 50);
        disabledLevel3 = false;

        levels[0].classList.add("transpart");   // add classList transparant color , return: 1000 pt. => ''

    }

    if(setLcale_4 === true){
        set_4 = setInterval(clic, 10);
        disabledLevel4 = false;

        levels[0].classList.add("transpart");   // add classList transparant color , return: 3000 pt. => ''

    }

    
}

// ** function click, display scors, localStorage, levels[] disabled
function clic(){

    click++;
    
    localStorage.setItem("click", click);   // stored click value.

    scors.innerHTML = click + ' pt.';       // display scors.
    

    if (click >= 50 && disabledLevel1 === true) {

        // display button level 1
        levels[0].disabled = false;

    }
    if (click >= 120 && disabledLevel2 === true) {

        // display button level 1
        levels[1].disabled = false;
    }
    if (click >= 400 && disabledLevel3 === true) {

        // display button level 1
        levels[2].disabled = false;
    }
    if (click >= 1000 && disabledLevel4 === true) {

        // display button level 1
        levels[3].disabled = false;
    }
}


// ! Livel 1:
// setInterval if click >= 50.
// scors -= 50.
// localStorage level 1.
// button disabled = true
// display button reset
function level_1(){

    if(click >= 50 || setLcale_1 === true){

        click -= 50;

        set_1 = setInterval(clic, 500); // bonus 1 click every 5 seconds.

        localStorage.setItem("setLcale_1", JSON.stringify(true)); // stored that the bonus is available

        // display button === disabled.
        levels[0].disabled = true;
        disabledLevel1 = false;

        levels[0].classList.add("transpart");

        // display button reset
        reset.classList.remove('displayNone');
    }
}

// ! Livel 2:
// setInterval if click >= 120.
// scors -= 120.
// localStorage level 2.
// button disabled = true

function level_2(){

    if(click >= 120){

        click -= 120;
        set_2 = setInterval(clic, 200) //  bonus 1 click every 2 seconds.

        localStorage.setItem("setLcale_2", JSON.stringify(true)); // stored

        // display button == disabled.
        levels[1].disabled = true;
        disabledLevel2 = false;

        levels[1].classList.add("transpart");

    }
}

// ! Livel 3:
// setInterval if click >= 400.
// scors -= 400.
// localStorage level 3.
// button disabled = true

function level_3(){

    if(click >= 1000){
        click -= 1000;
        set_3 = setInterval(clic, 50) //  bonus 2 click every seconds.

        localStorage.setItem("setLcale_3", JSON.stringify(true)); // stored.

        // display button == disabled.
        levels[2].disabled = true;
        disabledLevel3 = false;

        levels[2].classList.add("transpart");

    }
}

// ! Livel 4:
// setInterval if click >= 1000.
// scors -= 1000.
// localStorage level 4.
// button disabled = true

function level_4(){

    if(click >= 3000){
        click -= 3000;
        set_4 = setInterval(clic, 10) //  bonus 5 click every seconds.

        localStorage.setItem("setLcale_4", JSON.stringify(true)); // stored.

        // display button == disabled.
        levels[3].disabled = true;
        disabledLevel4 = false;

        levels[3].classList.add("transpart");

    }
}

// ** function restGame:
// * clearInterval,  & click = 0,   & display scors : O pt.,
// * reset localStorage,    & display button level === disabled,
// * add clasList "displayNone".
function resetGame() {

    // clearInterval all.
    clearInterval(set_1);
    clearInterval(set_2);
    clearInterval(set_3);
    clearInterval(set_4);

    click = 0;
    

    // reset click in localStorage
    localStorage.setItem("click", click);

    // display scors.
    scors.innerHTML = click + ' pt.';

    // reset bonus level in localStorage
    localStorage.setItem("setLcale_1", JSON.stringify(false));
    localStorage.setItem("setLcale_2", JSON.stringify(false));
    localStorage.setItem("setLcale_3", JSON.stringify(false));
    localStorage.setItem("setLcale_4", JSON.stringify(false));

    // display all button level === disabled
    disabledLevel1 = true;
    disabledLevel2 = true;
    disabledLevel3 = true;
    disabledLevel4 = true;

    levels[0].disabled = true;
    levels[1].disabled = true;
    levels[2].disabled = true;
    levels[3].disabled = true;

    // add clasList "displayNone" button Reset.
    reset.classList.add('displayNone');

    levels[0].classList.remove("transpart");
    levels[1].classList.remove("transpart");
    levels[2].classList.remove("transpart");
    levels[3].classList.remove("transpart");

}