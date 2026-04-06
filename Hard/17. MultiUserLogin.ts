type Users = {
  username: string,
  password: string
}

const users = [
  { username: "admin",   password: "1234" },
  { username: "trainer", password: "abcd" }
];

function login(usersT: Users[], username: string, password: string){
    for(let user of usersT){
        if(username === user.username && password === user.password){
            return "Login Successful";
        }
    }

    return "Invalid Credentials";
}

const loginResult = login(users, "adminF", "1234");
console.log("Login Result : ", loginResult);

