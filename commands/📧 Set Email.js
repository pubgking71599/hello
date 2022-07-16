/*CMD
  command: 📧 Set Email
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*✏️ Send now your BB Email 
• ━━━━━━━━━━━━━━━━━━━━━ •
To use in all future purchased bots!*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


let msg = message


User.setProperty("Mail",message,"string")

var tgID = message;  
let wallet = User.getProperty("Mail")
Bot.sendMessage("*🖊 Done:* Your new BB Email is :\n"+wallet+"")

