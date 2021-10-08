import BasicTodoItem from "@components/atomic/BasicTodoItem";
import List  from "@components/molecular/CenteredList";
import { TodoItem } from "types/TodoItem";

const todoItems: TodoItem[] = [
    { id: 1, description: "thing1" },
    { id: 2, description: "thing2" }
];

const TodoPage = () => {
    return (
        <div>
            <List 
                title={'Items Todo'}
                items={todoItems}
                renderItem={(item) => {
                    return <BasicTodoItem item={item} />
                }}
            />
            <button>Add Item</button>
            <button>Show Finished Items</button>
            <List 
                title={'FinishedItems'}
                items={todoItems}
                renderItem={(item) => {
                    return <div>{item.description}</div>
                }}
            />
        </div>
    ); 
}

export default TodoPage;