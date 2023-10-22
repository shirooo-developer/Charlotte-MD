/*
   Created By Charlotte
   My Contact wa.me/6281249122429
*/

const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const fetch = require('node-fetch')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVidio,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    jam,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./lib/myfunc')
/* ~~~~~~~~~ FUNTION SYSTEM ~~~~~~~~~ */
let afk = require("./lib/afk");
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
/* ~~~~~~~~~ DATA GAME ~~~~~~~~~ */
let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let akinator = []
/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let premium = JSON.parse(fs.readFileSync('./src/data/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./src/data/owner.json'))
let _user = JSON.parse(fs.readFileSync('./src/data/user.json'))
let _afk = JSON.parse(fs.readFileSync('./src/data/user/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))
let autosimi = JSON.parse(fs.readFileSync('./src/data/simi.json'))
/* ~~~~~~~~~ DATA MEDIA ~~~~~~~~~ */
const VnArxzy = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const StickerArxzy = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const GambarArxzy = JSON.parse(fs.readFileSync('./src/media/image.json'))
const VidioArxzy = JSON.parse(fs.readFileSync('./src/media/video.json'))
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id")

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Petang 🌆'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = arxzy = async (arxzy, m, msg, chatUpdate, store) => {
    try {
        /* ~~~~~~~~~ BASE ARXZYDEV ~~~~~~~~~ */
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa
        const isCmd = body.startsWith(prefix, '')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await arxzy.decodeJid(arxzy.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isSimi = autosimi.includes(from)
        /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isGambar = (type == 'imageMessage')
        const isVidio = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedGambar = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVidio = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const isAsu = body.startsWith(pric)
        const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isAdrian = ('6281249122429@s.whatsapp.net').includes(m.sender)
        /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await arxzy.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
        const isCreator = [numberowner, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const isUser = _user.includes(m.sender)
        expiredCheck(arxzy, m, premium);
        /* ~~~~~~~~~ REPLY ~~~~~~~~~ */
        async function newReply(teks) {
  // Define the variable `typereplay` here.
  const typereplay = 'v2';

  if (typereplay === 'v1') {
    m.reply(teks);
  } else if (typereplay === 'v2') {
    arxzy.sendMessage(m.chat, {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: global.namabot,
          body: jam(),
          previewType: 'PHOTO',
          thumbnail: fs.readFileSync('./media/quoted.jpg'),
          sourceUrl: global.link,
        },
      },
      text: teks,
    }, { quoted: m });
  };
}

        function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
        if (!arxzy.public) {
            if (isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            arxzy.readMessages([m.key])
        }
        if (autobio) {
            arxzy.updateProfileStatus(`-`).catch(_ => _)
        }
        if (chatUpdate['messages.upsert']) {
            const upsert = chatUpdate['messages.upsert']
            for (let msg of upsert.messages) {
               if (msg.key.remoteJid == 'status@broadcast' && !msg.key.fromMe && !msg.message?.protocolMessage) {
                  console.log(`Lihat status ${msg.pushName} ${msg.key.participant.split('@')[0]}\n`)
                  arxzy.readMessages([msg.key])
               }
            }
        } 
        if (isCommand) {
            let titida = ['composing', 'recording']
            yte = titida[Math.floor(titida.length * Math.random())]
            arxzy.sendPresenceUpdate(yte, from)
        }
        if (m.sender.startsWith('212') && global.autoblok212 === true) {
            return arxzy.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && global.onlyindo === true) {
            return arxzy.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
            list.push({
                displayName: arxzy.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${arxzy.getName(i + '@s.whatsapp.net')}\n
FN:${arxzy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:creator@arxzy.my.id\n
item2.X-ABLabel:Email\n
item3.URL:https://profile.arxzydev.xyz\n
item3.X-ABLabel:Profile Website\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
            })
        }
        if (isCmd && !isUser) {
            _user.push(sender)
            fs.writeFileSync('./src/data/user.json', JSON.stringify(_user, null, 2))
        }
        /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
        if (isCommand) {
            console.log(`<================>`)
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.black(chalk.bgGreen(hariini)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            console.log(`<================>`)
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./src/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))[0].hit_cmd
        }
        /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
                
        for (let Mwuhehe of VnArxzy) {
            if (budy === Mwuhehe) {
                let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
                arxzy.sendMessage(m.chat, {
                    audio: audiobuffy,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of StickerArxzy) {
            if (budy === Mwuhehe) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
                arxzy.sendMessage(m.chat, {
                    sticker: stickerbuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of GambarArxzy) {
            if (budy === Mwuhehe) {
                let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
                arxzy.sendMessage(m.chat, {
                    image: imagebuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of VidioArxzy) {
            if (budy === Mwuhehe) {
                let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
                arxzy.sendMessage(m.chat, {
                    video: videobuffy
                }, {
                    quoted: m
                })
            }
        }
        /* ~~~~~~~~~ RESPON CMD GAME~~~~~~~~~ */
        if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
            kuis = true
            var {
                server,
                frontaddr,
                session,
                signature,
                question,
                step
            } = akinator[m.sender.split('@')[0]]
            if (step == "0" && budy == "5") newReply("*Maaf Anda Telah Mencapai Pertanyaan Pertama*")
            var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
            var get_result = await fetchJson(ini_url)
            var get_result = get_result.result
            if (get_result.hasOwnProperty("name")) {
                var ini_name = get_result.name
                var description = get_result.description
                ini_txt = `${ini_name} - ${description}\n\n`
                ini_txt += "*Terima Kasih*\n*Powered By Charlotte & LoL Human*"
                await arxzy.sendMessage(m.chat, {
                    image: {
                        url: get_result.image
                    },
                    caption: ini_txt
                }).then(() => {
                    delete akinator[m.sender.split('@')[0]]
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                return
            }
            var {
                question,
                _,
                step
            } = get_result
            ini_txt = `${question}\n\n`
            ini_txt += "0 - Ya\n"
            ini_txt += "1 - Tidak\n"
            ini_txt += "2 - Saya Tidak Tau\n"
            ini_txt += "3 - Mungkin\n"
            ini_txt += "4 - Mungkin Tidak\n"
            ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            if (args[0] === '5') {
                var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                var {
                    question,
                    _,
                    step
                } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            }
            arxzy.sendText(m.chat, ini_txt, m).then(() => {
                const data_ = akinator[m.sender.split('@')[0]]
                data_["question"] = question
                data_["step"] = step
                akinator[m.sender.split('@')[0]] = data_
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
            })
        }
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK GAMBAR*\n\nJawaban Benar 🎉`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await newReply(`*KUIS MATEMATIKA*\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*ASAH OTAK*\n\nJawaban Benar 🎉`, m)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*SIAPAKAH AKU*\n\nJawaban Benar 🎉`, m)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*SUSUN KATA*\n\nJawaban Benar 🎉`, m)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK GAMBAR*\n\nJawaban Benar 🎉`, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK BENDERA*\n\nJawaban Benar 🎉`, m)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK KABUPATEN*\n\nJawaban Benar 🎉`, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK KIMIA*\n\nJawaban Benar 🎉`, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEKA TEKI*\n\nJawaban Benar 🎉`, m)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK LAGU*\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK KATA*\n\nJawaban Benar 🎉`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK KALIMAT*\n\nJawaban Benar 🎉`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK LIRIK*\n\nJawaban Benar 🎉`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah Menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `*TEBAK TEBAKAN*\n\nJawaban Benar 🎉`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah*')
        }
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // newReply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                newReply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: *${room.id}*
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `*@${winner.split('@')[0]} Menang*` : isTie ? `*Permainan Berakhir*` : `Giliran *${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})*`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* Untuk Menyerah Dan Mengakui Kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) arxzy.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            arxzy.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    newReply(`*Dia Sedang AFK*\n\n*Reason:* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./src/data/user/afk-user.json', JSON.stringify(_afk))
                arxzy.sendTextWithMentions(m.chat, `*@${m.sender.split('@')[0]} Telah Kembali Dari AFK*`, m)
            }
        }
        switch (isCommand) {
            case 'status': {
                  if (!isCreator) return newReply(mess.owner)
                  if (args.length < 1) return newReply('*Keterangan?*')
                  if (q === 'image') {
                     let imgSw = await arxzy.downloadAndSaveMediaMessage(quoted)
                     await arxzy.sendMessage('status@broadcast', { image: { url: imgSw }, caption: q}, { statusJidList: _user })
                     newReply(mess.done)
                  } else if (/video/.test(mime)) {
                     let VidSw = await arxzy.downloadAndSaveMediaMessage(quoted)
                     await arxzy.sendMessage('status@broadcast', { video: { url: VidSw }, caption: q}, { statusJidList: _user })
                     newReply(mess.done)
                  } else if (/audio/.test(mime)) {
                     let VnSw = await arxzy.downloadAndSaveMediaMessage(quoted)
                     await arxzy.sendMessage('status@broadcast', { audio: { url: VnSw }, mimetype: 'audio/mp4', ptt:true },{ backgroundColor: '#FF000000', statusJidList: _user })
                     newReply(mess.done)
                  } else if (q) {
                     arxzy.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: _user });
                  } else {
                     newReply('Format: *.status Keterangan*')
                  }
               }
               break
            case 'autosimi':
               if (!isCreator) return newReply(mess.owne)
               if (args.length < 1) return newReply('Format: *.autosimi on/off*')
               if (q == 'on') {
                  autosimi.push(from)
                  fs.writeFileSync('./src/data/simi.json', JSON.stringify(autosimi))
                  newReply('*Sukses Mengaktifkan Mode Simi*')
               } else if (q == 'off') {
                  autosimi.splice(from, 1)
                  fs.writeFileSync('./src/data/simi.json', JSON.stringify(autosimi))
                  newReply('*Sukes Menonaktifkan Mode Simi*')
               } else {
                  newReply('Najis')
               }
            break
            case 'setimgqouted':
            case 'siq': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/quoted.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.mp4')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'addprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 2)
                    return newReply(`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    newReply("Sukses Premium")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    newReply("Sukses Via Nomer")
                }
                break
            case 'delprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    }
                    newReply("Sukses Delete")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    newReply("Sukses Via Nomer")
                }
                break
            case 'listprem': {
                if (!isCreator) return newReply(mess.owner)
                let data = require("./src/data/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Nomer : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                arxzy.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'delsesi':
            case 'clearsession': {
                if (!isCreator) return newReply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return newReply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return newReply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    newReply(teks)
                    await sleep(2000)
                    newReply("Menghapus file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    newReply("Berhasil menghapus semua sampah di folder session")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return newReply(mess.owner)
                    if (!text) return newReply('Masukkan Link Group!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link Invalid!')
                    newReply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await arxzy.groupAcceptInvite(result).then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                } catch {
                    newReply('Gagal Masuk Ke Group')
                }
                break
            case 'cekapikey':
                if (!isCreator) return newReply(mess.owner)
                let g = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
                newReply(q.result)
                break
            case 'ambilsesi':
            case 'getsesi':
                if (!isCreator) return newReply(mess.owner)
                newReply('Tunggu Sebentar, Sedang mengambil file sesi mu')
                let sesi = fs.readFileSync('./src/total-hit-user.json')
                arxzy.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'total-hit-user.json'
                }, {
                    quoted: m
                })
                break
            case 'myip':
            case 'ipbot':
                if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
                break
            case 'shutdown':
                if (!isCreator) return newReply(mess.owner)
                newReply(`Otsukaresama deshita🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return newReply(mess.owner)
                newReply('Proses....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                }
                break
            case 'autobio':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    arxzy.public = true
                    newReply(mess.done)
                } else if (q == 'self') {
                    arxzy.public = false
                    newReply(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return newReply(mess.owner)
                if (!quoted) return newReply(`Kirim/newReply Gambar Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return newReply(`Kirim/newReply Gambar Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return newReply(`Kirim/newReply Gambar Dengan Caption ${prefix + command}`)
                var medis = await arxzy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await arxzy.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await arxzy.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return newReply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.updateBlockStatus(blockw, 'block').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return newReply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.updateBlockStatus(blockww, 'unblock').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'leave':
                if (!isCreator) return newReply(mess.owner)
                if (!m.isGroup) return newReply(mess.group)
                newReply('*Bot Keluar*')
                await arxzy.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return newReply(mess.owner)
                if (m.isGroup) return newReply(mess.private)
                newReply(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await arxzy.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Text mana?\n\nContoh : ${prefix + command} Besok Libur `)
                let getGroups = await arxzy.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nBROADCAST'
                    arxzy.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Telah Terkirim ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'getcase':
            case 'ambilcase':
                if (!isCreator) return newReply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("arxzy.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                newReply(`${getCase(q)}`)
                break



                /* ~~~~~~~~~ GROUP FEATURES ~~~~~~~~~ */

            case 'closetime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*Opsi:*\ndetik\nmenit\njam\n\nFormat: *.closetime 10 detik*')
                }
                newReply(`*Close Time ${q} Dimulai Dari Sekarang*`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Tepat Waktu* grup ditutup oleh admin\nSekarang hanya admin yang dapat mengirim pesan`
                    arxzy.groupSettingUpdate(m.chat, 'announcement')
                    newReply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*Opsi:*\ndetik\nmenit\njam\n\nFormat: *.opentime 10 detik*')
                }
                newReply(`*Open Time ${q} Dimulai Dari Sekarang*`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Tepat Waktu* grup dibuka oleh admin\nSekarang member dapat mengirim pesan`
                    arxzy.groupSettingUpdate(m.chat, 'not_announcement')
                    newReply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'add':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return 'Format: *.setname Nama Baru*'
                await arxzy.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return 'Format: *.setdecs Deskripsi Baru*'
                await arxzy.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!quoted) return newReply(`Kirim/Balas Gambar Dengan Caption *${prefix + command}*`)
                if (!/image/.test(mime)) return newReply(`Kirim/Balas Gambar Dengan Caption *${prefix + command}*`)
                if (/webp/.test(mime)) return newReply(`Kirim/Balas Gambar Dengan Caption *${prefix + command}*`)
                var medis = await arxzy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await arxzy.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await arxzy.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let teks = `*TAG ALL*
 
                  *Pesan: ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `◈ @${mem.id.split('@')[0]}\n`
                }
                arxzy.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                arxzy.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!isAdmins) return newReply(mess.admin)
                if (!m.quoted) return newReply(`Balas Pesan Dengan Caption *${prefix + command}*`)
                arxzy.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'close') {
                    await arxzy.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`*Sukses Menutup Group*`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'open') {
                    await arxzy.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`*Sukses Membuka Group*`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Format: *${prefix + command} open/close*`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'open') {
                    await arxzy.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`*Sukses Membuka Edit Info Group*`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'close') {
                    await arxzy.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`*Sukses Menutup Edit Info Group*`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Format: *${prefix + command} open/close*`)
                }
                break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let response = await arxzy.groupInviteCode(m.chat)
                arxzy.sendText(m.chat, `*👥 INFORMASI GRUP 👥*\n📛 *Nama:* ${groupMetadata.subject}\n👤 *Pemilik Grup:* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak Diketahui'}\n🌱 *ID:* ${groupMetadata.id}\n🔗 *Tautan Obrolan:* https://chat.whatsapp.com/${response}\n👥 *Anggota:* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                await arxzy.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`*Sukses Mereset Tautan Undangan Grup ${groupMetadata.subject}*`)
                    }).catch((err) => newReply(json(err)))
                break
            case 'listonline':
            // Declare and initialize the variable `presences` before the code that is trying to access it.
let presences = [];

case 'liston':
  if (!m.isGroup) newReply(mess.group)
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...(presences?.[id] || []), botNumber]

  // Check if the variable `presences` is defined before accessing its properties.
  if (presences) {
    arxzy.sendText(m.chat, '*List Online:*\n\n' + online.map(v => '@' + v.replace(/@.+/, '')).join`\n`, m, {
      mentions: online
    })
  } else {
    // The variable `presences` is undefined. Handle the error here.

  }
  break
  
                /* ~~~~~~~~~ MAIN & STATUS BOT ~~~~~~~~~ */
            case 'ping':
            case 'botstatus':
            case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await arxzy.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'STATUS SERVER',
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/2d413a3af13f62e21f67f.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `*👋 Hai ${pushname}*\n\nBerikut Harga Premium:\n*- 7 Hari = IDR 4,000*\n*- 14 Hari = IDR 8,000*\n*- 28 Hari = IDR 14,000*\n*- Unlimited = IDR 20,000*\n\nHubungi *wa.me/6281249122429*`
                await arxzy.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'BUY PREMIUM',
                            body: `Keizha`,
                            thumbnailUrl: 'https://telegra.ph/file/2d413a3af13f62e21f67f.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'sewa':
            case 'sewabot':
                newReply(`*👋 Hai ${pushname}*\n\nBerikut Harga Premium:\n*- 7 Hari = IDR 4,000*\n*- 14 Hari = IDR 8,000*\n*- 28 Hari = IDR 14,000*\n*- Unlimited = IDR 20,000*\n*- 28 Hari = Gratis Di msha.ke/charlotte_page*\n\nHubungi *wa.me/6281249122429*`)
                break
            case 'speedtest': {
                newReply('*Testing Speed...*')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) arxzy.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/2d413a3af13f62e21f67f.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) arxzy.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/2d413a3af13f62e21f67f.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bot Telah Berjalan Selama *${runtime(process.uptime())}*`
                arxzy.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'RUNTIME',
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://telegra.ph/file/2d413a3af13f62e21f67f.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let katanya = `*Hubungi wa.me/6281249122429*`
                arxzy.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/qris.jpg'),
                    caption: katanya
                }, {
                    quoted: m
                })
                break
            case "owner": {
                arxzy.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Kontak`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
            break


                /* ~~~~~~~~~ CONVERT FEATURES ~~~~~~~~~ */
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return newReply(`Kirim Atau Balas Media Dengan Perintah *${prefix + command}*`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await arxzy.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVidio || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('*Maksimal 10 Detik*')
                    let media = await quoted.download()
                    let encmedia = await arxzy.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Atau Balas Media Dengan Perintah *${prefix + command}*`)
                }
            }
            break
            case 'smeme': {
                let respond = `Balas Stiker Dengan Perintah *${prefix + command} Teks Atas|Teks Bawah*`
                if (!/image/.test(mime)) return newReply(respond)
                if (!text) return newReply(respond)
                newReply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await arxzy.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await arxzy.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return newReply(`*Balas Stiker*`)
                newReply(mess.wait)
                let media = await arxzy.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    arxzy.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return newReply(`*Balas Stiker GIF*`)
                newReply(mess.wait)
                let media = await arxzy.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await arxzy.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Vidio'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`*Kirim Atau Balas Vidio*`)
                newReply(mess.wait)
                let media = await arxzy.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                arxzy.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim Atau Balas Vidio Dengan Perintah *.tomp3*`)
                newReply(mess.wait)
                let media = await arxzy.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                arxzy.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `Dikonversi Charlotte-MD.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim Atau Balas Vidio Atau Audio Dengan Perintah *${prefix + command}*`)
                newReply(mess.wait)
                let media = await arxzy.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                arxzy.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return newReply(`*Balas Stiker*`)
                newReply(mess.wait)
                let media = await arxzy.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await arxzy.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Vidio'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                newReply(mess.wait)
                let media = await arxzy.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    newReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    newReply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix2': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Format: *${prefix + command} 😅+🤔*`)
                if (!emoji2) return newReply(`Format: *${prefix + command} 😅+🤔*`)
                newReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await arxzy.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'emojimix1': {
                if (!text) return newReply(`Format: *${prefix + command} 😅*`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await arxzy.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return newReply(`*Kirim Atau Balas Media*`)
                if (/image/.test(mime)) {
                    anuan = await arxzy.downloadAndSaveMediaMessage(quoted)
                    arxzy.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `*Sukses*`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await arxzy.downloadAndSaveMediaMessage(quoted)
                    arxzy.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `*Sukses*`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return newReply('Fornat: *.toqr Teks*')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await arxzy.sendMessage(from, {
                    image: medi,
                    caption: "*Sukses*"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return newReply(`Format: *${prefix}fliptext Teks*`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                newReply(`*MEMBALIK TEKS*n*• Normal:*\n${quere}\n*• Flip:*\n${flipe}`)
            }
            break
            /* ~~~~~~~~~ INFORMATION. FEATURED ~~~~~~~~~ */
            case 'infogempa':
                let k = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
                newReply(mess.wait)
                var caption = `Lokasi: *${k.result.lokasi}*\n`
                caption += `Waktu: *${k.result.waktu}*\n`
                caption += `Potensi: *${k.result.potensi}*\n`
                caption += `Magnitude: *${k.result.magnitude}*\n`
                caption += `Kedalaman: *${k.result.kedalaman}*\n`
                caption += `Koordinat: *${k.result.koordinat}*`
                await arxzy.sendMessage(m.chat, {
                    image: {
                        url: k.result.map
                    },
                    caption
                }, {
                    quoted: m
                })
                break
                /* ~~~~~~~~~ DATABASE MEDIA ~~~~~~~~~ */
            case 'listvn': {
                let teks = '┌──⭓「 *DAFTAR VN* 」\n│\n'
                for (let x of VnArxzy) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VnArxzy.length}*`
                newReply(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *DAFTAR STIKER* 」\n│\n'
                for (let x of StickerArxzy) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerArxzy.length}*`
                newReply(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *DAFTAR GAMBAR* 」\n│\n'
                for (let x of GambarArxzy) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${GambarArxzy.length}*`
                newReply(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *DAFTAR VIDIO* 」\n│\n'
                for (let x of VidioArxzy) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VidioArxzy.length}*`
                newReply(teks)
            }
            break
            case 'addvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Vidionya?')
                if (VidioArxzy.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Ada")
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                VidioArxzy.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VidioArxzy))
                fs.unlinkSync(delb)
                newReply(`Success Menambahkan Vidio\nUntuk Melihat Ketik ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Vidio')
                if (!VidioArxzy.includes(q)) return newReply("Nama Tidak Ada Di Dalam Database")
                let wanu = VidioArxzy.indexOf(q)
                VidioArxzy.splice(wanu, 1)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VidioArxzy))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                newReply(`Success Sukses Menghapus Vidio ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Gambarnya?')
                if (GambarArxzy.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                GambarArxzy.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(GambarArxzy))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Gambar\nUntuk Cek Ketik ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Gambarnya')
                if (!GambarArxzy.includes(q)) return newReply("Nama Gambar Yang Kamu Masukan Tidak Terdaftar")
                let wanu = GambarArxzy.indexOf(q)
                GambarArxzy.splice(wanu, 1)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(GambarArxzy))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                newReply(`Suksed Menghapus Gambar ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya?')
                if (StickerArxzy.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                StickerArxzy.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerArxzy))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya')
                if (!StickerArxzy.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = StickerArxzy.indexOf(q)
                StickerArxzy.splice(wanu, 1)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerArxzy))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                newReply(`Sukses Menghapus Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya?')
                if (VnArxzy.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                VnArxzy.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnArxzy))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya')
                if (!VnArxzy.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = VnArxzy.indexOf(q)
                VnArxzy.splice(wanu, 1)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnArxzy))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                newReply(`Sukses Menghapus Audio ${q}`)
            }
            break




            /* ~~~~~~~~~ GAME FEATURES ~~~~~~~~~ */
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return newReply('*Kamu Berada Dalam Permainan*')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    newReply('*Lawan Ditemukan*')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: *${room.id}*
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* Untuk Menyerah Dan Mengakui Kekalahan`
                    if (room.x !== room.o) await arxzy.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await arxzy.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    newReply('*Menunggu lawan' + (text ? ` mengetik command dibawah ini *${prefix}${command} ${text}*` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        arxzy.sendText(m.chat, `*Berhasil Menghapus Sesi TicTacToe*`, m)
                    } else if (!this.game) {
                        newReply(`*Tidak Ada Sesi TicTacToe*`)
                    } else mewReply('?')
                } catch (e) {
                    newReply('*Maaf Fitur Rusak*')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) newReply(`*Sesi Permainan Suit Sebelumnya Belum Selesai*`)
                if (m.mentionedJid[0] === m.sender) return newReply(`*Tidak Bisa Bermain Dengan Diri Sendiri*`)
                if (!m.mentionedJid[0]) return newReply(`Format: *${prefix}suit @${_owner[1]}*`, m.chat, {
                    mentions: [_owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return newReply(`*Pemain Itu Sedang Dalam Permainan*`)
                let id = 'suit_' + new Date() * 1
                let caption = `*SUIT PvP*

@${m.sender.split`@`[0]} Menantang @${m.mentionedJid[0].split`@`[0]} Untuk Bermain Suit

Silahkan @${m.mentionedJid[0].split`@`[0]} Untuk Ketik terima/tolak`
                this.suit[id] = {
                    chat: await arxzy.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) arxzy.sendText(m.chat, `*Waktu Suit Habis*`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                let {
                    genMath,
                    modes
                } = require('./lib/math')
                if (!text) return newReply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh _useran: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                arxzy.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    newReply("*Waktu Habis*\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'tebak': {
                if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `*TEBAK GAMBAR*\n\nDeskripsi: *${result.deskripsi}*\nWaktu: *60 Detik*`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `*TEBAK KATA*\n\n${result.soal}\nWaktu: *60 Detik*`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `*TEBAK KALIMAT*\n\n${result.soal}\nWaktu: *60 Detik*`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `*TEBAK LIRIK*\n\n*${result.soal}*?\nWaktu: *60 Detik*`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `*TEBAK-TEBAKAN*\n\n*${result.soal}*?\nWaktu: *60 Detik*`, m).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `*TEBAK BENDERA*\n\nPetunjuk: *${result.flag}*\nWaktu: *60 Detik*`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `*TEBAK BENDERA II*\n\nWaktu: *60 Detik*`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendImage(m.chat, result.url, `*TEBAK KABUPATEN*\n\nWaktu: *60 Detik*`, m).then(() => {
                        tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.title)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
                        delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `*TEBAK KIMIA*\n\nUnsur: *${result.unsur}*\nWaktu: *60 Detik*`, m).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `*ASAH OTAK*\n\nSoal: *${result.soal}*\nWaktu: *60 Detik*`, m).then(() => {
                        tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `*SIAPAKAH AKU*\n\nSoal: *${result.soal}*\nWaktu: *60 Detik*`, m).then(() => {
                        tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m)
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `*SUSUN KATA*\n\nSoal: *${result.soal}*\nTipe: *${result.tipe}*\nWaktu: *60 Detik*`, m).then(() => {
                        tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m)
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `*TEKA-TEKI*\n\nSoal: *${result.soal}*\nWaktu: *60 Detik*`, m).then(() => {
                        tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `*Waktu Habis*\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m)
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'akinator':
                newReply(`*Akinator adalah sebuah permainan dan aplikasi perangkat bergerak yang berupaya menebak secara rinci dan pasti isi pikiran Pengguna permainan ini melalui serentetan pertanyaan.*\n\n- ${prefix}akinatorstart : Untuk Memulai\n~> ${prefix}akinatorstop : Untuk Berhenti`)
                break
            case 'akinatorstart':
                if (!isPremium) return newReply(mess.prem)
                if (m.isGroup) return newReply(mess.private)
                if (akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Masih Ada Sesi Permainan Belum Selesai*")
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lol}`)
                let {
                    server, frontaddr, session, signature, question, step
                } = get_result.result
                const data = {}
                data["server"] = server
                data["frontaddr"] = frontaddr
                data["session"] = session
                data["signature"] = signature
                data["question"] = question
                data["step"] = step
                imi_txt = `${question}\n\n`
                imi_txt += "0 - Ya\n"
                imi_txt += "1 - Tidak\n"
                imi_txt += "2 - Saya Tidak Tau\n"
                imi_txt += "3 - Mungkin\n"
                imi_txt += "4 - Mungkin Tidak"
                arxzy.sendText(m.chat, imi_txt, m).then(() => {
                    akinator[m.sender.split('@')[0]] = data
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                break
            case 'akinatorstop':
                if (!akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("*Anda Tidak Memiliki Sesi Akinator Sebelumnya*")
                delete akinator[m.sender.split('@')[0]]
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                newReply("*Sukses Berhenti Bermain*")
                break

            case 'afk':
                if (!m.isGroup) return newReply(mess.group)
                if (isAfkOn) return newReply("*Sudah AFK Sebelumnya*")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                newReply(`*@${m.sender.split('@')[0]} Sedang AFK*\nDengan Alasan: ${reason}`)
                break
            case 'openai':
            case 'carla': {
                if (!full_args) return newReply('Iya?')
                let d = await fetchJson(`https://xzn.wtf/api/openai?text=${full_args}&apikey=${xzn}`)                
                await arxzy.sendMessage(from, {
                    text: d.result
                }, { quoted: m})
            }
            break          
            case 'ytplay':
            case 'play':{
               if (!isPremium) return newReply(mess.prem)
               if (!q) return newReply('Search?')
               let h = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lol}&query=${q}`)
               let { audio, title, thumbnail, description, duration, view, uploader} = h.result
               let mono = '```'
               let tks = `*PLAY YOUTUBE*\n\n${mono}Judul: ${title}\nDurasi: ${duration}\nPenonton: ${view}\nSaluran: ${uploader}\nDeskripsi: ${description}${mono}`
               await arxzy.sendMessage(m.chat, {
                        document: {
                           url: audio.link
                        },
                        mimetype: 'audio/mp3',
                        fileName: title + ".mp3",
                        caption: tks,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: title,
                                body: '',
                                thumbnailUrl: thumbnail,
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                       
                    }, {
                        quoted: m
                    })
            }
            break
            case 'tiktok':
            case 'ttdl':
                if (!q) return newReply('Format: *.tiktok Tautan*')
                let e = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lol}&url=${q}`)
                let ee = `*DOWNLOADER TIKTOK*\n\nPencipta: *${e.result.author.username} Atau ${e.result.author.nickname}*\nJudul: *${e.result.title}*\nDurasi: *${e.result.duration}*\nPenonton: *${e.result.statistic.play_count}*\nSuka: *${e.result.statistic.like_count}\n`
                await arxzy.sendMessage(m.chat, {
                    video: {
                        url: e.result.link
                    },
                    caption: ee
                }, {
                    quoted: m
                })
                break

            case 'tiktokaudio':
            case 'ttaudio': {
                if (!q) return newReply('Format: *.tiktokaudio Tautan*')
                let i = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lol}&url=${q}`)
                arxzy.sendMessage(m.chat, {
                    audio: {
                        url: i.result
                    },
                    mimetype: 'audio/mp4'
                }, {
                    quoted: m
                })
            }
            break
            case 'cocofun':
                if (!q) return newReply('Format: *.cocofun Tautan*')
                let j = await fetchJson(`https://api.lolhuman.xyz/api/cocofun?apikey=${lol}&url=${q}`)
                arxzy.sendMessage(m.chat, {
                    video: {
                        url: j.result.nowm
                    },
                    caption: j.result.tag
                }, {
                    quoted: m
                })
                break
            case 'mediafire':
                if (!q) return newReply('Format: *.mediafire Tautan*')
                let ha = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lol}&url=${q}`)
                arxzy.sendMessage(m.chat, {
                    document: {
                        url: ha.result.link
                    },
                    minetype: '*/*'
                }, {
                    quoted: m
                })
                break
            case 'pin':
            case 'pindl':
                if (!q) return newReply('Format: *.pindl Tautan*')
                let l = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${q}`)
                await arxzy.sendMessage(m.chat, {
                    video: {
                        url: l.result
                    }
                }, {
                    quoted: m
                })
                break
            case 'snackvideo':
            case 'sv':
                if (!q) return newReply('Format: *.snackvideo Tautan*')
                let ma = await fetchJson(`https://api.lolhuman.xyz/api/snackvideo?apikey=${lol}&url=${q}`)
                arxzy.sendMessage(m.chat, {
                    video: {
                        url: ma.result.url
                    },
                    caption: ma.result.caption
                }, {
                    quoted: m
                })
                break
            case 'ytmp4': {
                if (!q) return newReply('Format: *.ytmp4 Tautan*')
                let n = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${q}`)
                let mono = '```'
                let ytmp4p = `${mono}DOWNLOADER YOUTUBE\n\nJudul: ${n.result.title}\nSaluran: ${n.result.uploader}\nTautan Saluran: ${n.result.channel}\nDurasi: ${n.result.duration}\nPenonton : ${n.result.view}${mono}`
                await arxzy.sendMessage(m.chat, {
                    document: {
                        url: n.result.link.link
                    },
                    mimetype: 'video/mp4',
                    fileName: "Downloader YTMP4 By Charlotte.mp4",
                    caption: ytmp4p,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: n.result.title,
                            body: '',
                            thumbnailUrl: n.result.thumbnail,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                }
                break
            case 'ytmp3': {
                if (!q) return newReply('Format: *.ytmp3 Tautan*')
                let n = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lol}&url=${q}`)
                let mono = '```'
                let ytmp4p = `${mono}DOWNLOADER YOUTUBE\n\nJudul: ${n.result.title}\nSaluran: ${n.result.uploader}\nTautan Saluran: ${n.result.channel}\nDurasi: ${n.result.duration}\nPenonton: ${n.result.view}${mono}`
                await arxzy.sendMessage(m.chat, {
                    document: {
                        url: n.result.link.link
                    },
                    mimetype: 'audio/mp3',
                    fileName: "Downloader YTMP3 By Charlotte.mp3",
                    caption: ytmp4p,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: n.result.title,
                            body: '',
                            thumbnailUrl: n.result.thumbnail,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                }
                break
            case 'igdl': 
            case 'ig':
            case 'instagram': {
                if (!q) return newReply("Format: *.instagram Tautan*")
                let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lol}&url=${q}`)
                for (var i = 0; i < ag.result.length; i++) {
                    let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
                    await arxzy.sendMessage(m.chat, {
                        [pap]: {
                            url: ag.result[i]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'pindl': {
                if (!q) return newReply("Format: *.pindl Tautan*")
                let apacuba = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${q}`)
                for (var i = 0; i < apacuba.result.length; i++) {
                    let pap = apacuba.result[i].includes('.jpg') ? 'image' : 'video'
                    await arxzy.sendMessage(m.chat, {
                        [pap]: {
                            url: apacuba.result[i]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'igdlh':
            case 'highlights': {
                if (!q) return newReply('Format: *.igdlh Tautan*')
                let ap = await fetchJson(`https://api.lolhuman.xyz/api/ig-highlights?apikey=${lol}&url=${q}`)
                for (var oa = 0; oa < ap.result.length; oa++) {
                    let pap = ap.result[oa].includes('.jpg') ? 'image' : 'video'
                    await arxzy.sendMessage(m.chat, {
                        [pap]: {
                            url: ap.result[oa]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'ttp':
                if (!q) return newReply('Format: *.ttp Teks*')
                newReply(mess.wait)
                arxzy.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/ttp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break
            case 'attp':
                if (!q) return newReply('Format: *.attp Teks*')
                newReply(mess.wait)
                arxzy.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break

            case 'remini':
            case 'hd': {
                // if (!isPremium) return newReply(mess.prem)
                if (!isMedia) return newReply("Balas Atau Kirim Gambar Dengan Perintah *.remini*")
                let media = await arxzy.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                arxzy.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/upscale?apikey=${lol}&img=${anu}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break
            case 'reminiv2': {
                if (!isPremium) return newReply(mess.prem)
                if (!isMedia) return newReply("Balas Atau Kirim Gambar Dengan Perintah *.reminiv2*")
                let media = await arxzy.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                await arxzy.sendMessage(m.chat, {
                    image: {
                        url: `https://xzn.wtf/api/torch-srgan?url=${anu}&apikey=${xzn}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break
            case 'recolor': {
                if (!isPremium) return newReply(mess.prem)
                if (!isMedia) return newReply("Balas Atau Kirim Gambar Dengan Perintah *.recolor*")
                let media = await arxzy.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                await arxzy.sendMessage(m.chat, {
                    image: {
                        url: `https://xzn.wtf/api/colorizer?url=${anu}&&apikey=${xzn}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break
            case 'removebg':
            case 'nobg': {
                if (!isMedia) return newReply("Balas Atau Kirim Gambar Dengan Perintah *.removebg*")
                let media = await arxzy.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                arxzy.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${anu}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break

            case 'tele':
            case 'telestick': {
                if (!isPremium) return newReply(mess.prem)
                if (!q) return newReply("Format: *.telestick Tautan*")
                let agg = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lol}&url=${q}`)
                for (var ki = 0; ki < agg.result.sticker.length; ki++) {
                    await arxzy.sendImageAsSticker(m.chat, agg.result.sticker[ki], m, {
                        packname: packname,
                        author: author
                    })
                }
            }
            break

            case 'bass':
            case 'blown':
            case 'deep':
            case 'earrape':
            case 'fast':
            case 'fat':
            case 'nightcore':
            case 'reverse':
            case 'robot':
            case 'slow':
            case 'smooth':
            case 'tupai': {
                try {
                    let set
                    if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        newReply(mess.wait)
                        let media = await arxzy.downloadAndSaveMediaMessage(qmsg)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return newReply(err)
                            let buff = fs.readFileSync(ran)
                            arxzy.sendMessage(m.chat, {
                                audio: buff,
                                mimetype: 'audio/mpeg'
                            }, {
                                quoted: m
                            })
                            fs.unlinkSync(ran)
                        })
                    } else newReply(`Balas Audio Dengan Perintah *${prefix + command}*`)
                } catch (e) {
                    newReply(e)
                }
            }
            break
         case 'coffee': case 'kopi': {
                arxzy.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'couple': {
            if (!m.isGroup) return newReply(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
arxzy.sendMessage(m.chat,
{ text: `*@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}*
*Cieeee, Apa Yang Terjadi 💖👀*`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.namabot}`,
"body": `${global.namaowner}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./media/menu.jpg`),
"sourceUrl": `${global.link}`}}},
{ quoted: m})        
            }
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
arxzy.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
case 'rate': {
            	if (!text) return newReply(`Format: *${prefix + command} Sesuatu Ingin Dirate*`)
            	let ra = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nJawaban: *${kah}%*`                
            await newReply(jawab)
            }
            break
            case 'bisakah': {
            	if (!text) return newReply(`Format: *${prefix + command} Pertanyaan*`)
            	let bisa = [`Bisa`,`Tidak Bisa`,`Tidak Bisa`,`Tentu Saja Bisa`,`Pake Nanya 😂`,`Mustahil`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawaban: *${keh}*`
            await newReply(jawab)
            }
            break
            case 'saya': {
            	if (!text) return newReply(`Format: *${prefix + command} Pertanyaan*`)
            	let apa = [`Ya`, `Tidak`, `Bisa Jadi`, `Benar`,`Pake Nanya 😂`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Saya ${text}*\nJawaban: *${kah}*`                
            await newReply(jawab)
            }
            break
            case 'kapankah': {
            	if (!text) return newReply(`Format: *${prefix + command} Pertanyaan*`)
            	let kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi','45 Lagi hari','50 hari lagi','55 hari lagi','60 hari lagi','65 hari lagi','70 hari lagi','75 hari lagi','80 hari lagi','85 hari lagi' ,'90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi',' 35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi' ,'5 tahun lagi','Kemarin','Besok','Mustahil','Tidak Akan Terjadi Dan Itu Mutlak','Pake Nanya 😂']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*Kapankah ${text}*\nJawaban: *${koh}*`                
            await newReply(jawab)
            }
            break
case 'apakah': {
            	if (!text) return newReply(`Format: *${prefix + command} Pertanyaan*`)
            	let lel = [`Tanya GF Anda`, `Saya Tidak Tahu`, `Saya Tidak Tahu, Tanyakan Pada Ayah Anda`,`Pake Nanya 😂`,`Mustahil`,`Tanyakan Pada Anak Anda`,`Tanyakan Pada Diri Anda`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*Apakah ${text}*\nJawaban: *${kah}*`                
            await newReply(jawab)
            }
            break
case 'dimanakah': {
if (!text) return newReply(`Format: *${prefix + command} Pertanyaan*`)
            	let wherelol = [`Di gunung`, `Di mars`, `Di bulan`,`Di hutan`,`Saya tidak tahu tanya ibumu`,`Bisa jadi di suatu tempat`,`Pake Nanya 😂`,`Ap coba`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Dimanakah ${text}*\nJawaban: *${kah}*`              
            await newReply(jawab)
            }
            break
case 'bagaimanakah': {
            	if (!text) return newReply(`Format: *${prefix + command} Pertanyaan*`)
            	let gimana = [`Ummm...`, `Sulit`, `Maaf Bot Tidak Bisa Menjawab`, `Coba Cari Di Google`,`Sapi Suci! Beneran???`,`Pusing Ah😴, Gak Mau Jawab`,`Ohhh I See:(`,`The Patient, Boss:(`,`Bang Bang 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*Bagaimanakah ${text}*\nJawaban: *${kah}*`                
            await newReply(jawab)
            }
            break
                case 'define': 
if (!q) return newReply(`Format: *.define Kata*`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return newReply(mess.error)
const reply = `
*${themeemoji} Kata:* ${q}
*${themeemoji} Definisi:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Contoh:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   arxzy.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return newReply(`*${q}* Bukan Teks Yang Sah`)
    }
    break      
case 'git': case 'gitclone':
if (!args[0]) return newReply(`Format: *${prefix}${command} Tautan*`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return newReply(`*Tautan Tidak Sah*`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    arxzy.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => newReply(mess.error))
break     
case 'alay': {
newReply(mess.wait)
  if (!q) return newReply('Masukkan teks yang ingin diubah menjadi alay.');

  const axios = require('axios');
  const apiKey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/alay?apikey=${lol}&text=${encodeURIComponent(q)}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      newReply(result);
    })
    .catch((error) => {
      console.log(error);
      newReply('Terjadi kesalahan saat mengubah teks menjadi alay.');
    });
}
break;
case 'cuaca': {
  if (!q) return newReply(`Format: *.cuaca Nama Kota*`)
 newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const city = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/cuaca/${city}?apikey=${lol}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const tempat = result.tempat
      const latitude = result.latitude
      const longitude = result.longitude
      const cuaca = result.cuaca
      const angin = result.angin
      const description = result.description
      const kelembapan = result.kelembapan
      const suhu = result.suhu
      const udara = result.udara
      const permukaanLaut = result.permukaan_laut

      const message = `Tempat: *${tempat}*\n` +
        `Latitude: *${latitude}*\n` +
        `Longitude: *${longitude}*\n` +
        `Cuaca: *${cuaca}*\n` +
        `Angin: *${angin}*\n` +
        `Deskripsi: *${description}*\n` +
        `Kelembapan: *${kelembapan}*\n` +
        `Suhu: *${suhu}*\n` +
        `Tekanan Udara: *${udara}*\n` +
        `Tekanan Permukaan Laut: *${permukaanLaut}*`

      // Mengirimkan informasi cuaca sebagai pesan
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mengambil informasi cuaca.*`)
    })
  break
  
}
case 'gifhentai':
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await arxzy.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'doujinsearch': {
  if (!q) return newReply(`Format: *.doujindesu Kata Kunci*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/doujindesusearch?apikey=${lol}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      if (result.length === 0) {
        newReply(`*Tidak ditemukan hasil untuk pencarian tersebut*`)
      } else {
        const firstResult = result[0]
        const title = firstResult.title
        const link = firstResult.link
        const thumbnail = firstResult.thumbnail
        const type = firstResult.type

        const message = `Judul: *${title}*\n` +
          `Tautan: *${link}*\n` +
          `Gambar Kecil: *${thumbnail}*\n` +
          `Tipe: *${type}*`

        // Mengirimkan informasi doujindesu sebagai pesan
        newReply(message)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mencari doujindesu.*`)
    })
  
  break
}
    case 'doujinlatest' : {
  newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  const apiUrl = `https://api.lolhuman.xyz/api/doujindesulatest?apikey=${lol}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      let message = ''
      for (const doujin of result) {
        const title = doujin.title
        const link = doujin.link
        const thumbnail = doujin.thumbnail
        const episode = doujin.episode
        const type = doujin.type

        message += `Judul: *${title}*\n` +
                   `Tautan: *${link}*\n` +
                   `Gambar Kecil: *${thumbnail}*\n` +
                   `Episode: *${episode}*\n` +
                   `Tipe: *${type}*\n\n`
      }

      // Mengirimkan hasil doujindesu terbaru sebagai pesan
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mengambil doujindesu terbaru*`)
    })
  
  break
}
case 'drakorongoing' : {
  newReply(mess.wait)
  const axios = require('axios')
  const apiUrl = 'https://api.lolhuman.xyz/api/drakorongoing?apikey=charlotte'

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      let message = ''
      result.forEach(drama => {
        const title = drama.title
        const link = drama.link
        const thumbnail = drama.thumbnail
        const year = drama.year
        const totalEpisodes = drama.total_episode
        const genres = drama.genre.join(', ')

        message += `Judul: *${title}*\n` +
                   `Tautan: *${link}*\n` +
                   `Gambar Kecil: *${thumbnail}*\n` +
                   `Tahun: *${year}*\n` +
                   `Total Episode: *${totalEpisodes}*\n` +
                   `Genre: *${genres}*\n\n`
      })

      // Mengirimkan informasi drakor ongoing sebagai pesan
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mengambil informasi drakor ongoing.*`)
    })
  
  break
}
case 'coronaindonesia': {
  newReply(mess.wait)

  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  const apiUrl = `https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lol}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const positif = result.positif
      const meninggal = result.meninggal
      const sembuh = result.sembuh
      const dirawat = result.dirawat

      const message = `*Data COVID-19 di Indonesia*\n` +
        `Positif: *${positif}*\n` +
        `Meninggal: *${meninggal}*\n` +
        `Sembuh: *${sembuh}*\n` +
        `Dirawat: *${dirawat}*`

      // Mengirimkan informasi COVID-19 di Indonesia sebagai pesan
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mengambil informasi COVID-19 di Indonesia*`)
    })
  
  break
}
case 'coronaglobal': {
  newReply(mess.wait)
  
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const apiUrl = `https://api.lolhuman.xyz/api/corona/global?apikey=${lol}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const positif = result.positif
      const meninggal = result.meninggal
      const sembuh = result.sembuh
      const dirawat = result.dirawat

      const message = `*Data COVID-19 Global*\n` +
        `Positif: *${positif}*\n` +
        `Meninggal: *${meninggal}*\n` +
        `Sembuh: *${sembuh}*\n` +
        `Dirawat: *${dirawat}*`

      // Mengirimkan informasi COVID-19 global sebagai pesan
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mengambil informasi COVID-19 global*`)
    })
  
  break
}
case 'checkresi': {
  if (!q) return newReply(`Format: *.checkresi No Resi*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const resi = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/checkresi?apikey=${lol}&resi=${resi}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const courier = result.courier
      const originName = result.origin.name
      const originAddress = result.origin.address
      const destinationName = result.destination.name
      const destinationAddress = result.destination.address
      const history = result.history

      let message = `Informasi Resi\n` +
        `Nomor Resi: ${resi}\n` +
        `Kurir: ${courier}\n\n` +
        `Asal:\n` +
        `Nama: ${originName}\n` +
        `Alamat: ${originAddress}\n\n` +
        `Tujuan:\n` +
        `Nama: ${destinationName}\n` +
        `Alamat: ${destinationAddress}\n\n` +
        `Riwayat:\n`

      history.forEach(item => {
        const note = item.note
        const time = item.time

        message += `Catatan: ${note}\n` +
          `Waktu: ${time}\n\n`
      })

      // Mengirimkan informasi resi sebagai pesan
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mengambil informasi resi*`)
    })
  
  break
}
case 'character': {
  if (!q) return newReply(`Format: *.character Nama*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const characterName = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/character?apikey=${lol}&query=${characterName}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const characterFullName = result.name.full
      const characterNativeName = result.name.native
      const characterImageLarge = result.image.large
      const characterImageMedium = result.image.medium
      const characterDescription = result.description
      const characterFavorites = result.favourites
      const characterMedia = result.media.nodes

      const message = `Nama: ${characterFullName}\n` +
        `Nama Asli: ${characterNativeName}\n` +
        `Deskripsi: ${characterDescription}\n` +
        `Favorit: ${characterFavorites}\n\n` +
        `Media:\n`

      let mediaList = ''
      characterMedia.forEach(media => {
        const mediaType = media.type
        const mediaTitleRomaji = media.title.romaji
        const mediaTitleNative = media.title.native

        mediaList += `- ${mediaType}: ${mediaTitleRomaji} (${mediaTitleNative})\n`
      })

      const characterInfo = {
        title: characterFullName,
        message: message + mediaList,
        thumbnail: characterImageLarge,
        url: characterImageMedium
      }

      // Mengirimkan info karakter sebagai pesan atau media
      arxzy.sendTextWithMentions(from, characterInfo.message)
      arxzy.sendImage(from, characterInfo.thumbnail, characterInfo.title, characterInfo.message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mengambil informasi karakter*`)
    })
  
  break
}
case 'brainly': {
  if (!q) return newReply(`Format: *.brainly Pertanyaan*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/brainly?apikey=${lol}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`Tidak ditemukan jawaban untuk pertanyaan tersebut`)
      } else {
        let answerText = ''
        for (const item of result) {
          const questionContent = item.question.content
          const answerContent = item.answer.content

          answerText += `Pertanyaan: ${questionContent}\n` +
                        `Jawaban: ${answerContent}\n\n`
        }

        newReply(answerText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mencari jawaban*`)
    })
  
  break
}
case 'artimimpi': {
  if (!q) return newReply(`Format: *.artimimpi Mimpimu*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/primbon/artimimpi?apikey=${lol}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const meanings = result.join('\n')

      const message = `Arti Mimpi "${q}":\n${meanings}`

      // Mengirimkan arti mimpi sebagai pesan
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mencari arti mimpi*`)
    })
  
  break
}
case 'anime': {
  if (!q) return newReply(`Format: *.anime Judul Anime*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte'
  const apiUrl = `https://api.lolhuman.xyz/api/anime?apikey=${lol}&query=${encodeURIComponent(q)}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      const {
        id,
        title,
        coverImage,
        format,
        episodes,
        duration,
        status,
        season,
        seasonYear,
        source,
        genres,
        startDate,
        endDate,
        description,
        averageScore,
        synonyms,
        characters
      } = result
      
      const characterNames = characters.nodes.map(node => node.name.full).join(', ')
      
      const animeInfo = `
Judul: *${title.romaji} (${title.native})*
Format: *${format}*
Episode: *${episodes}*
Durasi: *${duration} Minute*
Status: *${status}*
Musim: *${season} ${seasonYear}*
Sumber: *${source}*
Genre: *${genres.join(', ')}*
Mulai Tanggal: *${startDate.year}-${startDate.month}-${startDate.day}*
Tanggal Berakhir: *${endDate.year}-${endDate.month}-${endDate.day}*
Deskripsi: *${description}*
Skor Rata-Rata: *${averageScore}*
Synonyms: *${synonyms.join(', ')}*
Characters: *${characterNames}*
      `
      
      const coverImageUrl = coverImage.large
      const replyMessage = `${animeInfo}\n\nGambar Sampul: *${coverImageUrl}*`
      newReply(replyMessage)
    })
    .catch((error) => {
      console.log(error)
      newReply('*Terjadi kesalahan saat mencari informasi anime.*')
    })
}
break 
case 'gsmarena':
  if (!q) return newReply(`Format: *.gsmarena Nama Handphone*`);
newReply(mess.wait)
  const apikey = 'charlotte'; // Ganti dengan API key Anda
  const apiUrl = `https://api.lolhuman.xyz/api/gsmarenadetail?apikey=${lol}&url=https://www.gsmarena.com/${encodeURIComponent(q)}.php`;

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result;

      const phoneName = result.phone_name;
      const phoneImage = result.phone_image;
      const specification = result.specification;

      const message = `Informasi Handphone\n` +
        `Nama: ${phoneName}\n` +
        `Gambar: ${phoneImage}\n` +
        `Spesifikasi:\n` +
        `- Jaringan: ${specification.network}\n` +
        `- Peluncuran: ${specification.launch}\n` +
        `- Body: ${specification.body}\n` +
        `- Layar: ${specification.display}\n` +
        `- Platform: ${specification.platform}\n` +
        `- Memori: ${specification.memory}\n` +
        `- Kamera Utama: ${specification.main_camera}\n` +
        `- Kamera Selfie: ${specification.selfie_camera}\n` +
        `- Suara: ${specification.sound}\n` +
        `- Komunikasi: ${specification.comms}\n` +
        `- Fitur: ${specification.features}\n` +
        `- Baterai: ${specification.battery}\n` +
        `- Lainnya: ${specification.misc}\n` +
        `- Pengujian: ${specification.tests}`;

      // Mengirimkan informasi handphone sebagai pesan
      newReply(message);
    })
    .catch(error => {
      console.error('Error:', error);
      newReply(`Terjadi kesalahan dalam mengambil informasi handphone`);
    });

  break;
  case 'growtopia' : {
  newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  const apiUrl = `https://api.lolhuman.xyz/api/growtopia?apikey=${lol}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const playerOnline = result.player_online
      const wotdName = result.wotd.name
      const wotdPreview = result.wotd.preview

      const message = `*Informasi Growtopia*\n` +
        `Jumlah Pemain Online: *${playerOnline}*\n` +
        `WOTD (World of The Day): *${wotdName}*\n` +
        `Pratinjau WOTD: *${wotdPreview}*`

      // Mengirimkan informasi Growtopia sebagai pesan
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mengambil informasi Growtopia*`)
    })
  
  break
}
case 'growiki': {
  if (!q) return newReply(`Format: *.growiki Nama Item*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const itemQuery = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/growiki?apikey=${lol}&query=${itemQuery}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const itemName = result.name
      const itemDescription = result.desc
      const itemProperties = result.prop
      const itemImage = result.img
      const itemRecipe = result.recipe
      const itemInfo = result.info

      let message = `Nama Item: *${itemName}*\n` +
        `Deskripsi: *${itemDescription}*\n` +
        `Properti: *${itemProperties}*\n\n` +
        `Resep: \n`

      if (itemRecipe.length === 0) {
        message += `*Tidak ada informasi resep untuk item ini.*\n`
      } else {
        itemRecipe.forEach(recipe => {
          message += `*${recipe}*\n`
        })
      }

      message += `\nInformasi Tambahan: *${itemInfo}*`

      // Mengirimkan informasi item Growtopia sebagai pesan
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Item Tidak Ditemukan*`)
    })
  
  break
}
case 'genshin': {
  if (!q) return newReply(`Format: *.genshin Nama Karakter*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const character = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/genshin/${character}?apikey=${lol}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const title = result.title
      const icon = result.icon
      const cover1 = result.cover1
      const cover2 = result.cover2
      const name = result.name
      const attr = result.attr
      const intro = result.intro
      const sen = result.sen
      const cv = result.cv

      const message = `*Karakter:* ${title}\n` +
        `*Gambar:* ${icon}\n` +
        `*Sampul 1:* ${cover1}\n` +
        `*Sampul 2:* ${cover2}\n` +
        `*Nama:* ${name}\n` +
        `*Atribut:* ${attr}\n` +
        `*Pendahuluan:* ${intro}\n` +
        `*Sen:* ${sen}\n\n` +
        `CV:\n`

      let cvList = ''
      cv.forEach(cvItem => {
        const cvName = cvItem.name
        const cvAudio = cvItem.audio.join('\n')

        cvList += `- Nama: ${cvName}\n` +
                  `  Audio:\n${cvAudio}\n\n`
      })

      const characterInfo = {
        title: title,
        message: message + cvList,
        thumbnail: icon,
        url: cover1
      }

      // Mengirimkan informasi karakter Genshin Impact sebagai pesan atau media
      arxzy.sendTextWithMentions(from, characterInfo.message)
      arxzy.sendImage(from, characterInfo.thumbnail, characterInfo.title, characterInfo.message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`Karakter Tersebut Tidak Tersedia. Karakter Yang Tersedia *jean, amber, lisa, kaeya, barbara, diluc, razor, venti, klee, bennett, noelle, fischl, sucrose, mona, diona, albedo, rosaria, eula, aloy, xiao, beidou, ningguang, xiangling, xingqiu, chongyun, qiqi, keqing, tartaglia, zhongli, xinyan, ganyu, hu tao, yanfei, shenhe, yun jin, yelan, kamisato ayaka, kaedehara kazuha, yoimiya, sayu, raiden shogun, kujou sara, sangonomiya kokomi, thoma, arataki itto, gorou, yae miko, kamisato ayato, kuki shinobu, shikanoin heizou, tighnari, collei, dori, cyno, candace, nilou, nahida, layla, wanderer, faruzan*`)
    })
  
  break
}
case 'kumparan' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apikey = 'charlotte'; // Replace with your API key
  
  const apiUrl = `https://api.lolhuman.xyz/api/kumparan?apikey=${lol}`;
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result;
      
      let newsList = '';
      result.forEach(news => {
        const title = news.title;
        const link = news.link;
        const desc = news.desc;
        const category = news.category;
        const publish = news.publish;
        
        const newsInfo = `
Judul: *${title}*
Tautan: *${link}*
Deskripsi: *${desc}*
Kategori: *${category}*
Tanggal Terbit: *${publish}*
        `;
        
        newsList += `${newsInfo}\n\n`;
      });
      
      const replyMessage = `*Berita terbaru dari Kumparan:*\n\n${newsList}`;
      newReply(replyMessage);
    })
    .catch(error => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan saat mengambil berita dari Kumparan.*');
    });
  
  break;
}
case 'lirik': {
  if (!q) return newReply(`Format: *.lirik Nama Lagu*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/lirik?apikey=${lol}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const lyrics = result
      
      const message = `Lirik Lagu "${q}":\n${lyrics}`
      
      // Send the lyrics as a reply
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('*Terjadi kesalahan saat mencari lirik lagu.*')
    })
}
break
case 'mangasearch': {
  if (!q) return newReply(`Format: *.manga Judul Manga*`)
newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/manga?apikey=${lol}&query=${query}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const mangaId = result.id
      const mangaIdMal = result.idMal
      const mangaTitleRomaji = result.title.romaji
      const mangaTitleEnglish = result.title.english
      const mangaTitleNative = result.title.native
      const mangaCoverImageLarge = result.coverImage.large
      const mangaCoverImageMedium = result.coverImage.medium
      const mangaFormat = result.format
      const mangaChapters = result.chapters
      const mangaVolumes = result.volumes
      const mangaStatus = result.status
      const mangaSource = result.source
      const mangaGenres = result.genres
      const mangaStartDate = result.startDate
      const mangaEndDate = result.endDate
      const mangaDescription = result.description
      const mangaAverageScore = result.averageScore
      const mangaSynonyms = result.synonyms
      const mangaCharacters = result.characters.nodes

      const characterNames = mangaCharacters.map(node => node.name.full).join(', ')
      
      const mangaInfo = `
Judul: *${mangaTitleRomaji} (${mangaTitleNative})*
Judul Inggris: *${mangaTitleEnglish}*
Format: *${mangaFormat}*
Bab: *${mangaChapters}*
Volume: *${mangaVolumes}*
Status: *${mangaStatus}*
Sumber: *${mangaSource}*
Genre: *${mangaGenres.join(', ')}*
Mulai Tanggal: *${mangaStartDate.year}-${mangaStartDate.month}-${mangaStartDate.day}*
Tanggal Berakhir: *${mangaEndDate.year}-${mangaEndDate.month}-${mangaEndDate.day}*
Deskripsi: *${mangaDescription}*
Skor Rata-Rata: *${mangaAverageScore}*
Sinonim: *${mangaSynonyms.join(', ')}*
Karakter: *${characterNames}*
      `
      
      const coverImageUrl = mangaCoverImageLarge
      const replyMessage = `${mangaInfo}\n\nGambar Sampul: *${coverImageUrl}*`
      newReply(replyMessage)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('*Terjadi kesalahan saat mencari informasi manga.*')
    })
  
  break
}
case 'nekopoi': {
  if (!q) return newReply('Format: *.nekopoi Tautan Nekopoi*')
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const url = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/nekopoi?apikey=${lol}&url=${url}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const thumbnail = result.thumbnail
      const sinopsis = result.sinopsis
      const genre = result.genre.join(', ')
      const title = result.title
      const producers = result.producers
      const duration = result.duration
      const links = result.link

      let linkText = ''

      Object.keys(links).forEach(quality => {
        linkText += `${quality}:\n`
        
        Object.keys(links[quality]).forEach(source => {
          linkText += `${source}: *${links[quality][source]}*\n`
        })

        linkText += '\n'
      })

      const message = `Judul: *${title}*\n` +
        `Produksi: *${producers}*\n` +
        `Durasi: *${duration}*\n` +
        `Genre: *${genre}*\n` +
        `Sinopsis: *${sinopsis}*\n\n` +
        `Tautan Unduhan:\n${linkText}`

      // Sending the nekopoi information as a reply
      newReply(message)
      arxzy.sendImage(from, thumbnail, title, message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('Terjadi kesalahan saat mencari informasi nekopoi.')
    })

  break
}
case 'nhentaisearch': {
  if (!q) return newReply(`Format: *.nhentaisearch Judul Doujin*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte'
  const apiUrl = `https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lol}&query=${encodeURIComponent(q)}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`*Tidak ditemukan doujin dengan judul tersebut.*`)
      } else {
        let doujinList = ''
        for (const doujin of result) {
          const doujinId = doujin.id
          const doujinTitleEnglish = doujin.title_english
          const doujinTitleJapanese = doujin.title_japanese
          const doujinTitleNative = doujin.title_native
          const doujinPage = doujin.page

          doujinList += `ID: *${doujinId}*\n` +
                        `Judul (Bahasa Inggris): *${doujinTitleEnglish}*\n` +
                        `Judul (Bahasa Jepang): *${doujinTitleJapanese}*\n` +
                        `Judul (Asli): *${doujinTitleNative}*\n` +
                        `Halaman: *${doujinPage}*\n\n`
        }

        newReply(doujinList)
      }
    })
    .catch((error) => {
      console.log(error)
      newReply('*Terjadi kesalahan saat mencari doujin.*')
    })
}
break
case 'nhentai': {
  if (!q) return newReply(`Format: *.nhentai KodeDoujin*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte'
  const apiUrl = `https://api.lolhuman.xyz/api/nhentai/${q}?apikey=${apiKey}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      const {
        title_romaji,
        title_native,
        read,
        tags,
        image
      } = result
      
      const tagsList = tags.join(', ')
      
      const nhentaiInfo = `
Judul (Romaji): *${title_romaji}*
Judul (Native): *${title_native}*
Tag: *${tagsList}*
      `
      
      const imageUrls = image.map(url => `- *${url}*`).join('\n')
      
      const replyMessage = `${nhentaiInfo}\n\nGambar:\n${imageUrls}\n\nBaca Online: *${read}*`
      newReply(replyMessage)
    })
    .catch((error) => {
      console.log(error)
      newReply('*Terjadi kesalahan saat mencari informasi doujin di nhentai.*')
    })
}
break
case 'nekopoisearch': {
  if (!q) return newReply(`Format: *.nekopoi Judul*`)
newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/nekopoisearch?apikey=${apiKey}&query=${query}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`No videos found for the query "${q}"`)
      } else {
        let videoText = ''
        for (const item of result) {
          const title = item.title
          const link = item.link
          const thumbnail = item.thumbnail

          videoText += `Title: *${title}*\n` +
                       `Link: *${link}*\n` +
                       `Thumbnail: *${thumbnail}*\n\n`
        }

        newReply(videoText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan saat menelusuri video.*`)
    })

  break
}
case 'katabucin' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apiUrl = 'https://api.lolhuman.xyz/api/random/bucin?apikey=charlotte';

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      newReply(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      newReply('Terjadi kesalahan saat mencari kata bucin.');
    });
  
  break;
}
case 'kodepos': {
  if (!q) return newReply(`Format: *.kodepos Nama Tempat*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/kodepos?apikey=${apiKey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      if (result.length === 0) {
        newReply(`*Tidak ditemukan kode pos untuk tempat tersebut*`)
      } else {
        let postalCodeText = ''
        for (const item of result) {
          const province = item.province
          const city = item.city
          const subdistrict = item.subdistrict
          const urban = item.urban
          const postalCode = item.postalcode

          postalCodeText += `Provinsi: *${province}*\n` +
                            `Kota: *${city}*\n` +
                            `Kecamatan: *${subdistrict}*\n` +
                            `Kelurahan: *${urban}*\n` +
                            `Kode Pos: *${postalCode}*\n\n`
        }

        newReply(postalCodeText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mencari kode pos*`)
    })

  break
}
case 'kisahnabi': {
  if (!q) return newReply(`Format: *.kisahnabi Nama*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  
  const namaNabi = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/kisahnabi/${namaNabi}?apikey=${lol}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const name = result.name
      const birthYear = result.thn_kelahiran
      const age = result.age
      const place = result.place
      const story = result.story

      const message = `*Nama Nabi:* ${name}\n` +
        `*Tahun Kelahiran:* ${birthYear}\n` +
        `*Usia:* ${age}\n` +
        `*Tempat Lahir:* ${place}\n\n` +
        `*Kisah:*\n${story}`

      // Sending the Prophet/Messenger's story as a reply
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Tidak Ditemukan*`)
    })
  
  break
}
case 'kbbi': {
  if (!q) return newReply(`Format: *.kbbi Kata*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte'
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/kbbi?apikey=${lol}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result[0]
      
      const nama = result.nama
      const kelas = result.makna.map(m => m.kelas[0].nama).join(', ')
      const submakna = result.makna.map(m => m.submakna.join(', ')).join('\n\n')
      const contoh = result.makna.map(m => m.contoh.join('\n')).join('\n\n')
      
      const wordInfo = `
*Kata:* ${nama}
*Kelas:* ${kelas}
*Submakna:*\n${submakna}
*Contoh:*\n${contoh}
      `
      
      newReply(wordInfo)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('Terjadi kesalahan saat mencari informasi kata di KBBI.')
    })
  
  break
}
case 'quotesanime': {
  newReply(mess.wait)
  const axios = require('axios');
  const apikey = 'charlotte'; // Replace with your API key

  const apiUrl = `https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lol}`;

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result;

      const quote = result.quote;
      const character = result.character;
      const anime = result.anime;
      const episode = result.episode;

      const message = `Mengutip: *${quote}*\n` +
        `Karakter: *${character}*\n` +
        `Anime: *${anime}*\n` +
        `Episode: *${episode}*`;

      newReply(message);
    })
    .catch(error => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan dalam mengambil quotes anime*');
    });

  break;
}
case 'quotes': {
 newReply(mess.wait)
  const axios = require('axios');
  const apiKey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/random/quotes?apikey=${lol}`;
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      const author = result.by;
      const quote = result.quote;
      
      const replyMessage = `*"${quote}"* - *${author}*`;
      newReply(replyMessage);
    })
    .catch((error) => {
      console.log(error);
      newReply('*Terjadi kesalahan saat mengambil quotes.*');
    });
  
  break;
}
case 'niatsholat': {
  if (!q) return newReply(`Format: *.niatsholat JenisSholat*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte'
  const prayerType = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/niatsholat/${prayerType}?apikey=${lol}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      const niatName = result.name
      const niatArabic = result.ar
      const niatLatin = result.latin
      const niatIndonesian = result.id
      
      const niatMessage = `
Jenis Sholat: *${niatName}*
Arab: *${niatArabic}*
Latin: *${niatLatin}*
Indonesia: *${niatIndonesian}*
      `
      
      newReply(niatMessage)
    })
    .catch((error) => {
      console.log(error)
      newReply('Niat sholat tersebut ditemukan, niat sholat yang tersedia *subuh, dzuhur, ashar, maghrib, isya*')
    })
}
case 'roboguru': {
  if (!q) return newReply(`Format: *.roboguru Pertanyaan*`)
newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key

  const query = encodeURIComponent(q)
  const grade = 'sma' // Replace with the desired grade
  const subject = 'sejarah' // Replace with the desired subject

  const apiUrl = `https://api.lolhuman.xyz/api/roboguru?apikey=${lol}&query=${query}&grade=${grade}&subject=${subject}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`*Tidak ditemukan jawaban untuk pertanyaan tersebut*`)
      } else {
        let answerText = ''
        for (const item of result) {
          const question = item.question
          const answer = item.answer

          answerText += `Pertanyaan: *${question}*\n` +
            `Jawaban: *${answer}*\n\n`
        }

        newReply(answerText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mencari jawaban.*`)
    })

  break
}
case 'randombahasa': {
  if (!q) return newReply(`Format: *.randombahasa Teks*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/randombahasa?apikey=${lol}&text=${query}`

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      const replyMessage = `Hasil: *${result}*`

      newReply(replyMessage)
    })
    .catch((error) => {
      console.error('Error:', error)
      newReply('*Terjadi kesalahan dalam memuat teks random bahasa.*')
    })
  
  break
}
case 'searchbijak': {
  if (!q) return newReply(`Format: *.searchbijak Kata Kunci*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/searchbijak?apikey=${lol}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`*Tidak ditemukan kutipan bijak untuk kata kunci tersebut*`)
      } else {
        let quoteText = ''
        for (const item of result) {
          const quoteContent = item.quote
          const author = item.author

          quoteText += `Kutipan: *${quoteContent}*\n` +
                        `Penulis: *${author}*\n\n`
        }

        newReply(quoteText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mencari kutipan bijak.*`)
    })
  
  break
}
case 'sfile': {
  if (!q) return newReply(`Format: *.sfile Tautan Sfile*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda

  const apiUrl = `https://api.lolhuman.xyz/api/sfile?apikey=${lol}&url=${encodeURIComponent(q)}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const title = result.title
      const uploaded = result.uploaded
      const downloaded = result.downloaded
      const size = result.size
      const link = result.link

      const message = `Judul: *${title}*\n` +
                      `Diunggah: *${uploaded}*\n` +
                      `Diunduh: *${downloaded}*\n` +
                      `Ukuran: *${size}*\n` +
                      `Tautan: *${link}*`

      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan dalam mendapatkan detail dan alternatif download link.*`)
    })

  break
}
case 'hadist': {
  if (!q) return newReply(`Format: *.hadist Kata Kunci*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/hadits/search?apikey=${lol}&query=${query}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      let hadistText = ''
      for (const item of result) {
        const kitab = item.kitab
        const hadits = item.hadits.map(h => `- ${h}`).join('\n')

        hadistText += `Kitab: *${kitab}*\n*${hadits}*\n\n`
      }

      newReply(hadistText)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Hadist tidak ditemukan.*`)
    })

  break
}
case 'quotesislami' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apiKey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/quotes/islami?apikey=${lol}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      newReply(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan saat mencari quotes islami*');
    });

  break;
}
case 'quotesdilan' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apiKey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lol}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      newReply(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan saat mencari quotes dilan*');
    });

  break;
}
case 'puisi' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apiKey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/random/puisi?apikey=${lol}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      newReply(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan saat mencari puisi*');
    });

  break;
}
case 'pantun' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apiKey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/random/pantun?apikey=${lol}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      newReply(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan saat mencari pantun*');
    });

  break;
}
case 'katabijak' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apiKey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/random/katabijak?apikey=${lol}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      newReply(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan saat mencari kata bijak*');
    });

  break;
}
case 'jodoh': {
  if (!q) return newReply(`Format: *.jodoh Nama1 Nama2*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Replace with your API key
  
  const names = q.trim().split(/\s+/)
  const name1 = names[0]
  const name2 = names[1]
  
  const apiUrl = `https://api.lolhuman.xyz/api/jodoh/${encodeURIComponent(name1)}/${encodeURIComponent(name2)}?apikey=${lol}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const image = result.image
      const positif = result.positif
      const negatif = result.negatif
      const deskripsi = result.deskripsi
      
      const message = `Kecocokan Jodoh antara *${name1}* dan *${name2}:*\n` +
                      `Positif: *${positif}*\n` +
                      `Negatif: *${negatif}*\n` +
                      `Deskripsi: *${deskripsi}*`
      
      // Sending the compatibility information as a reply
      newReply(message)
      
      // Sending the image as well
      arxzy.sendImage(from, image, 'Kecocokan Jodoh')
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('*Terjadi kesalahan saat mencari informasi kecocokan jodoh*')
    })
  
  break
}
case 'jalantikus' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apikey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/jalantikus?apikey=${lol}`;

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result;

      let newsList = '';
      result.forEach(news => {
        const title = news.title;
        const link = news.link;
        const category = news.category;
        const time = news.time;

        newsList += `- *${title}*\n` +
          `Kategori: *${category}*\n` +
          `Waktu: *${time}*\n` +
          `Tautan: *${link}*\n\n`;
      });

      const message = `*Berita terbaru dari Jalan Tikus:*\n\n${newsList}`;

      newReply(message);
    })
    .catch(error => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan saat mengambil berita dari Jalan Tikus.*');
    });

  break;
}
case 'jadwaltvnow' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apiKey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apiKey}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      let scheduleMessage = '';

      for (const channel in result) {
        scheduleMessage += `*${channel}:* ${result[channel]}\n`;
      }

      newReply(scheduleMessage);
    })
    .catch((error) => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan saat mendapatkan jadwal TV*');
    });

  break;
}case 'jadwalsholat': {
  if (!q) return newReply(`Format: *.jadwalsholat Nama Tempat*`)
newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key

  const location = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/sholat/${location}?apikey=${apiKey}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const wilayah = result.wilayah
      const tanggal = result.tanggal
      const sahur = result.sahur
      const imsak = result.imsak
      const subuh = result.subuh
      const terbit = result.terbit
      const dhuha = result.dhuha
      const dzuhur = result.dzuhur
      const ashar = result.ashar
      const maghrib = result.maghrib
      const isya = result.isya

      const prayerSchedule = `
