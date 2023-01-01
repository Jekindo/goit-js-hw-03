const findBestEmployee = function (employees) {
    const entries = Object.entries(employees);
    let bestRating = 0;
    let bestEmployer;

    for (const [employer, employerRating] of entries) {
        if (bestRating < employerRating) {
            bestRating = employerRating;
            bestEmployer = employer;
        }
    }

    return bestEmployer;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux
