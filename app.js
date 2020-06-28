$(document).ready(readyNow);

// uses event listener to run addEmployee() and removeEmployee()
function readyNow() {
  $('#davidsButton').on('click', addEmployee);
  $('.js-table-body').on('click', '#removeBtn', removeEmployee);
}

// empty array
let employeeObject = [];

// function to push newly created newEmployee object into empty array employeeObject
// checks values and stores in object, then empties values
// runs the displayEmployee() to show data on dom, totalSalary() calculates monthly cost and puts on dom
function addEmployee() {
  event.preventDefault();
  alert('Add employee?');
  let newEmployee = {
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    idNumber: parseInt($('#idNumberInput').val()),
    jobTitle: $('#jobTitleInput').val(),
    annualSalary: parseInt($('#annualSalaryInput').val()),
  };
  employeeObject.push(newEmployee);
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idNumberInput').val('');
  $('#jobTitleInput').val('');
  $('#annualSalaryInput').val('');
  displayEmployee();
  totalSalary();
  console.log('Employee added');
  console.table(employeeObject);
}

// appends data to created html div then is displayed on the dom
function displayEmployee() {
  let el = $('.js-table-body');
  el.empty();
  for (employees of employeeObject) {
    el.append(
      `<tr><td>
        ${employees.firstName} 
        </td> 
        <td>
        ${employees.lastName}
        </td>
        <td>
        ${employees.idNumber}
        </td>
        <td>
        ${employees.jobTitle}
        </td>
        <td>
        ${employees.annualSalary} 
        </td>
        <td><button type="button" id="removeBtn" class="btn btn-danger">X</button>
        </td>
        </tr>
       `
    );
  }
}

// calculates annual salary/12 to determine monthly costs and displays on dom
function totalSalary() {
  let maxMonthlyBudget = 20000;
  let totalSalary = 0;
  for (let i = 0; i < employeeObject.length; i++) {
    totalSalary += employeeObject[i].annualSalary;
  }
  let monthlyCosts = totalSalary / 12;
  monthlyCosts = monthlyCosts.toFixed(0);
  console.log('Total Salary:', monthlyCosts);
  let el = $('.totalSalaryOutput');
  el.empty();
  el.append(
    `<p class="monthlyBudget"> Monthly Costs: $` + monthlyCosts + `</p>`
  );
  if (monthlyCosts > maxMonthlyBudget) {
    console.log('WOW BRO OVER BUDGET!!!');
    alert('Monthly costs have exceeded budget!');
    $('.totalSalaryOutput').addClass('redClass');
  }
}

// removes row from table, ran out of time on stretch goal was really pushing but.....
function removeEmployee() {
  $(this).parent().parent().remove();
  console.log($(this).parent().parent().text());
}
