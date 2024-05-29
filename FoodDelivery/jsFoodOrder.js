
const menuitemElement = document.getElementById("menu");
const broiElement = document.getElementById("broi");
const centurRadioElement = document.getElementById("centur");
const kwartaliRadioElement = document.getElementById("kwartali");
const buttonPoruchaiElement = document.getElementById('poruchai');
const poruchkaElement=document.getElementById('poruchka');
const blagodarimElement=document.getElementById('blagodarim');

buttonPoruchaiElement.addEventListener('click',()=>{
    if (broiElement.value==NaN) {
        alert('Не сте въвели брой')
    }
    let cena=0;
    cena=menuitemElement.value*broiElement.value;
    if (centurRadioElement.checked) {
        cena=cena+2;
    }else if(kwartaliRadioElement.checked){
        cena=cena+3;

    }
    poruchkaElement.textContent=`Вашата поръчка е на стойност ${cena} лева и ще бъде доставена до 60 минути`
    blagodarimElement.textContent='Благодарим Ви, че избрахте нас!'
})
