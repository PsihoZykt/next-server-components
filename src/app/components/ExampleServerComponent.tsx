import ExampleClientComponent from "./ExampleClientComponent";

type Props = {
    children: JSX.Element
}
const ExampleServerComponent = async () => {
    let data = null
    let response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if(response.ok){
        data = await response.json()
        console.log(data)

    }
    return data? <ExampleClientComponent data={data}/> : <div> Loading</div>
}
export default ExampleServerComponent