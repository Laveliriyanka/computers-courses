function update() {
    let clock = document.getElementById('clock');

    let date = new Date();

    let day = date.getDate()
    if (day < 10) day = '0' + day;
    clock.children[0].children[0].innerHTML = day;

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[1].children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[2].children[0].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[3].children[0].innerHTML = seconds;
  }

  setInterval(() => update(),500)