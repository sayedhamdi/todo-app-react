import PropTypes  from "prop-types"

export default function Button({text}){
    return (
        <button style={{border:"2px solid black",borderRadius:"5px"}}>
            {text}
        </button>
    )
}
Button.defaultProps = {
    text: "Button"
}
Button.propTypes = {
    text: PropTypes.string.isRequired
}
