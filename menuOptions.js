let prompt = require("prompt-sync")();
let { getMenu, getSecondaryMenu } = require("./menu");
let {
  createEmployee,
  listEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployeeByName,
  searchEmployeeByPosition,
  searchEmployeeByDepartment,
  searchEmployeeBySalary,
} = require("./employeeRegistration");

function searchMenuOption() {
  getMenu();

  let inputOption = prompt("Digite a opção aqui: ");

  switch (inputOption) {
    case "1":
      createEmployee();
      searchMenuOption();
      break;
    case "2":
      listEmployee();
      searchMenuOption();
      break;
    case "3":
      updateEmployee();
      searchMenuOption();
      break;
    case "4":
      deleteEmployee();
      searchMenuOption();
      break;
    case "5":
      searchSecondaryMenuOption();
      searchMenuOption();
      break;
    case "6":
      console.log("SAINDO...");
      break;
    default:
      throw new Error(
        "Opção inválida! Só são aceitos os valores 1, 2, 3, 4, 5 e 6."
      );
  }
}

function searchSecondaryMenuOption() {
  getSecondaryMenu();

  const inputOption = prompt("Digite a opção aqui: ");

  switch (inputOption) {
    case "1":
      searchEmployeeByName();
      break;
    case "2":
      searchEmployeeByPosition();
      break;
    case "3":
      searchEmployeeByDepartment();
      break;
    case "4":
      searchEmployeeBySalary();
      break;
    default:
      console.log(
        "(" +
          inputOption +
          ") ->" +
          "Opção inválida! Só são aceitos os valores: 1, 2, 3 e 4."
      );
  }
}

module.exports = { searchMenuOption };
