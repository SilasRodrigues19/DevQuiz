const data = [
  {
    question: 'Qual é a sintaxe correta para chamar o script "main.js"?',
    options: [
      '<script src="main.js">',
      '<script name="main.js">',
      '<script href="main.js">',
      'Todas estão corretas',
    ],
    answer: '<script src="main.js">',
  },
  {
    question: 'Qual das condições abaixo está semanticamente correta?',
    options: [
      'if(i == 5) console.log("I é igual a 5")',
      'i == 5 ? console.log("I é igual a 5") : console.log("I é diferente de 5")',
      'i == 5 && console.log("I é igual a 5")',
      'Todas estão corretas',
    ],
    answer: 'Todas estão corretas',
  },
  {
    question: 'Qual tipo não existe em JavaScript?',
    options: ['string', 'number', 'boolean', 'float'],
    answer: 'float',
  },
  {
    question: 'Escolha a opção que pareça mais correta',
    options: [
      'document.QuerySelector(".class")',
      'document.querySelector("#id")',
      'document.getElementByID("#id")',
      'Todas estão corretas',
    ],
    answer: 'document.querySelector("#id")',
  },
  {
    question:
      'Qual destas propriedades da a quantidade de elementos de um array?',
    options: ['count', 'length', 'items', 'lenght'],
    answer: 'length',
  },
];

export default data;
