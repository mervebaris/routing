import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
function UserDetail() {
 
    const {id} = useParams();
    const location = useLocation();
   const [user, setUser] = useState(location.state);

    console.log(location.state);

    useEffect(() => {

       if(!user?.id){
         fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
           .then((response) => response.json())
           .then((data) => setUser(data));
       }
    }, [id, user]); 

  return (
    <div>
      <h2>Kullanıcı Detayları</h2>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail