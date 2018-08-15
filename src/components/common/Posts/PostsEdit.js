import React from 'react';
import { Create, 
    Edit, 
    SimpleForm,
     DisabledInput,
      TextInput,
       DateInput,
        LongTextInput,
         ReferenceManyField,
          Datagrid,
           TextField,
            DateField,
             EditButton, 
             PostTitle } from 'react-admin';

import RichTextInput from 'ra-input-rich-text';

export const PostEdit = (props) => (
     <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="title" />
            <LongTextInput source="teaser"  />
            <RichTextInput source="body"  />
            <DateInput label="Publication date" source="published_at" />
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);