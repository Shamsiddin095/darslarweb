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
function Arraylar() {
  var paragraph = document.getElementById("Array");
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

function oper1() {
  let son1 = +prompt("son1 = ");
  let son2 = +prompt("son2 = ");
  let sum = son1 + son2;
  alert("qo'shishdagi natija " + sum);
}

//forrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

// while for do while

function for1() {
  let tanlov = confirm("Siz mevani yoqtirasizmi?");

  if (tanlov) {
    let mevalar = [];
    let soni = +prompt("mevalar soni ");
    for (let i = 1; i <= soni; i++) {
      let meva = prompt(i + " - yoqtirgan mevangizni kiriting");

      if (meva) {
        mevalar.push(meva);
      }
    }

    if (mevalar.length > 0) {
      alert("Sizning yoqtirgan mevalaringiz: " + mevalar.join(", "));
    } else {
      alert("Meva kiritmadiz");
    }
  } else {
    alert("Meva ham yeb tur faqat fast food yeyavermasdan");
  }
}
function array1() {
  let arr = [1, 2, 3, 4];

  alert("Birinchi holatda : " + arr);
  arr.push(5);
  alert(" arr.push(5) qilganimizda oxiriga 5 qo'shildi ");
  alert("natija " + arr);
}
function array2() {
  let arr = [1, 2, 3, 4];

  alert("Birinchi holatda : " + arr);
  arr.pop();
  alert(" arr.pop() bunda oxiridan bitta  olib tashlandi  ");
  alert("natija " + arr);
}
function func1() {
  function keyingison(num) {
    return num + 1;
  }
  const num = +prompt("son kiriting");
  const natija = keyingison(num);
  alert("Kiyingi son: " + natija);
}
function func2() {
  function yigindi(num1, num2) {
    return num1 + num2;
  }
  const num1 = +prompt("1-son :");
  const num2 = +prompt("1-son :");
  const natija = yigindi(num1, num2);
  alert("naitja: " + natija);
}
function func3() {
  function sekund(soat) {
    return soat * 3600;
  }
  const soat = +prompt("soatni kiriting :");
  const natija = sekund(soat);
  alert("naitja: " + natija + " sekund");
}
function func4() {
  function kvadrat_per_yuzi(tomoni) {
    return tomoni;
  }
  const tomoni = +prompt("kvadrat tomonini qiymati :");
  const natija = kvadrat_per_yuzi(tomoni);
  per = natija * 4;
  yuzi = natija * natija;
  alert("Kvadrat peremetri = : " + per + "\n kvadrat yuzi = " + yuzi);
}
function func5() {
  function juftyokitoq(son) {
    if (son % 2 === 0) {
      return "juft";
    } else {
      return " toq";
    }
  }
  const son = +prompt("son kiriting:");
  const natija = juftyokitoq(son);
  alert(son + " soni " + natija);
}

function func6() {
  function musbatyokimanfiy(son) {
    if (son > 0) {
      return "musbat";
    } else {
      return " manfiy";
    }
  }
  const son = +prompt("son kiriting:");
  const natija = musbatyokimanfiy(son);
  alert(son + " soni " + natija);
}
function func7() {
  function kunsoat(yosh) {
    return yosh;
  }
  const yosh = +prompt("yoshingizni kiriting:");
  const natija = kunsoat(yosh);
  kun = natija * 365;
  soat = kun * 24;
  alert(`siz ${kun} kun ${soat} soat yashadiz `);
}

//film taks--------------------------------------------------------

function func8() {
  let like = confirm("film yoqtirasizmi?");

  if (like !== true) {
    alert("Rahmat");
  } else {
    let filmlar = [];
    let janr = prompt(
      "Qaysi film janrini yoqtirishingizni tanlang:\n1 - Horror\n2 - Comedy\n3 - Action\n4 - Romantic"
    );
    let filmSoni = +prompt("Yoqtirgan filmingiz soni :");
    if (filmSoni === Number || filmSoni > 4) {
      alert("Bu kup miqdor yozishga erinmaysizmi?");
    } else {
      switch (janr) {
        case "1":
          for (let i = 0; i < filmSoni; i++) {
            let filmNomi = prompt(
              `Horror janri uchun yoqtirgan filmni kiriting:`
            );
            if (filmNomi !== "") {
              filmlar.push(filmNomi);
            } else {
              alert("siz hech nima kiritmadiz iltimos qaytadan urinib ko'ring");
            }
          }
          break;
        case "2":
          for (let i = 0; i < filmSoni; i++) {
            let filmNomi = prompt(
              "Comedy janri uchun yoqtirgan filmni kiriting:"
            );
            if (filmNomi !== "") {
              filmlar.push(filmNomi);
            } else {
              alert("siz hech nima kiritmadiz iltimos qaytadan urinib ko'ring");
            }
          }
          break;
        case "3":
          for (let i = 0; i < filmSoni; i++) {
            let filmNomi = prompt(
              "Action janri uchun yoqtirgan filmni kiriting:"
            );
            if (filmNomi !== "") {
              filmlar.push(filmNomi);
            } else {
              alert("siz hech nima kiritmadiz iltimos qaytadan urinib ko'ring");
            }
          }
          break;
        case "4":
          for (let i = 0; i < filmSoni; i++) {
            let filmNomi = prompt(
              "Romantic janri uchun yoqtirgan filmni kiriting:"
            );
            if (filmNomi !== "") {
              filmlar.push(filmNomi);
            } else {
              alert("siz hech nima kiritmadiz iltimos qaytadan urinib ko'ring");
            }
          }
          break;

        default:
          alert(" Iltimos, 1 dan 4 gacha raqam kiriting.");
      }

      if (filmlar.length > 0) {
        alert("Janr bo'yicha yoqtirgan filmlaringiz:\n" + filmlar.join(","));
      }
    }
  }
}
