const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_07_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICA4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODksXG4gICAgICAgIDkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqdHZlVktDZnBOd29WRUx2aEpEbStFcWVoQWdZWlVwSCtVUHRsK3NrWUZjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXSXJWVE12NVJIcUI1djRkcWgxMURRXCIsXG4gIFwicGhvbmVJZFwiOiBcImUwZDc4OWM3LWY5MDktNDZiMS1hNzZiLTM3Y2Y2ODlhMDAyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxMDAsXG4gICAgICA5OSxcbiAgICAgIDE4OSxcbiAgICAgIDIwMSxcbiAgICAgIDIxNyxcbiAgICAgIDEwMyxcbiAgICAgIDIzOCxcbiAgICAgIDI1MCxcbiAgICAgIDE2NCxcbiAgICAgIDM1LFxuICAgICAgMjMwLFxuICAgICAgMTI1LFxuICAgICAgNTgsXG4gICAgICAxMTMsXG4gICAgICAxNDMsXG4gICAgICAwLFxuICAgICAgODUsXG4gICAgICAzNCxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAyMzcsXG4gICAgICAxNzYsXG4gICAgICA2LFxuICAgICAgMjI1LFxuICAgICAgNTIsXG4gICAgICAxODYsXG4gICAgICA3MCxcbiAgICAgIDg3LFxuICAgICAgNDcsXG4gICAgICA5MSxcbiAgICAgIDU3LFxuICAgICAgMTMzLFxuICAgICAgMjA5LFxuICAgICAgNzAsXG4gICAgICAxMzksXG4gICAgICAyMDQsXG4gICAgICAyNTEsXG4gICAgICAxMjIsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNT2Q5TzRGRUtIL2hzUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInV6blMyZjZDMDFBcnJFNlNjUTZpNjJxN3Nqa2p0eFIwYW1vNndmay9qQnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNTRWTnQ0Q2ZreFEzNGwzWWpORXpKNWxOOHErbm5OdXU5T0pyME15SUJkN2tUQUVaNDNPZFROU3NiNktjNzU0WmFpT0NabjdwbGdVWFZzaEJDYXdIQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidUFPQXhESDQ1SnBmL0ZCaUE4R2tpb1UzVlZVblpRU1lSbTVORWtqUitQUkc0TjlzM2lOZGJVV0JrNHpYYUY2MWJ5SWhxU091ejRtRGFhdFo5ZmdMQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM1NTI4ODEyMTQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg2NjgxNDQxNDQ4MTg0OjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM1NTI4ODEyMTQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTMzMzM2NjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJLzVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlfXzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBMHJSSUdSbllpZ0xKY1c3a0ttMFlmdWMxeU84eHk5U0ZGdU42VGdhUlNjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NzQ3NjgzMjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzI5MjE1OTYzMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
