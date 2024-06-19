/**
 * obj1.js
 */
document.getElementById('dom').remove();
const obj = {
    data: '',
    fields: ['id', 'first_name', 'email', 'salary'],
    showList: function (ary = []) {
        ary.forEach((emp, idx) => {
            if (idx < 5) {
                document.querySelector('#list').appendChild(this.makeRow(emp));
            }
        });
    },
    makeRow(emp = { id, first_name, email, salary }) {
        let tr = document.createElement('tr');
        this.fields.forEach(field => {
            let td = document.createElement('td');
            td.innerHTML = emp[field];
            tr.appendChild(td);
        });
        return tr;
    }
}
obj.showList(employees);

document.getElementById('addBtn').addEventListener('click', addBtnList);



function addBtnList() {
    let a = {
        id: document.getElementById('mid').value,
        first_name: document.getElementById('mname').value,
        email: document.getElementById('mphone').value,
        salary: document.getElementById('mpoint').value
    };

    document.querySelector('#list').appendChild(obj.makeRow(a));
}

const preson = {
    name : "홍길동",
    age : 20
}

let prop = 'age';
console.log(preson.prop);   // 안됨
console.log(preson[prop]);  

const today = new Date();
today.getFullYear();

Date.prototype.format = function(){
    let yy = this.getFullYear();
    let mon = '0' + (this.getMonth() + 1);
    let dd = this.getDay();
    return yy + mon + dd;
}
console.log(today.format());



