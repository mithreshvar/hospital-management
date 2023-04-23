const { response } = require("express");


// async function getRecords() {
//     console.log("hi1")
//     return await fetch(`http://localhost:8080/data/login/`)
//         .then((response) => {
//             console.log("hi2")
//             if (!response.ok) {
//                 const message = `An error occurred: ${response.statusText}`;
//                 console.error(message);
//                 return;
//             }
//             return response.json();
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

async function getRecords() {
    const response = await fetch(`http://localhost:8080/data/login/`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.log(message);
        return;
    }

    const records = await response.json();
    return records
}

const login = async (req, res = response) => {
    const { email, password } = req.body;
    // Ideally search the user in a database,

    const records = await getRecords();
    console.log(records)



    // throw an error if not found.
    if (password !== "1234") {
        return res.status(400).json({
            msg: "User / Password are incorrect",
        });
    }
    const userType = "Doctor";
    res.json({
        name: "Test User",
        token: "A JWT token to keep the user logged in.",
        userType: userType,
        msg: "Successful login",
    });
};

module.exports = {
    login,
};