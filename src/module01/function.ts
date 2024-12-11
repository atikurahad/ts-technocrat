{
    //Object -> function -> method

    const poorUser= {
        name:"Razzak",
        balance: 0,
        addBalance(balance:number){
            return `my new alance is ${ this.balance + balance}`
        }
    }
}