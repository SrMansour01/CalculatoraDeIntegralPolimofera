const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function derivativeCalculator() {
    readline.question("Digite os coeficientes do polinômio separados por vírgula (ex: 3,2,1 para 3x^2 + 2x + 1): ", polynomial => {
        let coefficients = polynomial.split(",").map(x => parseFloat(x));
        let derivative = coefficients.slice(0, -1).map((coefficient, index) => coefficient * (coefficients.length - index - 1));
        console.log(`A derivada do polinômio ${polynomial} é: ${derivative.join(",")}`);
        readline.close();
    });
}

derivativeCalculator();