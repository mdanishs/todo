import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import ListItem from './components/ListItem';
import TextControl from './components/TextControl';
import { createTodo } from '../../utils'

const List = () => {
  const [todos, setTodos] = useState([]);

  const handleTaskAdd = (task) => {
    setTodos([...todos, createTodo(task)]);
  }

  const handleStateChanged = (task, checked) => {
    const toEdit = todos.find(t => t.id === task.id);
    if (toEdit) {
      toEdit.completed = checked;
    }
    setTodos([...todos]);
  }

  const handleDelete = (task) => {
    const filtered = todos.filter(t => t.id !== task.id);
    setTodos([...filtered]);
  }

  const renderTodos = () => {
    return todos.map((todo, i) => (
      <ListItem
        key={i}
        text={todo.text}
        checked={todo.completed}
        onStateChange={(checked) => { handleStateChanged(todo, checked) }}
        onDelete={() => { handleDelete(todo) }}
      />
    ))
  }

  return (
    <ScrollView>
      <TextControl
        title="Add"
        placeholder="What's next on your list"
        onSubmit={handleTaskAdd}
      />
      {renderTodos()}
    </ScrollView>
  )
}

export default List;