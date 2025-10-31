const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const seconds = 1000
const minute = seconds * 60
const hour = minute * 60
const day = hour * 24

let countDown = new Date('Oct 17, 2026 17:00:00').getTime()

let x = setInterval(() => {
    let now = new Date().getTime()
    let distance = countDown - now

    document.getElementById('dias').innerText = Math.floor(distance / day)
    document.getElementById('horas').innerText = Math.floor((distance % day)/hour)
    document.getElementById('minutos').innerText = Math.floor((distance % hour) / minute)
    document.getElementById('segundos').innerText = Math.floor((distance & minute) / seconds)
}, seconds);