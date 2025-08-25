let sec = 0;
let min = 0;
let hr = 0;

let btn1 = document.getElementById("btn1");
let inter;
document.getElementById("btn1").hidden = false;
document.getElementById("btn").hidden = true;
document.getElementById("btn3").hidden = true;

document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("btn1").hidden = true;
  document.getElementById("btn").hidden = false;
  document.getElementById("btn3").hidden = false;

  inter = setInterval(() => {
    sec = parseInt(sec) + 1;

    if (sec < 10) {
      sec = "0" + sec;
    }

    if (sec >= 60) {
      sec = "0" + 0;
      min = parseInt(min) + 1;
      if (min < 10) {
        min = "0" + min;
        m = 1;
      } else {
        min = parseInt(min);
      }
      if (min >= 60) {
        min = "0" + 0;
        m = 0;
        hr = parseInt(hr) + 1;
        if (hr < 10) {
          hr = "0" + hr;
        } else {
          hr = hr;
        }
        document.getElementById("hour").innerHTML = hr;
      }
      document.getElementById("min").innerHTML = min;
    }

    document.getElementById("sec").innerHTML = sec;
    console.log(sec);
  }, 1000);
});

document.getElementById("btn3").addEventListener("click", () => {
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
});

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("btn1").hidden = false;
  document.getElementById("btn").hidden = true;
  clearInterval(inter);
  alert("Thank You");
  m = 0;
});
