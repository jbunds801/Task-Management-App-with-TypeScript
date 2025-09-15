import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";
import TaskCard from "./TaskCard";


const TaskList: React.FC = () => {
    const { state } = useContext(TaskContext);

    return (
        <>
            {state.tasks.length === 0 ? (
                <h4>No tasks yet</h4>
            ) : (
                <TaskCard />
            )}
        </>
    );
};

export default TaskList;




