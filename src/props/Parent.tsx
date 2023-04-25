import { Child } from "./Child"
import { ChildAsFC } from "./Child"



const handleChildClick = () => {
    console.log('Child got clicked')
}

const Parent = () => {

    return (
        <div>
            <Child color="blue" onClick={handleChildClick}>
                <button>aaaaaaa</button>
            </Child>
            <ChildAsFC color="blue" onClick={handleChildClick}><button>aaaa</button></ChildAsFC>
        </div>
    )
}


export default Parent;