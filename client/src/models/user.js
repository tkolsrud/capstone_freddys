const url = process.env.MONGODB_URI;

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
