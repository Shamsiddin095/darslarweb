function datatypes() {
  var paragraph = document.getElementById("datatypes");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function operatorlar() {
  var paragraph = document.getElementById("operatorlar");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function loops() {
  var paragraph = document.getElementById("loops");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function functions() {
  var paragraph = document.getElementById("functions");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function objects() {
  var paragraph = document.getElementById("objects");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function endi() {
  var paragraph = document.getElementById("endi");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}

function showContent(menu) {
  var rightSection = document.getElementById("right-section");
  switch (menu) {
    case "menu1":
      rightSection.innerHTML =
        "Menu 1 tanlandi! Bu joyda Menu 1 bo'lsa chiqadigan content bo'lishi mumkin.";
      break;
    case "menu2":
      rightSection.innerHTML =
        "Menu 2 tanlandi! Bu joyda Menu 2 bo'lsa chiqadigan content bo'lishi mumkin.";
      break;
    case "menu3":
      rightSection.innerHTML =
        "Menu 3 tanlandi! Bu joyda Menu 3 bo'lsa chiqadigan content bo'lishi mumkin.";
      break;
    default:
      rightSection.innerHTML = "Bosh sahifa";
      break;
  }
}

function type1() {
  let name = "shamsiddin"; // string
  let age = 28; //number
  let isMerried = true; //Boolean
  let mynull = null; // null
  let MyUndefined = undefined; // undefined
  let sym = Symbol("Josh"); // symbol
  let MybigInt = BigInt(100); // bigInt
  alert(
    name +
      " // string \n" +
      age +
      " //number \n" +
      isMerried +
      "//Boolean \n" +
      mynull +
      "//null \n" +
      MyUndefined +
      "//Undefined \n "
  );
}
function type2() {
  let car = {
    name: "mers",
    color: "red",
    speed: 320,
    prise: 1000,
  };
  alert(car.name + " \n" + car.color + " \n" + car.speed);
}
function if1() {
  let num = +prompt("son kiriting:");
  let natija;

  if (num > 0) {
    natija = 1;
  } else if (num < 0) {
    natija = -1;
  } else {
    natija = 0;
  }
  alert("qiymat:" + natija);
}
function if2() {
  let a = +prompt("a son = ");
  let b = +prompt("b son = ");

  yigindi = a + b;
  let natija;
  if (yigindi < 4) {
    natija = "Below";
  } else {
    natija = " Over";
  }
  alert("natija:" + natija);
}
function if3() {
  alert("Ro'yhatdan o'tish uchun login parol kiriting:");
  let login = prompt("Login kiriting:");
  let parol = +prompt(" 4 talik son parol kiriting :");
  alert("Ro'yhatdan o'tdingiz:");
  alert("Parol va login kiriting:");
  let l = prompt("loginingiz:");
  let p = +prompt("parolingiz");

  if (!l || !p) {
    alert("NuN NuN NuN NuN NuN NuN NuN NuN ");
  } else if (l == login && p == parol) {
    alert("Muvaffaqiyatli");
    window.location.href =
      "https://kun.uz/news/2023/11/09/dunyo-siyosiy-arxitekturasi-tom-manoda-ozgarmoqda-shavkat-mirziyoyev";
  } else {
    alert("Notug'ri parol yoki login");
  }
}
function oper1() {
  let son1 = +prompt("son1 = ");
  let son2 = +prompt("son2 = ");
  let sum = son1 + son2;
  alert("qo'shishdagi natija " + sum);
}

//forrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

// while for do while

function for1() {
  let n = 10;
  let natija = "";
  for (var i = 1; i <= n; i++) {
    natija += i + " ";
  }

  alert(natija);
}
function while1() {
  let n = +prompt("n sonini kiriting:");
  let i = 1;
  let natija = "";

  while (i <= n) {
    natija += i + " ";
    i++;
  }

  alert(natija);
}
function whiledo1() {
  let n = +prompt("n sonini kiriting:");
  let i = 1;
  let natija = "";

  do {
    natija += i + " ";
    i++;
  } while (i <= n);

  alert(natija);
}

function for2() {
  let n = +prompt("n sonini kiriting:");
  let natija = "";
  for (let i = n; i >= 1; i--) {
    natija += i + " ";
  }
  alert(natija);
}
function while2() {
  let n = +prompt(" n  sonini kiriting:");
  let i = n;
  let natija = "";

  while (i >= 1) {
    natija += i + " ";
    i--;
  }
  alert(natija);
}
function whiledo2() {
  let n = +prompt(" n  son kiriting:");
  let i = n;
  let natija = " ";
  do {
    natija += i + " ";
    i--;
  } while (i >= 1);
  alert(natija);
}

function for3() {
  let n = +prompt("son kiriting:");
  var natija = "";

  for (let i = 2; i <= n; i += 2) {
    natija += i + " ";
  }
  alert(natija);
}
function while3() {
  let n = +prompt(" son kiriting:");
  let i = 1;
  let natija = "";

  while (i <= n) {
    if (i % 2 === 0) {
      natija += i + " ";
    }
    i++;
  }
  alert(natija);
}
function whiledo3() {
  let n = +prompt("son kiriting:");
  let i = 2;
  let natija = "";
  do {
    natija += i + " ";
    i += 2;
  } while (i <= n);
  alert(natija);
}

function for4() {
  let n = +prompt("son kiriting:");
  let natija = "";

  for (let i = 1; i <= n; i += 2) {
    natija += i + " ";
  }
  alert(natija);
}

function while4() {
  let n = +prompt("son kiriting:");
  let i = 1;
  let natija = "";
  while (i <= n) {
    natija += i + " ";
    i += 2;
  }
  alert(natija);
}
function whiledo4() {
  let n = +prompt("son kiriting:");
  let i = 1;
  let natija = "";
  do {
    natija += i + " ";
    i += 2;
  } while (i <= n);
  alert(natija);
}

function for5() {
  let n = +prompt("son kiriting:");
  let natija = "";

  for (let i = n; i >= 1; i--) {
    natija += i + " ";
  }
  alert(natija);
}
function while5() {
  let n = +prompt("son kiriting:");
  let i = n;
  let natija = "";

  while (i >= 1) {
    natija += i + " ";
    i--;
  }
  alert(natija);
}
function whiledo5() {
  let n = +prompt("son kiriting:");
  let i = n;
  let natija = "";
  do {
    natija += i + " ";
    i--;
  } while (i >= 1);
  alert(natija);
}

function for6() {
  let n = +prompt(" son kiriting:");
  let natija = 0;

  for (let i = 1; i <= n; i++) {
    natija += i;
  }
  alert("n gacha sonlar yig'indisi: " + natija);
}
function while6() {
  let n = +prompt(" son kiriting:");
  let natija = 0;
  let i = 1;

  while (i <= n) {
    natija += i;
    i++;
  }
  alert("n gacha sonlar yig'indisi: " + natija);
}
function whiledo6() {
  let n = +prompt("son kiriting:");
  let natija = 0;
  var i = 1;

  do {
    natija += i;
    i++;
  } while (i <= n);
  alert("n gacha sonlar yig'indisi: " + natija);
}
function for7() {
  let n = +prompt(" son kiriting:");
  let natija = 0;

  for (let i = 2; i <= n; i += 2) {
    natija += i;
  }
  alert("Barcha juft sonlar yig'indisi: " + natija);
}
function while7() {
  let n = +prompt(" son kiriting:");
  let natija = 0;
  let i = 2;

  while (i <= n) {
    natija += i;
    i += 2;
  }
  alert("Barcha juft sonlar yig'indisi: " + natija);
}
function whiledo7() {
  let n = +prompt("son kiriting:");
  let natija = 0;
  let i = 2;

  do {
    natija += i;
    i += 2;
  } while (i <= n);
  alert("Barcha juft sonlar yig'indisi: " + natija);
}
function for8() {
  let n = +prompt(" son kiriting:");
  let natija = 0;

  for (let i = 1; i <= n; i += 2) {
    natija += i;
  }
  alert("Barcha toq sonlar yig'indisi: " + natija);
}
function while8() {
  let n = +prompt("son kiriting:");
  let natija = 0;
  let i = 1;

  while (i <= n) {
    natija += i;
    i += 2;
  }
  alert("Barcha toq sonlar yig'indisi: " + natija);
}
function whiledo8() {
  let n = +prompt(" son kiriting:");
  let natija = 0;
  let i = 1;

  do {
    natija += i;
    i += 2;
  } while (i <= n);
  alert("Barcha toq sonlar yig'indisi: " + natija);
}

function for9() {
  let n = +prompt(" son kiriting:");
  let natija = 1;

  for (let i = 1; i <= n; i++) {
    natija *= i;
  }
  alert("Barcha sonlar ko'paytmasi: " + natija);
}
function while9() {
  let n = +prompt(" son kiriting:");
  let natija = 1;
  let i = 1;

  while (i <= n) {
    natija *= i;
    i++;
  }
  alert("Barcha sonlar ko'paytmasi: " + natija);
}
function whiledo9() {
  let n = +prompt("son kiriting:");
  let natija = 1;
  let i = 1;

  do {
    natija *= i;
    i++;
  } while (i <= n);
  alert("Barcha sonlar ko'paytmasi: " + natija);
}
function for10() {
  let n = +prompt(" son kiriting:");
  let natija = 0;

  for (let i = 1; i <= n; i++) {
    natija += i * i;
  }
  alert("Barcha natural sonlar kvadratlari yig'indisi: " + natija);
}
function while10() {
  let n = +prompt("son kiriting:");
  let natija = 0;
  let i = 1;

  while (i <= n) {
    natija += i * i;
    i++;
  }
  alert("Barcha natural sonlar kvadratlari yig'indisi: " + natija);
}
function whiledo10() {
  let n = +prompt(" son kiriting:");
  let natija = 0;
  let i = 1;

  do {
    natija += i * i;
    i++;
  } while (i <= n);
  alert("Barcha natural sonlar kvadratlari yig'indisi: " + natija);
}
//DATA TYPES DARS

// let name = "shamsiddin"; // string
// let age = 19; //number
// let isMerried = true; // Boolean
// let mynull = null; //null
// let MyUndefined = undefined; // undefined
// let sym = Symbol("Josh"); // symbol
// let MybigInt = BigInt(100); // bigInt
