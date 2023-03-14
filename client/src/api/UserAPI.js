import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {

    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isBoss, setIsBoss] = useState(false)
    const [users, setUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        if(token){
            const getUser = async ()=>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
                    res.data.role === 2 ? setIsBoss(true) : setIsBoss(false)

                    setUsers(res.data)
                    
                } catch (err) {
                    alert(err.response.data.msg)
                }
            };
            const getAllUsers = async () =>{
              try {
                  const res = await axios.get('/user/get_all_user', {
                    headers: {Authorization: token}
                  })

                  setAllUsers(res.data)
              } catch (err) {
                alert(err.response.data.msg)
              } 
            };

            getUser()
            getAllUsers()
        }
    }, [token])
    
    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        isBoss: [isBoss, setIsBoss],
        users: [users, setUsers],
        callback: [callback, setCallback],
        allUsers: [allUsers, setAllUsers],
    }
}

export default UserAPI
