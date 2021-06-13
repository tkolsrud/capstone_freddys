const url = process.env.MONGODB_URI;

class AuthModel {
    static register(data) {
        return fetch(`${url}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json());
    }

    static login(data) {
        return fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json());
    }
}

export default AuthModel;