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

function createData(data, callback) {
  setTimeout(() => {
    EmpDatas.push(data);
    callback();
    // Second me create the the object into the existing the object
  }, 1000);
}

createData({ EmpName: "NewUserAdd", EmpSalary: 19191919 }, getDatas);
