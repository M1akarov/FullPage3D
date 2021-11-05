const burger = document.querySelector('.burger')
const container = document.querySelector('.container')
const screens = document.querySelectorAll('.screen')

burger.addEventListener('click', () => {
  container.classList.toggle('active')
})

function replaceBg(id) {
  const bg = document.getElementById(id)
  screens.forEach(screen => {
    screen.style.display = 'none'
  })
  bg.style.display = 'block'
}

function changeBg() {
  const links = document.querySelectorAll('.link')

  links.forEach((link, index) => {
    link.addEventListener('click', e => {
      e.preventDefault()
      replaceBg(e.target.dataset.link)
    })

    link.addEventListener('click', e => {
      e.preventDefault()
      container.classList.toggle('active')
    })
  })

  screens.forEach( screen => {
    screen.style.display = 'none'
    screens[0].style.display = 'block'
  })
}
changeBg()
// =========
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.header__one')

let load = 0

let int =  setInterval(blurring, 15)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }


  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100 , 25, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// Dark Mode

function darkmode() {
  const pageBg = document.querySelector('.header__one')

  pageBg.classList.toggle('dark-mode')
}

document.querySelector('.btn').addEventListener('click', darkmode)

