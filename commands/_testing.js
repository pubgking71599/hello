/*CMD
  command: /testing
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: give

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
var ko = data.message
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
User.setProperty("movie", message, "string")
HTTP.get({
  url: "http://www.omdbapi.com/?apikey=4d146d7&t=" + ko + "",
  success: "/onMode ",
  on_error: "/onMerror"
})


