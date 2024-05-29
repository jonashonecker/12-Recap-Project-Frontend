import {KanBanCardProps} from "../types/KanBanCardProps.ts";
import "./KanBanCard.css"
import {ReactElement} from "react";
import KanBanItem from "./KanBanItem.tsx";

export default function KanBanCard({KanBanCardProps, children}: {
    KanBanCardProps: KanBanCardProps,
    children: ReactElement<typeof KanBanItem> | ReactElement<typeof KanBanItem>[] | undefined
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

    return (
        <div className="KanBanCard">
            <div className={"KanBanCard__Header " + headerColor}>
                {KanBanCardProps.type}
            </div>
            <div className="KanBanCard__Body">
                <div className="KanBanCard__Items">
                    {children}
                </div>
                {KanBanCardProps.type === "ToDo" && <button className="KanBanCard__Button">{'\uFF0B'}</button>}
            </div>
        </div>
    )
}