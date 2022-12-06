var massa = Number(prompt("Assalom aleykum iltimos vazningizni kiriting"));
var uzunlik = Number(prompt("Iltimos bo'yingizni balandligini kiriting (masalan: 1.83)"));
var BMI = Number(massa/(uzunlik * uzunlik))


 if (BMI < 15){
    alert(`Sizda vazningiz bo'yicha muammo bor`)
}
else if (BMI >= 15 & BMI <=25){
    alert(`juda yaxshi siz sog'lomsiz`);
}
else if (BMI > 25){
    alert(`Sizda vazn bo'yicha muammo bor ozing!`);
}


