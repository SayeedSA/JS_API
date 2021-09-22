const user = {
    id: 95,
    name: "Sayeed Shmed",
    Dept: "CSE"
}

const userJson = JSON.stringify(user)
const userFromJson = JSON.parse(userJson)

console.log(userFromJson)
console.log(userJson)