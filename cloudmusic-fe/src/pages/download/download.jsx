
const Download = ({name, age, height,children})=>{
    return (<div>
        <div>name: {name}</div>
        <div>age: {age}</div>
        <div>height: {height || 188}</div>
        <div>Children:{children}</div>
    </div>)
}


export default Download;