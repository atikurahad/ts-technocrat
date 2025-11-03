{

    // Type alias in object
  type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: string;
    adress: string;
  };

  const user1: Student = {
    name: "Abid",
    age: 28,
    gender: "Male",
    contact: "0929283838",
    adress: "Dhaka",
  };
  const user2: Student = {
    name: "Sojib",
    age: 25,
    gender: "Male",
    adress: "Chittagong",
  };
  const user3: Student = {
    name: "Rakib",
    age: 28,
    gender: "Male",
    adress: "Dhaka, Dhanmondi",
  };

  // function Alias

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 * num2;
}
