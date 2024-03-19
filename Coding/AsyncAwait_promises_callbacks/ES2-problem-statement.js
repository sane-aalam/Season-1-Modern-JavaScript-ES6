// understand the problem statment
// solve the problem statement using Normal times changing appraoch
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
  }, 1000);
}
getDatas();

function createData(data) {
  setTimeout(() => {
    EmpDatas.push(data);
  }, 2000);
}

createData({ EmpName: "NewUserAdd", EmpSalary: 19191919 });
