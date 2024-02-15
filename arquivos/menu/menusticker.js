const fs = require("fs")
const chalk = require("chalk")

const menusticker = (prefixo, nomebot, nome, tempo, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭───[💟 𝗦𝘁𝗶𝗰𝗸𝗲𝗿𝘀 🥳]
├⪧ ${prefixo}sticker [marcar]
├⪧ ${prefixo}f [marcar]
├⪧ ${prefixo}qc
├⪧ ${prefixo}ttp [texto]
├⪧ ${prefixo}toimg [marcar]
├⪧ ${prefixo}togif [marcar]
├⪧ ${prefixo}attp1 [texto]
├⪧ ${prefixo}attp2 [texto]	
├⪧ ${prefixo}attp3 [texto]
├⪧ ${prefixo}attp4 [texto]
├⪧ ${prefixo}attp5 [texto]
├⪧ ${prefixo}attp6 [texto]
├⪧ ${prefixo}roubar [txt|txt]
╰─────── • 
`
}

exports.menusticker = menusticker