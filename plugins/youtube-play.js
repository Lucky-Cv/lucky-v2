import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `â³ï¸ *Ingresa el tÃ­tulo de una canciÃ³n*\n\nðEjemplo *${usedPrefix + command}* Lil Peep hate my life `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'â³ï¸ VÃ­deo/Audio no encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  
m.react('ð§')
 await conn.sendButton(m.chat, `
  â¡ *FG MUSIC*
âââââââââââââââ
â¢ ð *TÃ­tulo* : ${title}
â¢ ð *Publicado:* ${publishedTime}
â¢ â *DuraciÃ³n:* ${durationH}
â¢ ð *Vistas:* ${viewH}
âââââââââââââââ
  `.trim(), igfg, thumbnail, [
    ['ð¶ MP3', `${usedPrefix}fgmp3 ${url} yes`],
    ['ð¥ MP4', `${usedPrefix}fgmp4 ${url} yes`]
  ], m)
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = ['play', 'playvid', 'play2'] 

handler.exp = 0
handler.limit = false

export default handler

