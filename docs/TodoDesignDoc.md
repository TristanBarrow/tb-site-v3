# Todo Design Doc

## Basic Premise

A todo list in its simplest form is a vector data structure that is stored in a database across the internet so it can be accessed from anywhere.

The simplest functionality of the app can be interacted with using this interface.

```typescript
type TodoInteractions<Item> = {
    addItem: (item: Item) => void
    getItems: () => Item[]
    getItemDetails: (id: number) => Item
    removeItem: (id: number) => void
    editItem: (id: number, item: Item) => void
}
```

I will be using this Next app to implement the frontend and backend. 

I will be using firestore for my data store.

This will also require a login via google. 
