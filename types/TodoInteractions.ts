export type TodoInteractions<Item> = {
    addItem: (item: Item) => void
    getItems: () => Item[]
    getItemDetails: (id: number) => Item
    removeItem: (id: number) => void
    editItem: (id: number, item: Item) => void
}