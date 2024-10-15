let salario=parseFloat(prompt("Digite seu salário: "))
let salarioo=salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
if(salario<1200){
    document.write(`Seu salario é: ${salarioo}, e você esta na classe E (Pobreza extrema)`)
}
if((salario >= 1200 && salario<=2000)){
    document.write(`Seu salario é: ${salarioo}, e você esta na classe D (Baixa)`)
}
if((salario>2000 && salario<=5000)){
    document.write(`Seu salario é: ${salarioo}, e você esta na classe C (Média) `)
}
if((salario>5000 && salario<10000)){
    document.write(`Seu salario é: ${salarioo}, e você esta na classe B (Média Alta)`)
}
if(salario>=10000){
    document.write(`Seu salario é: ${salarioo}, e você esta na classe A (Rica) `)
}