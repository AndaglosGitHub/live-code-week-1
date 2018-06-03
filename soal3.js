// Soal 3

/*
di multidimensi array, yang harus student achieve:
- forming sebuah array multidimensi
- bisa mengakses isi terdalam dari array multidimensi
- bisa menambahkan element ke dalam array multidimensi, ke dimensi yang tepat
*/

/*

--------------
DIGITS GROUPER
--------------

PROBLEM
=======
digitsGrouper adalah sebuah function yang menerima array of number 1 dimensi.
Function akan membentuk array dua dimensi dimana dimensi pertama akan mengelompokkan 
angka-angka di array tadi sesuai jumlah digit nya.
Group akan berurut. posisi pertama untuk angka 1 digit, posisi kedua untuk angka 2 digit, dan seterusnya,
hingga maksimal untuk angka 4 digit.

Contoh:
array of numbers: [1, 12, 1234, 13, 0, 88, 123, 456]
proses:
satu digit -> 1, 0
dua digit -> 12, 13, 88
tiga digit -> 123, 456
empat digit -> 1234

output:
[
  [1, 0],
  [12, 13, 88],
  [123, 456],
  [1234],
]

RULES
=====
Dilarang menggunakan method map, filter, dan reduce.
*/

digitsGrouper = (numbers) => {
	var arrayDigits = [];

	for(var i = 0; i < 4; i++){
		arrayDigits.push([]);
	}

	for (var i = 0; i < numbers.length; i++) {
		var jumlahDigit = numbers[i].toString().length;
		
		switch(jumlahDigit){
			case 1  : arrayDigits[0].push(numbers[i]); break;
			case 2  : arrayDigits[1].push(numbers[i]); break;
			case 3  : arrayDigits[2].push(numbers[i]); break;
			case 4  : arrayDigits[3].push(numbers[i]); break;
		}
	}

	console.log(arrayDigits) 
}

digitsGrouper([1, 12, 13, 0, 88, 123, 456]); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654]); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555]); // [ [ 1,6,5,5 ],[ 11,55 ],[ 555,111 ],[ 1111,5555 ] ]
digitsGrouper([]); // [ [], [], [], [] ]
digitsGrouper([0, 00, 000, 0000]); // [ [ 0, 0, 0, 0 ], [], [], [] ]
