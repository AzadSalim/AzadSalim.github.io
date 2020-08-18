/* created a myHeading variable and used the querySelector to target
the h1 heading in html to change the h1 title*/




// This is a click event that is fired by the browser when you click on something with your mouse   
//document.querySelector('html').onclick = function() {
    //alert('Ouch! Stop poking me!');
//}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/laptop.jpg') {
        myImage.setAttribute('src', '/images/laptop2.jpg');
    } else{
        myImage.setAttribute('src', '/images/laptop3.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'My Website is cool, ' + myName;
    }
   
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'My Website is cool, ' + storedName;
}
