let numberOne = Number(window.prompt('Digite o primeiro número: '));
let numberTwo = Number(window.prompt('Digite o segundo número'));

window.alert(`A soma dos números é ${numberOne + numberTwo}`);
window.alert(`A subtração dos números é ${numberOne - numberTwo}`);
window.alert(`A multiplicação dos números é ${numberOne * numberTwo}`);
window.alert(`A divisão dos números é ${numberOne / numberTwo}`);
window.alert(`O resto da divisão dos números é ${numberOne % numberTwo}`);

let sum = numberOne + numberTwo;

if (sum % 2 == 0){
  window.alert(`A soma dos dois números é par: ${sum}`);
}else {
  window.alert(`A soma dos dois números é impar: ${sum}`);
}

if (numberOne == numberTwo){
  window.alert(`Os números digitados são iguais`);
}else {
  window.alert(`Os números digitados são diferentes`);
}