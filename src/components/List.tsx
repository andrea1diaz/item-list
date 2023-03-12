import ItemList from './ListItem';
import { ListProps } from './types';
import "./styles/List.scss";
import { useState } from 'react';

function List ({items, handleClick} : ListProps) {
    const [selected, setSelected] = useState<string>('0');

    const onClick  = (id: string) => {
        setSelected(id)
        handleClick(id)
    }
    
    return (
        <div className="list-container">
            {items && items.map (item => {
                return (
                    <ItemList
                        key={item.id}
                        select={item.id === selected ? true : false}
                        handleClick={onClick}
                        id={item.id}
                        title={item.title}
                    />
                )
            })}
        </div>
    )
}

export default List;