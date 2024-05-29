import './App.css'
import KanBanBoard from "./components/KanBanBoard.tsx";
import KanBanCard from "./components/KanBanCard.tsx";
import KanBanItem from "./components/KanBanItem.tsx";
import {KanBanItemProps} from "./types/KanBanItemProps.tsx";
import {useState} from "react";

function App() {
    const itemsFromAPI: KanBanItemProps[] = [
        {
            id: "1",
            status: "OPEN",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore."
        },
        {
            id: "2",
            status: "IN_PROGRESS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore."
        },
        {
            id: "3",
            status: "DONE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore."
        },
        {
            id: "4",
            status: "DONE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing."
        },
        {
            id: "5",
            status: "DONE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore."
        }
    ]

    const [items, setItems] = useState(itemsFromAPI)

    const openItems = items.filter((item) => {return item.status === "OPEN"})
        .map((item) => {return <KanBanItem key={item.id} kanBanItemProps={item} items={items} setItems={setItems}/>})

    const inProgressItems = items.filter((item) => {return item.status === "IN_PROGRESS"})
        .map((item) => {return <KanBanItem key={item.id} kanBanItemProps={item} items={items} setItems={setItems}/>})

    const doneItems = items.filter((item) => {return item.status === "DONE"})
        .map((item) => {return <KanBanItem key={item.id} kanBanItemProps={item} items={items} setItems={setItems}/>})

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
