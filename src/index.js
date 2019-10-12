module.exports = function check(str, bracketsConfig) {
  if (str.length%2) { //проверка на общее количество, если нечётное, значит и непарное
     return false;  
  }
else { //TODO: добавить проверку количества правых и левых

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
