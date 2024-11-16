function givePII(name, ssn) { // Function will take two string parameters
    const PII = { // Private objects
        name: name,
        ssn: ssn
    };
    return {
        getName: function () { // Public Method for name only
            return PII.name;
        }
    };
}
// creating an instance for givePII
const patient = givePII("John", "123-45-6789");

console.log(patient.name);
console.log(patient.ssn);
console.log(patient.getName());
console.log(patient.getSSN()); // Error will appear because no one should access it