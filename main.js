// Menu open/close
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  //console.log(element)
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Hide menu on item click
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
