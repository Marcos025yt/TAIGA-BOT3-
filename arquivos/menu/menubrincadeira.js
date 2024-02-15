const fs = require("fs")
const chalk = require("chalk")

const menubrincadeira = (prefixo, nomebot, nome, tempo, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[💫 𝗕𝗿𝗶𝗻𝗰𝗮𝗱𝗲𝗶𝗿𝗮𝘀 ✨]
├⪧ ${prefixo}perfil 
├⪧ ${prefixo}cassino
├⪧ ${prefixo}gay
├⪧ ${prefixo}feio	
├⪧ ${prefixo}lixo
├⪧ ${prefixo}gado
├⪧ ${prefixo}burro
├⪧ ${prefixo}gordo
├⪧ ${prefixo}pobre
├⪧ ${prefixo}bonito
├⪧ ${prefixo}macaco
├⪧ ${prefixo}gostoso
├⪧ ${prefixo}gostosa
├⪧ ${prefixo}caçar
├⪧ ${prefixo}batalha [txt/txt]
├⪧ ${prefixo}sonic [txt]
├⪧ ${prefixo}sonic2 [txt]
├⪧ ${prefixo}mulher [txt]
├⪧ ${prefixo}homem [txt]
├⪧ ${prefixo}jogodaforca
├⪧ ${prefixo}forca
├⪧ ${prefixo}resetforca
├⪧ ${prefixo}minado
├⪧ ${prefixo}mina
├⪧ ${prefixo}mineshelp
├⪧ ${prefixo}minareset
├⪧ ${prefixo}correio +558788../oii
╰─────── • 
`
}

exports.menubrincadeira = menubrincadeira