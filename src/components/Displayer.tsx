import { ContentProps, DisplayProps } from './types';
import "./styles/Displayer.scss";
import { EditIcon } from './EditIcon';

function Displayer ({item, value, handleChange, handleSave} : DisplayProps) {
    return (
        <div className="content-container">
            <div className="content-title">
                <input
                    type="text"
                    value={value}
                    id={item!.id}
                    onChange={handleChange}
                />
                <div onClick={handleSave} id={item!.id}>
                    <EditIcon />
                </div>
            </div>
            <img src={item!.img} />
            <div className="content-text">{item!.text}</div>
        </div>
    )
}

export default Displayer;