const Shara = require("./shara")
const SharaCrypt = require("./sharacrypt")
const LOG_DATA = {
    nick: "5БйБИZЮрЙoяo",
    password: "_uШFrэаcкjbF"
}

async function main(){
    const cookie = await Shara.login(LOG_DATA.nick, LOG_DATA.password)

    const clearCookie = cookie[1].split(/[\;|\,]\s/gi).filter(e => e.startsWith("_shtm") || e.startsWith("SessionId") || e.startsWith("LoginCookieKey")).join("; ")

    const cdata = (await Shara.serverAction(clearCookie)).replace(`<?xml version="1.0" encoding="utf-8"?><xml><![CDATA[`, "").replace("]]></xml>", "")

    console.log(SharaCrypt.decrypt(cdata))
}

main()