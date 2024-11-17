// create a person construtor that has 3 properties name, job, and age
function person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    // give the Person an excercise method the prints whatever
    this.exercise = function () {
        console.log("My winter arc starts now.");
    };
    // give Person a fetchJob method that prints name and job
    this.fetchJob = function () {
        console.log(`${this.name} is a ${this.job}.`);
    };
}

// create a Programmer construtor that inherits Person with language property that is passed
// and a busy property that is NOT passed in and is set to true by default
function programmer(name, job, age, languages) {
    person.call(this, name, job, age);
    this.languages = languages || [];
    this.busy = true;
    // give Programmer completeTask method that updates the busy property on programmer to be false
    this.completeTask = function () {
        this.busy = false;
        console.log(`${this.name} has completed their task!`);
    };
    // give Programmer acceptTask method that updates the busy property on programmer to be true
    this.acceptTask = function () {
        this.busy = true;
        console.log(`${this.name} has accepted their task.`);
    };
    // give Programmer offerTask method prints 1 thing if busy and another if Programmer is not busy
    this.offerTask = function () {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    };
    // give Programmer learnLanguage and list method that adds new ones to the Programmer and list off all the ones they know
    this.learnLanguage = function (language) {
        this.languages.push(language);
        console.log(`${this.name} has learned ${language}`);
    };
    this.list = function () {
        if (this.languages.length > 0) {
            console.log(`${this.name} knows the following languages: ${this.languages.join(",")}`);
        } else {
            console.log(`${this.name} has not learned any languages yet.`)
        }
    };
}
// test it
const person1 = new person("Harold", "Baackend Engineer", 20);
const c1 = new programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c1.list();
c2.learnLanguage("C++");
c2.list();
c3.learnLanguage("JAVA");
c3.list();
person1.exercise();
person1.fetchJob();
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
