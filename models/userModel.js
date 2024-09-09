let userArray = [];
let nextId = 1; 

const getAll = () => {
  return userArray;
}

const addUser = (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
    if (!name | !email | !password | !phone_number | !gender | !date_of_birth | !membership_status) {
        return false;
    } else {
        const newUser = {
            id: nextId++,
            name: name,
            email: email,
            password: password,
            phone_number: phone_number,
            gender: gender,
            date_of_birth: date_of_birth,
            membership_status: membership_status
    }
    userArray.push(newUser);
    return newUser;
    }
}

const findById = (id) => {
    const user = userArray.find((user) => user.id === Number(id));
    if (user) {
        return user;
    } else return false;
}

const updateOneById = (id, updatedData) => {
    const user = findById(id);

    if (user) {
        Object.assign(user, updatedData);
        return user;
    } else return false;
}

const deleteOneById = (id) => {
    const user = findById(id);
    if (user) {
        const initialLenght = userArray.length;
        userArray = userArray.filter((user) => user.id !== Number(id));
        return userArray.length < initialLenght;
    } else return false;   
}

if (require.main === module) {
  let result = addUser(
    "Matti",
    "matti@example.com",
    "1231564654",
    "+3581234568",
    "Male",
    "1990-01-01",
    "Active"
  );
  console.log(result);
  result = addUser(
    "Leevi",
    "leevi@example.com",
    "6544564545",
    "+35812444545",
    "Female",
    "1990-01-01",
    "Active"
  );
  console.log(result);
  console.log("getAll called: ", getAll());
  console.log("findById called: ", findById(1));
  console.log(
    "updateOneById called: ",
    updateOneById(2, { name: "Leena"})
    );
  console.log("findById called after update: ", findById(2));
  console.log("deleteOneById called: ", deleteOneById(1));
  console.log("getAll called after delete: ", getAll());
}

module.exports = {
    getAll,
    addUser,
    findById,
    updateOneById,
    deleteOneById
};