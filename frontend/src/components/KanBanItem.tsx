import {KanBanItemProps} from "../types/KanBanItemProps.tsx";
import "./KanBanItem.css"
import React, {useState} from "react";

export default function KanBanItem({kanBanItemProps, items, setItems}: {
    kanBanItemProps: KanBanItemProps,
    items: KanBanItemProps[],
    setItems: React.Dispatch<React.SetStateAction<KanBanItemProps[]>>
}) {

    const [description, setDescription] = useState("");

    const updateDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value)
    }

    const submitFormData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const itemsWithReplacedForm = items
            .map((item) => {
                if (item.id === event.currentTarget.id) {
                    return {...item, isForm: false, id: "SERVER_SET_THIS", description: description}
                } else {
                    return item
                }
            })
        setItems(itemsWithReplacedForm)
    }

    const removeForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        setItems(
            items.filter((item) => {return item.id !== event.currentTarget.form?.id})
        )
    }

    if (kanBanItemProps.isForm) {
        return (
            <div className="KanBanItem">
                <div className="KanBanItem__Body">
                    <form id={kanBanItemProps.id} onSubmit={submitFormData}>
                        <div className="KanBanItem__Buttons">
                            <button type="reset" onClick={removeForm} className="KanBanItem__Button__cancel">{'\uFF38'}</button>
                            <button type="submit" className="KanBanItem__Button__confirm">✓</button>
                        </div>
                        <textarea onChange={updateDescription} className="KanBanItem__Input"
                                  placeholder="Click me to write!" value={description}/>
                    </form>
                </div>
            </div>
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