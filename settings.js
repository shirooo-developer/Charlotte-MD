/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = 'charlotte' // https://api.lolhuman.xyz
global.xzn = 'charlotte' // https://xzn.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6281249122429' // Owner Utama
global.owner = ['6281249122429'] // Owner Lainnya
global.namaowner = 'Keizha' // Nama Owner
global.premium = ["6281249122429"] // Premium User
global.nobot = '6285159258830'
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'Charlotte-MD' // NickBot
global.typemenu = 'v2' // 'v1' > 'v2' > 'v3' > 'v4'
global.typereply = 'v2' // 'v1' > 'v2'
global.autoread = false // ReadChat
global.autobio = false // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.packname = '' // Watermark Sticker
global.author = '𝗗𝗶𝗯𝘂𝗮𝘁 𝗢𝗹𝗲𝗵 𝗕𝗼𝘁 𝗖𝗵𝗮𝗿𝗹𝗼𝘁𝘁𝗲 - 𝟬𝟴𝟱𝟭𝟱𝟵𝟮𝟱𝟴𝟴𝟯𝟬' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: '*Sukses*',
    prem: '*Fitur Khusus Anggota Premium*',
    admin: '*Fitur Khusus Admin Grup*',
    botAdmin: '*Fitur Memerlukan Bot Menjadi Admin*',
    owner: '*Fitur Khusus Pemilik Bot*',
    group: '*Fitur Hanya Dapat Digunakan Digrup*',
    private: '*Fitur Hanya Dapat Digunakan Dichat Pribadi*',
    wait: '*Mohon Tunggu, Sedang Diproses*',    
    error: '*Maaf Fitur Rusak*',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://chat.whatsapp.com/E01trCuEsNM22uL4hB7ktS'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
