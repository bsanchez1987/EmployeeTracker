


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
          // 'Update Employee Manager',
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
  
          // case 'Update Employee Manager':
          //   updateEmployeeManager();
          //   break;
  
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