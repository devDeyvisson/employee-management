const prompt = require("prompt-sync")();

let employees = [];

function createEmployee() {
  let inputName = prompt("Informe o nome do funcionário: ");
  let inputPosition = prompt("Informe o cargo do funcionário: ");
  let inputDepartment = prompt("Informe o departamento do funcionário: ");
  let inputSalary = prompt("Informe o salário do funcionário: ");

  let newEmployee = {
    id: Date.now().toString(),
    name: inputName,
    position: inputPosition,
    department: inputDepartment,
    salary: inputSalary,
  };

  employees.push(newEmployee);

  console.log("FUNCIONÁRIO CADASTRADO COM SUCESSO!");
}

function listEmployee() {
  console.log("LISTA DE FUNCIONÁRIOS: ");

  employees.forEach((employee) => {
    console.log(
      `Id: ${employee.id}, nome: ${employee.name}, cargo: ${employee.position}, departamento: ${employee.department}, valor do salário: R$ ${employee.salary}`
    );
  });
}

function updateEmployee() {
  let updateId = prompt("Informe o id do funcionário que deseja atualizar: ");

  let index = employees.findIndex((employee) => employee.id === updateId);

  if (index !== -1) {
    console.log(
      "Digite enter para continuar, ou seja, se não quiser alterar algum valor!"
    );

    let inputName = prompt("Informe nome do funcionário: ");
    let inputPosition = prompt("Informe o cargo do funcionário: ");
    let inputDepartment = prompt("Informe o departamento do funcionário: ");
    let inputSalary = prompt("Informe o valor do salário do funcionário: ");

    employees[index].name = inputName || employees[index].name;
    employees[index].position = inputPosition || employees[index].position;
    employees[index].department =
      inputDepartment || employees[index].department;
    employees[index].salary = inputSalary || employees[index].salary;

    console.log(
      `Os dados do funcionário com o id: ${index} foi atualizado com sucesso!`
    );

    return;
  }
  console.log(
    `Não foi possível atualizar, pois o id informado não pertence a nenhum funcionário!`
  );
}

function deleteEmployee() {
  let deleteId = prompt("Informe o id do funcionário que deseja remover: ");

  let index = employees.findIndex((employee) => employee.id === deleteId);

  if (index !== -1) {
    let deletedEmployee = employees[index].name;
    employees.splice(index, 1);
    console.log(`O funcionário ${deletedEmployee} foi removido com sucesso!`);
    return;
  }
  console.log(
    `Não foi possível remover, pois o id informado não pertence a nenhum funcionário!`
  );
}

function searchEmployeeByName() {
  let searchName = prompt("Informe o nome do funcionário: ").toLowerCase();

  let resultList = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchName)
  );

  console.log("RESULTADO DA BUSCA POR NOME: ");

  displaySearchResult(resultList, searchName);
}

function searchEmployeeByPosition() {
  let searchPosition = prompt("Informe o cargo do funcionário: ").toLowerCase();

  let resultList = employees.filter((employee) =>
    employee.position.toLowerCase().includes(searchPosition)
  );

  console.log("RESULTADO DA BUSCA POR CARGO: ");

  displaySearchResult(resultList, searchPosition);
}

function searchEmployeeByDepartment() {
  let searchDepartment = prompt(
    "Informe o departamento do funcionário: "
  ).toLowerCase();

  let resultList = employees.filter((employee) =>
    employee.department.toLowerCase().includes(searchDepartment)
  );

  console.log("RESULTADO DA BUSCA POR DEPARTAMENTO: ");

  displaySearchResult(resultList, searchDepartment);
}

function searchEmployeeBySalary() {
  let searchSalary = prompt("Informe o salário do funcionário: ");

  let resultList = employees.filter((employee) =>
    employee.salary.toLowerCase().includes(searchSalary)
  );

  console.log("RESULTADO DA BUSCA POR SALÁRIO: ");

  displaySearchResult(resultList, searchSalary);
}

function displaySearchResult(resultList, search) {
  if (resultList.length > 0) {
    resultList.forEach((employee) => {
      console.log(
        `Id: ${employee.id}, nome: ${employee.name}, cargo: ${employee.position}, departamento: ${employee.department}, valor do salário: R$ ${employee.salary}`
      );
    });
    return;
  }
  console.log(
    `Nenhum funcionário foi encontrado com base na busca informada (${search.toUpperCase()}).`
  );
}

module.exports = {
  createEmployee,
  listEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployeeByName,
  searchEmployeeByPosition,
  searchEmployeeByDepartment,
  searchEmployeeBySalary,
  displaySearchResult,
};
