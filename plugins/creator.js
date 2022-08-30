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
▢ Facebook : 
  • https://facebook.com/lucky
  • https://facebook.com/Lucky-Cv
▢ YouTube : 
  • https://youtube.com/luck
  
 *≡ HELPERS*
  *CRISS*
▢ Instagram : https://www.instagram.com/
▢ WhatsApp : wa.me/
▢ Instagram : https://Instagram.com/
▢ WhatsApp : wa.me/
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
