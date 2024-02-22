const fs = require("fs")
const chalk = require("chalk")

const menudow = (prefixo, nomebot, nome, tempo, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭───[📀 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝘀 💿]
├⪧ ${prefixo}playaudio [nome]
├⪧ ${prefixo}playvideo [nome]
├⪧ ${prefixo}musica [nome]
├⪧ ${prefixo}ytmp3 [link]
├⪧ ${prefixo}ytmp4 [link]
├⪧ ${prefixo}instagram [link]
├⪧ ${prefixo}playmix [cantor]
├⪧ ${prefixo}tiktokvideo [link]
├⪧ ${prefixo}tiktokaudio [link]
├⪧ ${prefixo}ttkmp3 [link]
├⪧ ${prefixo}ttkmp4 [link]
├⪧ ${prefixo}Mediafire {link}
╰─────── • 
`
}

exports.menudow = menudow