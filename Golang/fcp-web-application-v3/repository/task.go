package repository

import (
	"a21hc3NpZ25tZW50/db/filebased"
	"a21hc3NpZ25tZW50/model"
)

type TaskRepository interface {
	Store(task *model.Task) error
	Update(taskID int, task *model.Task) error
	Delete(id int) error
	GetByID(id int) (*model.Task, error)
	GetList() ([]model.Task, error)
	GetTaskCategory(id int) ([]model.TaskCategory, error)
}

type taskRepository struct {
	filebased *filebased.Data
}

func NewTaskRepo(filebasedDb *filebased.Data) *taskRepository {
	return &taskRepository{
		filebased: filebasedDb,
	}
}

func (t *taskRepository) Store(task *model.Task) error {
	t.filebased.StoreTask(*task)

	return nil
}

func (t *taskRepository) Update(taskID int, task *model.Task) error {
	task.ID = taskID
	if err := t.filebased.UpdateTask(taskID, *task) ; err != nil {
		return err
	}
	return nil 
}

func (t *taskRepository) Delete(id int) error {
	if err := t.filebased.DeleteTask(id) ; err != nil {
		return err
	}
	return nil 
}

func (t *taskRepository) GetByID(id int) (*model.Task, error) {
	taskById, err := t.filebased.GetTaskByID(id)
	if err != nil {
		return nil, err
	}
	return taskById, nil 
}

func (t *taskRepository) GetList() ([]model.Task, error) {
	list, err := t.filebased.GetTasks()
	if err != nil {
		return nil, err
	}
	return list, nil 
}

func (t *taskRepository) GetTaskCategory(id int) ([]model.TaskCategory, error) {
	taskCategory, err := t.filebased.GetTaskListByCategory(id)
	if err != nil {
		return nil, err
	}
	return taskCategory, nil 
}
