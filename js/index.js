// Your code goes here

// Nav Bar transparent on double click //
const navBar = document.querySelector('.main-navigation');
navBar.addEventListener('dblclick', () => {
  navBar.style.opacity='.4';
  navBar.style.transition='all 0.3s';
});

console.log(navBar);

// Fun Bus Image fades behind text "Welcome to Fun Bus!"
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseenter', () => {
  funBusImg.textContent='Welcome to Fun Bus!'
  funBusImg.style.opacity='.7';
  funBusImg.style.transition='all 0.5s';
});
funBusImg.addEventListener('mouseleave', () => {
  funBusImg.style.opacity='1';
  funBusImg.style.transition='all 0.5s';
});
//console.log(funBusImg);

// Text content is bold when mouse on Let's Go text box //
const textContent = document.querySelectorAll('.text-content p');
textContent[0].addEventListener('mouseover', () => {
  textContent[0].innerHTML="Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple <b>organized</b>.";
})

// console.log(organized[0]);

// Text "Simple" is bold when mouse on "adventure awaits" text box //
textContent[2].addEventListener('mouseover', () => {
  textContent[2].style.textDecoration='underline';

})

// console.log(organized);

// Mid Page images grow's for mouseover //
const midPageImgs = document.querySelectorAll('.img-content');
midPageImgs.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.transform='scale(1.1)';
    element.style.transition='all 0.5s';
  });
  element.addEventListener('mouseleave', () => {
    element.style.transform='scale(1.0)';
    element.style.transition='all 0.5s';
  });
})

// Pick Destination Image transitions to new image when clicked //
const destImg = document.querySelector('.content-destination img');
destImg.addEventListener('click', () => {
  destImg.src='img/dest2.jpg'
  destImg.style.transition='all 0.5s'
});

// Destination Divs turn light blue for mouseover //
const destCard = document.querySelectorAll('.destination');
destCard.forEach(element => {
  element.addEventListener('click', () => {
    element.style.backgroundColor='dodgerblue';
  })
});

// Buttons Turn orange for mouseover //
const buttons = document.querySelectorAll('.btn');
buttons.forEach(element => {
  element.addEventListener('mouseover', (event) => {
    element.style.backgroundColor='orange';
    event.stopPropagation;
  })
});

/* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `dblclick` */