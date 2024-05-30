import "./KanBanItem.css"
import React, {useState} from "react";
import {KanBanItemProps} from "../types/KanBanItemProps.tsx";
import axios from "axios";

export default function KanBanItemForm({kanBanItemProps, items, setItems}: {
    kanBanItemProps: KanBanItemProps,
    items: KanBanItemProps[],
    setItems: React.Dispatch<React.SetStateAction<KanBanItemProps[]>>
}) {

    const [description, setDescription] = useState(kanBanItemProps.description);

    const updateDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value)
    }

    const submitFormData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (kanBanItemProps.isUpdate) {
            axios.put("api/todo/" + kanBanItemProps.id, {...kanBanItemProps, description: description})
                .then(() => replaceFormItemWithNormalItem(kanBanItemProps.id))
        } else {
            axios.post("api/todo", {...kanBanItemProps, description: description})
                .then((response) => replaceFormItemWithNormalItemAndChangeId(kanBanItemProps.id, response.data.id))
        }
    }

    const replaceFormItemWithNormalItem = (formId: string) => {
        setItems(
            items.map((item) => {
                if (item.id === formId) {
                    return {...item, isForm: false, isUpdate: false, description: description}
                } else {
                    return item
                }
            })
        )
    }

    const replaceFormItemWithNormalItemAndChangeId = (formId: string, newId: string) => {
        setItems(
            items.map((item) => {
                if (item.id === formId) {
                    return {...item, id: newId, isForm: false, isUpdate: false, description: description}
                } else {
                    return item
                }
            })
        )
    }

    const removeForm = () => {
        if (kanBanItemProps.isUpdate) {
            axios.delete("api/todo/" + kanBanItemProps.id).then(
                () => {
                    setItems(
                        items.filter((item) => {
                            return item.id !== kanBanItemProps.id
                        })
                    )
                }
            )
        }
        setItems(
            items.filter((item) => {
                return item.id !== kanBanItemProps.id
            })
        )
    }

    const moveForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        let nextStatus: "OPEN" | "IN_PROGRESS" | "DONE"

        if (event.currentTarget.name === "moveForward") {
            if (kanBanItemProps.status === "OPEN") {
                nextStatus = "IN_PROGRESS";
            } else {
                nextStatus = "DONE"
            }
        } else {
            if (kanBanItemProps.status === "DONE") {
                nextStatus = "IN_PROGRESS";
            } else {
                nextStatus = "OPEN"
            }
        }

        setItems(
            items.map((item) => {
                if (item.id === kanBanItemProps.id) {
                    return {...item, isForm: false, isUpdate: false, description: description, status: nextStatus}
                } else {
                    return item
                }
            })
        )
    }

    const createMoveButtons = () => {
        switch (kanBanItemProps.status) {
            case "OPEN":
                return <button onClick={moveForm} name="moveForward" className="KanBanItem__Button__move">→</button>
            case "IN_PROGRESS":
                return (
                    <>
                        <button onClick={moveForm} name="moveBackward" className="KanBanItem__Button__move">←</button>
                        <button onClick={moveForm} name="moveForward" className="KanBanItem__Button__move">→</button>
                    </>
                )
            case "DONE":
                return <button onClick={moveForm} name="moveBackward" className="KanBanItem__Button__move">←</button>
        }
    }

    return (
        <div className="KanBanItem">
            <div className="KanBanItem__Body">
                <form onSubmit={submitFormData}>
                    <div className="KanBanItem__Buttons">
                        <button type="reset" onClick={removeForm}
                                className="KanBanItem__Button__cancel">{'\uFF38'}</button>
                        {kanBanItemProps.isUpdate && createMoveButtons()}
                        <button type="submit" className="KanBanItem__Button__confirm">✓</button>
                    </div>
                    <textarea onChange={updateDescription} className="KanBanItem__Input"
                              placeholder="Click me to write!" value={description}/>
                </form>
            </div>
        </div>
    )
}