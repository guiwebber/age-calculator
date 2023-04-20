//entrada de dados do usuario
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

//button
let botao = document.getElementById("botao");

//saida de dados
let nYears = document.querySelector(".nYears");
let nMonths = document.querySelector(".nMonths");
let nDays = document.querySelector(".nDays");

const now = new Date();
const mesAtual = now.getMonth() + 1;
const diaAtual = now.getDate();
const anoAtual = now.getFullYear();

//ERRORS

let emptyDay = document.querySelector(".emptyDay");
let invalidDay = document.querySelector(".invalidDay");
let emptyMonth = document.querySelector(".emptyMonth");
let invalidMonth = document.querySelector(".invalidMonth");
let emptyYear = document.querySelector(".emptyYear");
let invalidYear = document.querySelector(".invalidYear");

botao.addEventListener("click", () => {
  const birthyear = year.value;
  const birthmonth = month.value;
  const birthday = day.value;

  let years = anoAtual - birthyear;
  let months = mesAtual - birthmonth;
  let days = diaAtual - birthday;

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }
  if (days < 0) {
    const diasNoUltimoMes = new Date(anoAtual, mesAtual - 1, 0).getDate();
    days += diasNoUltimoMes;
    months--;
  }

  function verificaDia() {
    if (day.value.length === 0) {
      emptyDay.style.display = "block";
      day.classList.add("inputError");
    } else if (day.value > 31 || day.value < 1) {
      emptyDay.style.display = "none";
      day.classList.add("inputError");
      invalidDay.style.display = "block";
    } else {
      emptyDay.style.display = "none";
      invalidDay.style.display = "none";
      day.classList.remove("inputError");
    }
  }
  function verificaMes() {
    if (month.value.length === 0) {
      emptyMonth.style.display = "block";
      month.classList.add("inputError");
    } else if (month.value < 1 || month.value > 12) {
      emptyMonth.style.display = "none";
      invalidMonth.style.display = "block";
      month.classList.add("inputError");
    } else {
      emptyMonth.style.display = "none";
      invalidMonth.style.display = "none";
      month.classList.remove("inputError");
    }
  }
  function verificaAno() {
    if (year.value.length === 0) {
      emptyYear.style.display = "block";

      year.classList.add("inputError");
    } else if (year.value > anoAtual) {
      emptyYear.style.display = "none";
      invalidYear.style.display = "block";
      year.classList.add("inputError");
    } else {
      emptyYear.style.display = "none";
      invalidYear.style.display = "none";
      year.classList.remove("inputError");
    }
  }
  verificaDia();
  verificaMes();
  verificaAno();

  function mainErrors() {
    nYears.textContent = "--";
    nMonths.textContent = "--";
    nDays.textContent = "--";
  }
  function mainValue() {
    nYears.textContent = years;
    nMonths.textContent = months;
    nDays.textContent = days;
  }

  if (birthday.length === 0 || birthday > 31 || birthday === 0) {
    mainErrors();
    return;
  }
  if (birthyear.length === 0 || birthyear > anoAtual || birthyear === 0) {
    mainErrors();
    return;
  }
  if (birthmonth.length === 0 || birthmonth > 12 || birthmonth === 0) {
    mainErrors();
    return;
  } else {
    mainValue();
  }
});
