const menuBtn = document.querySelector('.menu-bar');
const panel = document.querySelector('.panel');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.panel a');
const showCase = document.querySelectorAll('.showcase');
const showLinks = document.querySelectorAll('.showcase-nav p');
const underline = document.querySelector('.underline');
const showAddOns = document.getElementById('showAddOns');
const mainAdd = document.querySelector('.main-add');
const mainLinks = document.querySelectorAll('.main-link');
const accordion = document.querySelectorAll('.accordion');


menuBtn.addEventListener('click', showHideMenu);

menuBtn.onclick = function(e) {
  e.stopPropagation()
}

function showHideMenu() {
  if (!(panel.classList.contains('active'))) {
    panel.classList.add('active')
    menu.style.border = `1px solid #fff`;
  } else {
    panel.classList.remove('active')
    menu.style.border = `none`;
  }
}

document.onclick = function() {
  links.forEach(link => {
    if (link.clicked) {
      panel.classList.add('active')
    } else {
      panel.classList.remove("active");
      menu.style.border = `none`;
    }
  })
}

let index = 0;
showPage(index);

function showPage(n) {
  showCase.forEach(s => s.style.display = 'none');
  showCase[n].style.display = 'block';
  
  showLinks.forEach(link => link.style.color = `rgba(255,255,255,.7)`)
  showLinks[n].style.color = `#fff`;
}

showLinks[0].addEventListener('click', () => {
  underline.style.left = `5%`;
  underline.style.width = `23%`;
})

showLinks[1].addEventListener('click', () => {
  underline.style.left = `31.5%`;
  underline.style.width = `30%`;
})

showLinks[2].addEventListener('click', () => {
  underline.style.left = `64.8%`;
  underline.style.width = `30%`;
})

showAddOns.addEventListener('click', () => {
  if (showAddOns.textContent.includes('Show')) {
    mainAdd.style.maxHeight = '100rem';
    showAddOns.innerHTML = `<h4 id="showAddOns">Hide Add-ons <img src="images/arrow.svg"></h4>`;
  } else {
    mainAdd.style.maxHeight = `0`;
    showAddOns.innerHTML = `<h4>Show Add-ons <img src="images/arrow.svg"></h4>`;
  }
})


function showAccordion(n) {
  accordion[n].classList.toggle('active');
}
