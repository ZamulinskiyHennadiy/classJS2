class User {
  constructor(name, role) {
    if (role !== 'admin' && role !== 'user') {
      alert('Невірно введено роль!');
    } else {
      this.name = name;
      this.role = role;
    }
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log(`${this.name} увійшов(ла) в систему.`);
  }

  logout() {
    console.log(`${this.name} вийшов(ла) з системи.`);
  }

  changeName(newName) {
    this.name = newName; // Замінив 'neqName' на 'newName'
    console.log(`Ім'я змінено на ${this.name}.`);
  }

  changePassword(newPassword) {
    console.log('Пароль змінено.');
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(`Користувач ${user.getName()} доданий.`);
  }

  removeUser(userName) {
    this.users = this.users.filter(user => user.getName() !== userName); // Порівнюємо за іменем
    console.log(`Користувач ${userName} видалений.`);
  }

  changeUserRole(user, newRole) {
    if (newRole !== 'admin' && newRole !== 'user') {
      alert('Невірно введена роль!');
    } else {
      user.role = newRole;
      console.log(`Роль користувача ${user.getName()} змінена на ${user.getRole()}.`);
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log('Всі користувачі видалені.');
  }
}

// Приклад використання
let user1 = new User('Petro', 'user');
let admin = new Admin('Ivan');

// Додаємо користувача через адміністратора
admin.addUser(user1);

// Переглядаємо всіх користувачів
console.log(admin.getAllUsers());

// Змінюємо роль користувача
admin.changeUserRole(user1, 'admin');

// Видаляємо користувача за ім'ям
admin.removeUser('Petro');