let correctCapitalization = function (params){
    let result = "";
    let split = params.split(".");
    for (let i = 0; i < split.length; i++) {
        let trim = split[i].trimStart();
        let upper = trim.replace(trim.at(0), trim.toUpperCase().at(0));
        if (i === split.length - 1) {
            result += upper; 
        } else {
            result += upper + ". "; 
        }
    }
    return result.trim(); 
}

console.log(correctCapitalization("ruangguru adalah sebuah perusahaan rintisan digital asal Indonesia yang bergerak di bidang pendidikan nonformal. ruangguru menawarkan platform pembelajaran berbasis kurikulum sekolah melalui video tutorial interaktif oleh guru dan animasi di aplikasi ponsel dan komputer. perusahaan ini didirikan oleh Belva Devara dan Iman Usman pada April 2014."));
module.exports = correctCapitalization;
