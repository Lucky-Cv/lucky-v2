import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `β³οΈ Ingrese un link de Tiktok\n\n π Ejemplo : ${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1`
if (!args[0].match(/tiktok/gi)) throw `β verifica que el link sea de tiktok`

    const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    //const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
   const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'β Error al descargar el video'
    m.react(rwait)
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
βββ· TIKTOK
β’ *Nickname:* ${nickname} ${description ? `\nβ’ *DescripciΓ³n:*${description}` : ''}
ββββββββββββ
`.trim(), m)

m.react(done)
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = ['tiktok', 'tiktoknowm', 'tiktokdl'] 

export default handler
