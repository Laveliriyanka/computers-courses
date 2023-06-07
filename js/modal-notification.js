function play() {
    document.getElementById('play').classList.add('open')
    setInterval(() => document.getElementById('play').classList.toggle('open'), 2000)
}