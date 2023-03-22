/**
 * Let's make a calculator 🧮
 */
type result = number | string
// 계산 종류만 받을 수 있도록 해야하는데 string 다 받아 버림
function calculate(sort: string, num1: number, num2: number): result {
    switch (sort) {
        case 'add':
            return (
                num1 + num2
            )
        case 'substract':
            return (
                num1 - num2
            )
        case 'multiply':
            return (
                num1 * num2
            )
        case 'divide':
            return (
                num1 / num2
            )
        case 'remainder':
            return (
                num1 % num2
            )
        default:
            return 'retry'
    }

}

// answer
type sorting = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function Calculate (command: sorting, num1: number, num2: number ) : number {
    switch (command) {
        case 'add':
            return num1 + num2
        case 'substract':
            return num1 - num2
        case 'multiply':
            return num1 * num2
        case 'divide':
            return num1 / num2
        case 'remainder':
            return num1 % num2
        default:
            throw new Error('unknown Command');
    }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
