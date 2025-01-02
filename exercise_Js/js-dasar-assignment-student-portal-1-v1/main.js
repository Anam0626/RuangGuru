function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    let totalSks = 0;
    let namaProdi = "";

    if (gpa > 2.99 && gpa <= 4) {
        totalSks += 24;
    } else if (gpa >= 2.5 && gpa <= 2.99){
        totalSks = "21";        
    } else if (gpa >= 2 && gpa <= 2.49){
        totalSks = "18";
    } else if (gpa >= 1.5 && gpa <= 1.99) {
        totalSks = "15";
    } else if (gpa >= 0 && gpa <= 1.49) {
        totalSks = "12";
    } else {
        return "Invalid gpa number";
    }
    console.log(totalSks)
    switch (programId) {
        case "ACC":
            namaProdi = "Akuntansi";
            break;
        case "HIN":
            namaProdi = "Hubungan Internasional";
            break;
        case "IAB":
            namaProdi = "Ilmu Administrasi Bisnis";
            break;
        case "IAP":
            namaProdi = "Ilmu Administrasi Publik";
            break;
        case "MJN":
            namaProdi = "Manajemen";
            break;
        case "TKM":
            namaProdi = "Teknik Kimia";
            break;
    
        default:
            break;
    }
    if (gpa >= 3 && gpa <= 4) {
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${totalSks} SKS untuk semester depan.`;
    } else if(gpa < 3 && gpa >= 0){
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${namaProdi} dan hanya dapat mengambil SKS sebanyak ${totalSks} SKS untuk semester depan.`
    }
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
