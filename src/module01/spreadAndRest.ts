{
  // spread operator for arry
  const developer: string[] = ["Himel", "Rumel", "Sohel"];

  const designers: string[] = ["Nahian", "Shakib", "Azhar"];

  developer.push(...designers);

  //Spread operator for Object

  const mentor1 = {
    javascript: "Abir",
    react: "Mir",
    redux: "Sojib",
  };
  const mentor2 = {
    typescript: "Sadik",
    Next: "Sumon",
    prisma: "Aziz",
  };

  const mentors = { ...mentor1, ...mentor2 };
  console.log(mentors);

  // learn rest operator

  const greetFriend = (friend1: string, friend2: string, friend3: string) => {
    console.log(`Hello ${friend1},${friend2},${friend3}`);
  };

  greetFriend("Asad", "Rakib", "Sakib");

  // rest operator in dynamic way
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends("Asad", "Rakib", "Sakib");
}
