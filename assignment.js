//1.feetToMile:
function feetToMile(feet){
    if ( feet< 0) {
        console.log("Hey!Distance can't be negative.");
      }

  else{
    mile=(feet/5280);
    return mile;
    }

}
var mileCount=feetToMile(1);
console.log(mileCount);





//2.woodCalculator:
function woodCalculator(chair,table,bed){
    if(chair<0||table<0||bed<0){
        console.log("Hey!What are you doing? Furniture can't be negative!")
    }
    else{
        chairCount=chair*1;
        tableCount=table*3;
        bedCount=bed*5;
        sumOfwood=(chairCount+tableCount+bedCount);
        return sumOfwood;
    }
}
woodNeed= woodCalculator(1,1,1);
console.log(woodNeed);





//3.brickCalculator:
function brickCalculator(floor){
    firstTenFloor=10*15*1000;
    secondTenFloor=10*12*1000;

    if(floor<0){
        console.log("You have entered wrong input")
    }
    else if(floor<=10){
        need=floor*15*1000;
        return need;
    }
   else if(floor>10&&floor<=20){
        rest=(floor-10);
        need=(firstTenFloor+(rest*12*1000));
        return need;
   }
   else if(floor>20){
        rest2=(floor-20);
        need=(firstTenFloor+secondTenFloor+(rest2*10*1000));
        return need;
    }

}
var brickNeed=brickCalculator(7);
console.log(brickNeed);




//4.tinyFriend:
function tinyFriend(arr){
    var shortest;
    var small=100000;
    if(arr==""){
        console.log("Your array is empty!");
    }
    else{      
    for(i=0;i<arr.length;i++){
        if(arr[i].length<small){
            small=arr[i].length;
            shortest=arr[i];
    }
}
 return shortest;
    }
}
var array=['Tonni','Raha','Raisa','Tasneem'];
shortestName=tinyFriend(array);
console.log(shortestName);