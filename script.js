let money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
}

mainList.shopGoods[0] = prompt("Что вы продаете?");
mainList.shopGoods[1] = prompt("Что вы продаете?");
mainList.shopGoods[2] = prompt("Что вы продаете?");

alert("Ваш бюджет на день " + (mainList.budget / 30));