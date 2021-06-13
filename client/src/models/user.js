const url = `http://localhost:4000/api/v1/user`;

class UserModel {
    static show() {
        return fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("uid")}`,
            },
        }).then(res => res.json());
    }
}

export default UserModel;
