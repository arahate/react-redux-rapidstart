
import React from 'react';
import { ImageInput,Create, Edit, SimpleForm, DisabledInput, TextInput, ImageField, FileField } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const EditPhoto = (props) => (
    <Edit title={<title/>} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="title"  />
            <ImageField source="thumbnailUrl" />
            <ImageInput source="photos" label="Upload new photo" accept="image/*">
                <ImageField source="url" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);