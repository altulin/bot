class Parsing {
  constructor(msg) {
    const {
      chat: { id, first_name, username },
      text,
      message_id,
    } = msg;

    this.id = id;
    this.first_name = first_name;
    this.username = username;
    this.text = text;
    this.message_id = message_id;
  }
}

export default Parsing;
