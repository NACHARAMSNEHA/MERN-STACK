//callback function
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}
greet('Alice', () => {
    console.log('Welcome to the world of JavaScript!');
});