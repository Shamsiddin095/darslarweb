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
function funcdec1() {
  function findNextNumber(num) {
    return num + 1;
  }

  const num = +prompt("Inter number");

  if (num < 0 || isNaN(num) == true) {
    alert("Try again");
  } else {
    // const result = findNextNumber(num);
    // alert("Next number: " + result);
    conlos.lo(findNextNumber(num));
  }
}

function funcexp1() {
  let findNextNumber = function (num) {
    return num + 1;
  };
  let num = +prompt("Inter your number");
  let result = findNextNumber(num);
  alert("Next number : " + result);
  console.log("next number" + result);
}

function funcarr1() {
  const findNextNumber = (num) => num + 1;
  // the result get
  let num = +prompt("Inter your number:");
  const result = findNextNumber(num);
  console.log(result); //
  alert("Next number: " + result);
}

function funcdec2() {
  function total(num1, num2) {
    return num1 + num2;
  }
  const num1 = +prompt("1 _first number :");
  const num2 = +prompt("1-Second number :");
  const natija = total(num1, num2);
  alert("naitja: " + natija);
}

function funcexp2() {
  let total = function (num1, num2) {
    return num1 + num2;
  };
  let num1 = +prompt("1-first number");
  let num2 = +prompt("2-second number");
  let result = total(num1, num2);
  alert(`Total number : ${result}`);
  console.log("total number" + result);
}

function funcarr2() {
  const total = (num1, num2) => num1 + num2;
  // the result get
  let num1 = +prompt("1-first number");
  let num2 = +prompt("2-second number");
  const result = total(num1, num2);
  console.log(result);
  alert("Total number: " + result);
}

function funcdec3() {
  function secund(hour) {
    return hour * 3600;
  }
  const hour = +prompt("Creat hour :");
  const result = secund(hour);
  alert("result on secund: " + result + " secund");
}

function funcexp3() {
  let second = function (hour) {
    return hour * 3600;
  };

  const hour = +prompt("Creat hour : ");
  const result = second(hour);
  alert(`Result on hour${result}`);
}

function funcarr3() {
  const secund = (hour) => {
    const time = hour * 3600;
    return time;
  };

  const hour = +prompt("Creat hour : ");
  const result = secund(hour);
  alert(`${hour} hour  = ${result}  secund`);
}

function funcdec4() {
  function SquarePerandFace(squareside) {
    return squareside;
  }
  const squareside = +prompt("The value of the side of the square :");
  const side = SquarePerandFace(squareside);
  per = side * 4;
  face = side * side;
  alert(`Square peremetres = : ${per}\n Square face = ${face}`);
}

function funcexp4() {
  let SquarePerandFace = function (squareside) {
    return squareside;
  };
  const squareside = +prompt("The value of the side of the square :");
  const side = SquarePerandFace(squareside);
  per = side * 4;
  face = side * side;
  alert(`Square peremetres = : ${per}\n Square face = ${face}`);
}

function funcarr4() {
  const SquarePerandFace = (squareside) => {
    return squareside;
  };
  const squareside = +prompt("The value of the side of the square :");
  const side = SquarePerandFace(squareside);
  per = side * 4;
  face = side * side;
  alert(`Square peremetres = : ${per}\n Square face = ${face}`);
}

function funcdec5() {
  function EvenorOdd(num) {
    if (num % 2 === 0) {
      return "even";
    } else {
      return " odd";
    }
  }
  const num = +prompt("Inter number:");
  const result = EvenorOdd(num);
  alert(` the number ${num}  ${result}`);
}

function funcexp5() {
  const EvenorOdd = function (num) {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };

  const num = +prompt("inter number:");
  const result = EvenorOdd(num);
  alert(`the number ${num} ${result}`);
}
function funcarr5() {
  const EvenorOdd = (num) => {
    return num;
  };
  const num = +prompt("Inter number:");

  const result = EvenorOdd(num);
  if (isNaN(result) == true || result == " ") {
    alert(`Thank you`);
  } else {
    if (result % 2 === 0) {
      alert(`the number ${result} even`);
    } else {
      alert(`the number ${result} odd`);
    }
  }
}

