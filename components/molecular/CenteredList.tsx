
export type ListProps<T> = {
    title: string
    items: T[]
    renderItem: (item: T) => React.ReactNode
}

const CenteredList = <T extends unknown>({
    title,
    items,
    renderItem,
}: ListProps<T>) => {
    return (
        <div>
            <div>{title}</div>
            {items.map(renderItem)}
        </div>
    );  
}

export default CenteredList;