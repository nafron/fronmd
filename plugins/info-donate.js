let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『ꜱᴜᴘᴘᴏʀᴛ』––––––*`, 
`ᴀᴘᴀʙɪʟᴀ ʙᴏᴛ ꜱᴜᴅᴀʜ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀʟɪᴀɴ ᴛᴏʟᴏɴɢ ᴅɪ ꜱᴜᴘᴘᴏʀᴛ ʏᴀ ᴋᴀᴋ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ꜱᴜʙꜱᴄʀɪʙᴇ ʏᴏᴜᴛᴜʙᴇ ᴀᴅᴍɪɴ ^^
ᴀɢᴀʀ ʙᴏᴛ ᴛᴇᴛᴀᴘ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ ꜱᴀᴍᴀ ᴀᴅᴍɪɴ ᴋᴀʀᴇɴᴀ ᴅᴀᴘᴀᴛ ꜱᴜᴘᴘᴏʀᴛ ><

⮕ ʏᴏᴜᴛᴜʙᴇ
★ ᴋʟɪᴋ ʏᴏᴜᴛᴜʙᴇ ᴅᴀɴ ᴛᴇᴋᴀɴ ᴛᴏᴍʙᴏʟ ꜱᴜʙꜱᴄʀɪʙᴇ 🙏😄.`, './media/donate.jpg', 'https://youtube.com/channel/UCafhMtYpLNgvoAVDFNrQgdg', '𝐘𝐎𝐔𝐓𝐔𝐁𝐄', null, null, [[`ᴍᴇɴᴜ`, `${usedPrefix}menu`]], m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler