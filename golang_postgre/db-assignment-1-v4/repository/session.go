package repository

import (
	"a21hc3NpZ25tZW50/model"
	"database/sql"
	"fmt"
)

type SessionsRepository interface {
	AddSessions(session model.Session) error
	DeleteSession(token string) error
	UpdateSessions(session model.Session) error
	SessionAvailName(name string) error
	SessionAvailToken(token string) (model.Session, error)

	FetchByID(id int) (*model.Session, error)
}

type sessionsRepoImpl struct {
	db *sql.DB
}

func NewSessionRepo(db *sql.DB) *sessionsRepoImpl {
	return &sessionsRepoImpl{db}
}

func (u *sessionsRepoImpl) AddSessions(session model.Session) error {
	query := `INSERT INTO sessions (token, username, expiry) VALUES ($1, $2, $3)`
	_, err := u.db.Exec(query, session.Token, session.Username, session.Expiry)
	if err != nil {
		return err
	}
	return nil 
}

func (u *sessionsRepoImpl) DeleteSession(token string) error {
	query := `DELETE FROM sessions WHERE token = $1`
	_, err := u.db.Exec(query, token)
	if err != nil {
		return err
	}
	return nil 
}

func (u *sessionsRepoImpl) UpdateSessions(session model.Session) error {
	query := `UPDATE sessions SET token = $1, expiry = $2 WHERE username = $3`
	_, err := u.db.Exec(query, session.Token, session.Expiry, session.Username)
	if err != nil {
		return err
	}
	return nil
}

func (u *sessionsRepoImpl) SessionAvailName(name string) error {
	query := `
		SELECT COUNT(*)
		FROM sessions
		WHERE username = $1
	`

	var count int
	err := u.db.QueryRow(query, name).Scan(&count)
	if err != nil {
		return fmt.Errorf("error checking session for username %s: %w", name, err)
	}

	if count == 0 {
		return fmt.Errorf("session not found for username: %s", name)
	}

	return nil
}

func (u *sessionsRepoImpl) SessionAvailToken(token string) (model.Session, error) {
	query := `SELECT id, token, username, expiry FROM sessions WHERE token = $1`
	var session model.Session
	err := u.db.QueryRow(query, token).Scan(&session.ID, &session.Token, &session.Username, &session.Expiry)
	if err != nil {
		return model.Session{}, err
	} 
	return session, nil 
}

func (u *sessionsRepoImpl) FetchByID(id int) (*model.Session, error) {
	row := u.db.QueryRow("SELECT id, token, username, expiry FROM sessions WHERE id = $1", id)

	var session model.Session
	err := row.Scan(&session.ID, &session.Token, &session.Username, &session.Expiry)
	if err != nil {
		return nil, err
	}

	return &session, nil
}
