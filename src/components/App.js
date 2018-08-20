import React  from 'react';
import PropTypes from 'prop-types';
import { Admin, Resource, Login } from 'react-admin';
import jsonServerProvider from './dataprovider';
import {PostList} from './common/Posts/PostList'; 
import {UserList} from './common/Users/UserList'; 
import {CommentsList} from './common/Comments/CommentsList'; 
import { createMuiTheme } from '@material-ui/core/styles';
import { Dashboard } from './common/Dashboard/Dashboard';
import { PhotoList } from './common/Photos/PhotoList'; 
import {PostCreate ,PostEdit} from './common/Posts/PostsCreate';  
import authProvider from './authProvider';
import {EditPhoto} from './common/Photos/EditPhoto'; 


const myTheme = createMuiTheme({
        
        typography: {
            // Use the system font instead of the default Roboto font.
            fontSize: 24,
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
const dataProvider = jsonServerProvider('https://cfi-api-01.firebaseio.com/');
const App = () => <Admin title="Pennant Admin" dashboard = {Dashboard} theme= {myTheme}  dataProvider={dataProvider} loginPage={Login} authProvider={authProvider} >
        <Resource name="posts.json" options={{ label: 'Posts' }}  list={PostList} create={PostCreate} edit={PostEdit} />
        <Resource name="users.json" options={{ label: 'Users' }} list={UserList}  />
        <Resource name="comments.json"  />
        

</Admin>;
 
 

export default App;