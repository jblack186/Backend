# Backend


POST
https://vacation-planner-bw.herokuapp.com/api/users/register
- axios post here to register a user. Just need a unique username and password.

POST
https://vacation-planner-bw.herokuapp.com/api/users/login
-user can login. Just need username and password



GET
https://vacation-planner-bw.herokuapp.com/api/vacations

-to hit this endpoint a user must be logged in and have an authorization token. Let me know if you want to work with this endpoint before the login and i'll take off the restriction.
Ex:
 componentDidMount(){
        const token = localStorage.getItem('token')
        axios
        .get('https://vacation-planner-bw.herokuapp.com/api/vacations', { 'headers': {'Authorization': token}})
            .then(res => {
                this.setState(() => ({vacations: res.data}))
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            
    }

    POST
    https://vacation-planner-bw.herokuapp.com/api/vacations
    
    -to post to this endpoint a user will have to enter a destination(required), date(required), description(required), cost(optional), comments(optional), and a user_id(required)-i'll be changing the users_id to username.




