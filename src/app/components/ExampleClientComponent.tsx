'use client'
import {useState} from "react";

type Props = {
    data: { userId: number, id: number, title: string, completed: boolean }
}
export default function ExampleClientComponent({data}: Props) {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>CLIENT {data.title} {count}</button>
        </>
    )
}