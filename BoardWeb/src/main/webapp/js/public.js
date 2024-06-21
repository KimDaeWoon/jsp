/**
 * public.js
 */

 let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=TVEcjRXWY4Ec9cSw04kntDkWum2w6EHVqv1aAzL6Z8eWyNhJRgRq%2FCsftwrtHgviJaGYoySh9v2Ut6OMbH4F3A%3D%3D';

 let publicData; 
 const target = document.querySelector('#centerList');
 fetch(url)
    .then((result) => result.json()) //[{"id": 1, "center.."}] => [{},{}]
    .then((result) =>{
    console.log(result.data);
    publicData = result.data;
    result.data.forEach(center => {
    //  console.log(center);
      target.appendChild(makeRow(center));
    });
 })
 

//  center data 보여주기 
let fields = ['id','centerName', 'phoneNumber', 'address'];
function makeRow(center){
    let tr = document.createElement('tr');
//    tr.setAttribute('id', fields.id);
    fields.forEach(field =>{
        let td = document.createElement('td');
            td.innerHTML = center[field];
            tr.appendChild(td);
        })
        return tr;
}


// 배열을 갖고 와서 td 값 내부 innerHTML 값에서 '동구' 값을 가져 온다
// 

const find = document.querySelector('#findBtn').addEventListener('click', findBtnFnc);

function findBtnFnc(){
    let search = document.querySelector('#search').value;
    target.innerHTML = "";
    publicData.forEach(field =>{
        if(field.address.includes(search)) {
            target.appendChild(makeRow(field));
        }
        
    })
};

// 

function values(){
    select.querySelector('#sido')
    let opt = document.createElement('option');
    publicData.forEach(field =>{
        opt.innerHTML = field.sido
    })
}







//  const xhtp = new XMLHttpRequest();
//  xhtp.open('get', url);
//  xhtp.send();
//  xhtp.onload = function(){
//     let data = JSON.parse(xhtp.responseText);
//     console.log(data);
//  }
 
 
 
 
 
 