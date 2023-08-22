function parouimpar (x) {
    if (x % 2 === 0) {
        return ('O número é par');
    } else {
        return ('O número é ímpar');
    }
}

const x = window.prompt('digite um número:');
const resultado = parouimpar(x);
console.log (resultado);
