const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://api-ryubotz.herokuapp.com',
}

global.APIKeys = {
	'https://api-ryubotz.herokuapp.com': 'RyuBotz',
}

//===> UBAH DISINI
global.namaowner = '๐๐ฒ๐ฒ๐น๐๐ฎ๐ฎ ๐๐' //Ganti Jadi Namamu
global.owner = ['6281218935054'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '6281218935054' //Owner Utama Istilahnya
global.namabot = 'Erpeel Botz' //Ganti Jadi Nama Botmu
global.packname = 'ยฉ ๐๐๐๐ฅ๐ณ๐๐ ๐๐ ยฎ' //Sticker Weem
global.author = 'Bot By ๐๐๐๐ฅ๐ณ๐๐' //Sticker Weem
global.webme = 'https://api-ryubotz.herokuapp.com'
global.sessionName = 'session'
global.bg_welcome = 'https://telegra.ph/file/528b594d5d91c08482515.jpg' //Max 30kb Agar Tidak Delay
global.youtube = 'https://youtube.com/c/WindahBasudara'
global.github = 'https://github.com/R-TEAM94'
global.instagram = 'https://www.instagram.com/fil.zaard'

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','.']
global.sp = 'โญ'

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '*LU ADMIN? ๐คจ Kenal Ijat Dong?*',
botAdmin: '*BOT BUKAN ADMIN ๐*',
owner: '*LU BUKAN OWNER GW ๐ *',
group: '*KHUSUS GROUP ๐*',
private: '*KHUSUS PRIVATE CHAT*',
bot: '*KHUSUS PENGGUNA NOMER BOT*',
wait: '*SABAR SEDANG DI PROSES ...*',
done: '*DONE NGAB ๐ค*',
}
global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})