import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import type { Task } from '../models/Task.model';
import TaskContext from "../context/TaskContext";


const TaskList: React.FC = () => {
    const { state, dispatch } = useContext(TaskContext);
    const [editTask, setEditTask] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    const handleEditTask = (task: Task) => {
        setEditTask(task.id);
        setEditTitle(task.title)
        setEditDescription(task.description || '')
    };

    const handleSaveEdit = (task: Task) => {
        dispatch({
            type: "EDIT_TASK",
            payload: { ...task, title: editTitle, description: editDescription }
        })
        setEditTask(null);
    };

    const handleDeleteTask = (id: string) => {
        dispatch({
            type: "DELETE_TASK",
            payload: id,
        })
    };

    const handleTaskComplete = (id: string) => {
        dispatch({
            type: "TOGGLE_TASK_COMPLETE",
            payload: id,
        })
    };


    return (
        <>
            {state.tasks.length === 0 ? (
                <h4>No tasks yet</h4>
            ) : (
                state.tasks.map((task) => (
                    <Card key={task.id}>
                        <Card.Body>
                            <Card.Title>
                                <h3>{task.title}</h3>
                            </Card.Title>
                            <Card.Text>
                                <p>{task.description}</p>
                            </Card.Text>
                            <Button onClick={() => handleEditTask(task)}>Edit</Button>
                            <Button onClick={() => handleSaveEdit(task)}>Save</Button>
                            <Button onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                            <Button onClick={() => handleTaskComplete(task.id)}>
                                {task.completed ? "Undo" : "Complete"}
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            )}
        </>
    )
};

export default TaskList;

/* return (
    <>
        {!tasks} (
        <p>No tasks yet</p>
        ) : (
            tasks.map((task) => (
        <Card key={task.id}>
            <Card.Body>
                {editTask === task.id ? (
                    // ✏️ Edit Mode
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Control
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Control
                                as="textarea"
                                rows={2}
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Button

                            onClick={() => handleSave(task.id)}
                        >
                            Save
                        </Button>{" "}
                        <Button onClick={() => setEditTask(null)}>
                            Cancel
                        </Button>
                    </Form>
                ) : (
                    // 👀 View Mode
                    <>
                        <Card.Title>{task.title}</Card.Title>
                        <Card.Text>{task.description}</Card.Text>
                        <Card.Text>
                            Status: {task.completed ? "Completed" : "Incomplete"}
                        </Card.Text>
                        <Button
                            onClick={() => onComplete(task.id)}
                        >
                            {task.completed ? "Undo" : "Complete"}
                        </Button>
                        <Button
                            onClick={() => handleStartEdit(task)}
                        >
                            Edit
                        </Button>
                        <Button onClick={() => onDelete(task.id)}>
                            Delete
                        </Button>
                    </>
                )}
            </Card.Body>
        </Card>
        ))
    </>
); */


