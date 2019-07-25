let money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
}

for (let i = 0; i < 4; i++){
	mainList.shopGoods[i] = prompt("Что вы продаете?");
}

alert("Ваш бюджет на день " + (mainList.budget / 30));