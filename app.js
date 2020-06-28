$(document).ready(readyNow);

function readyNow() {
  $('#davidsButton').on('click', addEmployee);
  $('.table').on('click', deleteEmp);
}

let employeeObject = [];

function addEmployee() {
  event.preventDefault();
  alert('You have added a new employee.');
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
  console.table(employeeObject);
}

function displayEmployee() {
  let el = $('.employeeInfo');
  el.empty();
  for (employees of employeeObject) {
    el.append(
      `<tr class="employeeRow">` +
        `<td>` +
        employees.firstName +
        `</td>` +
        `<td>` +
        employees.lastName +
        `</td>` +
        `<td>` +
        employees.idNumber +
        `</td>` +
        `<td>` +
        employees.jobTitle +
        `</td>` +
        `<td>` +
        employees.annualSalary +
        `</td>` +
        `<td><button type="button" class="btn btn-danger"class="removeButton">X</button>
        </td>
        </tr>`
    );
  }
}

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
    console.log('too much!!!');
    $('.totalSalaryOutput').addClass('redClass');
  }
}

// function removeEmployee() {
//   $(this).remove();
//   let removedEmployee = $('.removeButton').text(employeeObject);
//   console.log(removedEmployee);
// }

function deleteEmp() {
  $(this).parent().fadeOut();
  console.log($(this).parent().text());
  let target = $(this).parent()[0].cells[1].textContent;
  for (let employees of employeeObject) {
    if (employees.id == target) {
      let toDelete = employees.indexOf(employees);
      employees.splice(toDelete, 1);
    }
  }
} // end deleteEmp
