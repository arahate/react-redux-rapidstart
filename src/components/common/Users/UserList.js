import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Toolbar from '@material-ui/core/Toolbar';

const UserPagination = ({ page, perPage, total, setPage }) => {
    const nbPages = Math.ceil(total / perPage) || 1;
    return (
            <Toolbar>
                    <Button  key="prev" icon={<ChevronLeft />} onClick={() => setPage(page - 1)}>
                        Prev
                    </Button>
          
                    <Button  key="next" icon={<ChevronRight />} onClick={() => setPage(page + 1)}>
                        Next
                    </Button>
              
            </Toolbar>
    );
};

export const UserList = (props) => (
     <List title="All users"  {...props} perPage={5}   pagination={<UserPagination />}   >
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);