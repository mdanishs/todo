export function createTodo(task) {
  return {
    id: new Date().getTime(), // temporary random id generator
    text: task,
    completed: false
  }
}