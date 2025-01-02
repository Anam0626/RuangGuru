package main

import (
	"fmt"

	_ "github.com/lib/pq"
	"gorm.io/gorm"
  "gorm.io/driver/postgres"
)

// const (
//     host     = "localhost"
//     port     = 5432
//     user     = "postgres"
//     password = "12345"
//     dbname   = "test_db_camp"
// )

// func ConnectDB() (*sql.DB, error) {
//     psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
//         "password=%s dbname=%s sslmode=disable",
//         host, port, user, password, dbname)

//     db, err := sql.Open("postgres", psqlInfo)
//     if err != nil {
//         return nil, err
//     }

//     return db, nil
// }

// func main() {
// 	db, err := ConnectDB()
// 	if err != nil {
// 	  panic(err)
// 	}

// 	_, err = db.Exec(`CREATE TABLE employee (
// 		id INT,
// 		name VARCHAR(255) NOT NULL,
// 		age INT NOT NULL,
// 		address VARCHAR(255),
// 		salary INT
// 	  )`)

// 	if err != nil {
// 	  panic(err)
// 	}

// 	fmt.Println("Table employee created")

//   }
type User struct {
  gorm.Model
  Name string
  Age int
}

func main() {
  dsn := "host=localhost user=postgres password=12345 dbname=test_db_camp port=5432 sslmode=disable TimeZone=Asia/Jakarta"
  db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
  if err != nil {
      panic("failed to connect database")
  }

  // Migrate the schema
  db.AutoMigrate(&User{})

  // Create
  db.Create(&User{Name: "Aditira", Age: 23})

  // Read
  // SELECT * FROM "users" WHERE "users"."id" = 1 AND "users"."deleted_at" IS NULL ORDER BY "users"."id" LIMIT 1
  var user User
  db.First(&user, 1) // temukan user dengan menggunakan primary key dan simpan di variabel user
  db.First(&user, "name = ?", "Aditira") // temukan user dengan nama Aditira

  fmt.Println(user)
}