/**
 *      ary3.js
 */
// 제일 큰값 메서드 작성
let sum = 
        [10, 20, 30, 40, 50].reduce(function(acc, elem, idx, ary){
                    console.log(acc, elem);//, idx, ary);
                    if(acc > elem){
                        return acc;
                    }
                    return elem;
        }, 0);
console.log(sum);

// 25보다 큰 값 acc 배열에 담는다
// let sum = 
//         [10, 20, 30, 40, 50].reduce(function(acc, elem, idx, ary){
//                     console.log(acc, elem);//, idx, ary);
//                     if(elem > 25){
//                         acc.push(elem);
//                     }
//                     return acc;
//         }, []);
// console.log(sum);

['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'].reduce(function(acc, elem){
    let li = document.createElement('li');
    li.innerHTML = elem;
    acc.appendChild(li);

    return acc;
}, document.getElementById('fruit'));

