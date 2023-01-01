/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        const makeTransaction = {
            amount,
            type,
            id: this.transactions.length,
        };

        return makeTransaction;
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */

    deposit(amount) {
        const depositTransiction = this.createTransaction(amount, Transaction.DEPOSIT);

        this.balance += depositTransiction.amount;

        this.transactions.push(depositTransiction);
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */

    withdraw(amount) {
        const withdrawTransiction = this.createTransaction(amount, Transaction.WITHDRAW);

        if (this.balance < amount) {
            return 'Снятие такой суммы не возможно, недостаточно средств.';
        }

        this.balance -= amount;

        this.transactions.push(withdrawTransiction);
    },

    /*
     * Метод возвращает текущий баланс
     */

    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */

    getTransactionDetails(id) {
        return this.transactions[id];
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */

    getTransactionTotal(type) {
        let totaByType = 0;

        for (const { type: transactionType, amount } of this.transactions) {
            if (type === transactionType) {
                totaByType += amount;
            }
        }

        return totaByType;
    },
};

//! ПРОВЕРКИ

account.deposit(500);
account.deposit(100);

console.table(account.transactions);
console.log('Баланс: ', account.getBalance());

account.withdraw(100);
console.log(account.withdraw(560));

console.table(account.transactions);
console.log('Баланс: ', account.getBalance());

console.log(account.getTransactionTotal('withdraw'));

console.log(account.getTransactionDetails(1));
