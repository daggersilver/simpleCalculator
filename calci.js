var num = document.querySelectorAll(".num");
var deci = document.querySelector(".deci");
var operator = document.querySelectorAll(".op");
var equal = document.querySelector(".equal");
var resultTab = document.getElementById("result-tab");
var historyTab = document.getElementById("history-tab");
var allclear = document.querySelector(".allclear");
var backspace = document.querySelector(".back");
var square = document.querySelector(".square");
var root = document.querySelector(".root");
var nega = document.querySelector(".nega");
var btn = document.querySelectorAll(".btn");

var num1 = "";
var num2 = "";
var op;
var result;



num.forEach((l)=>{
    l.addEventListener("click", function(){
        if(!op && num1.length<=8){
            num1 += l.innerHTML;
            resultTab.innerHTML += l.innerHTML;
        }
        if(op){
            
            if(resultTab.innerHTML == op){
                num2 = l.innerHTML;
                resultTab.innerHTML = l.innerHTML;
                historyTab.innerHTML += " " + op;
            } else if(num2.length<=8){
                num2 += l.innerHTML;
                resultTab.innerHTML += l.innerHTML;
            }
        }
    })
})

deci.addEventListener("click", ()=>{
    if(num1 && !num1.includes(".")){
        num1 += ".";
        resultTab.innerHTML += ".";
    }
    if(num2 && !num2.includes(".")){
        num2 += ".";
        resultTab.innerHTML += ".";
    }
})

operator.forEach((l)=>{
    l.addEventListener("click", ()=>{
        if(num1 && !num2 ){
            op = l.innerHTML;
            resultTab.innerHTML = l.innerHTML;
            historyTab.innerHTML = num1;
        }
    })
})

function x(a, o, b){
    return o=="+"? a+b: o=="-"? a-b: o=="*"? a*b: o=="/"? a/b: null;
}
equal.addEventListener("click", ()=>{
    if(num2 && op){
        result = parseFloat(x(parseInt(num1), op ,parseInt(num2)).toFixed(2));

        resultTab.innerHTML = result;
        historyTab.innerHTML += " " +  num2;
        num1 = result;
        num2 = "";
        op = "";
        if(resultTab.innerHTML==Infinity){
            resultTab.innerHTML = "Sorry I can't";
            num1 = "";
            num2 = "";
        }
        if(result.toString().length>10){
            result = "";
            historyTab.innerHTML = "too big";
            resultTab.innerHTML = "";
            num1 = "";
            num2 = "";
        }
    }
    
})

allclear.addEventListener("click", ()=>{
    num1 = "";
    num2 = "";
    result = "";
    resultTab.innerHTML = "";
    historyTab.innerHTML = "";
    op = "";
})

backspace.addEventListener("click", ()=>{
    resultTab.innerHTML = resultTab.innerHTML.substr(0, resultTab.innerHTML.length-1);
    if(!op){
        num1 = resultTab.innerHTML;
    } else if(op && !num2){
        op = resultTab.innerHTML;
    } else {
        num2 = resultTab.innerHTML;
    }
})

square.addEventListener("click", ()=>{
    if(num1 && !op && num1.length<=6){
        num1 = (parseInt(num1) ** 2).toString();
        resultTab.innerHTML = num1;
    } else{
        resultError();
    }
})

root.addEventListener("click", ()=>{
    if(num1 && !op){
        num1 = (parseInt(num1) ** 0.5).toFixed(2).toString();
        resultTab.innerHTML = num1;
        num1 = Math.round(parseInt(num1)).toString();
    } else{
        resultError();
    }
})

nega.addEventListener("click", ()=>{
    if(!num1){
        num1 = "-";
        resultTab.innerHTML = "-"
    }
})

btn.forEach((l)=>{
    l.addEventListener("click", ()=>{
        if(resultTab.innerHTML == "NaN"){
            resultError();
        }
    })
})

window.addEventListener("keydown", events);


function resultError(){
    resultTab.innerHTML = "error";
    window.setTimeout(()=>{
        resultTab.innerHTML = "";
        num1 = "";
        op = "";
    }, 500)
}

function events(l){
    var k = l.key;
    
    switch(k){
        case num[0].innerHTML:
            num[0].click();
            break;
        case num[1].innerHTML:
            num[1].click();
            break;
        case num[2].innerHTML:
            num[2].click();
            break; 
        case num[3].innerHTML:
            num[3].click();
            break;
        case num[4].innerHTML:
            num[4].click();
            break;
        case num[5].innerHTML:
            num[5].click();
            break;
        case num[6].innerHTML:
            num[6].click();
            break; 
        case num[7].innerHTML:
            num[7].click();
            break;
        case num[8].innerHTML:
            num[8].click();
            break;
        case num[9].innerHTML:
            num[9].click();
            break; 
        case operator[0].innerHTML:
            operator[0].click();
            break; 
        case operator[1].innerHTML:
            operator[1].click();
            break;
        case operator[2].innerHTML:
            operator[2].click();
            break;
        case operator[3].innerHTML:
            operator[3].click();
            break; 
        case "Delete":
            allclear.click();
            break; 
        case "Backspace":
            backspace.click();
            break;
        case deci.innerHTML:
            deci.click();
            break;
        case equal.innerHTML:
        case "Enter":
            equal.click();
            break;  
    }
}

