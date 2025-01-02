package repository

import (
	"a21hc3NpZ25tZW50/model"

	"gorm.io/gorm"
)

type UserRepository interface {
	Add(user model.User) error
	CheckAvail(user model.User) error
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepo(db *gorm.DB) *userRepository {
	return &userRepository{db}
}
func (u *userRepository) Add(user model.User) error {
	if result := u.db.Create(&user); result.Error != nil {
		return result.Error
	}
	return nil 
}

func (u *userRepository) CheckAvail(user model.User) error {
	var existingUser model.User
	if err := u.db.Where("username = ? AND password = ?", user.Username, user.Password).First(&existingUser).Error; err != nil {
		return err
	}
	return nil 
}
