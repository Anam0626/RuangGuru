package main

import (
	"fmt"
	"strings"

	"a21hc3NpZ25tZW50/helper"
)

var Students = []string{
	"A1234_Aditira_TI",
	"B2131_Dito_TK",
	"A3455_Afis_MI",
}

var StudentStudyPrograms = map[string]string{
	"TI": "Teknik Informatika",
	"TK": "Teknik Komputer",
	"SI": "Sistem Informasi",
	"MI": "Manajemen Informasi",
}

type studentModifier func(string, *string)

func Login(id string, name string) string {
	if id == "" || name == "" {
		return "ID or Name is undefined!"
	}

	for _, v := range Students {
		splitStudent := strings.Split(v, "_")
		idStudent := splitStudent[0]
		nameStudent := splitStudent[1]

		if id == idStudent && name == nameStudent {
			return fmt.Sprintf("Login berhasil: %s", nameStudent)
		} 
	}

	return "Login gagal: data mahasiswa tidak ditemukan"
}


func Register(id string, name string, major string) string {
	student := []string{id, name, major}
	if id == "" || name == "" || major == ""{
		return "ID, Name or Major is undefined!"
	}
	for _, v := range Students {
		splitStudent := strings.Split(v, "_")
		idStudent := splitStudent[0]

		if id == idStudent {
			return "Registrasi gagal: id sudah digunakan"
		} 
	}
	Students = append(Students, strings.Join(student, "_"))
	return fmt.Sprintf("Registrasi berhasil: %s (%s)", name, major) // TODO: replace this
}

func GetStudyProgram(code string) string {
	for k, v := range StudentStudyPrograms {
		if k == code {
			return v
		}
	}
	return "Kode program studi tidak ditemukan" // TODO: replace this
}

func ModifyStudent(programStudi, nama string, fn studentModifier) string {
	for i, v := range Students {
		splitStudent := strings.Split(v, "_")
		nameStudent := splitStudent[1]

		if nama == nameStudent {
			fn(programStudi, &Students[i])
			return fmt.Sprintf("Program studi mahasiswa berhasil diubah.")
		}
	}
	return "Mahasiswa tidak ditemukan."
}


func UpdateStudyProgram(programStudi string, students *string) {
	studentSplit := strings.Split(*students, "_")
	*students = fmt.Sprintf("%s_%s_%s", studentSplit[0], studentSplit[1], programStudi)
}

func main() {
	fmt.Println("Selamat datang di Student Portal!")

	for {
		helper.ClearScreen()
		for i, student := range Students {
			fmt.Println(i+1, student)
		}

		fmt.Println("\nPilih menu:")
		fmt.Println("1. Login")
		fmt.Println("2. Register")
		fmt.Println("3. Get Program Study")
		fmt.Println("4. Change student study program")
		fmt.Println("5. Keluar")

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
			helper.ClearScreen()
			var nama, programStudi string
			fmt.Print("Masukkan nama mahasiswa: ")
			fmt.Scanln(&nama)
			fmt.Print("Masukkan program studi baru: ")
			fmt.Scanln(&programStudi)

			fmt.Println(ModifyStudent(programStudi, nama, UpdateStudyProgram))
			helper.Delay(5)
		case "5":
			fmt.Println("Terima kasih telah menggunakan Student Portal.")
			return
		default:
			fmt.Println("Pilihan tidak valid.")
		}
	}
}
