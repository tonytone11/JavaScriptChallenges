function sharePizza(slices, people) {
    let pizzaPerPerson = slices / people;

    let result = Math.ceil(pizzaPerPerson); // rounds up the slices of pizza to whole number

    console.log(`Each person gets ${result} slicec of pizza; from our ${slices} slice pizza`);
}

sharePizza(8, 2);
sharePizza(8, 3);
sharePizza(21, 20);
sharePizza(10, 3);