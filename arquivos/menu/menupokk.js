const fs = require("fs")
const chalk = require("chalk")

const menupokk = (prefixo, nomebot, nome, tempo, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[👾 𝗣𝗼𝗸𝗲́𝗺𝗼𝗻 👾]
├⪧ ${prefixo}pokemon [texto]
├⪧ ${prefixo}nidorino 
├⪧ ${prefixo}nidoking 
├⪧ ${prefixo}clefairy 
├⪧ ${prefixo}vulpix 
├⪧ ${prefixo}pikachu 
├⪧ ${prefixo}bulbasaur 
├⪧ ${prefixo}raticate 
├⪧ ${prefixo}pidgeot 
├⪧ ${prefixo}pidgeotto 
├⪧ ${prefixo}beedrill 
├⪧ ${prefixo}pidgey 
├⪧ ${prefixo}weedle 
├⪧ ${prefixo}caterpie 
├⪧ ${prefixo}blastoise 
├⪧ ${prefixo}wartortle 
├⪧ ${prefixo}sandshrew 
├⪧ ${prefixo}raichu 
├⪧ ${prefixo}arbok 
├⪧ ${prefixo}ekans 
├⪧ ${prefixo}fearow 
├⪧ ${prefixo}spearow 
├⪧ ${prefixo}rattata 
├⪧ ${prefixo}charmander 
├⪧ ${prefixo}charmeleon 
├⪧ ${prefixo}charizard 
├⪧ ${prefixo}ivysaur 
├⪧ ${prefixo}squirtle 
╰─────── • 
`
}

exports.menupokk = menupokk