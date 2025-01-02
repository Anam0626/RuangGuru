function process_argv() {
    const { argv } = process;
    const result = studentPortal(argv[2]);

    return result;
}

function studentPortal(studentId) {
    const studentList = [
        {
            id: "2010310164",
            name: "Rakanda Pangeran Nasution",
            gpa: 2.65,
            status: false,
        },
        {
            id: "2011310021",
            name: "Yosef Noferianus Gea",
            gpa: 3.1,
            status: true,
        },
        {
            id: "2014310100",
            name: "Angelia",
            gpa: 1.25,
            status: true,
        },
        {
            id: "2011320090",
            name: "Dito Bagus Prasetio",
            gpa: 2.75,
            status: true,
        },
        {
            id: "2011320100",
            name: "Hikman Nurahman",
            gpa: 2.45,
            status: true,
        },
        {
            id: "2010320181",
            name: "Edizon",
            gpa: 1.95,
            status: true,
        },
        {
            id: "2012320055",
            name: "Marrisa Stella",
            gpa: 3.5,
            status: false,
        },
        {
            id: "2012330080",
            name: "Dea Christy Keliat",
            gpa: 3,
            status: true,
        },
        {
            id: "2013330049",
            name: "Sekarini Mahyaswari",
            gpa: 3.5,
            status: true,
        },
        {
            id: "2012330004",
            name: "Yerica",
            gpa: 3.15,
            status: false,
        },
    ];
    const obj = studentList.find((student) => student.id == studentId);
    let result = {
        id: "",
        name: "",
        gpa: 0,
        credits: 0,
        subjects: []
    };
    if (obj === undefined) {
        return "Mahasiswa tidak terdaftar";
    } else if (obj.status === false){
        return `Mahasiswa dengan id ${studentId} sudah tidak aktif`;
    } else if (obj.status === true) {
        result.id = obj.id;
        result.name = obj.name;
        result.gpa = obj.gpa;
        result.credits = getCredits(obj.gpa);
        result.subjects = getSubjects(getCredits(obj.gpa));
    }
    return result;
    
}

function getCredits(gpa) {
    if (gpa > 2.99 && gpa <= 4) {
        return 24;
    } else if (gpa >= 2.5 && gpa <= 2.99){
        return 21
    } else if (gpa >= 2 && gpa <= 2.49){
        return 18
    } else if (gpa >= 1.5 && gpa <= 1.99){
        return 15
    } else if (gpa >= 0 && gpa <= 1.49){
        return 12
    } else {
        return "Input tidak Valid";
    }
}

function getSubjects(credits) {
    const subjectsList = [
        {
            subjectName: "Ilmu Politik",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Ilmu Ekonomi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Estetika",
            credit: 1,
            status: "pilihan",
        },
        {
            subjectName: "Kepemimpinan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Etika",
            credit: 2,
            status: "pilihan",
        },
        {
            subjectName: "Sosiologi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Teori Pengambil keputusan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Statistika",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Aplikasi IT",
            credit: 3,
            status: "pilihan",
        },
    ];
    let matkulWajib = subjectsList.filter((subject) => subject.status === "wajib");
    let matkulPilihan = subjectsList.filter((subject) => subject.status === "pilihan");
    let compareCredit = matkulPilihan.sort((a,b) => b.credit - a.credit);
    let credit = credits;
    let result = [];
    matkulWajib.forEach(element => {
        if (element.credit <= credit) {
            result.push(element);
            credit -= element.credit;
        } 
            
    });
    compareCredit.forEach(element => {
        if(element.credit <= credit){
            result.push(element);
            credit -= element.credit;
        }
    });
    return result
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentPortal,
    getSubjects,
    getCredits,
};
