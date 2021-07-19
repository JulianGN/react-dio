const Btn = (props) => {
    return (
        <button type="button" className={`btn btn-${props.color}`} onClick={props.set}>
            {props.text}
        </button>
    )
}

export default Btn;