Jadwal Sholat untuk *${wilayah}* pada tanggal *${tanggal}*:
Sahur: *${sahur}*
Imsak: *${imsak}*
Subuh: *${subuh}*
Terbit: *${terbit}*
Dhuha: *${dhuha}*
Dzuhur: *${dzuhur}*
Ashar: *${ashar}*
Maghrib: *${maghrib}*
Isya: *${isya}*
`

      newReply(prayerSchedule)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Tempat tidak ditemukan*`)
    })

  break
}
case 'jadwalbola' : {
  newReply(mess.wait)
  const axios = require('axios');
  const apiKey = 'charlotte';
  const apiUrl = `https://api.lolhuman.xyz/api/jadwalbola?apikey=${apiKey}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      let replyMessage = '';

      result.forEach((schedule) => {
        const { time, event, match, tv } = schedule;
        replyMessage += `Time: *${time}*\nEvent: *${event}*\nMatch: *${match}*\nTV: *${tv}*\n\n`;
      });

      if (replyMessage !== '') {
        newReply(replyMessage);
      } else {
        newReply('*Jadwal sepak bola tidak ditemukan.*');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      newReply('*Terjadi kesalahan saat mengambil jadwal sepak bola*');
    });

  break;
}
case 'ipaddress': {
  if (!q) return newReply(`Format: *.ipaddress IP_Address*`)
newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key

  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/ipaddress/${query}?apikey=${apiKey}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const country = result.country
      const countryCode = result.countryCode
      const region = result.region
      const regionName = result.regionName
      const city = result.city
      const zip = result.zip
      const latitude = result.lat
      const longitude = result.lon
      const timezone = result.timezone
      const isp = result.isp
      const organization = result.org
      const as = result.as
      const ipAddress = result.query

      const message = `
Alamat IP: *${ipAddress}*
Negara: *${country} (${countryCode})*
Wilayah: *${region} (${regionName})*
Kota: *${city}*
Zip: *${zip}*
Garis Lintang: *${latitude}*
Garis Bujur: *${longitude}*
Zona Waktu: *${timezone}*
ISP: *${isp}*
Organisasi: *${organization}*
AS: *${as}*
      `

      // Send the IP address information as a reply
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`Format: *.ipaddress IP_Address*`)
    })

  break
}
case 'charlotte': {
  if (!q) return newReply('*Name | Characteristics*\n\n.eris - Toxic\n.alora - Non-Toxic\n.carla - Berotak Senku\n\n*Powered By GPT-4 And SimSimi*')

  const axios = require('axios')
  const apikey = 'jsjsbhwiwksnb' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/simi?apikey=ekjsbsjsjs&text=${query}&badword=false`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      // Reply with the generated response from the API
      newReply(result)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('*Name | Characteristics*\n\n.eris - Toxic\n.alora - Non-Toxic\n.carla - Berotak Senku\n\n*Powered By GPT-4 And SimSimi*')
    })

  break
}
case 'alora': {
  if (!q) return newReply('Kenapa?')

  const axios = require('axios')
  const apikey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${query}&badword=false`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      // Reply with the generated response from the API
      newReply(result)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('???')
    })

  break
}
case 'eris': {
  if (!q) return newReply('Lah?')

  const axios = require('axios')
  const apikey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${query}&badword=true`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      // Reply with the generated response from the API
      newReply(result)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('*gk jelas lu ngentot*')
    })

  break
}
case 'spotify': {
  if (!q) return newReply(`Format: *.spotify Nama Lagu*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte'
  const apiUrl = `https://api.lolhuman.xyz/api/spotifysearch?apikey=${apiKey}&query=${encodeURIComponent(q)}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result

      let replyMessage = ''
      for (const track of result) {
        const {
          id,
          link,
          title,
          artists,
          duration,
          popularity,
          external_urls,
          preview_url
        } = track
        
        replyMessage += `
ID: *${id}*
Tautan: *${link}*
Judul: *${title}*
Artis: *${artists}*
Durasi: *${duration} Detik*
Kepopuleran: *${popularity}*
Tautan Luar: *${external_urls.spotify}*
Tautan Tinjau: *${preview_url}*
`
      }

      newReply(replyMessage)
    })
    .catch((error) => {
      console.log(error)
      newReply('*Lagu spotify tidak ditemukan.*')
    })
}
break
case 'strtohex': {
  const axios = require('axios')
  if (!q) return newReply('Format: *.strtohex Teks*')
  newReply(mess.wait)
  const apiKey = 'charlotte'
  const text = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/convert/strtohex?apikey=${apiKey}&text=${text}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      newReply(`Hasil Konversi: *${result}*`)
    })
    .catch((error) => {
      console.log(error)
      newReply('*Terjadi kesalahan saat melakukan konversi.*')
    })
  
  break
}
case 'hextostr': {
  if (!q) return newReply(`Format: *.hextostr Hex*`)
 newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte'
  const hexString = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/convert/hextostr?apikey=${apiKey}&hex=${hexString}`

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      newReply(`Hasil Konversi: *${result}*`)
    })
    .catch((error) => {
      console.error('Error:', error)
      newReply('*Itu bukan HEX*')
    })

  break
}
case 'superhero': {
  if (!q) return newReply(`Format: *.superhero Nama Superhero*`)
 newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key

  const superheroName = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/superhero?apikey=${apiKey}&query=${superheroName}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const superheroName = result.name
      const powerstats = result.powerstats
      const biography = result.biography
      const appearance = result.appearance
      const work = result.work
      const connections = result.connections
      const imageUrl = result.image.url

      const message = `
Nama Superhero: *${superheroName}*
Powerstat:
- Kecerdasan: *${powerstats.intelligence}*
- Kekuatan: *${powerstats.strength}*
- Kecepatan: *${powerstats.speed}*
- Daya Tahan: *${powerstats.durability}*
- Kekuatan: *${powerstats.power}*
- Tempur: *${powerstats.combat}*

Biografi:
- Nama Lengkap: *${biography['full-name']}*
- Alter Ego: *${biography['alter-egos']}*
- Alias: *${biography.aliases.join(', ')}*
- Tempat Lahir: *${biography['place-of-birth']}*
- Penampilan Pertama: *${biography['first-appearance']}*
- Penerbit: *${biography.publisher}*
- Penyelarasan: *${biography.alignment}*

Penampilan:
- Jenis Kelamin: *${appearance.gender}*
- Balapan: *${appearance.race}*
- Tinggi: *${appearance.height.join(', ')}*
- Berat: *${appearance.weight.join(', ')}*
- Warna Mata: *${appearance['eye-color']}*
- Warna Rambut: *${appearance['hair-color']}*

Bekerja:
- Pekerjaan: *${work.occupation}*
- Basis: *${work.base}*

Koneksi:
- Afiliasi Grup: *${connections['group-affiliation']}*
- Kerabat: *${connections.relatives}*

Gambar: *${imageUrl}*
      `

      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Superhero tidak ditemukan.*`)
    })

  break
}
case 'xnxx': {
  if (!q) return newReply(`Format: *.xnxx Kata Kunci*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/xnxxsearch?apikey=${apiKey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`*Tidak ditemukan "${q}"*`)
      } else {
        let replyMessage = ''

        for (const item of result) {
          const title = item.title
          const views = item.views
          const duration = item.duration
          const uploader = item.uploader
          const link = item.link
          const thumbnail = item.thumbnail

          replyMessage += `Judul: *${title}*\n` +
                          `Pentonton: *${views}*\n` +
                          `Durasi: *${duration}*\n` +
                          `Pengunggah: *${uploader}*\n` +
                          `Tautan: *${link}*\n` +
                          `Gambar Kecil: *${thumbnail}*\n\n`
        }

        newReply(replyMessage)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan saat mencari video xnxx.*`)
    })

  break
}
case 'xnxxdownload': {
  if (!q) return newReply(`Format: *.xnxxdownload Tautan*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Replace with your API key
  const url = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/xnxx?apikey=${lol}&url=${url}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const title = result.title
      const thumbnail = result.thumbnail
      const duration = result.duration
      const view = result.view
      const rating = result.rating
      const like = result.like
      const dislike = result.dislike
      const comment = result.comment
      const tags = result.tag.join(', ')
      const description = result.description
      const links = result.link

      const message = `Judul: *${title}*\n` +
        `Durasi: *${duration}*\n` +
        `Penonton: *${view}*\n` +
        `Peringkat: *${rating}*\n` +
        `Suka: *${like}*\n` +
        `Tidak Suka: *${dislike}*\n` +
        `Komentar: *${comment}*\n` +
        `Tag: *${tags}*\n` +
        `Deskripsi: *${description}*\n\n` +
        `Tautan:\n`

      let linkList = ''
      links.forEach(link => {
        const linkType = link.type
        const linkUrl = link.link

        linkList += `- ${linkType}: *${linkUrl}*\n`
      })

      const xnxxInfo = {
        title: title,
        message: message + linkList,
        thumbnail: thumbnail
      }

      // Sending the information as a message or media
      arxzy.sendTextWithMentions(from, xnxxInfo.message)
      arxzy.sendImage(from, xnxxInfo.thumbnail, xnxxInfo.title, xnxxInfo.message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Terjadi kesalahan saat mengambil informasi xnxx.*`)
    })

  break
}
case 'wikipedia': {
  if (!q) return newReply(`Format: *.wikipedia Kata Kunci*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/wiki?apikey=${lol}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const message = `*Hasil Wikipedia:*\n\n${result}`
      
      // Sending the Wikipedia result as a reply
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Tidak ditemukan di Wikipedia.*`)
    })
  
  break
}
case 'ytstalk': {
  if (!q) return newReply(`Format: *.ytstalk Nama Saluran Youtube*`)
   newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/ytchannel?apikey=${apiKey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`*Saluran youtube tidak ditemukan.*`)
      } else {
        let replyMessage = ''
        result.forEach(channel => {
          const channelId = channel.channel_id
          const channelName = channel.channel_name
          const channelAbout = channel.channel_about
          const channelCreated = channel.channel_created
          const channelPicture = channel.channel_picture

          const defaultPicture = channelPicture.default.url
          const mediumPicture = channelPicture.medium.url
          const highPicture = channelPicture.high.url

          replyMessage += `Saluran ID: *${channelId}*\n` +
                          `Nama Saluran: *${channelName}*\n` +
                          `Tentang Saluran: *${channelAbout}*\n` +
                          `Tanggal Dibuat: *${channelCreated}*\n` +
                          `Gambar Saluran:\n` +
                          `Bawaan: *${defaultPicture}*\n` +
                          `Sedang: *${mediumPicture}*\n` +
                          `Tinggi: *${highPicture}*\n\n`
        })

        newReply(replyMessage)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Saluran youtube tidak ditemukan.*`)
    })

  break
}
case 'ttstalk': {
  if (!q) return newReply(`Format: *.ttstalk Username TikTok*`)
  newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte'
  const apiUrl = `https://api.lolhuman.xyz/api/stalktiktok/${encodeURIComponent(q)}?apikey=${apiKey}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const userPicture = result.user_picture
      const username = result.username
      const nickname = result.nickname
      const bio = result.bio
      const followers = result.followers
      const followings = result.followings
      const likes = result.likes
      const videoCount = result.video

      const message = `
Nama Belakang: *${username}*
Nama Panggilan: *${nickname}*
Bio: *${bio}*
Pengikut: *${followers}*
Mengikuti: *${followings}*
Suka: *${likes}*
Jumlah Vidio: *${videoCount}*
      `

      newReply(message, userPicture)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('*Akun tik tok tidak ditemukan.*')
    })
}
break
case 'spotifydl': {
  if (!q) return newReply('Format: *.spotifydl Tautan Spotify*')
newReply(mess.wait)
  const axios = require('axios')
  const apiKey = 'charlotte' // Replace with your API key
  const apiUrl = `https://api.lolhuman.xyz/api/spotify?apikey=${apiKey}&url=${encodeURIComponent(q)}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const songId = result.id
      const songTitle = result.title
      const songArtists = result.artists
      const songDuration = result.duration
      const songPopularity = result.popularity
      const songUrl = result.external_urls.spotify
      const songPreviewUrl = result.preview_url
      const songThumbnail = result.thumbnail
      const songDownloadUrl = result.link

      const message = `ID: *${songId}*\n` +
        `Judul: *${songTitle}*\n` +
        `Artis: *${songArtists}*\n` +
        `Durasi: *${songDuration} Detik*\n` +
        `Kepopuleran: *${songPopularity}*\n` +
        `Tautan Spotify: *${songUrl}*\n` +
        `Tautan Pratinjau: *${songPreviewUrl}*\n` +
        `Gambar Kecil: *${songThumbnail}*\n` +
        `Tautan Unduhan: *${songDownloadUrl}*`

      // Sending the song information as a reply
      newReply(message)
    })
    .catch(error => {
      console.error('Error:', error)
      newReply('*Terjadi kesalahan saat mengunduh lagu Spotify.*')
    })

  break
}
case 'hashtag': {
  if (!q) return newReply(`Format: .hashtag NamaHashtag`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Replace with your API key

  const hashtagQuery = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/ighashtag?apikey=${lol}&query=${hashtagQuery}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`Tidak ditemukan postingan dengan hashtag tersebut.`)
      } else {
        let postUrls = ''
        for (const url of result) {
          postUrls += `${url}\n`
        }

        newReply(postUrls)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`Terjadi kesalahan dalam mencari postingan dengan hashtag tersebut.`)
    })

  break
}
case 'playstore': {
  if (!q) return newReply(`Format: *.playstore Nama Aplikasi*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/playstore?apikey=${lol}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`*Aplikasi tidak ditemukan.*`)
      } else {
        let appInfo = ''
        for (const item of result) {
          const title = item.title
          const appId = item.appId
          const url = item.url
          const icon = item.icon
          const developer = item.developer
          const currency = item.currency
          const price = item.price
          const isFree = item.free
          const summary = item.summary
          const scoreText = item.scoreText
          const score = item.score

          appInfo += `Nama Aplikasi: *${title}*\n` +
                     `ID Aplikasi: *${appId}*\n` +
                     `Tautan: *${url}*\n` +
                     `Ikon: *${icon}*\n` +
                     `Pengembang: *${developer}*\n` +
                     `Mata Uang: *${currency}*\n` +
                     `Harga: *${price}*\n` +
                     `Gratis: *${isFree ? 'Ya' : 'Tidak'}*\n` +
                     `Ringkasan: *${summary}*\n` +
                     `Skor Tekstual: *${scoreText}*\n` +
                     `Skor: *${score}*\n\n`
        }

        newReply(appInfo)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Aplikasi tidak ditemukan.*`)
    })
  
  break
}
case 'film': {
  if (!q) return newReply(`Format: *.film Judul Film*`)
newReply(mess.wait)
  const axios = require('axios')
  const apikey = 'charlotte' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/filmapik?apikey=${lol}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        newReply(`*Tidak ditemukan informasi untuk film tersebut*`)
      } else {
        let filmText = ''
        for (const item of result) {
          const title = item.title
          const thumbnail = item.thumbnailPotrait
          const rating = item.rating
          const quality = item.quality
          const episode = item.episode
          const officialWeb = item.officialWeb
          const movieId = item.movieId

          filmText += `Judul: *${title}*\n` +
                      `Peringkat: *${rating}*\n` +
                      `Kualitas: *${quality}*\n` +
                      `Episode: *${episode}*\n` +
                      `Web Resmi: *${officialWeb}*\n\n` +
                      `ID Film:* ${movieId}*\n` +
                      `Gambar Kecil: *${thumbnail}*\n\n`
        }

        newReply(filmText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      newReply(`*Film tidak ditemukan.*`)
    })
  
  break
}
case '18trap': {
  if (!m.isGroup) return newReply(mess.group)
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case '18ahegao': {
  if (!m.isGroup) return newReply(mess.group)
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case '18anal': {
  if (!m.isGroup) return newReply(mess.group)
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random2/anal?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
 break;
case '18armpits': {
  if (!m.isGroup) return newReply(mess.group)
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/armpits?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18booty': {
  if (!m.isGroup) return newReply(mess.group)
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/booty?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18feets': {
  if (!m.isGroup) return newReply(mess.group)
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/feets?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18bigtiddies': {
  if (!m.isGroup) return newReply(mess.group)
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/bigtiddies?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18blowjob': {
  if (!m.isGroup) return newReply(mess.group)
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18blowjob2' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/blowjob?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18cum' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18ecchi' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18ero' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/ero?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18erokemo' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/erokemo?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18eroyuri' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/eroyuri?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18feetg' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/feetg?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18femdom' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/femdom?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18futanari' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/futanari?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18hentai' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/hentai?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18holoero' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/holoero?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18kuni' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/kuni?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18lewd' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/lewd?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18lewdk' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/lewdk?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18loli' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/loli?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case 'elaina': {
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/elaina?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case 'shota': {
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/shota?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case 'shinobu': {
  newReply(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/sfw/shinobu?apikey=charlotte';
  arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case '18loli2' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18milf' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18neko' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
case '18pussy' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/pussy?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18solog' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/solog?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18tits' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/tits?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18waifu' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case 'fanart' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/art?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case 'elf' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/elf?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case 'foxgirl' : {
if (!m.isGroup) return newReply(mess.group)
newReply(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/fox_girl?apikey=charlotte';         
arxzy.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
  case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
newReply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
arxzy.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
newReply(mess.wait)	
const axios = require('axios')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
            await arxzy.sendMessage(m.chat,{ caption: mess.success, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('*Kesalahan*')
                })
break
case 'wallpaperphone': case 'wallphone':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'tiktokgirl':
newReply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
arxzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
newReply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
arxzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
newReply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
arxzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'indo':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
newReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
arxzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return newReply(mess.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
arxzy.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
arxzy.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
arxzy.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
if (!m.isGroup) return newReply(mess.group)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
arxzy.sendMessage(m.chat,
{ text: `Paling *${command}* Disini Adalah *@${org.split('@')[0]}*`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.namabot}`,
"body": `${global.namaowner}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./media/menu.jpg`),
"sourceUrl": `${global.link}`}}},
{ quoted: m})
}
break
case 'swm': case 'stickerwm': case 'stikerwm': case 'wm':{
if (!isPremium) return newReply(mess.prem)
if (!args.join(" ")) return newReply(`Format: *.stickerwm Nama Paket|Pengarang*`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
arxzy.downloadAndSaveMediaMessage(quoted, "gifee")
arxzy.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await arxzy.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return newReply('*Maksimal 10 Detik*')
let media = await quoted.download()
let encmedia = await arxzy.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
newReply(`Photo/Video?`)
}
}
break
case 'truth':
              const truth =[
  "Apakah kamu pernah menyukai seseorang? Berapa lama?",
  "Kalau bisa atau kalau mau, gc/gc luar yang mana yang akan kamu jadikan teman? (mungkin beda/tipe sama)",
  "Apa ketakutan terbesar kamu?",
  "Pernahkah kamu menyukai seseorang dan merasa orang itu juga menyukaimu?",
  "Siapa nama mantan pacar temanmu yang dulu kamu suka diam-diam?",
  "Apakah kamu pernah mencuri uang dari ayah atau ibumu? Alasannya?",
  "Apa yang membuatmu bahagia saat sedih?",
  "Pernah cinta bertepuk sebelah tangan? Kalo pernah sama siapa? Gimana rasanya, bro?",
  "Pernah menjadi simpanan seseorang?",
  "Hal yang paling ditakuti",
  "Siapakah orang yang paling berpengaruh dalam hidupmu?",
  "Hal membanggakan apa yang kamu dapatkan tahun ini?",
  "Siapa orang yang bisa membuatmu luar biasa?",
  "Siapakah orang yang pernah membuatmu sangat bahagia?",
  "Siapa yang paling dekat dengan tipe pasangan idealmu di sini?",
  "Kamu suka main dengan siapa?",
  "Pernahkah kamu menolak seseorang? Alasannya kenapa?",
  "Sebutkan kejadian yang membuatmu terluka yang masih kamu ingat",
  "Prestasi apa yang kamu dapatkan tahun ini?",
  "Apa kebiasaan terburukmu di sekolah?",
  "Lagu apa yang paling sering kamu nyanyikan saat mandi?",
  "Apakah kamu pernah memiliki pengalaman mendekati kematian?",
  "Kapan terakhir kali kamu benar-benar marah? Kenapa?",
  "Siapa orang terakhir yang meneleponmu?",
  "Apakah kamu memiliki bakat tersembunyi? Apa itu?",
  "Kata apa yang paling kamu benci?",
  "Apa video YouTube terakhir yang kamu tonton?",
  "Apa hal terakhir yang Anda cari di Google?",
  "Dengan siapa di grup ini kamu ingin bertukar kehidupan selama seminggu?",
  "Apa hal paling menakutkan yang pernah terjadi padamu?",
  "Pernahkah kamu kentut dan menyalahkan orang lain?",
  "Kapan terakhir kali kamu membuat orang lain menangis?",
  "Pernahkah kamu meng-ghost teman?",
  "Pernahkah kamu melihat mayat?",
  "Siapa di antara anggota keluargamu yang paling mengganggumu dan mengapa?",
  "Jika Anda harus menghapus satu aplikasi dari ponsel Anda, aplikasi mana yang akan dipilih?",
  "Aplikasi apa yang paling Anda buang waktu?",
  "Pernahkah kamu berpura-pura sakit untuk pulang sekolah?",
  "Barang apa yang paling memalukan di kamarmu?",
  "Lima barang apa yang akan kamu bawa jika kamu terjebak di pulau terpencil?",
  "Pernahkah kamu tertawa begitu keras hingga pipis di celana?",
  "Apakah kamu mencium bau kentutmu sendiri?",
  "Apakah kamu pernah pipis di tempat tidur saat tidur?",
  "Apa kesalahan terbesar yang pernah kamu buat?",
  "Pernahkah kamu menyontek saat ujian?",
  "Apa hal terburuk yang pernah kamu lakukan?",
  "Kapan terakhir kali kamu menangis?",
  "Siapa yang paling kamu cintai di antara orang tuamu?",
  "Apakah kamu kadang-kadang memasukkan jarimu ke dalam lubang hidung?",
  "Siapa yang kamu suka saat sekolah?",
  "Katakan dengan jujur, apakah kamu menyukai laki-laki di grup ini?",
  "Apakah kamu pernah menyukai seseorang? Sudah berapa lama?",
  "Apakah kamu punya pacar? Apa ketakutan terbesarmu?",
  "Pernahkah kamu menyukai seseorang dan merasa orang itu juga menyukaimu?",
  "Siapa nama mantan pacar temanmu yang pernah kamu sukai diam-diam?",
  "Pernahkah kamu mencuri uang ibumu atau uang ayahmu?",
  "Apa yang membuatmu bahagia saat kamu sedih?",
  "Apakah kamu menyukai seseorang yang ada di grup ini? Kalau kamu lalu siapa?",
  "Apakah kamu pernah ditipu orang?",
  "Siapakah orang yang paling penting dalam hidupmu?",
  "Hal membanggakan apa yang kamu dapatkan tahun ini?",
  "Siapa orang yang bisa membuatmu bahagia saat kamu sedih?",
  "Siapakah orang yang pernah membuatmu merasa tidak nyaman?",
  "Apakah kamu pernah berbohong kepada orang tuamu?",
  "Apakah kamu masih menyukai mantanmu?",
  "Dengan siapa kamu suka bermain bersama?",
  "Apakah kamu pernah mencuri barang berharga dalam hidupmu? Alasannya kenapa?",
  "Sebutkan kejadian yang membuatmu terluka yang masih kamu ingat",
  "Prestasi apa yang kamu dapatkan tahun ini?",
  "Apa kebiasaan terburukmu di sekolah?",
  "Apakah Anda menyukai pembuat bot, Hoshino?",
  "Pernahkah kamu berpikir untuk membalas dendam dari gurumu?",
  "Apakah Anda menyukai perdana menteri negara Anda saat ini?",
  "Apakah Anda lebih suka daging atau sayuran?",
  "Jika kamu bisa menjadi tidak terlihat, apa hal pertama yang akan kamu lakukan?",
  "Rahasia apa yang kamu sembunyikan dari orang tuamu?",
  "Siapa naksir rahasiamu?",
  "Siapa orang terakhir yang kamu stalk di media sosial?",
  "Jika seorang jin mengabulkan tiga keinginanmu, apa yang akan kamu minta?",
  "Apa penyesalan terbesarmu?",
  "Menurutmu binatang apa yang paling mirip denganmu?",
  "Berapa banyak selfie yang kamu ambil dalam sehari?",
  "Apa acara masa kecil favoritmu?",
  "Jika kamu bisa menjadi karakter fiksi selama sehari, siapa yang akan kamu pilih?",
  "Siapa yang paling sering kamu SMS?",
  "Apa kebohongan terbesar yang pernah kamu katakan kepada orang tuamu?",
  "Siapa selebritas yang kamu sukai?",
  "Apa mimpi teraneh yang pernah kamu alami?",
  "Apakah kamu bermain PUBG? Jika iya, tolong kirimkan nomor ID-mu.",
  "Apakah kamu pernah berbohong kepada sahabatmu? Alasannya?",
  "Siapa orang yang paling kamu kagumi di dunia?",
  "Pernahkah kamu menjatuhkan barang berharga milik orang lain? Ceritakan.",
  "Apa hal paling aneh yang pernah kamu lihat di jalan?",
  "Pernahkah kamu berbohong kepada pasanganmu? Alasannya?",
  "Siapa selebritas yang kamu benci? Mengapa?",
  "Apakah kamu pernah memalsukan identitas online? Mengapa?",
  "Apa hal terbesar yang kamu korbankan demi orang lain?",
  "Pernahkah kamu melakukan tindakan yang melanggar hukum? Ceritakan.",
  "Siapa orang yang paling membuatmu iri? Mengapa?",
  "Apakah ada kebiasaan buruk yang ingin kamu tinggalkan? Apa itu?",
  "Apa makanan yang paling kamu benci? Mengapa?",
  "Pernahkah kamu mengkhianati kepercayaan seseorang? Ceritakan.",
  "Siapa tokoh fiksi favoritmu? Mengapa?",
  "Apakah kamu pernah memutuskan hubungan dengan seseorang secara tidak baik? Alasannya?",
  "Apa impian terbesar yang ingin kamu wujudkan?",
  "Pernahkah kamu mengambil hak orang lain? Ceritakan.",
  "Siapa guru favoritmu di masa kecil? Mengapa?",
  "Apakah kamu pernah merasa bersalah karena menyakiti seseorang? Alasannya?",
  "Apa kebiasaan terbaik yang ingin kamu tingkatkan?",
  "Pernahkah kamu mengingkari janji yang telah kamu buat? Ceritakan.",
  "Siapa pahlawan favoritmu? Mengapa?",
  "Apakah kamu pernah mengecewakan orang yang sangat kamu sayangi? Ceritakan.",
  "Apa hal terburuk yang pernah kamu katakan kepada seseorang?",
  "Pernahkah kamu merasa dirimu tidak berarti? Mengapa?",
  "Siapa musuh terbesarmu? Mengapa?",
  "Apakah kamu pernah berbohong kepada dirimu sendiri? Alasannya?",
  "Apa hal yang paling ingin kamu ubah dari dirimu?",
  "Pernahkah kamu mengambil keuntungan dari kelemahan orang lain? Ceritakan.",
  "Siapa tokoh sejarah yang paling kamu kagumi? Mengapa?",
  "Apakah ada kejadian yang membuatmu merasa sangat menyesal? Ceritakan.",
  "Apa kelemahan terbesarmu? Mengapa?",
  "Pernahkah kamu mengabaikan seseorang yang berarti bagimu? Alasannya?",
  "Siapa orang yang paling kamu kagumi di grup ini?",
  "Apakah kamu pernah memanipulasi orang lain? Ceritakan.",
  "Apa hal yang paling ingin kamu capai dalam hidup ini?",
  "Pernahkah kamu merasa iri terhadap keberhasilan orang lain? Mengapa?",
  "Siapa tokoh terkenal yang paling kamu tidak suka? Mengapa?",
  "Apakah kamu pernah menyalahkan orang lain atas kesalahanmu sendiri? Alasannya?",
  "Apa yang membuatmu merasa tidak aman?",
  "Pernahkah kamu berbohong kepada dirimu sendiri agar terlihat lebih baik? Ceritakan.",
  "Siapa orang yang paling kamu rindukan? Mengapa?",
  "Apakah kamu pernah membuat janji yang tidak bisa kamu tepati? Alasannya?",
  "Apa impian terbesarmu yang belum tercapai?",
  "Pernahkah kamu menjatuhkan orang lain agar kamu bisa naik? Ceritakan.",
  "Siapa yang paling berpengaruh dalam kehidupanmu saat ini?",
  "Apakah ada sesuatu yang ingin kamu katakan kepada seseorang, tapi belum pernah kamu sampaikan? Apa itu?",
  "Apa hal yang paling ingin kamu ubah dari masa lalu?",
  "Pernahkah kamu melakukan sesuatu yang sangat berisiko? Ceritakan.",
  "Siapa teman yang paling bisa kamu andalkan dalam situasi sulit?",
  "Apakah kamu pernah memanfaatkan seseorang demi keuntunganmu sendiri? Ceritakan.",
  "Apa hal yang paling ingin kamu capai dalam waktu dekat?",
  "Pernahkah kamu membuat orang lain terluka secara sengaja? Alasannya?",
  "Siapa sosok yang paling kamu kagumi dalam hidup ini? Mengapa?",
  "Apakah kamu pernah mengkhianati rahasia seseorang? Ceritakan.",
  "Apa yang paling kamu sesali tentang hubungan asmaramu yang lalu?",
  "Pernahkah kamu menjatuhkan orang lain hanya karena kesalahan kecil? Ceritakan.",
  "Siapa tokoh terkenal yang paling kamu kagumi? Mengapa?",
  "Apakah ada kejadian yang membuatmu merasa sangat malu? Ceritakan.",
  "Apa yang paling membuatmu merasa tidak berharga?",
  "Pernahkah kamu mengorbankan nilai-nilai pentingmu demi popularitas? Ceritakan.",
  "Siapa orang yang paling kamu cintai di luar keluarga? Mengapa?",
  "Apakah kamu pernah menyembunyikan sesuatu yang penting dari orang yang kamu cintai? Ceritakan.",
  "Apa hal yang paling ingin kamu lupakan dari masa lalu?",
  "Pernahkah kamu mengabaikan kebutuhan seseorang yang kamu cintai? Alasannya?",
  "Siapa tokoh inspiratif yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah menghancurkan hubungan persahabatanmu dengan sengaja? Ceritakan.",
  "Apa yang paling kamu sesali tentang tindakanmu dalam hubungan asmaramu yang lalu?",
  "Pernahkah kamu membuat seseorang merasa tidak berarti? Alasannya?",
  "Siapa orang yang paling berarti dalam hidupmu saat ini?",
  "Apakah kamu pernah menyalahgunakan kepercayaan seseorang? Ceritakan.",
  "Apa yang paling kamu sesali tentang cara kamu memperlakukan orang lain?",
  "Pernahkah kamu merasa tidak pantas mendapatkan kebahagiaan? Mengapa?",
  "Siapa tokoh olahraga yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah mengecewakan dirimu sendiri? Ceritakan.",
  "Apa yang paling kamu sesali tentang tindakanmu dalam hubungan keluargamu?",
  "Pernahkah kamu melakukan sesuatu yang melanggar nilai-nilai etika? Ceritakan.",
  "Siapa tokoh politik yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah memanipulasi perasaan seseorang demi keuntunganmu sendiri? Ceritakan.",
  "Apa yang paling kamu sesali tentang cara kamu memperlakukan dirimu sendiri?",
  "Pernahkah kamu merasa tidak layak menerima cinta? Mengapa?",
  "Siapa orang yang paling kamu kagumi dalam bidang seni? Mengapa?",
  "Apakah kamu pernah mempengaruhi seseorang agar mereka melakukan sesuatu yang tidak benar? Ceritakan.",
  "Apa yang paling kamu sesali tentang tindakanmu dalam hubungan persahabatanmu?",
  "Pernahkah kamu menjatuhkan orang lain hanya untuk kepuasan dirimu sendiri? Ceritakan.",
  "Siapa tokoh inspiratif yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah mengkhianati janji yang penting? Ceritakan.",
  "Apa yang paling kamu sesali tentang tindakanmu dalam hubungan asmaramu yang lalu?",
  "Pernahkah kamu membuat seseorang merasa tidak berarti? Alasannya?",
  "Siapa orang yang paling berarti dalam hidupmu saat ini?",
  "Apakah kamu pernah menyalahgunakan kepercayaan seseorang? Ceritakan.",
  "Apa yang paling kamu sesali tentang cara kamu memperlakukan orang lain?",
  "Apa hal yang paling membuatmu merasa kikuk saat bertemu orang baru?",
  "Pernahkah kamu menyesali keputusan besar yang pernah kamu ambil? Apa itu?",
  "Siapa tokoh politik yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah mengkhianati kepercayaan seseorang? Ceritakan.",
  "Apa yang paling kamu sesali tentang hubungan asmaramu yang lalu?",
  "Pernahkah kamu merasa tidak dihargai di tempat kerja? Bagaimana kamu menghadapinya?",
  "Siapa orang yang paling kamu cintai di luar keluarga? Mengapa?",
  "Apakah kamu pernah memiliki obsesi yang tidak sehat? Apa itu?",
  "Apa yang paling membuatmu merasa tertekan saat menghadapi masalah?",
  "Pernahkah kamu terjebak dalam perasaan cemburu yang tidak sehat? Ceritakan.",
  "Siapa selebritas yang menurutmu paling overrated? Mengapa?",
  "Apa yang paling membuatmu tertawa hingga sakit perut?",
  "Pernahkah kamu melakukan perjalanan sendirian? Bagaimana pengalamanmu?",
  "Apa hal yang paling membuatmu stres dalam pekerjaanmu?",
  "Siapa tokoh sejarah yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah mengkhianati rahasia seseorang? Alasannya?",
  "Apa yang paling kamu sesali tentang hubungan asmaramu yang lalu?",
  "Pernahkah kamu merasa tidak adil di tempat kerja? Ceritakan.",
  "Siapa orang yang paling kamu cintai di luar keluarga? Mengapa?",
  "Apakah kamu pernah memiliki obsesi yang tidak sehat? Apa itu?",
  "Apa yang paling membuatmu gelisah saat menghadapi situasi sosial?",
  "Pernahkah kamu merasa tidak cukup baik bagi seseorang yang kamu cintai?",
  "Siapa tokoh fiksi yang paling kamu kagumi? Mengapa?",
  "Apa kegiatan yang membuatmu merasa hidupmu berarti?",
  "Apakah kamu pernah memendam perasaan kepada seseorang yang sudah memiliki pasangan? Ceritakan.",
  "Siapa temanmu yang paling sukses? Apa yang membuatmu iri padanya?",
  "Apa hal yang paling kamu takuti dalam hidup ini?",
  "Pernahkah kamu terlibat dalam suatu perselisihan fisik? Ceritakan.",
  "Siapa orang yang paling mempengaruhi pilihan fashionmu?",
  "Apakah kamu pernah memendam rasa iri terhadap sahabatmu? Alasannya?",
  "Apa yang paling membuatmu frustasi dalam hubungan asmaramu yang lalu?",
  "Pernahkah kamu menolak tawaran pekerjaan yang sebenarnya kamu inginkan? Mengapa?",
  "Siapa penulis favoritmu? Mengapa kamu menyukai karyanya?",
  "Apakah kamu pernah merasa tidak diterima oleh lingkungan sekitarmu?",
  "Apa yang paling membuatmu tegang saat berbicara di depan umum?",
  "Pernahkah kamu menyakiti seseorang secara tidak sengaja? Bagaimana kamu memperbaikinya?",
  "Siapa selebritas yang menurutmu paling underrated? Mengapa?",
  "Apa yang paling membuatmu takut saat berada di tempat yang gelap?",
  "Pernahkah kamu membuat kesalahan besar dalam pekerjaanmu? Ceritakan.",
  "Siapa seniman favoritmu? Mengapa kamu menyukai karya-karyanya?",
  "Apakah kamu pernah merasa terjebak dalam rutinitas yang membosankan? Bagaimana kamu mengatasinya?",
  "Apa yang paling membuatmu gugup saat berkencan?",
  "Pernahkah kamu menyembunyikan perasaanmu agar tidak menyakiti orang lain?",
  "Siapa tokoh inspiratif yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah berpura-pura menyukai sesuatu hanya untuk menyenangkan orang lain?",
  "Apa hal yang paling membuatmu merasa tidak percaya diri?",
  "Pernahkah kamu merasa tidak mampu mencapai tujuanmu? Mengapa?",
  "Siapa orang yang paling kamu kagumi dalam bidang teknologi? Mengapa?",
  "Apakah kamu pernah merasa terjebak dalam rutinitas yang tidak kamu sukai? Bagaimana kamu mengatasinya?",
  "Apa yang paling membuatmu gugup saat tampil di depan umum?",
  "Pernahkah kamu merasa tidak diterima oleh lingkungan sekitarmu?",
  "Siapa penulis komik favoritmu? Mengapa kamu menyukai karyanya?",
  "Apakah kamu pernah merasa dirimu tidak cukup baik bagi seseorang yang kamu cintai?",
  "Apa yang paling membuatmu khawatir saat berada di tempat yang ramai?",
  "Pernahkah kamu membuat kesalahan besar dalam kehidupan asmaramu? Ceritakan.",
  "Siapa pembawa acara TV favoritmu? Mengapa kamu menyukainya?",
  "Apakah kamu pernah merasa tidak puas dengan pekerjaanmu?",
  "Apa yang paling membuatmu gugup saat wawancara kerja?",
  "Pernahkah kamu merasa tidak adil dibandingkan dengan orang lain? Mengapa?",
  "Siapa penulis lagu favoritmu? Mengapa kamu menyukai lirik-liriknya?",
  "Apakah ada masa lalu yang ingin kamu ubah? Apa itu?",
  "Apa yang paling membuatmu takut saat berada di tempat yang sunyi?",
  "Pernahkah kamu membuat kesalahan besar dalam pekerjaanmu? Ceritakan."
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://telegra.ph/file/87ea7fa4801aecb2ddf38.jpg`)
              arxzy.sendMessage(from, { image: buffertruth, caption: '*Anda Memilih TRUTH*\n'+ xeontruth }, {quoted:m})
              break
              case 'dare':
              const dare =[
     "Makan nasi 2 sendok makan tanpa lauk pauk",
     "Tampar orang yang membuatmu marah",
     "Telepon crush atau pacar sekarang dan kirim ss",
     "Gunakan emoji setiap kali Anda mengetik di GC/PC selama 1 hari",
     "Ucapkan 'Selamat Datang' kepada yang ingin menjadi jutawan kepada semua grup yang Anda miliki",
     "Panggil mantan bilang kangen",
     "Nyanyikan bagian refrein dari lagu terakhir yang kamu mainkan",
     "VN Mantan/naksir/pacar kamu, sapa (nama), mau telpon, sebentar. Aku kangen",
     "Buang meja yang ada di rumah sampai dimarahi karena berisik",
     "Katakan ke sembarang orang 'Aku Baru Dikasih Tau Aku Kembaran Kamu Dulu, Kita Pisah, Trus Aku Operasi Plastik. Dan Ini Hal Yang Paling Ciyuss'",
     "Sebutkan nama mantan",
     "Buat 1 sajak untuk para member!",
     "Kirim daftar obrolan whatsapp Anda",
     "Obrolan orang secara acak dengan bahasa Gheto lalu ss di sini",
     "Ceritakan hal memalukan versimu sendiri",
     "Tag orang yang kamu benci",
     "Berpura-pura kesurupan, misalnya: kesurupan anjing, kesurupan belalang, kesurupan kulkas, dll.",
     "Ganti nama menjadi 'I Am Donkey' selama 24 jam",
     "Teriak 'Ma Chuda Ma Chuda Ma Chuda' di depan rumahmu",
     "Jepret/posting foto pacar/naksir",
     "Beritahu aku tipe pacarmu!",
     "Katakan 'Aku Naksir Kamu, Kamu Mau Jadi Pacarku?' ke lawan jenis, terakhir kali kamu chat (submit di wa/tele), tunggu dia balas, kalau punya mampir ke sini",
     "Rekam suaramu yang berbunyi 'Titar Ke Umur Do Titar, Titar Ke Piche Do Titar'",
     "Prank chat mantan dan bilang 'I Love U, Please Come Back.' tanpa bilang Dare",
     "Obrolan ke kontak wa sesuai urutan % baterai anda, lalu beritahu dia 'Saya Beruntung Bisa Mendapatkan Anda'",
     "Ganti nama jadi 'Aku Anak Randi' selama 5 jam",
     "Ketik bahasa Bengali 24 jam",
     "Gunakan foto Selmon Bhoi selama 3 hari",
     "Jatuhkan kutipan lagu lalu beri tag anggota yang cocok untuk kutipan itu",
     "Kirim catatan suara mengatakan 'Bisakah Aku Memanggilmu Sayang?'",
     "SS baru-baru ini menelepon whatsapp",
     "Katakan 'Kau Sangat Indah Jangan Berbohong' kepada teman-teman",
     "Pergi ke anggota grup, dan katakan 'Fuck You'",
     "Bertingkah seperti ayam di depan orang tuamu",
     "Ambil buku acak dan baca satu halaman dengan lantang di vn n kirimkan ke sini",
     "Buka pintu depanmu dan melolong seperti serigala selama 10 detik",
     "Ambil selfie yang memalukan dan tempel di foto profil Anda",
     "Biarkan teman anda memilih kata dan lagu terkenal, Anda harus menyanyikan lagu itu dan mengirimkannya dalam catatan suara",
     "Berjalan dengan siku dan lutut selama mungkin",
     "Nyanyikan lagu kebangsaan dengan nada suara",
     "Breakdance selama 30 detik di ruang duduk",
     "Ceritakan kisah paling menyedihkan yang kamu tahu",
     "Buat video tarian twerk dan statuskan selama 5 menit",
     "Makan sepotong bawang putih mentah",
     "Tunjukkan lima orang terakhir yang Anda kirimi SMS dan isi pesannya",
     "Cantumkan nama lengkap Anda pada status selama 5 jam",
     "Buat video dansa pendek tanpa filter apa pun hanya dengan musik dan letakkan di status Anda selama 5 jam",
     "Panggil sahabatmu 'Jalang'",
     "Letakkan foto Anda tanpa filter pada status Anda selama 10 menit",
     "katakan 'Saya Suka Oli London' di catatan suara",
     "Kirim pesan ke mantanmu dan katakan 'Aku Masih Menyukaimu'",
     "Hubungi Crush/Pacar/Sahabat sekarang dan tangkapan layar di sini",
     "Pergi ke salah satu obrolan pribadi anggota grup dan Katakan 'Kamu Bustard Jelek'",
     "Katakan 'Kamu Cantik/Tampan' kepada salah satu orang yang ada di daftar tag atas kamu atau orang pertama di daftar obrolan kamu",
     "Kirim voice note dan katakan 'Bolehkah Aku Meneleponmu Sayang', jika kamu laki-laki tag perempuan/jika kamu perempuan tag laki-laki",
     "Tulis 'I Love You (nama anggota grup acak, yang sedang online)' di obrolan pribadi, (kalau laki-laki tulis nama perempuan/kalau perempuan tulis nama laki-laki) ambil fotonya dan kirim ke sini",
     "Gunakan foto aktor Bollywood apa pun sebagai PFP Anda selama 3 hari",
     "Letakkan foto Gebetanmu di status dengan keterangan 'Ini Gebetanku'",
     "Ganti nama menjadi 'I AM GAY' selama 5 jam",
     "Ngobrol dengan kontak mana pun di Whatsapp dan katakan 'Saya Akan Menjadi BF/GF Anda Selama 5 Jam'",
     "Kirim catatan suara mengatakan aku naksir kamu, mau jadi pacarku atau tidak? ke sembarang orang dari grup (kalau kamu perempuan pilih laki-laki, kalau laki-laki pilih perempuan",
     "Tampar pantatmu dan kirimkan suara tamparannya ke sini menggunakan voice note",
     "Sebutkan tipe GF/BF kamu dan kirim fotonya ke sini dengan keterangan 'Cewek/Cowok Paling Jelek Didunia'",
     "Berteriak 'Kontol' dan kirim ke sini melalui voice note",
     "Foto wajahmu lalu kirim ke sini",
     "KIRIM foto Anda dengan keterangan 'Saya Lesbian'",
     "Berteriak menggunakan kata-kata kasar dan kirimkan ke sini melalui voice note",
     "Teriak 'Kau Bajingan' di depan Ibu/papamu",
     "Ganti nama menjadi 'Saya Idiot' selama 24 jam",
     "Tampar dirimu dengan keras dan kirim suara tamparan melalui voice note",
     "Katakan saya suka pemilik Bot Hoshino melalui voice note",
     "Kirim foto GF/BF kamu ke sini",
     "Buat video tantangan dance Tik Tok apa saja dan jadikan status, Anda dapat menghapusnya setelah 5 jam",
     "Putus dengan sahabatmu selama 5 jam tanpa memberitahunya bahwa itu tantangan",
      "Katakan pada salah satu temanmu bahwa kamu mencintainya dan ingin majak dia, tanpa memberitahu dia bahwa itu adalah tantangan",
      "Katakan 'Aku Cinta Depak Kalal' lewat voice note",
      "Tulis saya merasa terangsang dan letakkan di status, Anda dapat menghapusnya hanya setelah 5 jam",
      "Tulis 'Saya Lesbian' dan letakkan di status, kamu hanya bisa menghapusnya setelah 5 jam",
      "Cium Ibu atau Papamu dan katakan 'Aku Mencintaimu'",
      "Cantumkan nama Ayahmu di status selama 5 jam",
      "Kirim kata-kata kasar di grup mana pun kecuali grup ini dan kirim bukti tangkapan layar di sini",
   "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
   "Buat mimik wajah paling ekspresif dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh semangat dan keceriaan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan unik, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita fiksi dengan suara yang penuh emosi dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda di sekitarmu kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling kreatif dan unik sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat keras dan energik, dengan gaya bicara seperti pengumuman di stasiun radio, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari bollywood kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang menggetarkan dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang memukau dan menginspirasi, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan pengalaman menegangkan yang pernah kamu alami dengan suara yang menegangkan, dan bagikan di grup.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang ceria dan kreatif.",
    "Ambil foto objek alam yang menawan di sekitarmu dengan sudut pandang yang menarik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang makanan favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam tai chi kepada teman-temanmu.",
    "Buat mimik wajah paling menggemaskan dan lucu sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh semangat dan kegembiraan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik perkusi kepada teman-temanmu.",
    "Buat seni lukis menggunakan cat air dengan tema alam dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan kartu remi kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari hip-hop freestyle kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan gaya sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari bollywood kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang makanan favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
   "Makan makanan pedas tanpa minum selama 1 menit.",
    "Buat tarian konyol dan tampilkan di depan teman-temanmu.",
    "Lakukan panggilan video dengan temanmu dan tunjukkan bakat menyanyimu.",
    "Tunjukkan gerakan tarian terbaikmu di tengah-tengah keramaian.",
    "Kirim pesan suara menyanyikan lagu cinta kepada seseorang yang kamu sukai.",
    "Beri komplimen kepada setiap anggota grup dengan kata-kata yang penuh kebaikan.",
    "Bicaralah dengan aksen yang berbeda selama 5 menit.",
    "Tunjukkan aksi sulap sederhana kepada temanmu.",
    "Ganti nama di akun media sosialmu menjadi 'Superhero' selama 24 jam.",
    "Ambil foto wajah terbaikmu dan jadikan sebagai foto profil selama 1 hari.",
    "Hubungi seseorang yang tidak pernah kamu bicarakan dan ajak mereka untuk berteman.",
    "Buat puisi singkat tentang alam dan bacakan kepada teman-temanmu.",
    "Tulis sebuah cerita pendek dalam waktu 10 menit dan bagikan ke grup.",
    "Kirim meme lucu kepada teman-temanmu untuk membuat mereka tertawa.",
    "Buat video mengucapkan selamat ulang tahun untuk seseorang yang sedang berulang tahun.",
    "Tunjukkan keahlianmu dalam memainkan alat musik kepada teman-temanmu.",
    "Buat sketsa singkat tentang kehidupan sehari-hari dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda di sekitarmu.",
    "Buat senyuman paling lebar dan kirim foto senyummu kepada teman-temanmu.",
    "Baca puisi cinta favoritmu dengan perasaan yang mendalam.",
    "Ambil foto dirimu sedang melakukan aksi lucu dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan kisah lucu yang pernah kamu alami dan bagikan di grup.",
    "Tunjukkan gerakan tarian terburukmu di depan teman-temanmu.",
    "Tunjukkan keahlianmu dalam membuat origami dan berikan hadiah kecil kepada teman-temanmu.",
    "Ambil selfie dengan ekspresi paling lucu dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan parkour sederhana di depan teman-temanmu.",
    "Buat video komedi pendek dengan sketsa yang lucu dan bagikan di grup.",
    "Ambil foto objek yang indah di sekitarmu dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang hobi teman-temanmu dan bagikan di grup.",
    "Tunjukkan gerakan tari khas daerahmu kepada teman-temanmu.",
    "Buat mimik wajah paling lucu dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh perasaan.",
    "Tunjukkan keahlianmu dalam memainkan permainan video kepada teman-temanmu.",
    "Buat seni lukis sederhana menggunakan pensil atau cat air dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan dongeng pendek dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan kartu remi kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari sederhana kepada teman-temanmu.",
    "Ambil foto dirimu sedang melakukan pose yoga dan jadikan sebagai foto profil selama 1 hari.",
    "Buat sketsa wajah temanmu dengan gaya kartun dan bagikan di grup.",
    "Tunjukkan keahlianmu dalam memasak hidangan favoritmu kepada teman-temanmu.",
    "Buat video komedi singkat dengan dialog yang lucu dan bagikan di grup.",
    "Ambil selfie dengan ekspresi paling serius dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat keras selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari modern kepada teman-temanmu.",
    "Buat video membacakan puisi cinta favoritmu dengan perasaan yang mendalam dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang menakjubkan dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan pengalaman seram yang pernah kamu alami dan bagikan di grup.",
    "Tunjukkan gerakan tari khas suku tertentu kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan menyanyikan lagu ulang tahun yang penuh semangat.",
    "Ambil foto objek yang menarik di sekitarmu dengan sudut pandang yang kreatif dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang makanan favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam atau yoga kepada teman-temanmu.",
    "Buat mimik wajah paling serius dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik tradisional kepada teman-temanmu.",
    "Buat seni lukis menggunakan tangan kosong dengan teknik finger painting dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang tidak biasa dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan dongeng klasik dengan suara yang dramatis dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tradisional kepada teman-temanmu.",
    "Ambil selfie dengan pose paling artistik dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat cepat selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari hip-hop kepada teman-temanmu.",
    "Buat video membacakan puisi cinta buatanmu sendiri dengan perasaan yang mendalam dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang kreatif dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu yang pernah kamu alami dan bagikan di grup.",
    "Tunjukkan gerakan tari balet kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan menyanyikan lagu ulang tahun dengan suara merdu.",
    "Ambil foto objek alam yang indah di sekitarmu dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang hewan favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam jantung sehat kepada teman-temanmu.",
    "Buat mimik wajah paling kreatif dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik modern kepada teman-temanmu.",
    "Buat seni lukis abstrak dengan warna-warna cerah dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang indah dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan dongeng interaktif dengan berbagai suara karakter dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan uang koin kepada teman-temanmu."
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://telegra.ph/file/87ea7fa4801aecb2ddf38.jpg`)
              arxzy.sendMessage(from, { image: bufferdare, caption: '*Anda Memilih DARE*\n'+ xeondare }, {quoted:m})
              break
              case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'handhold': {
  newReply(mess.wait)
const axios = require('axios')
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
arxzy.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'paptt':
            if (!isPremium) return newReply(mess.prem)
            if (!text) return newReply(`Format: ${prefix+command} *video/foto*`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (text == 'foto') {
                newReply("Foto Akan Dikirim Lewat *Obrolan Pribadi*")
                arxzy.sendMessage(m.sender, { image: { url: titid1 }, caption: '*Mana Tahan 🥵*'}, { quoted: m })
            } else if (text == 'video') {
                newReply("Video Akan Dikirim Lewat *Obrolan Pribadi*")
                arxzy.sendMessage(m.sender, { video: { url: titid2 }, caption: '*Mana Tahan🥵*'}, { quoted: m })
            }
        break
case 'wangy': {
                newReply(mess.wait)
                if (!text) return newReply(`Format: *.wangy Nama*`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                newReply(awikwok)
                }
            break
            case 'cekmati': {
            	const axios = require('axios')
                newReply(mess.wait)
                if (!text) return newReply(`Format: *.cekmati Nama*`)
                predea = await axios.get(`https://api.agify.io/?name=${text}`)
                newReply(`Nama: *${predea.data.name}*\nMati Pada Umur: *${predea.data.age} Tahun*`)
                }
            break
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                newReply(mess.wait)
                if (!m.quoted && !text) return newReply(`Format: *${prefix + command} Teks*`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                newReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
            case 'asmaulhusna':
            if (!text) return newReply('Format: *.asmaulhusna Nomor*')
            newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=6293c82c5c5db837bc563b56`)
				.then(({ data }) => {
					var text = `No : ${data.result.index}\n`
					text += `Latin: ${data.result.latin}\n`
					text += `Arab : ${data.result.ar}\n`
					text += `Indonesia : ${data.result.id}\n`
					text += `English : ${data.result.en}`
					newReply(text)
				})
				.catch(console.error)
			break
			case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
  {
    const axios = require('axios');
    const XeonBotInc_dev = await axios.get(`https://github.com/Keizha/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`);
    await arxzy.sendMessage(m.chat, { audio: XeonBotInc_dev.data, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
  }
  break;
  
case 'menfess': case 'confess':
const anon = require('./lib/menfess')
if (Object.values(anon.anonymous).find(p => p.check(sender))) return newReply("You are still in the room")
if (m.isGroup) return newReply(mess.private)
if (args.length < 1) return newReply(`Format: *${prefix+command} Nomor|Pesanmu*\nContoh: *${prefix+command} ${global.numberowner}|Hai Keizha*`)
if (text > 700) return newReply(`*Maksimal 700 Karakter*`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await arxzy.onWhatsApp(num)
if (cekno.length == 0) return newReply(`*Masukkan Nomor WhatsApp Terdaftar & Sah*`)
if (num === m.sender) return newReply(`*Tidak Dapat Confess/Menfess Ke Pemilik Bot*`)
if (num === botNumber) return newReply(`*Tidak Dapat Confess/Menfess Ke Bot*`)
var nomor = m.sender

const xeonconfesmsg = `*Hai, Saya Bot. Seseorang Mengirimkan Pesan Kepada Anda.*

✉️ Pesan: 
*${pesan}*`

await arxzy.sendMessage(num,
{ text: xeonconfesmsg,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.namabot}`,
"body": `${global.namaowner}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ``,
"sourceUrl": `${global.link}`}}}, {quoted:m})

await arxzy.sendMessage(num, {text:`Anda juga bisa membalas pesan dengan memposting pesan, jika tidak ingin membalas silahkan ketik .leave dan tekan tombol posting`}, { quoted : m })
lidt = `Sukses Mengirim Pesan
👤 Dari: *wa.me/${nomor.split("@s.whatsapp.net")[0]}*
👥 Untuk: *wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}*

✉️ Pesanmu:
*${pesan}*`
var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
if (!check) {
anon.createRoom(sender, num)
console.log("[ CONFESS ] Creating room for: " + sender);
return newReply(lidt)
}
break
case 'qc': {
                const {
                    quote
                } = require('./lib/quote.js')
                if (!q) return newReply('Masukan Text')
                let ppnyauser = await await arxzy.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                newReply(mess.wait)
                arxzy.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
            }
            break

            case 'menu':
            case 'help':
                const audios = [
  fs.readFileSync('./media/menu.mp3'),
  fs.readFileSync('./media/bantuan.mp3'),
];
const randomAudio = audios[Math.floor(Math.random() * audios.length)];
arxzy.sendMessage(m.chat, { audio: randomAudio }, { quoted: m });
                let mono = '```'
                let menunya = `
*Hᴀʟʟᴏ ${pushname} 👋*

${readmore}
*INFO BOT & PENGGUNA*
• Nᴀᴍᴀ Bᴏᴛ: Cʜᴀʀʟᴏᴛᴛᴇ
• Rɪʟɪs: 10 Oᴋᴛᴏʙᴇʀ 2023
• Vᴇʀsɪ: 0.1.03
• Tᴏᴛᴀʟ Hɪᴛ: ${JSON.parse(fs.readFileSync('./src/total-hit-user.json'))[0].hit_cmd} Hɪᴛ
• Tᴏᴛᴀʟ Pᴇɴɢɢᴜɴᴀ: ${Object.keys(_user).length} Pᴇɴɢɢᴜɴᴀ
• Sᴛᴀᴛᴜs Pᴇɴɢɢᴜɴᴀ: ${isPremium ? "Pʀᴇᴍɪᴜᴍ" : "Tᴀɴᴘᴀ Pʀᴇᴍɪᴜᴍ"}

*Gʀᴀᴛɪs Dɪᴛᴀᴍʙᴀʜᴋᴀɴ Kᴇɢʀᴜᴘ*
*Lɪʜᴀᴛ Tᴀᴜᴛᴀɴ Dɪʙᴀᴡᴀʜ Iɴɪ*
*— msha.ke/charlotte_page*

${readmore}
Cᴏ-Oᴘ Yᴜᴋ *UID: 836400938*

${readmore}
*UTAMA*
${mono}${prefix}botstatus 
${prefix}buypremium
${prefix}sewabot
${prefix}speedtest
${prefix}runtime
${prefix}donate
${prefix}owner
${prefix}charlotte
${prefix}eris
${prefix}alora
${prefix}carla
${prefix}openai
${prefix}confess
${prefix}menfess${mono}

*NSFW*
${mono}${prefix}gifhentai
${prefix}doujinlatest
${prefix}doujinsearch
${prefix}nekopoi
${prefix}nekopoisearch
${prefix}nhentaisearch
${prefix}nhentai
${prefix}xnxx
${prefix}xnxxdownload
${prefix}18booty
${prefix}18armpits
${prefix}18anal
${prefix}18ahegao
${prefix}18cum
${prefix}18blowjob
${prefix}18blowjob2
${prefix}18bigtiddies
${prefix}18feets
${prefix}18trap
${prefix}18feetg
${prefix}18eroyuri
${prefix}18ero
${prefix}18eroyuri
${prefix}18erokemo
${prefix}18blowjob2
${prefix}18kuni
${prefix}18holoero
${prefix}18hentai
${prefix}18futanari
${prefix}18femdom
${prefix}18milf
${prefix}18loli
${prefix}18loli2
${prefix}18lewd
${prefix}18lewdk
${prefix}18waifu
${prefix}18tits
${prefix}18solog
${prefix}18pussy
${prefix}18neko
${prefix}paptt${mono}

*ANIME*
${mono}${prefix}character
${prefix}anime
${prefix}mangasearch
${prefix}quotesanime
${prefix}shinobu
${prefix}fanart
${prefix}elf
${prefix}foxgirl
${prefix}shota
${prefix}elaina
${prefix}akira
${prefix}akiyama
${prefix}ana
${prefix}asuna
${prefix}ayuzawa
${prefix}boruto
${prefix}chiho
${prefix}chitoge
${prefix}cosplayloli
${prefix}cosplaysagiri
${prefix}deidara
${prefix}doraemon
${prefix}elaina
${prefix}elf
${prefix}emilia
${prefix}erza
${prefix}gremory
${prefix}hestia
${prefix}hinata
${prefix}husbu
${prefix}inori
${prefix}isuzu
${prefix}itachi
${prefix}itori
${prefix}kaga
${prefix}kagura
${prefix}kakasih
${prefix}kaori
${prefix}keneki
${prefix}kotori
${prefix}kurumi
${prefix}loli
${prefix}madara
${prefix}megumin
${prefix}mikasa
${prefix}mikey
${prefix}miku
${prefix}minato
${prefix}naruto
${prefix}neko
${prefix}nekonime
${prefix}nezuko
${prefix}onepiece
${prefix}pokemon
${prefix}randomnime
${prefix}randomnime2
${prefix}rize
${prefix}sagiri
${prefix}sakura
${prefix}sasuke
${prefix}shina
${prefix}shinka
${prefix}shinomiya
${prefix}shizuka
${prefix}shota
${prefix}tejina
${prefix}toukachan
${prefix}tsunade
${prefix}waifu
${prefix}animewall
${prefix}yotsuba
${prefix}yuki
${prefix}yulibocil
${prefix}yumeko
${prefix}feed
${prefix}goose
${prefix}gecg
${prefix}8ball
${prefix}woof
${prefix}tickle
${prefix}meow
${prefix}avatar
${prefix}lizard
${prefix}feed
${prefix}cry
${prefix}kill
${prefix}hug
${prefix}pat
${prefix}lick
${prefix}kiss
${prefix}bite
${prefix}yeet
${prefix}bully
${prefix}bonk
${prefix}wink
${prefix}poke
${prefix}nom
${prefix}slap
${prefix}smile
${prefix}wave
${prefix}awoo
${prefix}blush
${prefix}smug
${prefix}glomp
${prefix}happy
${prefix}dance
${prefix}cringe
${prefix}cuddle
${prefix}highfive
${prefix}handhold${mono}

*INTERNET*
${mono}${prefix}define
${prefix}drakorongoing
${prefix}artimimpi
${prefix}growtopia
${prefix}growiki
${prefix}genshin
${prefix}kumparan
${prefix}jalantikus
${prefix}katabucin
${prefix}kodepos
${prefix}kisahnabi
${prefix}jadwalsholat
${prefix}hadist
${prefix}niatsholat
${prefix}quotesislami
${prefix}quotesdilan
${prefix}quotes
${prefix}puisi
${prefix}pantun
${prefix}katabijak
${prefix}searchbijak
${prefix}jadwaltvnow
${prefix}jadwalbola
${prefix}spotify
${prefix}superhero
${prefix}film
${prefix}wallphone
${prefix}wallml
${prefix}indo
${prefix}tiktokbocil
${prefix}tiktoknotnot
${prefix}tiktokpanrika
${prefix}tiktokgirl
${prefix}blackpink
${prefix}antiwork
${prefix}aesthetic
${prefix}randomboy
${prefix}doggo
${prefix}cat
${prefix}cosplay
${prefix}boneka
${prefix}bike
${prefix}car
${prefix}notnot
${prefix}kpop
${prefix}kayes
${prefix}justina
${prefix}ryujin
${prefix}rose
${prefix}pubg
${prefix}profilepic
${prefix}couplepic${mono}

*ALAT*
${mono}${prefix}qc
${prefix}ttp
${prefix}attp
${prefix}removebg
${prefix}gitclone
${prefix}cuaca
${prefix}coronaglobal
${prefix}coronaindonesia
${prefix}checkresi
${prefix}brainly
${prefix}roboguru
${prefix}lirik
${prefix}kbbi
${prefix}randombahasa
${prefix}sfile
${prefix}ipaddress
${prefix}hextostr
${prefix}strtohex
${prefix}wikipedia
${prefix}ytstalk
${prefix}ttstalk
${prefix}playstore
${prefix}sticker
${prefix}snobg
${prefix}swm
${prefix}smeme
${prefix}toimage
${prefix}tovideo
${prefix}toaudio
${prefix}tomp3
${prefix}tovn
${prefix}togif
${prefix}tourl
${prefix}toqr
${prefix}toviewonce
${prefix}fliptext
${prefix}emojimix1
${prefix}emojimix2
${prefix}remini
${prefix}reminiv2
${prefix}recolor
${prefix}telestick${mono}

*PENGUNDUHAN*
${mono}${prefix}tiktok
${prefix}ttdl
${prefix}ttaudio
${prefix}cocofun
${prefix}mediafire
${prefix}pindl
${prefix}snackvideo
${prefix}ytmp3
${prefix}ytmp4
${prefix}igdl
${prefix}igdlh
${prefix}pindl
${prefix}ytplay
${prefix}spotifydl${mono}

*GRUP*
${mono}${prefix}closetime
${prefix}opentime
${prefix}kick
${prefix}add
${prefix}promote
${prefix}demote
${prefix}setppgc
${prefix}tagall
${prefix}hidetag
${prefix}totag
${prefix}group
${prefix}editinfo
${prefix}linkgc
${prefix}revoke
${prefix}listonline${mono}

*KONVERSI AUDIO*
${mono}${prefix}bass
${prefix}blown
${prefix}deep
${prefix}arrape
${prefix}fast
${prefix}fat
${prefix}nightcore
${prefix}reverse
${prefix}robot
${prefix}slow
${prefix}smooth
${prefix}tupai${mono}

*BASIS DATA*
${mono}${prefix}addvideo
${prefix}addimage
${prefix}addsticker
${prefix}addvn
${prefix}delvideo
${prefix}delimage
${prefix}delsticker
${prefix}delvn
${prefix}listvideo
${prefix}listimage
${prefix}liststicker
${prefix}listvn${mono}

*PERMAINAN*
${mono}${prefix}tictactoe
${prefix}suitpvp
${prefix}kuismath
${prefix}tebak gambar
${prefix}tebak kata
${prefix}tebak kalimat
${prefix}tebak lirik
${prefix}tebak tebakan
${prefix}tebak bendera
${prefix}tebak bendera2
${prefix}tebak kabupaten
${prefix}tebak kimia
${prefix}tebak asahotak
${prefix}tebak siapakahaku
${prefix}tebak susunkata
${prefix}tebak tekateki
${prefix}couple
${prefix}stupidcheck
${prefix}evilcheck
${prefix}greatcheck
${prefix}smartcheck
${prefix}uncleancheck
${prefix}hotcheck
${prefix}coolcheck
${prefix}waifucheck
${prefix}dogcheck
${prefix}rate
${prefix}dimanakah
${prefix}apakah
${prefix}kapankah
${prefix}saya
${prefix}bisakah
${prefix}bagaimanakah
${prefix}alay
${prefix}waifucheck
${prefix}dogcheck
${prefix}jodoh
${prefix}stupid
${prefix}foolish
${prefix}smart
${prefix}idiot
${prefix}gay
${prefix}lesbi
${prefix}bastard
${prefix}stubble
${prefix}dog
${prefix}fuck
${prefix}ape
${prefix}noob
${prefix}great
${prefix}horny
${prefix}wibu
${prefix}asshole
${prefix}handsome
${prefix}beautiful
${prefix}cute
${prefix}kind
${prefix}ugly
${prefix}pretty
${prefix}lesbian
${prefix}randi
${prefix}gandu
${prefix}madarchod
${prefix}kala
${prefix}gora
${prefix}chutiya
${prefix}nibba
${prefix}nibbi
${prefix}bhosdiwala
${prefix}chutmarika
${prefix}bokachoda
${prefix}suarerbaccha
${prefix}bolochoda
${prefix}muthal
${prefix}muthbaaz
${prefix}randibaaz
${prefix}topibaaz
${prefix}cunt
${prefix}nerd
${prefix}behenchod
${prefix}behnchoda
${prefix}bhosdika
${prefix}nerd
${prefix}mc
${prefix}bsdk
${prefix}bhosdk
${prefix}nigger
${prefix}loda
${prefix}laund
${prefix}nigga
${prefix}noobra
${prefix}tharki
${prefix}nibba
${prefix}nibbi
${prefix}mumu
${prefix}rascal
${prefix}scumbag
${prefix}nuts
${prefix}comrade
${prefix}fagot
${prefix}scoundrel
${prefix}ditch
${prefix}dope
${prefix}gucci
${prefix}lit
${prefix}dumbass
${prefix}sexy
${prefix}crackhead
${prefix}mf
${prefix}motherfucker
${prefix}dogla
${prefix}bewda
${prefix}boka
${prefix}khanki
${prefix}bal
${prefix}sucker
${prefix}fuckboy
${prefix}playboy
${prefix}fuckgirl
${prefix}playgirl
${prefix}hot
${prefix}akinator
${prefix}truth
${prefix}dare
${prefix}wangy
${prefix}cekmati
${prefix}halah
${prefix}huluh
${prefix}heleh
${prefix}hilih
${prefix}holoh${mono}

*PEMILIK*
${mono}${prefix}delsesi
${prefix}setimgqouted
${prefix}setimgmenu
${prefix}setvidmenu
${prefix}setmenu
${prefix}setreplay
${prefix}cekapikey
${prefix}join
${prefix}ipserver
${prefix}shutdown  
${prefix}restart
${prefix}autoread
${prefix}autobio
${prefix}mode
${prefix}setwm 
${prefix}setppbot
${prefix}block
${prefix}unblock 
${prefix}backup
${prefix}getcase${mono}`
                if (typemenu === 'v1') {
                    arxzy.sendMessage(m.chat, {
                        image: fs.readFileSync('./media/menu.jpg'),
                        caption: menunya
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    arxzy.sendMessage(m.chat, {
                        text: menunya,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `Bot Created By ${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    arxzy.sendMessage(m.chat, {
                        video: fs.readFileSync('./media/menu.mp4'),
                        caption: menunya,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    arxzy.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: menunya
                        }
                    }, {})
                }
                break
            default:
                  if (isSimi && body != undefined) {
                     // res = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${body}&badword=true`)
                     res = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`)
                     newReply(res.success)
                  }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
        }
    } catch (err) {
        arxzy.sendText(numberowner + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
