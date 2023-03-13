# React Assignment - Item List

![Desktop View](docs/homepage.gif)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

## The Code
### Getting the data
I created a simple `fake-backend` to simulate the `GET` request of the data from the file.
```javascript
if ((url as string).endsWith('/items') && opts!.method === 'GET') {
    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(data)) } as Response);

    return;
}
```
For all the requests and services I used React + Redux.

### Obtaining the sidebar items
![Desktop View](docs/item_list.gif)
At the moment of mounting the main component, in this case, `App.tsx`, a `getAll()` request is made to obtain all the data to be used in the platform. Then the `id` and item `title` is passed to a child component called `List`; this component is in charge of mapping all the item titles using the `ItemList` component. To handle the selection of an item to display, the `id` is sent back to the parent component, `App` and then saved in a JSON object which will be used by the `Displayer` component

### Visualizing item content
When the component is mounted the first item content displayed is the first one (`item[0]`) and instead of creating a request to get any element by id, I decided that given this case, because the data was in order in a way where the id of the item matched the position of the JSON array, it was better to use the already loaded data from the first request. 
```javascript
  const selectItem = (id: string) => {
    setSelectedId(id);
    
    // another way
    // props.data.find((obj: { id: string; }) => obj.id === selectedId);

    setSelected(props.data[id])
    setValue(props.data[id].title)
  }
```
Of course, there are other ways of solving this, if the data were too big it would be impossible to maintain it in the cash or if there were no relation between the id and the index, I would have to change the approach to iterate through the array until there is a match with the requested data.

### Editing the item title
![Desktop View](docs/title_bar.gif)
Every title is editable but not saveable, I implemented the general setup for the `PUT` request to make this writable to the file, the only thing missing is the algorithm to modify / write on the source file. 
The naive approach to this implementation could be to use the already loaded data in the cache, modify it and then overwrite the original file with this. Another solution could be to create a function dedicated to finding in the file the id and then just overwrite that position, this would require a more advanced implementation.