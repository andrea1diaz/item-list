import React, { FormEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Displayer from './components/Displayer';
import List from './components/List';
import { ContentProps } from './components/types';
import { itemActions } from './_actions';


function App(props: any) {
  const [selectedId, setSelectedId] = useState<string>("0");
  const [selected, setSelected] = useState<ContentProps>({
    id: "",
    title: "",
    text: "",
    img: "",
  })

  const [value, setValue] = useState<string>("");

   useEffect(() => {
    props.getAll()
  }, []);

  const selectItem = (id: string) => {
    setSelectedId(id);
    
    // props.data.find((obj: { id: string; }) => obj.id === selectedId);

    setSelected(props.data[id])
    setValue(props.data[id].title)
  }

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const update = (event: FormEvent<HTMLDivElement>) => {
      console.log(event.currentTarget)
      //props.editTitle(event.currentTarget.id, value)
    }

  return (
    <div className='flex-container'>
      <div className='flex-item'>
        <List handleClick={selectItem} items={props.data}/>
      </div>
      <div className='flex-item'>
        {props.data && 
          <Displayer
            value={value === "" ? props.data[0].title : value}
            handleChange={handleChange}
            handleSave={update}
            item={selected.id === '' ? props.data[0] : selected}
          />
        }
      </div>
    </div>
  );
}

function mapState(state: any) {
  const { loading, data } = state.items;
  return { loading, data };
}

const actionCreators = {
  getAll: itemActions.getAll,
  editTitle: itemActions.editTitle
}

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };