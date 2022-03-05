const ItemAsTag = ({children}) => {
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          {children}
        </a>
    )
}

export default ItemAsTag;