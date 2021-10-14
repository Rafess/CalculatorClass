// Fazer classes  uma para cada operação e uma mae que tenha as funções enter equals reset e list
class Calculator {
    
    constructor() {
        this.numStorage = []
    }
    enter = item => {
        numStorage = [...numStorage, item]
       }

        equals = () => {
        const [firstNum, operator, secondNum] = numStorage;
        let result =  _calcWard[operator] ? _calcWard[operator](firstNum, secondNum) :
           "Erro, operação inválida";
        let finalResult = `${firstNum} ${operator} ${secondNum} = ${result}`;
        operations = [...operations, finalResult];
        numStorage = []
        return finalResult
        };

        list = () => {
            return `Essa é sua lista de opeações até o momento: ${operations}`
        };
        reset = () => { 
            firstNum=0
            secondNum = 0;
            numStorage = [];
            return (`A calulador foi resetada com sucesso`)
            }

}
class SumCalculator extends Calculator {
    constructor() {
        
    }
sum = (firstNum, secondNum) => firstNum + secondNum;
}
class MinusCalculator extends Calculator {
    constructor() {

    }
    minus = (firstNum, secondNum) => firstNum - secondNum;

}
class MultiplicateCalculator extends Calculator {
    constructor() {

    }
    multiplicate = (firstNum, secondNum) => firstNum * secondNum;

}
class DivideCalculator extends Calculator {
    constructor() {

    }
    divide = (firstNum, secondNum) => firstNum / secondNum;

}