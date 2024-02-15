const fs = require("fs")
const chalk = require("chalk")

const menuadmin = (prefixo, nomebot, nome, tempo, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭───[🗿 𝗔𝗱𝗺𝗶𝗻𝘀 🍷]
├⪧ ${prefixo}bemvindo 1/0
├⪧ ${prefixo}antilink 1/0
├⪧ ${prefixo}anticontato 1/0
├⪧ ${prefixo}anticatalogo 1/0
├⪧ ${prefixo}antiloc 1/0
├⪧ ${prefixo}antiaudio 1/0
├⪧ ${prefixo}antivideo 1/0
├⪧ ${prefixo}antiimg 1/0
├⪧ ${prefixo}antidocumento 1/0
├⪧ ${prefixo}antinotas 1/0
├⪧ ${prefixo}antisticker 1/0
├⪧ ${prefixo}autoban 1/0
├⪧ ${prefixo}autosticker 1/0
├⪧ ${prefixo}x9visu 1/0
├⪧ ${prefixo}bangp
├⪧ ${prefixo}unbangp
├⪧ ${prefixo}listanegra [558788...]
├⪧ ${prefixo}tirardalista [558788...]
├⪧ ${prefixo}hidetag [texto]
├⪧ ${prefixo}marcar
├⪧ ${prefixo}marcarwa
├⪧ ${prefixo}promover @
├⪧ ${prefixo}rebaixar @
├⪧ ${prefixo}linkgp
├⪧ ${prefixo}ban @
├⪧ ${prefixo}add @
├⪧ ${prefixo}listonline
├⪧ ${prefixo}nomegp [nome]
├⪧ ${prefixo}descgp [descrição]
├⪧ ${prefixo}fotogp [marcarft]
├⪧ ${prefixo}listabr
├⪧ ${prefixo}listafake
├⪧ ${prefixo}listaadmins
├⪧ ${prefixo}infogp 
├⪧ ${prefixo}novolink
├⪧ ${prefixo}grupo a/f
├⪧ ${prefixo}abrirgp 1 hora
├⪧ ${prefixo}fechargp 1 hora
├⪧ ${prefixo}apagar
├⪧ ${prefixo}mute @
├⪧ ${prefixo}unmute @
├⪧ ${prefixo}modobrincadeira 1/0
├⪧ ${prefixo}sorteio [txt]
├⪧ ${prefixo}sorteionumero [txt]
╰─────── • 
`
}

exports.menuadmin = menuadmin