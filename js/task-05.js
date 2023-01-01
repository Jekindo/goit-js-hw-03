const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

//! 1-st Variant

// const getAllPropValues = function (arr, prop) {
//     const properties = [];
//
//     for (const products of arr) {
//         if (!products[prop]) {
//             return [];
//         }
//
//         properties.push(products[prop]);
//     }
//
//     return properties;
// };

//! 2-st Variant

const getAllPropValues = function (arr, prop) {
    const properties = [];

	for (const product of arr) {
		if (Object.keys(product).includes(prop)) {
			properties.push(product[prop])
		}
	}

	return properties;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
