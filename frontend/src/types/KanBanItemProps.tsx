export type KanBanItemProps = {
    id: string
    description: string
    status: "OPEN" | "IN_PROGRESS" | "DONE"
    isForm?: boolean
}