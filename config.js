const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="benjaminzuze190906@gmail.com@gmail.com"
global.location="Harare/Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Harare/Zimbabwe";
global.github=process.env.GITHUB|| "https://github.com/Agent-Dyke-md/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/Agent-Dyke-md/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE
global.caption = process.env.CAPTION || global.caption || "©by 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" 


global.devs = "263789122322" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "Agent Dyke";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263710366989";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'   // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,263xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "263xxxxxxxxx,263xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263xxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_19_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA1OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICA5MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjksXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICA1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJic3BFdHJ6V3lZMlZUZkZibmlkSURFMVlNY0JsY20zNVlVN2dTMmdYVDg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxMDM2Njk4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjVFNjc3MTczNEVCOTM1NDhEQTk3RDk1MTg3RUVBODhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4NDI1OTY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEwMzY2OTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QTRBMDIyNDdFNzU5RUEzNDZEQkNBNzMzQzcwN0VGM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg0MjU5NjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQW5ULUVmQnJSQy1XQkp6bW82alRnZ1wiLFxuICBcInBob25lSWRcIjogXCI5YTYyOWE0MS1iYjYwLTQyM2EtYjY4MC1kYWVkMjM2OGM2YjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgMjA5LFxuICAgICAgMTY1LFxuICAgICAgMjMsXG4gICAgICA1NSxcbiAgICAgIDE1NyxcbiAgICAgIDU0LFxuICAgICAgMjE1LFxuICAgICAgMTc4LFxuICAgICAgMjksXG4gICAgICAxNTcsXG4gICAgICAyMjMsXG4gICAgICAxNjksXG4gICAgICAxMjIsXG4gICAgICAxNDUsXG4gICAgICAyMTQsXG4gICAgICAyMzQsXG4gICAgICAxNDEsXG4gICAgICAxNzgsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDE3MSxcbiAgICAgIDE1NCxcbiAgICAgIDkxLFxuICAgICAgOTAsXG4gICAgICAxOCxcbiAgICAgIDE1MSxcbiAgICAgIDIsXG4gICAgICAxODcsXG4gICAgICAxMzgsXG4gICAgICA0NixcbiAgICAgIDg1LFxuICAgICAgMjA0LFxuICAgICAgNTgsXG4gICAgICA5NSxcbiAgICAgIDg5LFxuICAgICAgNzgsXG4gICAgICAyMzYsXG4gICAgICAxNzUsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUE4UlFCVk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMDM2Njk4OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVHlsb3ItWFwiLFxuICAgIFwibGlkXCI6IFwiMzg4Mzk5MDkzNzYxMTA6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVEpvK29HRU9YZmxyZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndSUFQ5Y2JmL2xScWRGODFmZFcvRVFaVWtlQmI0akpoZ3h0dXVPcGVHeVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVURKYWsvSUJ6Ykd3NU9xWjhGaXJ6Ly9uWFJrMVNMYlgva1ErLzRIWlk5MlZtWWZJNnZEbkM3NWd5NndFY2hUbGtvbGRSN1kyMCsrbDd2WEdubjFxQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGhtd2NZZ3Rzc25ua3RrOS9IbGNnL3hQTW5WQXU2MVM0Kyt0dVB0Zkp5Sys3Sk5QWFdXcGd6V043Tm51dVcyU2kwS3RCdTFPaHNHNVJDMThSSmJxaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzEwMzY2OTg5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg0MjU5NjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNSmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1KaC5qc29uIjogIntcImtleURhdGFcIjpcIjh1RlR2R3o3QzdqMTUzYm5Ka3orNk10NDRxTi9KaS9hN0Z0TnhKU1VLT0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgzMzQ5Mzc0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4NDI1OTY1NDA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Agent-Dyke-md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞 』```", //*『sᴜʙsᴄʀɪʙᴇ • Empire_Md』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Empire_Md",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Xploader_Md",
  ownername:process.env.OWNER_NAME|| "Agent-Dyke",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-c5_mjyTPg76Sl7gx6yADErKcLzUlfhs4KcNxFBFso4T3BlbkFJQpbBq0QN6CAr8ia7bqJmveKPTmentTE6guHxlLUnUA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Agent-Dyke"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_59adeb8a55b9c60aba5ed8b8001135049f773814fb35e722";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
