import React from 'react';
import { List,   Datagrid, TextField, ReferenceField } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const CommentsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
           
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="email" />
            <TextField source="body" />
        </Datagrid>
    </List>
);
