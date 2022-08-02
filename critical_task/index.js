import inquirer from 'inquirer';
import fs from 'fs';
const publicKeys = JSON.parse(fs.readFileSync('../public_keys.json'));

let pem = null;

const questions = [
    {
        type: 'list',
        name: 'name',
        message: 'What\'s your name?',
        choices: Object.keys(publicKeys),
        default: Object.keys(publicKeys)[0],
    },
    {
        type: 'input',
        name: 'privateKey',
        message: 'Please provide the path to your private key PEM file',
        validate(pem) {
            if (!pem.length) {
                return 'No private key provided';
            }

            if (!fs.existsSync(pem)) {
                return 'Private key file does not exist';
            }

            pem = fs.readFileSync(answers.privateKey, 'utf8');
        },
    },
    {
        type: 'confirm',
        name: 'ensureQA',
        message: 'Has the process been checked by QA?',
        default: false,
        validate(value) {
            if (!value) {
                return "Must confirm true";
            }
        }
    },
    {
        type: 'confirm',
        name: 'featuresPresent',
        message: 'Are all features present?',
        default: false,
        validate(value) {
            if (!value) {
                return "Must confirm true";
            }
        }
    }
];

inquirer
    .prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }

        process.exit(1);
    });