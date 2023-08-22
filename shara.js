const fetch = require("node-fetch")
const md5 = require("md5")

async function login(nick, password){
    const pass = md5(password)

    const response = await fetch("https://www.smeshariki.ru/api/user/login", {
        method: "POST",
        body: JSON.stringify({"login":nick,"password":pass}),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    })

    return [ await response.json(), await response.headers.get("set-cookie") ]
}

async function serverAction(cookie){
    const response = await fetch("https://www.smeshariki.ru/async/ServerAction", {
        method: "POST",
        body: `<root user="" platform="17" />`, // action="1"
        headers: {
            "Cookie": cookie
        }
    })

    const result = await response.text()

    return result
}

module.exports = { login, serverAction }