import "./KanBanBoard.css"
import {ReactElement} from "react";
import KanBanCard from "./KanBanCard.tsx";

export default function KanBanBoard({children}: {children: ReactElement<typeof KanBanCard>[]}) {
    return (
        <div className="KanBanBoard">
            {children}
        </div>
    )
}