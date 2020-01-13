/*
SLACK CLONE

Message:
  Properties (information stored)
  - id (unique id)
  - time written
  - user (sender)
  - user (receiver)
  - text
  - attachments (images, links, code, etc...)

  Methods (things it needs to do)
  - getFormattedDate
  - edit
  - delete
  - clear
*/

class Message {
  constructor(fromUser, toUser, theMsg) {
    this.time = new Date()
    this.from = fromUser
    this.to = toUser
    this.text = theMsg
  }
  getFormattedDate() {
    // return `${this.time.toLocaleTimeString('en-US')}`;
    return `${this.time.getFullYear()}-${this.time.getMonth()+1}-${this.time.getDate()}`
  }
  getFormattedText() {
    return `${this.from}: ${this.text}`
  }
}

const msg1 = new Message(`Susan`, `Chau`, `Hi, did you get my email?`);
const msg2 = new Message(`Chau`, `Susan`, `No. Didn't check my emails yet. brb`);

console.log(msg1.time)
console.log(msg1.getFormattedDate())

/* 
Using the code above...
1. Collect all of the existing messages (references) in an Array called "messages"
2. Test this by pushing a new messages to the Array after it has been constructed
3. Print all messages to the console using the getFormattedText
4. Push a new message to the Array and re-update the console
*/