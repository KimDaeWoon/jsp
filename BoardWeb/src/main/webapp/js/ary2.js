/**
 *  ary2.js
 * 샘플 data mockaroo.com
 */
let result = [23, 45, 22, 39, 10, 56].filter(function(item, idx, ary){	
	if(item % 2 == 0){
		return item;
	}
});
// console.log(result);
// console.log(employees);

// employees.forEach(console.log);
// 급여가 5000이 넘는 여자만 필터링.
// 객체(= item) gender 가 F고 객체(= item) salary 가 5000 이상 이면
let over5000 = employees.filter(function(item){
	// console.log(item);
	if(item.gender == 'F' && item.salary > 5000){
		return true;
	}
});

console.log(over5000);

// [A,A,A] => [A,A];

let over5000Sum = 0;
let filterFnc = emp => emp.gender == 'Female' && emp.salary > 5000;
filterFnc = function(emp){
	return emp.gender == 'F' && emp.salary > 5000;
};
employees.filter(filterFnc).forEach(element => {
	over5000Sum += element.salary;
});
console.log(over5000Sum);

// map
// [A,A,A] => ['A', 'A', 'A']
employees.map(function(elem, idx, ary){
	const obj = {};
	obj.name = elem.first_name + '-' + elem.last_name;
	obj.no = elem.id;
	obj.salary = elem.salary;
	return obj;
})
.forEach(console.log);















