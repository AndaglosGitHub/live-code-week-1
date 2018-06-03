// Soal 4

/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*

---------------
Students Report
---------------

PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:

[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]

Data di atas merupakan campuran seluruh nilai student dari kelas manapun.

Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:

[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]

Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

getReport = (studentGrades) => {
  var hasilReport = [];
  var kelasSama = [];

  for(var i = 0; i < studentGrades.length; i++){
    if(kelasSama[studentGrades[i].classCode] === undefined){
      var dataLaporan = {
        classCode : studentGrades[i].classCode,
        passed : [],
        failed : [],
      }
      hasilReport.push(dataLaporan)
      kelasSama[studentGrades[i].classCode] = '';
    }
  }

  for (var j = 0; j < hasilReport.length; j++) {
    for(var k = 0; k < studentGrades.length; k++){
      if(hasilReport[j].classCode === studentGrades[k].classCode){
        if(studentGrades[k].score >= 70){
          hasilReport[j].passed.push(studentGrades[k].name)
        }else{
          hasilReport[j].failed.push(studentGrades[k].name)
        }
      }
    }
  }

  console.log(hasilReport)
}

var grades1 = [
{ name: 'John', score: 80, classCode: 'A' },
{ name: 'Mike', score: 60, classCode: 'B' },
{ name: 'Budi', score: 70, classCode: 'C' },
{ name: 'Siti', score: 50, classCode: 'A' },
{ name: 'Aaron', score: 10, classCode: 'A' },
{ name: 'Arthur', score: 10, classCode: 'C' },
{ name: 'Osass', score: 10, classCode: 'B' },
{ name: 'Yolo', score: 90, classCode: 'C' },
];

getReport(grades1)

/*
[
  { classCode: 'A', passed: [ 'Siti', 'Aaron' ], failed: [ 'John' ] },
  { classCode: 'B', passed: [ 'Mike', 'Osass' ], failed: [] },
  { classCode: 'C', passed: [ 'Arthur' ], failed: [ 'Budi', 'Yolo' ] },
]
*/
