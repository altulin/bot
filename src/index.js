import bot from "./modules/bot.js";
import Parsing from "./modules/parsingMsg.js";
import sendMessage from "./modules/messages/sendMessage.js";
import { createCmdList } from "./modules/commands/createCmdList.js";

const eventsList = ["text", "callback_query"];

const main = async () => {
  await createCmdList();

  for (const item of eventsList) {
    bot.on(item, (msg) => {
      // const messageIs = msg.hasOwnProperty("message");
      // const {
      //   chat: { id, first_name, username },
      //   text,
      //   message_id,
      // } = messageIs ? msg.message : msg;

      // const options = {
      //   id,
      //   first_name,
      //   username,
      //   text,
      //   message_id,
      //   data: messageIs ? msg.data : null,
      //   inline_keyboard: messageIs
      //     ? msg.message.reply_markup.inline_keyboard
      //     : null,
      // };

      const parsing = new Parsing(msg);

      // handleResponse(options).then(() => sendMessage(options));
      // sendMessage(options);

      sendMessage(parsing);
    });
  }
};

main();
