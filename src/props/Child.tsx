import React from "react"

interface childProps {
    color: string,
    onClick: () => void,
    children: React.ReactNode
}
//--------------------------------------------------------------------------------------------------------------------
export const Child = ({ color, onClick, children }: childProps) => {

    return (
        <div>
            <h1>{color}</h1>
            <button onClick={onClick}>Click me</button>
            {children}
        </div>
    )

}
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
export const ChildAsFC: React.FC<childProps> = ({ color, onClick }) => {
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}
//--------------------------------------------------------------------------------------------------------------------
