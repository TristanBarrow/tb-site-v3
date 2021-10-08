import { TodoItem } from '../../types/TodoItem';

type BasicTodoItem = {
    item: TodoItem
}

const BasicTodoItem = ({ item }: BasicTodoItem) => {
    return (
        <div>
            {item.description}
            <button>Finish Item</button>
            <button>EditItem</button>
        </div>
    );
}

export default BasicTodoItem;