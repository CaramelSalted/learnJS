let money,
	name,
	time,
	price = 100;

function astart (){
	
	do{
		money = prompt("Ваш бюджет?");
	} while (isNaN(money) || money == "" || money == null);

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 18
}

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
}

function chooseGoods(n){
	for (let i = 0; i < n; i++){
	let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a!= ''){
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
}

function workTime (time) {
	if (time < 0) {
		console.log("Такого не может быть");
	} else if (time > 8 && time <20){
			console.log("Время работать!");
		} else if (time < 24){
				console.log("Уже очень поздно");
			} else {
				console.log("В сутках только 24 часа")
				}
}

const isDiscount = () => mainList.discount? 0.8 * price : price;


function dailyBudget (){
	alert("Ваш бюджет на день " + (mainList.budget / 30));
}

function hireEmployers (n) {
	for (let i = 0; i < n; i++){
	let b = prompt("Введите имя сотрудника:");
		if ((typeof(b)) === 'string' && (typeof(b)) != null && b!= ''){
			mainList.employers.key = i + 1;
			mainList.employers.name = a;
		} else {
			i = i - 1;
		}
	}
}
