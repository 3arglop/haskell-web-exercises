/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages:
                    ['javascript',
                    'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages:
                    ['clojure',
                    'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages:
                    ['java',
                    'scala',
                    'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages:
                    ['java',
                    'php',
                    'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages:
                    ['html',
                    'css',
                    'javascript',
                    'php']
    }
];

console.log(users);

// TODO: fill in your name and email and add some programming languages you know to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable declared as `const`
const name = 'lucy';
const email = 'lucy13@codeup.com';
const languages = ['html',
                'css',
                'javascript',
                'jquery',
                'java'];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions

// users.forEach(function(user) {
//     return emails.push(user.email);
// });

users.forEach((user) => {
    return emails.push(user.email);
});

console.log(emails);

// users.forEach(function(user) {
//     return names.push(user.name);
// });

users.forEach((user) => {
    return names.push(user.name);
})

console.log(names);


// TODO: replace `var` with `let` in the following declaration
let developers = []; //EMPTY ARRAY

// users.forEach(function(user) {
//     // TODO: rewrite the code below to use object destructuring assignment
//     //       note that you can also use destructuring assignment in the function
//     //       parameter definition
//     const name = user.name;
//     const email = user.email;
//     const languages = user.languages;
//
//     // TODO: rewrite the assignment below to use template strings
//     developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

users.forEach(({name, email, languages}) => {
    developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});

console.log(developers);


// TODO: Use `let` for the following variable
let list = '<ul>';

// // TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//     // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
// list += '</ul>';

developers.forEach((developer) => {
    list += `<li>${developer}</li>`;
});

list += '</ul>';