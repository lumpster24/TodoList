import React from 'react'

import Item from './Item';

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

export default List