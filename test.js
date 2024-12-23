const filterActive = (users) => users.filter((user) => user.isActive);

const sortByAge = (users) => users.sort((a, b) => a.age - b.age);

const getEmails = (users) => users.map((user) => user.email);

const users = [
  { name: 'Alice', age: 25, email: 'alice@mail.com', isActive: true },
  { name: 'Bob', age: 30, email: 'bob@mail.com', isActive: false },
  { name: 'Charlie', age: 20, email: 'charlie@mail.com', isActive: true },
];

const emails = getEmails(sortByAge(filterActive(users)));

console.log(emails);
