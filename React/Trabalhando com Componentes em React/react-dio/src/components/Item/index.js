const Item = (props) => {
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          {props.texto}
        </a>
    )
} 

// <Item texto='Item 1' />

export default Item;