import React, {useState} from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const ItemsList = (props) => {
    const [updateIsShown, setUpdateIsShown] = useState(false);

    const showUpdateHandler = () => {
      setUpdateIsShown(true);
    };
  
    const hideUpdateHandler = () => {
      setUpdateIsShown(false);
    };
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        <div>
                            {user.name} ({user.age} years old)
                        </div>   
                        <button onClick={showUpdateHandler}>Udpate</button>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default ItemsList;