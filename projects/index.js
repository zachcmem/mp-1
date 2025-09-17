
function checkNeg(result){
    let output = document.getElementById("output");

    output.innerHTML = result;

    if (Number(result) < 0){
        output.style.backgroundColor = "red";
    }
    else{
        output.style.backgroundColor = "";
    }
    
    
}


function doAdd(){

    let x = document.getElementById("one").value;
    let y = document.getElementById("two").value;

    let sum = String(Number(x) + Number(y));
    checkNeg(sum);
    // document.getElementById("output").innerHTML = sum;

}

function doSub(){

    let x = document.getElementById("one").value;
    let y = document.getElementById("two").value;

    let sum = String(Number(x) - Number(y));
    checkNeg(sum);
    // document.getElementById("output").innerHTML = sum;

}

function doMul(){

    let x = document.getElementById("one").value;
    let y = document.getElementById("two").value;

    let sum = String(Number(x) * Number(y));
    checkNeg(sum);
    // document.getElementById("output").innerHTML = sum;

}

function doDiv(){

    let x = document.getElementById("one").value;
    let y = document.getElementById("two").value;

    let sum = String(Number(x) / Number(y));
    checkNeg(sum);
    // document.getElementById("output").innerHTML = sum;

}

function doExp(){
    let x = Number(document.getElementById("one").value);
    let y = Number(document.getElementById("two").value);
    let result = 1;
    for (let i = 0; i < y; i++){
        result = result * x;
    }
    checkNeg(result);
    // document.getElementById("output").innerHTML = result;
}

function doClear(){
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
    document.getElementById("output").innerHTML = "";
}