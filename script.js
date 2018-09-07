function isOldEnoughToDrink(age) {
    if(age >= 21){
        return true;
    } else {
        return false;
    }
}

function getProperty(obj, key) {
    return obj[key];

}

function addProperty(obj, key) {
    obj[key] = true;

}

function removeProperty(obj, key) {
    delete obj[key];

}

function isEven(num) {
    if(num % 2 === 0 ){
        return true;
    } else {
        return false;
    }
}

function isOdd(num) {
    if(num % 2 !== 0){
        return true;

    } else {
        return false;
    }

}

function addToFront(arr, element) {
    arr.splice(0, 0, element );

    return arr;

}

function addToBack(arr, element) {
    arr.splice(arr.length, 0, element)
    return arr;
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);



}

function getAllWords(str) {
    if(str.length === 0){
        return [];

    } else {
        return str.split(" ");
    }
}

function extend(obj1, obj2) {
    for(var key in obj2){
        if(!obj1[key]){
            obj1[key] = obj2[key];
        }
    }
    return obj1;

}

function removeStringValues(obj) {
    for(var key in obj){
        if (typeof obj[key] === "string"){
            delete obj[key];
        }

    }


}

function getIndexOf(char, str) {
    var position = str.search(char);
    return position;
}

function keep(array, keeper) {
    var arr = [];
    for (var i = 0; i < array.length; i++){
        if(array[i] === keeper){
            arr.push(array[i]);
        }

    }
    return arr;

}

function getLargestElementAtProperty(obj, key) {
    var largest = 0;
    if(obj.key === undefined || obj[key].length === 0 || !Array.isArray(obj[key])) {
        return undefined;

    }

    for(var i = 0; i < obj[key].length; i++){
        if(obj[key][i]>largest){
            largest = obj[key][i];

        }

    }
    return largest;

}

function calculateBillTotal(preTaxAndTipAmount) {
    var salesTax = preTaxAndTipAmount * 0.095;
    var tip = preTaxAndTipAmount * 0.15;
    return preTaxAndTipAmount + salesTax + tip;

}

function sumDigits(num) {
    var number = 0;
    var string = num.toString();
    for(var i = 0; i < string.length; i++){
        if(string[i] === "-"){
            number-= parseInt(string[i + 1]);
            i++;
        } else {
            number += parseInt(string[i]);
        }
    }
    return number;
}

function listAllValues(obj) {
    var arr = [];
    for (var key in obj){
        arr.push(obj[key]);

    }
    return arr;

}

function detectOutlierValue(string){
    var evenCount = 0;
    var oddCount = 0;

    var arr = string.split(" ");
    for (var i = 0; i < arr.length; i++){
        if(parseInt(arr[i]) % 2 === 0){
            evenCount ++;
        } else {
            oddCount ++;
        }
    }
    if(evenCount>oddCount){
        outlier = 1;
    } else {
        outlier = 0;
    }
    for(var a = 0; a < arr.length; a++){
        if(parseInt(arr[i]) %2 == outlier){
            return a + 1;
        }

    }
}

function search(array, value) {
    var ind = 0;
    while (array.length>1){
        if(array[Math.floor(array.length/2)]>value){
            array= array.slice(0,Math.floor(array.length/2));


        } else if(array[Math.floor(array.length/2)]<value){
            ind += Math.floor(array.length/2) + 1;
            array = array.slice((Math.floor(array.length/2)+1));
        }

    }
    if(array.length==1 && array[Math.floor(array.length/2)]!= value){
        return null;
    }
    return ind;
}