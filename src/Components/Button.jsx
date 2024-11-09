import { Children } from "react"

function Button({children, className , onClick, type}) {
    return (
        <button className={`rounded-3xl  px-4 py-3 ${className}`} onClick={onClick} type={type}>{children}</button>
    )
}

export default Button
