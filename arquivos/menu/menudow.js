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
├⪧ ${prefixo}play [nome/link]
├⪧ ${prefixo}play2 [nome/link]
├⪧ ${prefixo}playaudio [nome]
├⪧ ${prefixo}playvideo [nome]
├⪧ ${prefixo}musica [nome]
├⪧ ${prefixo}play [nome]
├⪧ ${prefixo}play2 [nome]
├⪧ ${prefixo}ytmp3 [link]
├⪧ ${prefixo}ytmp4 [link]
├⪧ ${prefixo}instagram [link]
├⪧ ${prefixo}tiktok [link]
├⪧ ${prefixo}tiktok2 [link]
├⪧ ${prefixo}tiktokvideo [link]
├⪧ ${prefixo}tiktokaudio [link]
├⪧ ${prefixo}Mediafire {link}
╰─────── • 
`
}

exports.menudow = menudow