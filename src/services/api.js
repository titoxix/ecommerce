export const Search = async (query) => {
    const response = await fetch('/api/items?q=' + query);
    const body = await response.json();

    /* if (response.status !== 200) {
        throw Error(body.message)
    } */
    return body;
};

export const itemDetail = async (id) => {
    const response = await fetch('/api/items/' + id);
    const body = await response.json();

    /* if (response.status !== 200) {
        throw Error(body.message)
    } */
    return { body: body, status: response.status }
};