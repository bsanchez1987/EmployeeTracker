


//APP RUN PROMPT

const runSearch = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
          'View All Employees',
          'View All Employees By Department',
          'View All Departments',
          'View All Employee Roles',
          'Add Employee',
          'Remove Employee',
          'Update Employee Role',
          'Add Employee Role',
          'Add Department'
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View All Employees':
            viewAllEmployees();
            break;
          
          case 'View All Employees By Department':
            viewEmployeesByDepartment();
            break;
  
          case 'View All Departments':
            viewAllDepartments();
            break;
  
          case 'View All Employee Roles':
            viewAllRoles();
            break;
  
          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Remove Employee':
            removeEmployee();
            break;
  
          case 'Update Employee Role':
            updateEmployeeRole();
            break;
  
          case 'Add Employee Role':
            addEmployeeRole();
            break;
  
          case 'Add Department':
            addDepartment();
            break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };

  //VIEW ALL EMPLOYEES

const viewAllEmployees = () => {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee_role.title AS Title, department.name AS Department, employee_role.salary AS Salary, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN employee_role on employee_role.id = employee.role_id INNER JOIN department on department.id = employee_role.department_id left join employee e on employee.manager_id = e.id;", (err, res) => {
      if (err) throw err
      console.table(res);
      runSearch();
    })
  }