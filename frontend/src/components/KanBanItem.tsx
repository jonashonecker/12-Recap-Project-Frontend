import {KanBanItemProps} from "../types/KanBanItemProps.tsx";
import "./KanBanItem.css"
import KanBanItemForm from "./KanBanItemForm.tsx";
import React from "react";

export default function KanBanItem({kanBanItemProps, items, setItems}: {
    kanBanItemProps: KanBanItemProps,
    items: KanBanItemProps[],
    setItems: React.Dispatch<React.SetStateAction<KanBanItemProps[]>>
}) {

    if (kanBanItemProps.isForm) {
        return (
            <KanBanItemForm kanBanItemProps={kanBanItemProps} items={items} setItems={setItems}/>
        )
    } else {
        return (
            <div className="KanBanItem" id={kanBanItemProps.id}>
                <div className="KanBanItem__Body">
                    {kanBanItemProps.description}
                </div>
            </div>
        )
    }
}