package repository

import (
	"a21hc3NpZ25tZW50/model"
	"fmt"

	"gorm.io/gorm"
)

type SessionsRepository interface {
	AddSessions(session model.Session) error
	DeleteSession(token string) error
	UpdateSessions(session model.Session) error
	SessionAvailName(name string) error
	SessionAvailToken(token string) (model.Session, error)
}

type sessionsRepoImpl struct {
	db *gorm.DB
}

func NewSessionRepo(db *gorm.DB) *sessionsRepoImpl {
	return &sessionsRepoImpl{db}
}

func (s *sessionsRepoImpl) AddSessions(session model.Session) error {
	if result := s.db.Create(&session); result.Error != nil {
		return result.Error
	}
	return nil // TODO: replace this
}

func (s *sessionsRepoImpl) DeleteSession(token string) error {
	session := model.Session{}
	if result := s.db.Where("token = ?", token).Delete(&session); result.Error != nil {
		return fmt.Errorf("Error DELETE Session")
	}
	return nil // TODO: replace this
}

func (s *sessionsRepoImpl) UpdateSessions(session model.Session) error {
	if err := s.db.Table("sessions").Where("username = ?", session.Username).Updates(session).Error; err != nil {
		return fmt.Errorf("Error UPDATE Session")
	}
	return nil // TODO: replace this
}

func (s *sessionsRepoImpl) SessionAvailName(name string) error {
	var session model.Session
    if err := s.db.Where("username = ?", name).First(&session).Error; err != nil {
        return err
    }
	return nil // TODO: replace this
}

func (s *sessionsRepoImpl) SessionAvailToken(token string) (model.Session, error) {
	var session model.Session
    if err := s.db.Where("token = ?", token).First(&session).Error; err != nil {
        return model.Session{}, err
    }
    return session, nil
}
