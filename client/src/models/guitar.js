const url = `http://localhost:4000/api/v1/guitars`;

class GuitarModel {
    static all() {
        return fetch(url).then(res => res.json());
    }

    static show(id) {
        return fetch(`${url}/${id}`).then(res => res.json());
    }

    static delete(id) {
        return fetch(`${url}/${id}`, { method: 'Delete' }).then(res => res.json());
    }

    static create(data) {
        return fetch(`${url}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json());
    }

    static update(id, data) {
        return fetch(`${url}/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json());
    }
};

export default GuitarModel;