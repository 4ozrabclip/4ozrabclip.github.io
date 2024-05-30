import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';


function Todo() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addTodo() {
    if (!newItem) {
      alert('Enter an item.');
      return;
    }

    const item = {
      id: uuidv4(),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem('');
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    setItems(reorderedItems);
  }

  return (
    <div className="todo">
      <h2>My Todo List</h2>

      <input
        className="addtodo-input"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo();
          }
        }}
      />

      <button className="addtodo-button" onClick={() => addTodo()}>
        Add
      </button>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todo-list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.value}
                      <button
                        className="deltodo-button"
                        onClick={() => deleteItem(item.id)}
                      >
                        X
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Todo;
