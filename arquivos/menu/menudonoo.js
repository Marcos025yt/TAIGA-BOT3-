const fs = require("fs")
const chalk = require("chalk")

const menudonoo = (prefixo, nomebot, nome, tempo, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[💎 𝗗𝗼𝗻𝗼 💎]
├⪧ ${prefixo}seradm
├⪧ ${prefixo}sermenbro
├⪧ ${prefixo}addpremium
├⪧ ${prefixo}delpremium
├⪧ ${prefixo}premiumlist
├⪧ ${prefixo}listagp
├⪧ ${prefixo}prefixo
├⪧ ${prefixo}ativarbot [1/0]
├⪧ ${prefixo}sair 
├⪧ ${prefixo}entrar [link]
├⪧ ${prefixo}reiniciar
├⪧ ${prefixo}ausente [texto]
├⪧ ${prefixo}voltei
├⪧ ${prefixo}antipv [1/0]
├⪧ ${prefixo}antipv_on 
├⪧ ${prefixo}antipv_off
╰─────── • 
`
}

exports.menudonoo = menudonoo