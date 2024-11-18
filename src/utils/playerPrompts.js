import inquirer from "inquirer";

const promptForPlayersDirection = async () => {
  const result = await inquirer.prompt({
    type: "list",
    name: "controls",
    message: "Which path will you venture through?",
    choices: ["Up", "Down", "Left", "Right"],
  });
  return result;
};

export { promptForPlayersDirection };
