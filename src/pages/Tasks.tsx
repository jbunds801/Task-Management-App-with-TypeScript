// "dashboard" shows task form and task list if logged in
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import PageLayout from "../components/PageLayout";
import { Button } from "react-bootstrap";

const Tasks: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated)
        return (
            <>
                <div>
                    <p>Must log in to view tasks</p>
                    <Button></Button>
                </div>
            </>
        )

    return (
        <PageLayout>
            <div>
                <h1>Let's get started! What do you want to do today?</h1>
                <TaskForm />
                <TaskList />
            </div>
        </PageLayout>
    );
};

export default Tasks;
