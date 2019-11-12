// begin hier je JavaScript commandos

// Wesley Hop
// 99030063
// LPIAO19A1

// de linebreak zorgt voor een nieuwe regel
var linebreak = "<br>"
var pickSize;
var valid = false
var pizzaSize;
var pizzaAmmountSmall=0;
var pizzaAmmountMedium=0;
var pizzaAmmountLarge=0;
const PRICE_SMALL = 10.49;
const PRICE_MEDIUM = 12.99;
const PRICE_LARGE = 14.99;



// diverse pizza formaten waar uit gekozen kan worden

  function pickSize(pizzaSize){

  //checkt of de invoer een nummer is of niet voor alle soorten pizza's
  
  if (pizzaSize=="Small"){
  valid=false
    while (!valid){
      pizzaAmmountSmall=parseInt(prompt("Hoeveel "+pizzaSize+" pizza's wilt u hebben?"));
        if (Number.isNaN(pizzaAmmountSmall)){
          alert("geef alstublieft een nummer.");
      }else{
        valid=true;
      }}}

  else if (pizzaSize=="Medium"){
  valid=false
    while (!valid){
      pizzaAmmountMedium=parseInt(prompt("Hoeveel "+pizzaSize+" pizza's wilt u hebben?"));
        if (Number.isNaN(pizzaAmmountMedium)){
          alert("geef alstublieft een nummer.");
      }else{
        valid=true;
      }}}
  
  else if (pizzaSize=="Large"){
  valid=false
    while (!valid){
      pizzaAmmountLarge=parseInt(prompt("Hoeveel "+pizzaSize+" pizza's wilt u hebben?"));
        if (Number.isNaN(pizzaAmmountLarge)){
          alert("geef alstublieft een nummer.");
        }else{
          valid=true;
        }}}}
function choiceSmall(){ 
document.getElementById("smallOutput").innerHTML = "Aantal: "+pizzaAmmountSmall;
}
function choiceMedium(){
document.getElementById("mediumOutput").innerHTML = "Aantal: "+pizzaAmmountMedium;
}
function choiceLarge(){
document.getElementById("largeOutput").innerHTML = "Aantal: "+pizzaAmmountLarge;
}
//bestelling bevestigen gebeurd met deze code
// na de prompts komt er op het scherm de volgende bestelling te staan (met de eigen ingevulde gegevens)
// document.write("Uw bestelling is als volgt: " + linebreak)
  function submit1() {  
    var result = confirm("Wilt u uw bestelling bevestigen?"); 
    if (result == true) { 
        
        var priceSmall = parseFloat(pizzaAmmountSmall * PRICE_SMALL).toFixed(2);
        // priceSmall.toFixed(2);
        var html = ("<strong>" + pizzaAmmountSmall + "× </strong>" + " Small pizza" + " (€ " + PRICE_SMALL + " p/s, totaal € " + priceSmall + ")" + linebreak);
        
        var priceMedium = parseFloat(pizzaAmmountMedium * PRICE_MEDIUM).toFixed(2);
        // priceMedium.toFixed(2);
         html += ("<strong>" + pizzaAmmountMedium + "× </strong>" + " " + "Medium pizza" + " " + "(€ " + PRICE_MEDIUM + " p/s, totaal € " + priceMedium + ")" + linebreak);
        
        var priceLarge = parseFloat(pizzaAmmountLarge * PRICE_LARGE).toFixed(2);
        // priceLarge.toFixed(2);
        html += ("<strong>" + pizzaAmmountLarge + "× </strong>" + " " + "Large pizza" + " " + "(€ " + PRICE_LARGE + " p/s, totaal € " + priceLarge + ")" + linebreak);
        
        var totalPrice = parseFloat(Number(priceSmall) + Number(priceMedium) + Number(priceLarge)).toFixed(2);
        
    
        // de totaalprijs wordt hiermee op het scherm getoond
        html += (linebreak+"Dat maakt dan totaal: <strong> € " + totalPrice + "</strong>");

        document.getElementById("bon").innerHTML = html;
      }
}


// na de prompts komt er op het scherm de volgende bestelling te staan (met de eigen ingevulde gegevens)
// document.write("Uw bestelling is als volgt: " + linebreak)