import {KanBanItemProps} from "../types/KanBanItemProps.tsx";
import "./KanBanItem.css"
import KanBanItemForm from "./KanBanItemForm.tsx";
import React from "react";

export default function KanBanItem({kanBanItemProps, items, setItems}: {
    kanBanItemProps: KanBanItemProps,
    items: KanBanItemProps[],
    setItems: React.Dispatch<React.SetStateAction<KanBanItemProps[]>>
}) {

    const makeItemToFormUpdatable = () => {
        setItems(
            items.map((item) => {
                if (item.id == kanBanItemProps.id) {
                    return {...item, isForm: true, isUpdate: true}
                } else {
                    return item
                }
            })
        )
    }

    if (kanBanItemProps.isForm) {
        return (
            <KanBanItemForm kanBanItemProps={kanBanItemProps} items={items} setItems={setItems}/>
        )
    } else {
        return (
            <div className="KanBanItem" id={kanBanItemProps.id} onClick={makeItemToFormUpdatable}>
                <div className="KanBanItem__Body">
                    {kanBanItemProps.status === "DONE" ? <s>{kanBanItemProps.description}</s> : kanBanItemProps.description}
                </div>
            </div>
        )
    }
}