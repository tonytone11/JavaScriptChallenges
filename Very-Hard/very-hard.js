// create a person construtor that has 3 properties name, job, and age
function Person(name, job, age) {

}

// give the Person an excercise method the prints whatever
this.exercise = function () {

}

// give Person a fetchJob method that prints name and job
this.fetchJob = function () {

}

// create a Programmer construtor that inherits Person with language property that is passed
// and a busy property that is NOT passed in and is set to true by default
function Programmer(name, job, age, language) {

}
this.language;
this.busy = true;

// give Programmer completeTask method that updates the busy property on programmer to be false
this.busy = false;
// give Programmer acceptTask method that updates the busy property on programmer to be true
this.busy = true;

// give Programmer offerTask method prints 1 thing if busy and another if Programmer is not busy
this.offerTask = function () {
    if (this.busy) {

    } else {

    }
}

// give Programmer learnLanguage and list method that adds new ones to the Programmer and list off all the ones they know
this.learnLanguage = function (language) {
    this.languages.push(language);

}
this.list = function () {

}

// test it