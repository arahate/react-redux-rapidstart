import React from 'react';
import { List, Datagrid, EmailField, TextField, EditButton, BooleanField } from 'react-admin';



export const CountryList = (props) => (
     <List title="Country List"  {...props} >
        <Datagrid>
            <TextField source="id" label="Role ID"/>
            <TextField source="countryname" />
            <BooleanField  source="isActive" />
            <EditButton />
        </Datagrid>
    </List>
);