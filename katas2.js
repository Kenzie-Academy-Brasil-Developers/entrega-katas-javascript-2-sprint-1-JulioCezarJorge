// comece a criar a sua função add na linha abaixo
function add(a, b) {
    return a + b
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a, b) {
    let result = 0
    for (i = 0; i < a; i++) {
        result = add(result, b)
    }
    return result
}
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a, b) {
    let result = 0
    let x = a
    for (let i = 1; i < b; i++) {
        result = multiply(x, a)
        x = result
    }
    return result
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(a) {
    let result = 0
    let x = a
    for (let i = a - 1; i > 0; i--) {
        result = multiply(x, i)
        x = result
    }
    return result
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');