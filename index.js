
function przelicz(zloty){
    var zloty = document.getElementById('zloty').value;
    var usd = document.getElementById('usd').value;
    var euro = document.getElementById('euro').value;
    let przeliczone_na_usd = zloty * 4.0327;
    let przeliczone_na_euro = zloty * 4.4069;
    if (zloty !=isNaN && zloty != 0){
        document.getElementById('usd').value = przeliczone_na_usd.toFixed(2);
        document.getElementById('euro').value = przeliczone_na_euro.toFixed(2);
        //var discount = (price / listprice).toFixed(2);
    }   
    else {
        document.getElementById('usd').value = "Wartość nieprawdiłowa!";
        document.getElementById('euro').value = "Wartość nieprawdiłowa!";
    }
}