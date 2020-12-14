export class UsersService {

    url = 'https://jsonplaceholder.typicode.com/users';

    getAllUsers = () => {
      return   fetch(this.url)
            .then(value => value.json())
            .then(value => value)


    }

    getUserbyId = (id) => {
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value)

    }


}