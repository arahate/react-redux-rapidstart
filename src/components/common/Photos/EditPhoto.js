
import React from 'react';
import { Show, ImageInput, Edit, SimpleForm, DisabledInput, TextInput, ImageField, FileField } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { Button } from '@material-ui/core';



export const EditPhoto = (props) => (
    <Show title={<title/>} {...props} >
        <SimpleForm submitOnEnter={false} >
            <DisabledInput label="Id" source="id" />
            <TextInput source="title"  label="Title" />
            <ImageField source="thumbnailUrl" />
            <ImageInput source="photos" label="Upload new photo" accept="image/*">
                <ImageField source="url" title="title" />
            </ImageInput>
            {/* <img src={tile.img} alt={tile.title} /> */}
           
        </SimpleForm>
    </Show>
);