class Calculator {
    
    constructor() {
        this.numStorage = [];
        this.operations = []
        
    }
    
    enter(item) {
        this.numStorage = [...this.numStorage, item];
  
    }
        equals() {
        this.numStorage = [];
        };

        get list() {
            return `Essa é sua lista de opeações até o momento: ${this.operations}`
        };

        reset () { 
            this.numStorage = [];
            this.operations = [];
            return (`A calulador foi resetada com sucesso`)
            }

}

class SumCalculator extends Calculator {
    constructor() {
        super()
        this.operator = "+";
    }
        
        
       equals()  { 
        const sum = this.numStorage.reduce((previousSum, currentSum) => previousSum + currentSum, 0);
        let sumResult = `${this.numStorage.join(' + ')} = ${sum}`
        console.log(sumResult)
        this.operations = [...this.operations, sumResult];
        super.equals()
}
}
        

    
    

class MinusCalculator extends Calculator {
    constructor() {
        super()
        this.operator = "-";
    }
    
      equals()  { 
        const minus = this.numStorage.reduce((previousMin, currentMin) => previousMin - currentMin);
        let minusResult = `${this.numStorage.join(' - ')} = ${minus}`
        console.log(minusResult)
        this.operations = [...this.operations, minusResult];
        super.equals()
}

}

class MultiplicateCalculator extends Calculator {
    constructor() {
        super()
        this.operator = "*";
    }
          equals()  { 
        const multiplication = this.numStorage.reduce((previousMult, currentMult) => previousMult * currentMult, 1);
        let multiplicationResult = `${this.numStorage.join(' * ')} = ${multiplication}`
        console.log(multiplicationResult)
        this.operations = [...this.operations, multiplicationResult];
        super.equals()
}
}

class DivideCalculator extends Calculator {
    constructor() {
        super("/")
        this.operator = "/";
    }
         equals()  { 
        const divide = this.numStorage.reduce((previousDiv, currentDiv) => previousDiv / currentDiv);
        let divideResult = `${this.numStorage.join(' / ')} = ${divide}`
        console.log(divideResult)
        this.operations = [...this.operations, divideResult];
        super.equals()
};

}
