let form = document.forms.reg;
console.log(form);

let login = form.elements.login;
console.log(login.value);

login.value = "asghmnk";

let pwd = form.elements.pwd;
let long = false;
    up = false,
    down = false,
    num = false,
    sym = false;

if (/.{9,}/.test(pwd))
    long = true;
if (/(\d\D*){3,}/.test(pwd))
    num = true;
if (/[A-Z]/.test(pwd))
    up = true;
if (/[a-z]/.test(pwd))
    down = true;
if (/\W/.test(pwd))
    sym = true;

let res = `Длина > 9 символов: ${long}\nЕсть 3 цифры: ${num}\nЕсть заглавные буквы лат. алфавита: ${up}\nЕсть строчные буквы лат. алфавита: ${down}\nЕсть спецсимволы: ${sym}`;
alert(res);

form.addEventListener('submit', myFunc);

function myFunc(e) {
  e.preventDefault();
  console.log(this);
  let formData = new FormData(this);
  console.log(formData);
  console.log(formData.get("login"));
}

form.addEventListener('submit', myFunction);

function funcFocus() {
    console.log("Фокус получил");
}

function funcBlur() {
    console.log("Фокус потерял");
}

login.addEventListener('blur', funcBlur);
login.addEventListener('focus', funcFocus);