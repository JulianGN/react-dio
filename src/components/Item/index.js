const Item = ({children}) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
            {children}
            {/* props.children permite que o componente abra e feche a tag e insira o conteúdo que quiser dentro dele */}
        </a>
    )
}

export default Item;