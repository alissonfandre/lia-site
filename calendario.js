//traduzindo a data 
moment.locale('pt-br');
//declarando a variavel dos dias da semana
var daysWeek = []

//declarando como vazio os html days 
var htmlDaysWeek = ''

//puxando do html a div que tem a calasse days 
const monthDays = document.querySelectorAll(".number");

//declarando o dia do mes no codigo no formato D
const dayMonth = moment().format('D');

//declarando e atribundo os dias na semana 
const dayWeek = moment().format('d');


//exibindo os valores das variaveis no console
console.log(dayWeek)
console.log(dayMonth)

//estrutura de repetiçao para pegar os dias so que inverso
for (let i = dayWeek; i > 0; i--) {
  daysWeek.push(moment().subtract(i, 'days').format('D'));
}

//estrutura para pegas os outros dias 
for (let i = 0; i < (7-dayWeek); i++) {
  daysWeek.push(moment().add(i, 'days').format('D'));
}

// monthDays = ['html dom', 'html seg', 'html ter', 'html quar', 'html quin', 'html sex', 'html sab'] = 7 (0 - 6)
// daysWeek  = [1, 2, 3, 4, 5, 6, 7] = 7 (0 - 6)

//percorendo as linhas do codigo e montando o html
daysWeek.forEach((day, index) => {
  if (day == dayMonth){
    monthDays[index].classList.add('today');

    htmlDaysWeek  = day
  
  }else{

    htmlDaysWeek  = day

  }

  //salvando para exibir os htmldaysweek
  monthDays[index].innerHTML = htmlDaysWeek;
});

const month = document.querySelector(".month .date");
const monthYear = moment().format('MMMM');
const year =  moment().format('YYYY');


console.log("Month", month);

month.innerHTML = "<h1 class='header'>" + monthYear + "</h1><h2 class='header'>" + year + "</h2>"

const selectOptions = document.getElementById("select-options");
selectOptions.innerHTML = '';
daysWeek.forEach((day, index) => {
  const option = document.createElement("option");
  option.value = day;
  option.textContent = day;

  if (day === dayMonth) {
    option.selected = true;
  }

  selectOptions.appendChild(option);
});

// Encontre o botão botao-days
const botaoDays = document.querySelector(".botao-days");

// Encontre o model
const model = document.getElementById("demo-model");
model.classList.add("hidden"); // Adicione a classe "hidden" para ocultar o modal no início

// Adicione um evento de clique ao botão para mostrar o modal
botaoDays.addEventListener("click", () => {
    model.classList.remove("hidden");
});

// Adicione um evento de clique para fechar o modal
function fechaModel() {
    model.classList.add("hidden");
}

const calData = {};

for (let i = 1; i <= 31; i++) {
    calData[i] = [];
}

let currentCalendarDate = moment();


// Encontre o botão "prior"
const priorButton = document.getElementById("prior-button");

// Adicione um evento de clique ao botão "prior"
priorButton.addEventListener("click", () => {
    // Subtraia uma semana da data atual
    currentCalendarDate.subtract(1, 'week');

    // Atualize os dias da semana no calendário
    const newWeekStart = currentCalendarDate.clone().startOf('week');
    const newDaysWeek = [];
    for (let i = 0; i < 7; i++) {
        newDaysWeek.push(newWeekStart.clone().add(i, 'days').format('D'));
    }

    // Atualize a interface do calendário
    monthDays.forEach((day, index) => {
        if (newDaysWeek[index] == dayMonth) {
            monthDays[index].classList.add('today');
        } else {
            monthDays[index].classList.remove('today');
        }
        monthDays[index].innerHTML = newDaysWeek[index];
    });
    
    // Atualize o cabeçalho do mês
    const newMonthYear = currentCalendarDate.format('MMMM');
    const newYear = currentCalendarDate.format('YYYY');
    month.innerHTML = "<h1 class='header'>" + newMonthYear + "</h1><h2 class='header'>" + newYear + "</h2>";
});


const nextButton = document.getElementById("next-button");

// Adicione um evento de clique ao botão "next"
nextButton.addEventListener("click", () => {
    // Avance a data atual em uma semana
    currentCalendarDate.add(1, 'week');

    // Atualize os dias da semana no calendário
    const newWeekStart = currentCalendarDate.clone().startOf('week');
    const newDaysWeek = [];
    for (let i = 0; i < 7; i++) {
        newDaysWeek.push(newWeekStart.clone().add(i, 'days').format('D'));
    }

    // Atualize a interface do calendário
    monthDays.forEach((day, index) => {
        if (newDaysWeek[index] == dayMonth) {
            monthDays[index].classList.add('today');
        } else {
            monthDays[index].classList.remove('today');
        }
        monthDays[index].innerHTML = newDaysWeek[index];
    });
    
    // Atualize o cabeçalho do mês
    const newMonthYear = currentCalendarDate.format('MMMM');
    const newYear = currentCalendarDate.format('YYYY');
    month.innerHTML = "<h1 class='header'>" + newMonthYear + "</h1><h2 class='header'>" + newYear + "</h2>";
});


console.log(monthYear)
console.log(daysWeek)
