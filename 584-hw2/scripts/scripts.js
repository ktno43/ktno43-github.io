var employees = [];
// 0 name
// 1 Department
// 2 emp id
// 3 hire date

function addEmp() {
  "use strict";
  var name = document.getElementById("lastname").value + ", " + document.getElementById("firstname").value;
  var departmentSelect = document.getElementById("select-department");
  var department = departmentSelect.options[departmentSelect.selectedIndex].value;
  var empId = Math.random()
    .toString()
    .slice(2, 10);

  while (employees.includes(empId)) {
    empId = Math.random()
      .toString()
      .slice(2, 10);
  }

  var d = new Date();
  var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var dayOfWeek = week[d.getDay()];
  var month = month[d.getMonth()];
  var date = d.getDate();
  var year = d.getFullYear();

  var hireDate = dayOfWeek + " " + month + " " + date + " " + year;

  var jsonEmp = '{ "employee" : [' + '{ "name":"' + name + '" , "department":"' + department + '" , "empId":"' + empId + '" , "hireDate":"' + hireDate + '" } ]}';

  employees.push(name);
  employees.push(department);
  employees.push(empId);
  employees.push(hireDate);

  var totalEmps = employees.length / 4;

  var emp = JSON.parse(jsonEmp);

  document.getElementById("name").innerHTML = emp.employee[0].name;
  document.getElementById("department").innerHTML = emp.employee[0].department;
  document.getElementById("emp-id").innerHTML = emp.employee[0].empId;
  document.getElementById("hire-date").innerHTML = emp.employee[0].hireDate;
  document.getElementById("total-emps").innerHTML = totalEmps;

  document.getElementById("echo-result").classList.remove("display-none");

  // console.log(name + "\n" + department + "\n" + empId + "\n" + hireDate);

  return false;
}

function init() {
  "use strict";
  document.getElementById("user-browser").innerHTML = navigator.userAgent;
  document.getElementById("theForm").onsubmit = addEmp;
} // End of init() function.
window.onload = init;
