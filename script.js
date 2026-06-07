function rasschitat() {
  let ves = Number(document.getElementById("cargo-weight").value);
  let res = document.getElementById("result");
  let obem = Number(document.getElementById("cargo-volume").value);
  let A_select = Number(document.getElementById("avto-select").value);
  console.log(ves, obem, A_select);
  let volumes = [12, 30, 90];
  let index = document.getElementById("avto-select").selectedIndex;
  let maxObem = volumes[index];
  if (isNaN(ves) || isNaN(obem) || ves <= 0 || obem <= 0){
    document.getElementById ("result").innerText = "Введите вес или объембольше нуля!";
    document.getElementById ("result").style.color = "red";
    return;
  }
  if (ves > A_select && obem > maxObem) {
    res.innerText = "Перегруз по весу и объему!";
    res.style.color = "red"; // Подсвечиваем красным//
  } else if (ves > A_select) {
    res.innerText = "Перегруз по весу!";
    res.style.color = "red";
  } else if (obem > maxObem) {
    res.innerText = "Перегруз по объему";
    res.style.color = "red";
  } else {
    let diffves = A_select - ves;
    let diffobem = maxObem - obem;
    res.innerText = `${diffves}кг и ${diffobem} m3 еще осталось`;
    res.style.color = 'yellow';
  }

}

function ochistit() {
  document.getElementById("cargo-weight").value = "";
  document.getElementById("cargo-volume").value = "";
  document.getElementById("result").innerHTML = "";
}
