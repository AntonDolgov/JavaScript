function filter (arr, func) {
	var newArray = [];
	for(var i=0;i<arr.length; i++) {
		if (func(arr[i])) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

function inBetween(a,b) {
	return function (x) {
		return x>=a && x<=b;
	}		
}

function inArray(arr) {
	var result = false;
	function (x) {
		for (var i=0; i<arr.length; i++) {
			if (x==arr[i]) {
				result = true;
			}
		}		
	}
	return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
alert( filter(arr, inArray([1, 2, 10])) ); // 1,2