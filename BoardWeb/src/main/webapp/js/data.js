/**
 * 
 */
const myMembers = [
	{id : 'user01', name : '홍길동', phone : '010-1111-2222', point : 30},	// new Object();
	{id : 'user02', name : '성춘향', phone : '010-3333-4444', point : 50},
	{id : 'user03', name : '이몽룡', phone : '010-5555-6666', point : 10}	
];	// 배열 선언 new Array();

const json = `[{"id":1,"first_name":"Carlina","last_name":"Hendrikse","email":"chendrikse0@zimbio.com","gender":"F","salary":6580},
{"id":2,"first_name":"Tannie","last_name":"Brideoke","email":"tbrideoke1@spotify.com","gender":"M","salary":3434},
{"id":3,"first_name":"Toni","last_name":"Amy","email":"tamy2@diigo.com","gender":"F","salary":6805},
{"id":4,"first_name":"Vere","last_name":"Yeldon","email":"vyeldon3@go.com","gender":"F","salary":7150},
{"id":5,"first_name":"Sven","last_name":"Rizzardini","email":"srizzardini4@eventbrite.com","gender":"M","salary":7296},
{"id":6,"first_name":"Garrek","last_name":"Dimitrijevic","email":"gdimitrijevic5@themeforest.net","gender":"M","salary":3996},
{"id":7,"first_name":"Veronika","last_name":"Zorro","email":"vzorro6@soundcloud.com","gender":"F","salary":7193},
{"id":8,"first_name":"Eachelle","last_name":"Foxen","email":"efoxen7@google.com","gender":"F","salary":7716},
{"id":9,"first_name":"Arnie","last_name":"Seywood","email":"aseywood8@yellowpages.com","gender":"M","salary":6850},
{"id":10,"first_name":"Novelia","last_name":"Rapo","email":"nrapo9@amazon.co.jp","gender":"F","salary":3693},
{"id":11,"first_name":"Briggs","last_name":"Kruschov","email":"bkruschova@sina.com.cn","gender":"M","salary":5891},
{"id":12,"first_name":"Rafaelita","last_name":"Spillett","email":"rspillettb@goodreads.com","gender":"F","salary":3272},
{"id":13,"first_name":"Nikola","last_name":"Ducker","email":"nduckerc@jalbum.net","gender":"M","salary":6010},
{"id":14,"first_name":"Janetta","last_name":"Danbrook","email":"jdanbrookd@zimbio.com","gender":"F","salary":5632},
{"id":15,"first_name":"Hilde","last_name":"Santon","email":"hsantone@wix.com","gender":"F","salary":4837}]`;

const employees = JSON.parse(json);