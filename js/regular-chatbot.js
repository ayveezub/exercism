/*

You have been hired as a Regular Expression Specialist in a company that is developing a Chatbot.

It is in a very basic phase of development, hence your mission is to use Regular Expressions to improve the chatbot's ability to understand and generate natural language.

*/

export function isValidCommand(command) {
  return /^chatbot/i.test(command)
}

export function removeEmoji(message) {
  const emojiRe = new RegExp(/emoji\d+/, 'gi')

  return message.replace(emojiRe, '')
}

export function checkPhoneNumber(number) {
  const formatRe = /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/
  const valid = 'Thanks! You can now download me to your phone.'
  const invalid = "Oops, it seems like I can't reach out to " + number

  if (formatRe.test(number)) return valid
  return invalid
}

export function getURL(userInput) {
  return userInput.match(/\w+\.\w{2,}/gi)
}

export function niceToMeetYou(fullName) {
  return 'Nice to meet you, '
    + fullName.replace(/,/g, '').replace(/(\w+)\s(\w+)/, '$2 $1')
}
