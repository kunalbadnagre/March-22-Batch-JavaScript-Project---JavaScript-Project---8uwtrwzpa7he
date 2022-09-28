
function calculate(){
    let bill = document.getElementById('bill').value;
    let percent = document.getElementById('tipPercent').value;
    let person = document.querySelector('#person').value;
    if(person == ""){
        person = "1";
    }

    let tipAmount = ((bill/100)*percent)/person;
    let roundOffTip = tipAmount.toFixed(2);
    document.getElementById('tipAmount').innerHTML = "$"+roundOffTip;
    
    let totalAmount = (bill/person)+tipAmount;
    let roundOffTotal = totalAmount.toFixed(2);
    document.getElementById('totalAmount').innerHTML = "$"+roundOffTotal;

    document.getElementById('bill').value = "";
    document.getElementById('tipPercent').value = "";
    document.getElementById('person').value = "";
}
