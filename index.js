const { request, lineReader, readline, axios, fs, rp, centerAlign, figlet, eachLinePromise } = require('./includes');
const { displayMenu, handleUserInput, rl } = require('./menu');

let token = "token ";
let guildID = "server id";

clearAndShowMenu();

function clearAndShowMenu() {
  setTimeout(() => {
    console.clear();
  displayMenu();
  rl.setPrompt("[beta] choice: ");
  rl.prompt();

  rl.on('line', (input) => {
    handleUserInput(input.trim(), banall);
  });
  }, 2000);
}

async function banall() {
  const headers = { 'Authorization': "Bot " + token };

  const fileStream = fs.createReadStream('members.txt');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const linePromises = [];

  for await (const id of rl) {
    const options = {
      url: `https://discord.com/api/v8/guilds/${guildID}/bans/${id}?reason=betanuker`,
      method: 'PUT',
      headers: headers,
    };

    const promise = rp(options)
      .then(() => {
        console.log(`\x1b[32m[request sent] banned ${id} succesfully.\x1b[0m`);
      })
      .catch((error) => {
        console.error(`\x1b[31m[error] ${id}: ${error}\x1b[0m`);
      });

    linePromises.push(promise);
  }

  await Promise.all(linePromises);

  console.log('\x1b[32m%s\x1b[0m', '[end] all requests has been sent, continuing to main menu.');
  clearAndShowMenu();
}

