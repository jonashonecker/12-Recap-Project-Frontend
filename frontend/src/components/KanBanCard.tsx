import {KanBanCardProps} from "../types/KanBanCardProps.ts";
import "./KanBanCard.css"
import React, {ReactElement} from "react";
import KanBanItem from "./KanBanItem.tsx";
import {KanBanItemProps} from "../types/KanBanItemProps.tsx";

export default function KanBanCard(
    {KanBanCardProps, children, items, setItems}: {
        KanBanCardProps: KanBanCardProps,
        children: ReactElement<typeof KanBanItem> | ReactElement<typeof KanBanItem>[] | undefined,
        items: KanBanItemProps[],
        setItems: React.Dispatch<React.SetStateAction<KanBanItemProps[]>>
    }) {
    let headerColor: string = "col-";
    switch (KanBanCardProps.type) {
        case "ToDo":
            headerColor += "blue"
            break;
        case "Doing":
            headerColor += "red"
            break
        default:
            headerColor += "green"
    }

    const addNewItem = () => {
        setItems([...items, {id: "", description: "", status: "OPEN", isForm: true}])
    }

    return (
        <div className="KanBanCard">
            <div className={"KanBanCard__Header " + headerColor}>
                {KanBanCardProps.type}
            </div>
            <div className="KanBanCard__Body">
                <div className="KanBanCard__Items">
                    {children}
                </div>
                {KanBanCardProps.type === "ToDo" &&
                    <button onClick={addNewItem} className="KanBanCard__Button">{'\uFF0B'}</button>}
            </div>
        </div>
    )
}