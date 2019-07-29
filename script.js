let money,
	name,
	time,
	price = 100;

function start (){
	
	do{
		money = prompt("Ваш бюджет?", "");
	} while (isNaN(money) || money == "" || money == null);

	name = prompt("Название вашего магазина?", "").toUpperCase();
	time = 18
}

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	shoopItems: [],
	open: false,
	discount: true,
	chooseGoods: function chooseGoods(n){
			for (let i = 0; i < n; i++){
			let a = prompt("Какой тип товаров будем продавать?", "");
				if ((typeof(a)) === 'string' && (typeof(a)) != null && a!= ''){
					mainList.shopGoods[i] = a;
				} else {
					i = i - 1;
				}
			}
		},
	chooseShoopItems: function chooseShoopItems(){
		let items='';
		while (!((typeof(items)) === 'string' && (typeof(items)) != null && items!= '')){
			items = prompt("Перечислите через запятую товары: ", "");
		}
		mainList.shoopItems = items.split(",");
		
		do{
			items = prompt("Введите последний товар: ", "");
		} while (!((typeof(items)) === 'string' && (typeof(items)) != null && items!= ''));
		
		mainList.shoopItems.push(items);
		mainList.shoopItems.sort();
	},
	workTime: function workTime (time) {
			if (time < 0) {
				console.log("Такого не может быть");
			} else if (time > 8 && time <20){
					mainList.open = true;
					console.log("Время работать!");
				} else if (time < 24){
						console.log("Уже очень поздно");
						ainList.open = false;
					} else {
						console.log("В сутках только 24 часа");
						}
		},
	makeDiscount: function makeDiscount (){
		if (mainList.discount){
			price = (price/100)*80;
		}
	},
	dailyBudget: function dailyBudget (){
			alert("Ваш бюджет на день " + (mainList.budget / 30));
		},
	hireEmployers: function hireEmployers (n) {
			for (let i = 0; i < n; i++){
			let b = prompt("Введите имя сотрудника: ", "");
				if ((typeof(b)) === 'string' && (typeof(b)) != null && b!= ''){
					mainList.employers.key = i + 1;
					mainList.employers.name = a;
				} else {
					i = i - 1;
				}
			}
		}
}

mainList.chooseShoopItems();
console.log('У нас вы можете купить:');
mainList.shoopItems.forEach(function(item){
 console.log(item);
});
console.log('Повторяю. Мы продаем:');
for (item in mainList.shoopItems) {
	console.log(mainList.shoopItems[item]);
};
