const fs = require("fs")
const chalk = require("chalk")

const menupremm = (prefixo, nomebot, nome, tempo, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[👑 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 👑]
├⪧ ${prefixo}transcrever [audio]
├⪧ ${prefixo}descobrirmusica [aud|vid]
├⪧ ${prefixo}playmix [cantor]
├⪧ ${prefixo}encurtalink [link]
├⪧ ${prefixo}gerarlink [imagem]
├⪧ ${prefixo}ddd [87]
├⪧ ${prefixo}gerarcpf
├⪧ ${prefixo}hentai-neko
╰─────── • 
`
}

exports.menupremm = menupremm