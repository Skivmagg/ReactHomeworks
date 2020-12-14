export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users'
urlPost = 'http://jsonplaceholder.typicode.com/posts'
getAllUsers = () =>{

       return  fetch(this.url)
            .then(value => value.json())
            .then(value => value)

}
    getUserById = (id) =>{

        return  fetch(this.url+'/'+id)
            .then(value => value.json())
            .then(value => value)

    }

    getAllPostsById = (id) => {
        return fetch(this.urlPost+'?userId='+id)
            .then(value => value.json())
            .then(value => value)
    }

}