const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348137573663";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_18_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExLFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi84WHR3a0tIbnIxUkQ3YTFmOFFuZU9FYnluUFdrS2szVUFtVFVwNFl5VU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlIwdnVPX2JGVGR5amNyUWdyWHR6a1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODlmZTY0ZDEtN2JkNi00YjY0LWJiMTgtZGIyZDZlMGE0NjAyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDksXG4gICAgICAyNDYsXG4gICAgICAxOTUsXG4gICAgICAwLFxuICAgICAgMTExLFxuICAgICAgMTgxLFxuICAgICAgMTc4LFxuICAgICAgNCxcbiAgICAgIDExMSxcbiAgICAgIDI4LFxuICAgICAgMTEyLFxuICAgICAgMTk5LFxuICAgICAgMTI5LFxuICAgICAgNjMsXG4gICAgICA2NixcbiAgICAgIDExMixcbiAgICAgIDE5NSxcbiAgICAgIDYzLFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgMjMsXG4gICAgICAxOTEsXG4gICAgICAxODQsXG4gICAgICAyMDUsXG4gICAgICAxODYsXG4gICAgICAxMTgsXG4gICAgICA2MSxcbiAgICAgIDIwOSxcbiAgICAgIDE5LFxuICAgICAgMTA2LFxuICAgICAgMzAsXG4gICAgICA5OSxcbiAgICAgIDE5NyxcbiAgICAgIDEwNSxcbiAgICAgIDExOSxcbiAgICAgIDIyNCxcbiAgICAgIDE3NSxcbiAgICAgIDIzMixcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjYyR1FTQjlOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM3NTczNjYzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc0MTc4OTUwNzE5NjQ6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN1B1WVFIRU43emxMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBxeUtyOEZ2TGRaczFUb2hWUi9iMVAxTElpZ1hsRHlyQTZxNnBRYVNCV2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieXRKaXlYalF2UkxvSElRYjBEbzltdnBNdXBMcWhKOVRyQkpqYzJQQlZtSGVKV3BDcndqUUJsdnJnUnNzZFRaeVVQVlh4TU9JeFdURjA5T1lYQ2Z5Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFN1VXFzSFBBZlY1S2c5WWo2M1VSbVVibUdYMzBSRnNydndaeS91RVF1eTFKbFFwMEkzRTdXMVAycjd4VnhBRlBMek1EcTNQNmxvaGZaK1U3SDhLaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNzU3MzY2Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxMDQyODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMNzBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw3MC5qc29uIjogIntcImtleURhdGFcIjpcIktoV3NCOHlYb3A0d09pRk9oWkNPSjQyb3JPUm9uNmJYVzd4YUIxc2hVR3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg4ODM4MDkxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTA0MjEwNjg0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
