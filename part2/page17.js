function outerFunction2() {
    let password = '1234'
    function innerFunction2(pwd) {
        if (pwd === password) {
            console.log('Access granted');
        } else {
            console.log('Access denied');
        }
    }
    return innerFunction2
}
const checkPassword = outerFunction2()
checkPassword('1234')
checkPassword('4321')