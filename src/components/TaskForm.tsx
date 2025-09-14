import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import type { Task } from "../models/Task.model";
import TaskContext from "../context/TaskContext";
import { Button, Container, Form } from 'react-bootstrap'


const TaskForm: React.FC = () => {
    const { dispatch } = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = {
            id: uuidv4(),
            title,
            description,
            completed: false,
        };
        dispatch({ type: "ADD_TASK", payload: newTask });
        setTitle("");
        setDescription("");
    };


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="enter task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button type="submit">Add</Button>
            </Form>
        </Container >
    );
};

export default TaskForm;