import { useState } from "react";
import { ItemListProps } from './types';
import "./styles/List.scss";

function ItemList ({id, title, handleClick, select}: ItemListProps) {
    
    const itemClick = () => {
        handleClick(id)
    }

    return (
        <div className={`list-item ${select ? 'selected' : ''}`} onClick={itemClick}>
            {title}
        </div>
    )
}

export default ItemList;