//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZOd2UvS05TL25mYVlxYUYvUlBTblVHcHZBNnlUejNGV2VxWTZHUXMyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM00rVVFyMlFWbWprRk1zQW1YVWpRbjVUTjlQOUhNYjBSWElSS0NjeFYxUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSjRJQ3B4eXIxdXdwNUdUY010R1JZd2JMbEtVT1pyQnJ0bkJzOGcxZkZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLOUdreHZOeXhRWUNyZ0JIOHVoekZpd1JDdnVjZHI3REdBcDZFRU1Ecmc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFQcDMzbGVlM1BmT2xEOEhYRTU4d2orOE9NaEpsYjBHS2hScmZMMHlNMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFiSkI1em1Wc010QUlEYnhFaitCOFBiOGRQYzN6ZlAwY1FVTGNkcG5iQXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JJOTNYVUZHYU1ZTFI1ZFlCY0lubDJvVjQwR3ZjdFFYQnJVd2N5MUJWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaE1tQ0JIMHBCcTQ5cUFudU81WEd5T3plVVF5Q3RJRzYycUVSZWJVTXpCMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU0SUc2M2tFZnFCTXBFSTNtd1JsY0VqL01QOFBJaHBFYUZIQUdBYXVwVmtkRlRiaGl4RFEwVlY5Yk02TEZWL0VBd1NCcVl3RGdNTVA1ZEhjVXJNekFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJHbnJkbTJuTjN5c2VuUkwwRVB2Vk9qc01lWU5LcDVjTlpERnhSMkllYjZFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk3MjUzMjc0MDY4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRjUwRjFFNjExMjFEMTIwM0E3NEVFREVFQjMyRDFBRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3NjA1OTQ0fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZMVdWUEdvb1NSV2YtUU1FTkU4UjV3IiwicGhvbmVJZCI6IjY5N2ZlNTQwLWI0ZmItNDQ0MC05Y2QxLWVhMDg3MjM1MjU0NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvQ2REQTBWTXZXYUN4N092ZWpVdGw1eE1ZaU09In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpRejZMTmZ4YnhoQUxIMUY0MTdvRVptbXJWMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05IeHFiVURFS3ZaNUxjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVuL1Y0U2pSWXlqTlp4RUgvUEpMb3FOUU0wM1cvZnJ6VDY0THhVNjY4Rnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhWd0tRMlpDK1pGWjBtcW5PZEVZeG5hNU5vQ0N4dGlrRkc5QUwzdTh5UVdlcHc5cVc0VkY0b0dHa21icTZRdUtwZkMxMXZVc0lSaHJ0RnhCREpYWUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpM0FJUXNUMGxEKzNna0JiSW1mNVdhcTBKaU83ejFBUGVpeEpxNzNnMWlmcWxHdS9obnhhUTl3UFI2NUI2V1dlRUVaRDhBd2JsMGNTTmVHYVBobTRCQT09In0sIm1lIjp7ImlkIjoiOTcyNTMyNzQwNjg3OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZGF6YWkgYm90In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk3MjUzMjc0MDY4NzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJwLzFlRW8wV01veldjUkIvenlTNktqVUROTjF2MzY4MCt1QzhWT3V2QmMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2MDU5NDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRjUwIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
