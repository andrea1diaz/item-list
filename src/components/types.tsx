import { ChangeEventHandler, MouseEventHandler } from "react"

export type DataItemList = {
    id: string,
    title: string,
}

export type ItemListProps = DataItemList & {
    handleClick: Function,
    select: boolean,
}


export type ListProps = {
    items: Array<DataItemList>,
    handleClick: Function,
}

export type ContentProps = {
    id: string,
    title: string,
    text: string,
    img: string
}

export type DisplayProps = {
    item: ContentProps,
    value: string,
    handleChange: ChangeEventHandler<HTMLInputElement>,
    handleSave: MouseEventHandler<HTMLDivElement>
}