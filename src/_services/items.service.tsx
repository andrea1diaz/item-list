export const itemService = {
    getAll,
    editTitle
};

function getAll() : Promise<any> {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/items`, requestOptions).then(handleResponse);
}

function editTitle(id: string, title: string) {
    const requestOptions = {
        method: 'PUT',
        body: JSON.stringify({id, title})
    };

    return fetch(`/items/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response: any) {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                console.log('error')
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}