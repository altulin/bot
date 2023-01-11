import bot from "../bot.js";
import { idAl } from "../private.js";
import getInfoGuest from "./quest.js";
import { cmdList } from "../commands/createCmdList.js";

const getCurrentCmd = (text) => {
  const cmd = cmdList.filter((i) => {
    return i.command === text;
  })[0];

  return cmd ? cmd : false;
};

const sendMessage = (data) => {
  const { id, text } = data;
  const currentCmd = getCurrentCmd(text);
  const { response } = currentCmd;

  if (id !== idAl) {
    bot.sendMessage(idAl, getInfoGuest(data));
  }

  if (!currentCmd) {
    bot.sendMessage(id, "error");
    return;
  }

  bot.sendMessage(id, response);
};

export default sendMessage;
