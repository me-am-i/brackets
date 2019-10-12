module.exports = function check(str, bracketsConfig) {
  if (str.length%2) { //проверка на общее количество, если нечётное, значит и непарное
     return false;  
  }
else { //TODO: добавить проверку количества правых и левых



    let positionFirst = str.indexOf(bracketsConfig[0][0]);
    let positionLast = str.lastIndexOf(bracketsConfig[0][1]);
    console.log(bracketsConfig[0][0]);
    console.log(bracketsConfig[0][1]);
   console.log(positionFirst, positionLast);

if ((positionLast - positionFirst > 1) && (positionLast - positionFirst % 2)) {
     return false; // считаем количество
    }


return Array.isArray(bracketsConfig);

}

  
}

/*
var bracketMask = /\(|\)/g; //создаём маску
var found = expr.match(bracketMask); //ищем по маске



if (found.length % 2) {  //проверка количества
        console.log(found.length + " нечетное, ошибка");
} else {
    console.log(found.length + " чётное, проверяем дальше");
 }

 */
