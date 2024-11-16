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
// putting the function results into a variable named patient
const patient = givePII("John", "123-45-6789");

console.log(patient.name);
console.log(patient.ssn);
console.log(patient.getName());
console.log(patient.getSSN()); // Error will appear because no one should access it