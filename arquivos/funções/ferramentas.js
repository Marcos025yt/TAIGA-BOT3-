const fetch = require("node-fetch")
const axios = require("axios")
const mimetype = require("mime-types")
const chalk = require("chalk")
const cfonts = require("cfonts")
const moment = require("moment-timezone")
const fs = require("fs")

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)
const generateMessageTag = async (epoch) => {
let tag = (0, exports.unixTimestampSeconds)().toString()
if (epoch)
tag += '.--' + epoch;
return tag;
}

const processTime = async (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }

const banner = cfonts.render("TAIGA-BOT", {
  font: "block",
  align: "center",
  colors: ["blue", "magenta"]
})


const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
};

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})
})

const getExtension = async (type) => {
return await mimetype.extension(type)
}

const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`
}

const parseMention = async (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

function tempRuntime(seconds) {
seconds = Number(seconds)
if (isNaN(seconds) || seconds < 0) { return "Tempo inválido"}
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60)
var dDisplay = d > 0 ? d + (d === 1 ? " dia" : " dias") : "";
var hDisplay = h > 0 ? h + (h === 1 ? " hora" : " horas") : "";
var mDisplay = m > 0 ? m + (m === 1 ? " minuto" : " minutos") : "";
var sDisplay = s > 0 ? s + (s === 1 ? " segundo" : " segundos") : "";
var timeComponents = [dDisplay, hDisplay, mDisplay, sDisplay].filter(Boolean)
if (timeComponents.length === 0) { return "Tempo zero"}
if (timeComponents.length === 1) {
return timeComponents[0]}
var lastComponent = timeComponents.pop();
var formattedTime = timeComponents.join(", ") + " e " + lastComponent
return formattedTime
}

function clockString(ms) {
let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":")}

function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)}
})
}

const usedCommandRecently = new Set()
const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
usedCommandRecently.add(from)
setTimeout(() => usedCommandRecently.delete(from), 5000)}

module.exports = { getBuffer, generateMessageTag, tempRuntime, clockString, color, fetchJson, getGroupAdmins, getRandom, parseMention, getExtension, banner, uncache, nocache, isFiltered, addFilter }