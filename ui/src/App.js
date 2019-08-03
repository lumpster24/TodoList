import React from 'react';
import './App.css';

const Item = (props) => {
  return (
    <li className={props.item.completed ? 'completed' : 'notCompleted'}>
      {props.item.task}
      <button onClick={props.onRemove}>Remove Item</button>
      <button onClick={props.onComplete}>Toggle Complete</button>
    </li>
  )
}

const List = (props) => {
  return (
    <ul>
      {
        props.items.map((item, i) => (
          <Item 
            key={i}
            item={item}
            onRemove={() => props.removeItem(i)}
            onComplete={() => props.onComplete(i)}
          />
        ))
      }
    </ul>
  )
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      items: []
    }
  }

  addItem = () => {
    this.setState({
      input: '',
      items: this.state.items.concat(
        {task: this.state.input, completed: false}
      )
    })
  }

  removeItem = (i) => {
    const items = this.state.items.slice();
    items.splice(i, 1)
    this.setState({
      items: items
    })
  }

  onComplete = (i) => {
    const items = this.state.items.slice();
    items[i].completed = !items[i].completed;
    this.setState({
      items: items
    })
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  render() {
    return(
      <div>
        <input value={this.state.input} type='text' name='Enter task here' onChange={this.updateInput}></input>
        <button onClick={this.addItem}>Add Item</button>
        <List 
          items={this.state.items}
          removeItem={this.removeItem}
          onComplete={this.onComplete}
        />
      </div>
    )
  }
}

const App = () => {
  return (
    <TodoList />
  )
}

export default App;
