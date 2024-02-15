const fs = require("fs")
const chalk = require("chalk")

const menuimagem = (prefixo, nomebot, nome, tempo, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[🏜️ 𝗜𝗺𝗮𝗴𝗲𝗻𝘀 🏞️]
├⪧ ${prefixo}neko2
├⪧ ${prefixo}zoro
├⪧ ${prefixo}luffy
├⪧ ${prefixo}sanji
├⪧ ${prefixo}ussop
├⪧ ${prefixo}nami
├⪧ ${prefixo}copper
├⪧ ${prefixo}naruto
├⪧ ${prefixo}minato
├⪧ ${prefixo}sasuke
├⪧ ${prefixo}sakura
├⪧ ${prefixo}boruto
├⪧ ${prefixo}sarada
├⪧ ${prefixo}mitsuki
├⪧ ${prefixo}orochimaru
├⪧ ${prefixo}tsunade
├⪧ ${prefixo}kakashi
├⪧ ${prefixo}killua
├⪧ ${prefixo}gon
├⪧ ${prefixo}rimuru
├⪧ ${prefixo}sagiri
├⪧ ${prefixo}natsu
├⪧ ${prefixo}tanjirou
├⪧ ${prefixo}nezuko
├⪧ ${prefixo}senku
├⪧ ${prefixo}waifu
├⪧ ${prefixo}neko
├⪧ ${prefixo}megumin
├⪧ ${prefixo}awoo
├⪧ ${prefixo}shinobu
├⪧ ${prefixo}bully
├⪧ ${prefixo}cuddle
├⪧ ${prefixo}cry
├⪧ ${prefixo}hug
├⪧ ${prefixo}kiss
├⪧ ${prefixo}pat
├⪧ ${prefixo}lick
├⪧ ${prefixo}smug
├⪧ ${prefixo}bonk
├⪧ ${prefixo}yeet
├⪧ ${prefixo}blush
├⪧ ${prefixo}smile
├⪧ ${prefixo}wave
├⪧ ${prefixo}highfive
├⪧ ${prefixo}handhold
├⪧ ${prefixo}nom
├⪧ ${prefixo}bite
├⪧ ${prefixo}glomp
├⪧ ${prefixo}slap
├⪧ ${prefixo}kill
├⪧ ${prefixo}kick
├⪧ ${prefixo}happy
├⪧ ${prefixo}wink
├⪧ ${prefixo}poke
├⪧ ${prefixo}dance
├⪧ ${prefixo}cringe
╰─────── • 
`
}

exports.menuimagem = menuimagem