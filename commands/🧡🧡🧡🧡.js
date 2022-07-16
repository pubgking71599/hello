/*CMD
  command: 🧡🧡🧡🧡
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

    }
      var button= [{title:"📤 Support", command:"📤Support"}]
  Bot.sendInlineKeyboard(button  , "*We're really Sad to know this! Please write us message, How can we improve? we're always looking forward to your feedback ❤️*")
