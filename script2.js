const listStudents = [

  {
    name: 'Wellington',
    noteOne: '',
    noteTwo: '',

  },

  {
    name: 'Gilmar',
    noteOne: '',
    noteTwo: '',
  },

  {
    name: 'Creuza',
    noteOne: '',
    noteTwo: '',
  },

  {
    name: 'Thais',
    noteOne: '',
    noteTwo: '',
  }

]

function calcAverage (noteOne , noteTwo){
  let average = (noteOne + noteTwo) / 2;

  return average;
}

let averageFinal = 0;

for (let students of listStudents ){
  students.noteOne = Number(prompt(`Digite a primeira nota do aluno ${students.name}`));
  students.noteTwo = Number(prompt(`Digite a segunda nota do aluno ${students.name}`));
  averageFinal = calcAverage(students.noteOne , students.noteTwo);

  if (averageFinal < 7){
    alert(`A média do(a) aluno(a) ${students.name} é ${averageFinal}
    Não foi dessa vez ${students.name}! Tente novamente!`);
  }else {
    alert(`A média do(a) aluno(a) ${students.name} é ${averageFinal}
    Parabens, ${students.name}! Você foi aprovado(a) no concurso!`);
  }
}

 
