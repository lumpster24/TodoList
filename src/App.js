import React from 'react';
import './App.css';

const Item = (props) => {
  return (
    <li>
      {props.item}
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
      items: ['hello']
    }
  }

  addItem = () => {
    alert('add')
  }

  removeItem = (i) => {
    alert('remove')
  }

  onComplete = (i) => {
    alert('complete')
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
