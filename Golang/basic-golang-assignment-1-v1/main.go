package main

import (
	"fmt"
	"strings"

	"a21hc3NpZ25tZW50/helper"
)

var Students string = "A1234_Aditira_TI, B2131_Dito_TK, A3455_Afis_MI"
var StudentStudyPrograms string = "TI_Teknik Informatika, TK_Teknik Komputer, SI_Sistem Informasi, MI_Manajemen Informasi"

func Login(id string, name string) string {
	if id == "" || name == ""{
		return "ID or Name is undefined!"	
	}
	if len(id) != 5 {
		return "ID must be 5 characters long!"
	}
	
	studentList := strings.Split(Students, ",")
	for _, student := range studentList {
		studentData := strings.Split(student, "_")
		if len(studentData) == 3 && strings.Contains(studentData[0], id) && strings.Contains(studentData[1], name){
			return fmt.Sprintf("Login berhasil: %s (%s)", name, studentData[2])
		}
	}
	return "Login gagal: data mahasiswa tidak ditemukan"
}



func Register(id string, name string, major string) string {
	if id == "" || name == "" || major == "" {
		return "ID, Name or Major is undefined!"
	}
	if len(id) != 5 {
		return "ID must be 5 characters long!"
	}
	studentList := strings.Split(Students, ",")
	for _, student := range studentList {
		studentData := strings.Split(student, "_")
		if len(studentData) > 0 && studentData[0] == id{
			return "Registrasi gagal: id sudah digunakan"
		}
	}
	Students += fmt.Sprintf(", %s_%s_%s", id, name, major)
	return fmt.Sprintf("Registrasi berhasil: %s (%s)", name, major)
}

func GetStudyProgram(code string) string {
	if code == "" {
		return "Code is undefined!"
	}
	programsList := strings.Split(StudentStudyPrograms, ", ")
	for _, program := range programsList {
		programData := strings.Split(program, "_")
		if len(programData) == 2 && programData[0] == code {
			return programData[1]
		}
	}
	return "Program study tidak ditemukan"
}

func main() {
	fmt.Println("Selamat datang di Student Portal!")

	for {
		helper.ClearScreen()
		fmt.Println("Students: ", Students)
		fmt.Println("Student Study Programs: ", StudentStudyPrograms)

		fmt.Println("\nPilih menu:")
		fmt.Println("1. Login")
		fmt.Println("2. Register")
		fmt.Println("3. Get Program Study")
		fmt.Println("4. Keluar")

		var pilihan string
		fmt.Print("Masukkan pilihan Anda: ")
		fmt.Scanln(&pilihan)

		switch pilihan {
		case "1":
			helper.ClearScreen()
			var id, name string
			fmt.Print("Masukkan id: ")
			fmt.Scan(&id)
			fmt.Print("Masukkan name: ")
			fmt.Scan(&name)

			fmt.Println(Login(id, name))

			helper.Delay(5)
		case "2":
			helper.ClearScreen()
			var id, name, jurusan string
			fmt.Print("Masukkan id: ")
			fmt.Scan(&id)
			fmt.Print("Masukkan name: ")
			fmt.Scan(&name)
			fmt.Print("Masukkan jurusan: ")
			fmt.Scan(&jurusan)
			fmt.Println(Register(id, name, jurusan))

			helper.Delay(5)
		case "3":
			helper.ClearScreen()
			var kode string
			fmt.Print("Masukkan kode: ")
			fmt.Scan(&kode)

			fmt.Println(GetStudyProgram(kode))
			helper.Delay(5)
		case "4":
			fmt.Println("Terima kasih telah menggunakan Student Portal.")
			return
		default:
			fmt.Println("Pilihan tidak valid.")
		}
	}
}
