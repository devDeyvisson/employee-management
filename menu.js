function getMenu() {
  console.log(
    "---------------------MENU--------------------------\n" +
      "Digite [1] para ADICIONAR um funcionário\n" +
      "Digite [2] para LISTAR todos os funcionários\n" +
      "Digite [3] para ATUALIZAR dados de um funcionário\n" +
      "Digite [4] para REMOVER um funcionário\n" +
      "Digite [5] para BUSCAR um funcionário\n" +
      "Digite [6] para SAIR!\n"
  );
}

function getSecondaryMenu() {
  console.log("Deseja BUSCAR um funcionário com base em qual critério? ");
  console.log(
    "---------------------MENU--------------------------\n" +
      "Digite [1] para buscar um funcionário pelo nome\n" +
      "Digite [2] para buscar um funcionário por cargo\n" +
      "Digite [3] para buscar um funcionário por departamento\n" +
      "Digite [4] para buscar um funcionário por salário\n"
  );
}

module.exports = { getMenu, getSecondaryMenu };
