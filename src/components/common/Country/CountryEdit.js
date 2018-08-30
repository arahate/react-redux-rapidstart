import React from 'react';
import { 
            Edit, 
            SimpleForm,
            DisabledInput,
            TextInput,
            BooleanInput 
          
      } 
      from 'react-admin';

export const CountryEdit = (props) => (
     <Edit  {...props}>
        <SimpleForm>
            <DisabledInput label="id" source="Id" />
            <TextInput source="name" />
            <BooleanInput  source="isActive" />
           
        </SimpleForm>
    </Edit>
);