let handler =  m => m.reply(`

≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *PayPal*
• *Link :* https://paypal.me/valencia
▢ *Mercado Pago Arg*
• *Link :* https://mpago.la/valencia
▢ *Tigo Money*
• *N° :*  979790

_Al donar consigues_  *Premium* 

• Diamantes ilimitados
• comandos de *menu premium* desbloqueado

`.trim())
handler.help = ['donar']
handler.tags = ['main']
handler.command = ['donar', 'apoyar', 'donate', 'premium'] 

export default handler
