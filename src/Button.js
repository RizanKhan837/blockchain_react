function Button(props){
    return (<button onClick={props.click} className="btn">{props.btnValue}</button>);
}
export default Button;