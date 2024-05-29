import {KanBanItemProps} from "../types/KanBanItemProps.tsx";
import "./KanBanItem.css"

export default function KanBanItem({kanBanItemProps}: { kanBanItemProps: KanBanItemProps }) {
    if (!kanBanItemProps.isForm) {
        return (
            <div className="KanBanItem">
                <div className="KanBanItem__Body">
                    {kanBanItemProps.description}
                </div>
            </div>
        )
    } else {
        return (
            <div className="KanBanItem">
                <div className="KanBanItem__Body">
                    <form>
                        <div className="KanBanItem__Buttons">
                            <button className="KanBanItem__Button__cancel">{'\uFF38'}</button>
                            <button className="KanBanItem__Button__move">→</button>
                            <button className="KanBanItem__Button__confirm">✓</button>
                        </div>
                        <textarea className="KanBanItem__Input" placeholder="Click me to write!"/>
                    </form>
                </div>
            </div>
        )
    }
}