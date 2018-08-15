// in src/posts.js
import React from 'react';
import { List,   Datagrid, TextField, ReferenceField } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="userId" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);





