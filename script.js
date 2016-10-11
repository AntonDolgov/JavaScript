/*
Напишите функцию applyAll(func, arg1, arg2...), 
которая получает функцию func и произвольное 
количество аргументов.

Она должна вызвать func(arg1, arg2...), то есть 
передать в func все аргументы, начиная со второго, 
и возвратить результат.
*/

function applyAll(arr) {
	/* конкретно в данном задании контекст метода 
	apply не нужен. "this" используется на всякий 
	случай. Специально в самом низу добавил этот случай
	в качестве примера
	*/
	return arr.apply(this, [].slice.call(arguments,1));
}

// Применить Math.max к аргументам 2, -2, 3
alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2


function sum() { // суммирует аргументы 
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

alert( applyAll(sum, 1, 2, 3) ); // sum(1, 2, 3) = 6
alert( applyAll(mul, 2, 3, 4) ); // mul(2, 3, 4) = 24

//в качестве примера, когда "this" пригодится:
var obj = {
    i: 10,
    f: function (arg) {
        alert(this.i + arg)
    }
};

obj.applyAll = applyAll; // "одолжили" метод
obj.applyAll(obj.f, 10); // 20