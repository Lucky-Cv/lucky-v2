function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *Lucky-Cv*
▢ Instagram :
  • https://instagram.com/luck._
▢ WhatsApp :
  • (escribe solo si es necesario) 
▢ GitHub :
  • https://github.com/Lucky-Cv
▢ Telegram : 
  • t.me/fgsupp_bot (FG) 
  • t.me/fg98ff (canal)
  • t.me/fgawgp (grupo)
▢ Facebook : 
  • https://facebook.com/
  • https://facebook.com/
▢ YouTube : 
  • https://youtube.com/
  
 *≡ HELPERS*
  *CRISS*
▢ Instagram : https://www.instagram.com/
▢ WhatsApp : wa.me/
▢ Instagram : https://
▢ WhatsApp : wa.me/
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
