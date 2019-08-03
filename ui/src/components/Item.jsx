import React from 'react'

const Item = (props) => {
  return (
    <li className={props.item.completed ? 'completed' : 'notCompleted'}>
      {props.item.task}
      <button onClick={props.onRemove}>Remove Item</button>
      <button onClick={props.onComplete}>Toggle Complete</button>
    </li>
  )
}

export default Item