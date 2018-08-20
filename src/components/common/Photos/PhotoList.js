
// in src/posts.js
import React from 'react';
import {List,   Datagrid, TextField, ImageField,EditButton, FileField  } from 'react-admin';




export const PhotoList = (props) => (
    <List {...props} perPage={10}>
        <Datagrid>
            <TextField source="title" />
            <ImageField source="thumbnailUrl" />
            <FileField source="url" title="Click to preview image" />
            <EditButton />
        </Datagrid>
    </List>
    
);


