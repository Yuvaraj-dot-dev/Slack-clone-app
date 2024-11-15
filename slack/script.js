var menu = document.getElementsByClassName('menu-btn-content')[0];
var header = document.getElementsByClassName('header')[0];
var body = document.getElementsByTagName('body')[0];
var menuBtn = document.getElementsByClassName('menu-btn')[0];
var headercontainer = document.getElementsByTagName('header')[0];
var menuclsBtn = document.getElementsByClassName('menu-cls-btn')[0];


function toggleonMenu(){
    headercontainer.style.display = 'block';
    body.style.overflow = 'hidden';
    body.style.position = 'relative';
    menu.style.cssText=`
    display:block;
    background-color:white;
    animation: menu linear 500ms reverse backwards;
    `
    // menu.matchMedia('max-width:1083');
}

function toggleoffMenu(){
    headercontainer.style.display = 'block';
    body.style.overflow = 'auto';
    menu.style.cssText=`
    display: block;
    z-index: 3;
    position: fixed;
    width: calc(100% - 14%);
    height: 100%;
    background-color: #fff;
    padding: 0 7%;
    animation: open linear 500ms backwards;
    `
    console.log('Hey Buddy COOL!')
    setTimeout(function(){
        headercontainer.style.display = 'block';
        menu.style.cssText=`
        display: none;
        `
    }, 400);
}

// function toggleMenu() {
//     menu.style.display = (menu.style.display === 'block')? 'none' : 'block';
// }

// menuBtn.addEventListener('click', toggleonMenu);
// menuclsBtn.addEventListener('click', toggleoffMenu);

// toggleMenu();

// window.addEventListener('click', function(event){
//     if(event.target === menuBtn || event.target === menuclsBtn){
//         toggleonMenu();
//     } else if(event.target.className ==='menu-cls-btn' || event.target.parentNode.className ==='menu-cls-btn'){
//         toggleoffMenu();
//     }
// });

var paradesc1 = document.getElementsByClassName('c-10-para-desc1')[0];
var paradesc2 = document.getElementsByClassName('c-10-para-desc2')[0];
var paradesc3 = document.getElementsByClassName('c-10-para-desc3')[0];
var paradesc4 = document.getElementsByClassName('c-10-para-desc4')[0];
var paradesc5 = document.getElementsByClassName('c-10-para-desc5')[0];


function accordian1(){
    if(paradesc1.style.display === 'block'){
        paradesc1.style.display = 'none';
    }
    else{
        paradesc1.style.display = 'block';
    }
}

function accordian2(){
    if(paradesc2.style.display === 'block'){
        paradesc2.style.display = 'none';
    }
    else{
        paradesc2.style.display = 'block';
    }
}

function accordian3(){
    if(paradesc3.style.display === 'block'){
        paradesc3.style.display = 'none';
    }
    else{
        paradesc3.style.display = 'block';
    }
}

function accordian4(){
    if(paradesc4.style.display === 'block'){
        paradesc4.style.display = 'none';
    }
    else{
        paradesc4.style.display = 'block';
    }
}

function accordian5(){
    paradesc5.style.display = (paradesc5.style.display === 'block')? 'none' : 'block';
}