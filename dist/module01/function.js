"use strict";
{
    //Object -> function -> method
    const poorUser = {
        name: "Atik",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        }
    };
}
