import TelegramBot from "node-telegram-bot-api";
import { token } from "./private.js";

const bot = new TelegramBot(token, { polling: true });

export default bot;
