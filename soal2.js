/*
Soal 2

SKELETON CODE (Code Sample)

-------------------
The Number Cruncher
-------------------

PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima sebuah parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil penambahan angka di
index array sebelumnya dengan dua angka yang berada di kiri dan kanannya. Apabila tidak ada
angka di kiri atau kanan, maka dianggap sebagai 0. Kemudian, dari setiap nilai di dalam array tersebut,
ambil yang nilainya ganjil, kemudian tambahkan semua nilai ganjil tersebut dan return nilai total ganjilnya.

Pola
----
input: [x, y, z, a, b]
proses:
[
  (x + 0 + kanan dari x)
  (y + kiri dari y + kanan dari y)
  (z + kiri dari z + kanan dari z)
  (a + kiri dari a + kanan dari a)
  (b + kiri dari b + 0)
]

Contoh
-------
Input: [ 2 , 5 , 1 , 3 ]
Proses:
=> [ (2 + 0 + 5) , (5 + 2 + 1), (1 + 5 + 3), (3 + 1 + 0) ]
=> [ 7, 8, 9, 4 ]
=> nilai ganjil: 7 dan 9
=> 7 + 9
Output: 16


Input: [2, 3, 1, 4, 1, 5, 0, 3]
Proses:
=> [ 5, 6, 8, 6, 10, 6, 8, 3 ]
=> nilai ganjil: 5 dan 3
=> 5 + 3
Output: 8

Input: [3, 6, 8, 9, 1, 2, 3]
Proses:
=> [ 9, 17, 23, 18, 12, 6, 5 ]
=> nilai ganjil: 9, 17, 23, 5
=> 9 + 17 + 23 + 5
Output: 54

RULES
=====

- Wajib menggunakan pseudocode sebelum memulai kode
*/

// PSEUDOCODE : 

// Pertama, buat satu function dengan sebuah parameter berupa array of numbers, ex : [2, 5, 1, 3]
// Deklarasikan variabel "penjuamlahan" bernilai array [] (kosong) => untuk menjumlahkan angka angka yang
// sudah di kelompokan masing masing sesuai rules (ketentuan).
// Deklarasikan variabel "ganjilOutpus" bernilai int 0 => untuk mereturn hasil akhir.
// Buat perulangan "for" dengan kondisi i < banyak angka (length) dari parameter yg diterima.
// Buat "logic if" didalam perulangan for, sesuai dengan rules (ketentuan) dan kumpulkan dalam sebuah array.
 	/*
	penambahan angka di index array sebelumnya dengan dua angka yang berada di kiri dan kanannya. Apabila tidak ada
	angka di kiri atau kanan, maka dianggap sebagai 0
	*/
// Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil.
// kemudian tambahkan semua nilai ganjil tersebut dan tampung di dalam variabel "ganjilOutput.
// return variabel "ganjilOutput"


numberCruncher = (numberArray) => {
	var penjumlahan = [];
	var ganjilOutput = 0;

	for (var i = 0; i < numberArray.length; i++) {
		if (i == 0) {
			penjumlahan.push( (numberArray[i] + 0 + numberArray[i+1]) );
		}
		if(i > 0 && i < numberArray.length - 1){
			penjumlahan.push( numberArray[i] + numberArray[i-1] + numberArray[i+1] );			
		}
		if (i == numberArray.length -1){
			penjumlahan.push( numberArray[i] +  + numberArray[i-1] + 0);
		}
	}

	penjumlahan.forEach( (data) => {
		if (data % 2 !== 0)
			ganjilOutput += data;
	});

	console.log(ganjilOutput)
}

numberCruncher([2,5,1,3])
numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])
numberCruncher([3, 6, 8, 9, 1, 2, 3])