import React  from 'react';
import PropTypes from 'prop-types';
import { Admin, Resource, Login } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {PostList} from './common/Posts/PostList'; 
import {UserList} from './common/Users/UserList'; 
import {PostCreate ,PostEdit} from './common/Posts/PostsCreate';  
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => <Admin title="Pennant Admin" dataProvider={dataProvider} loginPage={Login} authProvider={authProvider} >
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
        <Resource name="users" list={UserList}  />
</Admin>;
 
export default App;