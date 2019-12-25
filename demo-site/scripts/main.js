let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/car.jpeg'){
        myImage.setAttribute('src','images/farri.jpeg');
    } else {
        myImage.setAttribute('src','images/car.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('请输入你的名字');
  if(!myName || myName === null){
    setUserName();
  }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mazilla cool god, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
  setUserName();
}