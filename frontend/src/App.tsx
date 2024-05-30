import './App.css'
import KanBanBoard from "./components/KanBanBoard.tsx";
import KanBanCard from "./components/KanBanCard.tsx";
import KanBanItem from "./components/KanBanItem.tsx";
import {KanBanItemProps} from "./types/KanBanItemProps.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [items, setItems] = useState<KanBanItemProps[]>([])

    const loadItems = () => {
        axios.get<KanBanItemProps[]>("api/todo").then((response) => {
            setItems(response.data);
        })
    }

    useEffect(() => {loadItems()}, [])

    const openItems = items.filter((item) => {
        return item.status === "OPEN"
    })
        .map((item) => {
            return <KanBanItem key={item.id} kanBanItemProps={item} items={items} setItems={setItems}/>
        })

    const inProgressItems = items.filter((item) => {
        return item.status === "IN_PROGRESS"
    })
        .map((item) => {
            return <KanBanItem key={item.id} kanBanItemProps={item} items={items} setItems={setItems}/>
        })

    const doneItems = items.filter((item) => {
        return item.status === "DONE"
    })
        .map((item) => {
            return <KanBanItem key={item.id} kanBanItemProps={item} items={items} setItems={setItems}/>
        })

    return (
        <KanBanBoard>
            <KanBanCard KanBanCardProps={{type: "ToDo"}} items={items} setItems={setItems}>
                {openItems}
            </KanBanCard>
            <KanBanCard KanBanCardProps={{type: "Doing"}} items={items} setItems={setItems}>
                {inProgressItems}
            </KanBanCard>
            <KanBanCard KanBanCardProps={{type: "Done"}} items={items} setItems={setItems}>
                {doneItems}
            </KanBanCard>
        </KanBanBoard>
    )
}

export default App
