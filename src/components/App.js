import React  from 'react';
import PropTypes from 'prop-types';
import { Admin, Resource, Login } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {PostList} from './common/Posts/PostList'; 
import {UserList} from './common/Users/UserList'; 
import {CommentsList} from './common/Comments/CommentsList'; 
import { createMuiTheme } from '@material-ui/core/styles';
import { Dashboard } from './common/Dashboard/Dashboard';
import {PhotoList} from './common/Photos/PhotoList'; 
import {PostCreate ,PostEdit} from './common/Posts/PostsCreate';  
import authProvider from './authProvider';
import {EditPhoto} from './common/Photos/EditPhoto'; 


const myTheme = createMuiTheme({
        
        typography: {
            // Use the system font instead of the default Roboto font.
            fontSize: 18,
            fontFamily: [
                // 'Roboto', 'Helvetica', 'Arial', 'sans-serif',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Arial',
                'sans-serif',
            ].join(','),
        },
        
    });
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => <Admin title="Pennant Admin" dashboard = {Dashboard} theme= {myTheme}  dataProvider={dataProvider} loginPage={Login} authProvider={authProvider} >
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
        <Resource name="users" list={UserList}  />
        <Resource name="comments"  />
        <Resource name="photos" list={PhotoList} edit={EditPhoto}   />

</Admin>;
 
 

export default App;