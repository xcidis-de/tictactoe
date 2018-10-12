const prompts = require('prompts');


const X = `x   x\n x x\n  x\n x x\nx   x`;
const O = ` ooo \no   o\no   o\no   o\n ooo `;
var game = ['','','','','','','','',''];
var table = `\n_________________________\n|       |       |       |\n|       |       |       |\n|       |       |       |\n|       |       |       |\n|       |       |       |\n_________________________\n|       |       |       |\n|       |       |       |\n|       |       |       |\n|       |       |       |\n|       |       |       |\n_________________________\n|       |       |       |\n|       |       |       |\n|       |       |       |\n|       |       |       |\n|       |       |       |\n_________________________`;
var current = 'x';

async function Choose(){
    var prompt = await prompts({
        type: 'text',
        name: 'letter',
        message: 'Player 1, choose your letter. (X or O)',
        validate: letter => letter === 'x' || letter === "X" || letter === 'o' || letter === 'O' ? true : `Sorry that's not an option.`
    })
    
    console.log(`Player 2.....`); 
    setTimeout(()=>{
        console.log(`you are ${prompt.letter == 'x' || prompt.letter == 'X' ? 'O' : 'X'}`)
    },750);
}
Choose()