async function process_argv() {
    let { argv } = process;
    argv = argv.slice(2);
    const result = await studentActivitiesRegistration(argv);

    return result;
}

async function getStudentActivities() {
    const activities = await fetch("http://localhost:3001/activities");
    const data = await activities.json();
    return data
}

async function studentActivitiesRegistration(data) {
    if (data[0] === "CREATE") {
        return await addStudent(data[1], data[2]);
    } else if (data[0] === "DELETE") {
        return await deleteStudent(data[1]);
    }
}

async function addStudent(name, day) {
    const activities = await getStudentActivities();
    let result = {
        name: name,
        activities: []
    }
    await activities.forEach(activity => {
        for (let i = 0; i < activity.days.length; i++) {
            if (day === activity.days[i]) {
                result.activities.push({
                    name: activity.name,
                    desc: activity.desc
                });
            }
        }        
    });
    const response = await fetch("http://localhost:3001/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(result)
    })
    const newStudent = await response.json();
    return await {
        id: newStudent.id,
        name: newStudent.name,
        activities: newStudent.activities
    };
}

// (async () => {
//     const student = await addStudent("Anshori Atmodiredjo", "Sunday");
//     console.log(student);
// })();


async function deleteStudent(id) {
    await fetch(`http://localhost:3001/students/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    
    return {
        message: `Successfully deleted student data with id ${id}`
    }
}

// (async () => {
//     const deletedStudent = await deleteStudent("2");
//     console.log(deletedStudent);
// })();

process_argv()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = {
    studentActivitiesRegistration,
    getStudentActivities,
    addStudent,
    deleteStudent
};
