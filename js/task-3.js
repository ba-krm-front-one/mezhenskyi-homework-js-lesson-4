(function () {
    /* let first = map(square, [1, 2, 3, 4]);
     let third = map(qu, [1, 2, 3, 4]);
     let four = map(element => {return -1}, [1, 2, 3, 4]);
     let second = map(square, []);

     console.log(first); // [1, 4, 9, 16]
     console.log(second); // []

     function map(callBack, theArray) {
     let newArray = [];
     theArray.forEach(element => {
     let processedElement = callBack(element);
     newArray.push(processedElement)
     });
     return newArray;
     }
     function square(x) {
     return x * x;
     } // возведение в квадрат
     function qu(x) {
     return x * x * x;
     } // возведение в квадрат*/
    let Utils = {
        map: function (callBack, theArray) {
            let newArray = [];
            theArray.forEach(element => {
                let processedElement = callBack(element);
                newArray.push(processedElement)
            });
            return newArray;
        },
        square: function (x) {
            return x * x;
        },
        qu: function (x) {
            return x * x * x;
        },
        calculateRandomInt: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        generateArray: function() {
            /* let min = Number(prompt('Enter min'));
             let max = Number(prompt('Enter max'));
             let arrayLength = Number(prompt('Enter length'));*/
            let min = 10;
            let max = 50;
            let arrayLength = 5;
            let generatedArray = [];
            for(let i = 0; i < arrayLength; i++) {
                generatedArray.push(this.calculateRandomInt(min, max))
            }

            return generatedArray;
        }
    };
    let newArray = Utils.generateArray();

    let squareArray = Utils.map(Utils.square, newArray);
    let quArray = Utils.map(Utils.qu, newArray);
    let anonymousArray = Utils.map(element => {return -1}, newArray);
    let theSameAnonymousArray = Utils.map(function(element) {
        return -1;
    }, newArray);
    console.log(squareArray);
})();