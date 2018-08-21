
// in src/posts.js
import React from 'react';
import {List,  Datagrid, TextField, ImageField,EditButton, FileField  } from 'react-admin';
import ModalImage from 'react-modal-image'

export const PhotoList = (props) => (
    <List {...props} perPage={25} className="button-colors-example">
        <Datagrid>
            <TextField source="title" />
            <ImageField source="thumbnailUrl" />
            <FileField source="url" title="Click to preview image" >
            </FileField>
            {/* <ModalImage
                small={"https://via.placeholder.com/150/92c952"}
                large={"https://via.placeholder.com/600/92c952"}
                alt="Click to Preview"
             /> */}
            <EditButton />
        </Datagrid>
    </List>
    
);


