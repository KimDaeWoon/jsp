/**
 * ary1.js
 * forEach, filter, map, reduce
 */

const numAry = [23, 17, 5, 41, 30, 12];

let evenSum = function(elem, idx, ary){
    // console.log(elem, idx, ary);
    if (elem % 2 == 0){
        result += elem;
    }
};   // 매개값으로 함수.


let oddSum = function(elem, idx, ary){
    // console.log(elem, idx, ary);
    if (idx % 2 == 0){
        result += elem;
    }
};

// 35보다 작은 값 들의 합을 저장 
let less35 = function(elem, idx, ary){
    // console.log(elem, idx, ary);
    if(elem <= 35){
        result += elem;
    }
}

let result = 0;
numAry.forEach(evenSum);
console.log('짝수 합은 ? ', result);

result = 0;
numAry.forEach(oddSum);
console.log('홀수 번째 합은 ? ', result);

result = 0;
numAry.forEach(less35);
console.log('35 보다 작은 값의 합은 ? ', result);

const dupAry = [10, 27, 32, 55, 27, 10];
const ary = []; // indexOf() = > 인덱스 값을 반환. 없으면 -1을 반환 . push

// 중복된 제거된 ary 에 등록 
dupAry.forEach(function(elem){
    if(ary.indexOf(elem) == -1){
        console.log(ary.push(elem));
    }    
    console.log(dupAry.indexOf(10));
});
console.log(ary);

