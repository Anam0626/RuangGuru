function process_argv() {
  const { argv } = process;
  const result = studentStatus(argv[2], argv[3]);

  return result;
}

function studentStatus(name, studentId) {
  let faculty, programStudyCode, programStudy;

  if (studentId.includes("FE")) {
    faculty = "Fakultas Ekonomi";
    programStudyCode = studentId.replace("FE", "");
  } else if (studentId.includes("FISIP")) {
    faculty = "Fakultas Ilmu Sosial dan Politik";
    programStudyCode = studentId.replace("FISIP", "");
  } else if (studentId.includes("FTIS")) {
    faculty = "Fakultas Teknologi Informasi dan Sains";
    programStudyCode = studentId.replace("FTIS", "");
  } else if (studentId.includes("FT")) {
    faculty = "Fakultas Teknik";
    programStudyCode = studentId.replace("FT", "");
  } 
  switch (programStudyCode.slice(4, 6)) {
    case "21":
      programStudy = "Ekonomi";
      break;
    case "22":
      programStudy = "Manajemen";
      break;
    case "23":
      programStudy = "Akuntansi";
      break;
    case "31":
      programStudy = "Administrasi Publik";
      break;
    case "32":
      programStudy = "Administrasi Bisnis";
      break;
    case "33":
      programStudy = "Hubungan Internasional";
      break;
    case "41":
      programStudy = "Teknik Sipil";
      break;
    case "42":
      programStudy = "Arsitektur";
      break;
    case "51":
      programStudy = "Matematika";
      break;
    case "52":
      programStudy = "Fisika";
      break;
    case "53":
      programStudy = "Informatika";
      break;
    default:
      break;
  }
  

    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${programStudy} pada ${faculty} sejak tahun ${programStudyCode.slice(0,4)}.`;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = studentStatus;
