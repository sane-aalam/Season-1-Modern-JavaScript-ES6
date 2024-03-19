// understand the problem statment
// fix problem statement using callback()
// fix problem statement using AsyncAwait
// fix problem statement using promise

let EmpDatas = [
  { EmpName: "AjayKumar", EmpSalary: 19191919 },
  { EmpName: "VijayKumar", EmpSalary: 19191919 },
  { EmpName: "RijayKumar", EmpSalary: 19191919 },
  { EmpName: "SijayKumar", EmpSalary: 19191919 },
  { EmpName: "ZijayKumar", EmpSalary: 19191919 },
];

//SetTimeout- callback function
// setTimeout(() => {
//     console.log(1);
// },1000);

function getDatas() {
  setTimeout(() => {
    let output = "";
    EmpDatas.forEach((currentData, index) => {
      output += `<li>${currentData.EmpName}</li>`;
    });
    document.body.innerHTML = output;
    // After the 10second, show the output
  }, 5000);
}
getDatas();

function createData(data) {
  setTimeout(() => {
    EmpDatas.push(data);
    // Second me create the the object into the existing the object
  }, 1000);
}

createData({ EmpName: "NewUserAdd", EmpSalary: 19191919 });
