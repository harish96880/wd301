import Task from "./Task";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
  deleteTaskItem: (task: TaskItem) => void;
}

const TaskList = (props: TaskListProps) => {
  const { deleteTaskItem } = props;
  const list = props.tasks.map((task) => (
    <li>
      <Task item={task} deleteTaskItem={deleteTaskItem} />
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};
export default TaskList;
