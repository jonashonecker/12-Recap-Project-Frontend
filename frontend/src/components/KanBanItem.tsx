import {KanBanItemProps} from "../types/KanBanItemProps.tsx";
import "./KanBanItem.css"

export default function KanBanItem({kanBanItemProps}:{kanBanItemProps: KanBanItemProps}) {
    return (
        <div className="KanBanItem">
            <div className="KanBanItem__Body">
                {kanBanItemProps.description}
            </div>
        </div>
    )
}