const users = [
  {
    id: 1,
    name: 'Карп',
    age: 15,
    isActive: true,
  },
  {
    id: 2,
    name: 'Жук',
    age: 19,
    isActive: false,
  },
  {
    id: 3,
    name: 'Жук',
    age: 21,
    isActive: true,
  },
  {
    id: 4,
    name: 'Олень',
    age: 11,
    isActive: false,
  },
];

const fruits = ['banana', 'pineapple', 'tangerine', 'apple', 'banana'];

const getUserNames = (data) => {
  const userNames = [];
  data.forEach((element) => {
    const userName = element.name;
    userNames.push(userName);
  });

  return userNames;
};

const getUsersNameMap = (data) => data.map((element) => element.name);

const getActiveUsers = (data) => data.filter((element) => !element.isActive).map((element) => element.name);

const sortByAge = (data) => data.sort((a, b) => b.age - a.age).map((element) => element.name);

const getAvarageAge = (data) => data.reduce((acc, item) => acc + item.age, 0) / data.length;

const getUniqueNames = (data) => data.reduce((acc, item) => acc.includes(item.name) ? acc : [...acc, item.name], []);

const getUniqueFruits = (data) => [...new Set(data)];

console.log(getUniqueFruits(fruits));

const getSum = (n) => [...Array(n).keys()].reduce((acc, item) => item % 3 === 0 || item % 5 === 0 ? acc + item : acc, 0);

console.log(getSum(1000));
