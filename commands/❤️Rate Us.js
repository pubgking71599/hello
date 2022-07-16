/*CMD
  command: ❤️Rate Us
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
var button=[[{title:"❤️❤️❤️❤️❤️",command:"❤️❤️❤️❤️❤️"}],[{title:"🧡🧡🧡🧡",command:"🧡🧡🧡🧡"}],[{title:"💚💚💚",command:"💚💚💚"}],[{title:"💙💙",command:"💙💙"}],[{title:"🖤",command:"🖤"}]]
Bot.sendInlineKeyboard(button,"*💛 Please Rate Us :\n• ━━━━━━━━━━━━ •*")
