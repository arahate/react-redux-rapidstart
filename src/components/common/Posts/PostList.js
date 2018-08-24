// in src/posts.js
import React from 'react';
import { List,   Datagrid, TextField, ReferenceField ,EditButton ,Responsive, SimpleList } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const PostList = (props) => (
    <List title='Posts' {...props}>
    <Responsive
        small ={
            <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.views} views`}
            tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
        }

        medium ={
        <Datagrid>
            <TextField source="id" />
            <TextField source="userId" />
             <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField> 
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
        }
        />
    </List>
);





