/*CMD
  command: π€Support
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*π You are now in direct contact with our Administrator
β’ ββββββββββββββββββββ β’
You can send here any message you want to submit, the administrator will receive it and send an answer directly here in chat!*
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
let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*π© Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(868205118, "*π© New Support Message From User π©\n\nπ€΄π» User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n πTelegram id = "+user.telegramid+"\n\n*π Message = "+message+"*")
Bot.runCommand("/start")
