function process_argv() {
    const { argv } = process;
    const result = studentData(argv[2], argv[3]);

    return result;
}

function studentData(name, studentId) {
    let facultyList = [
        ["Fakultas Ekonomi", "Ekonomi"],
        ["Fakultas Ekonomi", "Manajemen"],
        ["Fakultas Ekonomi", "Akuntansi"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
        ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
        ["Fakultas Teknik", "Teknik Sipil"],
        ["Fakultas Teknik", "Arsitektur"],
        ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
        ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
        ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
    ];

    let result = {
        id: studentId,
        name: name,
    }

    let codeProgram = Number(studentId.slice(4,6));
    
    switch (codeProgram) {
        case 21:
            result.prody = facultyList[0][1];
            result.faculty = facultyList[0][0];
            break;
        case 22:
            result.prody = facultyList[1][1];
            result.faculty = facultyList[1][0];
            break;
        case 23:
            result.prody = facultyList[2][1];
            result.faculty = facultyList[2][0];
            break;
        case 31:
            result.prody = facultyList[3][1];
            result.faculty = facultyList[3][0];
            break;
        case 32:
            result.prody = facultyList[4][1];
            result.faculty = facultyList[4][0];
            break;
        case 33:
            result.prody = facultyList[5][1];
            result.faculty = facultyList[5][0];
            break;
        case 41:
            result.prody = facultyList[6][1];
            result.faculty = facultyList[6][0];
            break;
        case 42:
            result.prody = facultyList[7][1];
            result.faculty = facultyList[7][0];
            break;
        case 51:
            result.prody = facultyList[8][1];
            result.faculty = facultyList[8][0];
            break;
        case 52:
            result.prody = facultyList[9][1];
            result.faculty = facultyList[9][0];            
            break;
        case 53:
            result.prody = facultyList[10][1]
            result.faculty = facultyList[10][0];
            break;
    
        default:
            return "Invalid Student's ID";
            break;
    }
    
    result.thesisLecturer = getLecturer(result.prody);

    return result; // TODO: replace this
}

function getLecturer(prody) {
    const lecturerList = [
        ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
        ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
        ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
        ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
        ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
        ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
        ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
        ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
        ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
        ["Liem Chin, SSi., MSi.", "Fisika"],
        ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
    ];
    let result;
    lecturerList.forEach(element => {
        if(element[1] === prody){
            result = element[0];
        }
    });
    return result; // TODO: replace this
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};