function funcdec6() {
  function PositiveOrNegative(num) {
    if (num > 0) {
      return "Positive";
    } else {
      return " Nigative";
    }
  }
  const num = +prompt("Inter number:");
  const result = PositiveOrNegative(num);
  alert(`number ${num}  ${result}`);
}

function funcexp6() {
  const PositiveOrNegative = function (num) {
    if (num > 0) {
      return "positive";
    } else {
      return "nigative";
    }
  };
  const num = +prompt("Inter number:");
  const result = PositiveOrNegative(num);
  alert(`the number ${num}  ${result}`);
}

function funcarr6() {
  const PositiveOrNegative = (num) => {
    if (num > 0) {
      return "positive";
    } else {
      return "nigative";
    }
  };
  const num = +prompt("Inter number:");
  const result = PositiveOrNegative(num);
  alert(`the number ${num} ${result}`);
}

function funcdec7() {
  function DayHour(year) {
    return year;
  }
  const year = +prompt("How old is your age ?:");
  const result = DayHour(year);
  day = result * 365;
  hour = day * 24;
  alert(`You ${day} day ${hour}  hours `);
}

function funcexp7() {
  const DayHour = function (year) {
    return year;
  };
  const year = +prompt(`Inter your age :`);
  const result = DayHour(year);
  const day = result * 365;
  const hour = day * 24;
  alert(` You live ${day} day ${hour}  hours`);
}

function funcarr7() {
  const DayHour = (year) => {
    return year;
  };
  const year = +prompt("Inter your age:");
  const result = DayHour(year);
  const day = result * 365;
  const hour = day * 24;

  alert(`you live ${day} day ${hour} hours`);
}

//film taks--------------------------------------------------------

function funcdec8() {
  let like = confirm("film yoqtirasizmi?");

  if (like !== true) {
    alert("Rahmat");
  } else {
    let filmlar = [];
    let janr = prompt(
      "Qaysi film janrini yoqtirishingizni tanlang:\n1 - Horror\n2 - Comedy\n3 - Action\n4 - Romantic"
    );
    if (janr < 0 || isNaN(janr) == true) {
      alert("siz noturi ma'lumot kiritdiz");
    } else {
      let filmSoni = +prompt("Yoqtirgan filmingiz soni :");
      if (filmSoni === Number || filmSoni > 4) {
        alert("Bu kup miqdor yozishga erinmaysizmi?");
      } else {
        switch (janr) {
          case "1":
            for (let i = 1; i <= filmSoni; i++) {
              let filmNomi = prompt(
                `${i}-Horror janri uchun yoqtirgan filmni kiriting:`
              );
              if (filmNomi !== "") {
                filmlar.push(filmNomi);
              } else {
                alert(
                  "siz hech nima kiritmadiz iltimos qaytadan urinib ko'ring"
                );
              }
            }
            break;
          case "2":
            for (let i = 1; i <= filmSoni; i++) {
              let filmNomi = prompt(
                `${i}-Comedy janri uchun yoqtirgan filmni kiriting:`
              );
              if (filmNomi !== "") {
                filmlar.push(filmNomi);
              } else {
                alert(
                  "siz hech nima kiritmadiz iltimos qaytadan urinib ko'ring"
                );
              }
            }
            break;
          case "3":
            for (let i = 1; i <= filmSoni; i++) {
              let filmNomi = prompt(
                `${i}-Action janri uchun yoqtirgan filmni kiriting:`
              );
              if (filmNomi !== "") {
                filmlar.push(filmNomi);
              } else {
                alert(
                  "siz hech nima kiritmadiz iltimos qaytadan urinib ko'ring"
                );
              }
            }
            break;
          case "4":
            for (let i = 1; i <= filmSoni; i++) {
              let filmNomi = prompt(
                `${i}- Romantic janri uchun yoqtirgan filmni kiriting:`
              );
              if (filmNomi !== "") {
                filmlar.push(filmNomi);
              } else {
                alert(
                  "siz hech nima kiritmadiz iltimos qaytadan urinib ko'ring"
                );
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
}
