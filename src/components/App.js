import React  from 'react';
import PropTypes from 'prop-types';
import { Admin, Resource, Login } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {PostList} from './common/Posts/PostList'; 
import {UserList} from './common/Users/UserList'; 
import {CommentsList} from './common/Comments/CommentsList'; 
import { createMuiTheme } from '@material-ui/core/styles';
import { Dashboard } from './common/Dashboard/Dashboard';

import {PostCreate ,PostEdit} from './common/Posts/PostsCreate';  
import authProvider from './authProvider';
import {UserEdit} from './common/Users/UserEdit';
import RestClient  from './firebaseprovider/restClient';
import {CityEdit} from './common/City/CityEdit';
import {CityList} from './common/City/CityList';


// const firebaseConfig = {
//     apiKey: "AIzaSyBd9tUsbFEu1bFOUpGWf8cun71RrsBt694",
//     authDomain: "cfi-api-01.firebaseapp.com",
//     databaseURL: "https://cfi-api-01.firebaseio.com",
//     projectId: "cfi-api-01",
//     storageBucket: "cfi-api-01.appspot.com",
//     messagingSenderId: "322729320155"
// };


const firebaseConfig = {
    apiKey: "AIzaSyAcwvAL4MhIrSe811qY3BXm23gQGOhh98Y",
    authDomain: "pennantfb.firebaseapp.com",
    databaseURL: "https://pennantfb.firebaseio.com",
    projectId: "pennantfb",
    storageBucket: "pennantfb.appspot.com",
    messagingSenderId: "324767417748"
};




const clientOptions = {
    timestampFieldNames: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    trackedResources:
    [
        {
            name: 'posts', // The name reference to be used in all other places in AOR
            noauth: true,
        }, 
        {
            name: 'comments', // The name reference to be used in all other places in AOR
            noauth: true,
        },
        {
            name: 'users', // The name reference to be used in all other places in AOR
            noauth: true,
        },
        {
            name: 'country', // The name reference to be used in all other places in AOR
            noauth: true,
        },
        {
            name: 'city', // The name reference to be used in all other places in AOR
            noauth: true,
        }
    ] // A single string assumes path and name as equal, non private and without upload fields
  };

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
const dataProvider = jsonServerProvider('https://pennantfb.firebaseio.com/');
const App = () => <Admin title="Pennant Admin" 
                dashboard = {Dashboard} 
                theme= {myTheme} 
                dataProvider={RestClient(firebaseConfig, clientOptions)}
                loginPage={Login} 
                authProvider={authProvider} >
        <Resource name="country"  />
        <Resource name="city" options={{ label: 'City' }} list={CityList}  edit={CityEdit} />
        <Resource name="posts" options={{ label: 'Posts' }}  list={PostList} create={PostCreate} edit={PostEdit} />
        <Resource name="users" options={{ label: 'Users' }} list={UserList}  edit={UserEdit} />
        <Resource name="comments"  />
        

</Admin>;
 
 

export default App;