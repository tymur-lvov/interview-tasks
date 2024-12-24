class UserProcessor {
  constructor(users) {
    this.users = users;
  }

  filterActive() {
    this.users = this.users.filter((user) => user.isActive);
    return this;
  }

  sortByAge() {
    this.users = this.users.sort((a, b) => a.age - b.age);
    return this;
  }

  getEmails() {
    return this.users.map((user) => user.email);
  }
}

const users = [
  { name: 'Alice', age: 25, email: 'alice@mail.com', isActive: true },
  { name: 'Bob', age: 30, email: 'bob@mail.com', isActive: false },
  { name: 'Charlie', age: 20, email: 'charlie@mail.com', isActive: true },
];

const processor = new UserProcessor(users);

const emails = processor.filterActive().sortByAge().getEmails();

console.log(emails);
