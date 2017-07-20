    function Person(name, salary) {
        this.name = name;
        this.salary = salary;
        this.tellHowMuchDoYouEarn = function () {
            console.log('Hi, my name is ' + name + ' and my salary is ' + salary);
        };
    }

    function introduceYorSelf(persons) {
        persons.forEach(person => {
            person.tellHowMuchDoYouEarn();
        });
    }


    (function () {
        function showOurSalary() {
            let vasya = new Person('Vasya', 100);
            let petr = new Person('Petr', 300);
            let dasha = new Person('Dasha', 250);


            let persons = [
                vasya,
                petr,
                dasha,
            ];

            function sumOfSalary() {
                let sumOfSalary = vasya.salary + petr.salary + dasha.salary
                console.log('Sum of our salary is ' + sumOfSalary);
            }

            function showMaxSalary() {
                if (vasya.salary > petr.salary && dasha.salary) {
                    console.log('Vasya has a max salary');
                } else if (petr.salary > vasya.salary && dasha.salary) {
                    console.log('Petr has a max salary');
                } else {
                    console.log('Dasha has a max salary');
                }

            }
            introduceYorSelf(persons);
            sumOfSalary();
            showMaxSalary()

        }
        showOurSalary();
    })();
