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

class App extends React.Component {
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
        <input type='text' name='Enter task here' onChange={this.updateInput}></input>
        <button onClick={this.addItem}>Add Item</button>
        <ul>
          {this.state.items.map((item, i) => (
            <Item 
              key={i}
              item={item}
              onRemove={() => this.removeItem(i)}
              onComplete={() => this.onComplete(i)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
