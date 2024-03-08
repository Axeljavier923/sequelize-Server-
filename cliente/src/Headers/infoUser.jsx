import { useEffect, useState, useContext } from 'react';
import { CustomFetch } from '../api/customFeth.js';
import { AuthContext } from '../context/authProvider.jsx';

const infoUserData = (islogged, token) => {
  const [userData, setUserData] = useState(null);
  const { authState} = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await CustomFetch('http://localhost:3000/auth/user', 'TOKEN', `Bearer ${authState.token}`);
        setUserData(userData);
      } catch (error) {
        console.log(error);
      }
    };

    if (islogged) {
      fetchData();
    }
  }, [islogged, authState.token]);

  return userData;
};

export default infoUserData;
