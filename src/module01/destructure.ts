{

    //Object destructring

    const user ={
        id:1234,
        name:{
            firstName:"Mr.Akib",
            lastName:"Uddin"
        },
        contact:"0123746373",
        email:"akib@gmail.com"
    }

    const {contact, name:{firstName}} = user;



    //Array Destructring

    const myFriends:string[]= ["Jhon","Doe","Filmar","Klarruz"]
    const [,,american,...rest]= myFriends
}