import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
function UserDetail() {
 
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setUser(data)) 
    }, [id]); 

  return (
    <div>
      <h2>Kullanıcı Detayları</h2>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail