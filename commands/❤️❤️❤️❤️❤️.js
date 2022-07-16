/*CMD
  command: ❤️❤️❤️❤️❤️
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

 if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
    var a= User.getProperty("Rate")
      if (a == user.telegramid){
        Bot.sendMessage("*❤️ You Already Rated Us Thanks Once Again*")
        }else{  
Api.sendMessage({
        chat_id: "@Dalyloots",
        text:
          "*❤ New Rating Received\n• ━━━━━━━━━━━━━━━━━━━━ •\n🥇 Name :* "+user.first_name+"*\n 👨‍💻 User Id : *"+user.telegramid+"*\n\n😍 Rating : 🌟\n• ━━━━━━━━━━━━━━━━━━━━━ •*",
        parse_mode: "Markdown"
      })
      User.setProperty("Rate",user.telegramid,"integer")}
      
      Bot.sendMessage("*💛👏💛 Thanks For Rating Us*")
      

