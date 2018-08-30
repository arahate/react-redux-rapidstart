
import React from 'react';
import { Show, TabbedForm, SimpleForm, Tab,  Edit, TextInput,  TextField, DateInput , FormTab} from 'react-admin';


const required = (message) =>
    value => value ? undefined : message;




export const UserEdit = (props) => (
    <Edit  {...props}>
   
        <TabbedForm>
            <FormTab label="Profile">
                    <TextField label="ID" source="id" />
                    <TextField source="username" label="User" validate={[required('Required field')]}/>
                    <TextInput source="name" label="Name" validate={[required('Required field')]} />
                    <TextInput source="email" label="Email ID" validate={[required('Required field')]} />
            </FormTab>
            <FormTab label="Address">
                    <TextInput source="address.street" label="Street" validate={[required('Required field')]}/>
                    <TextInput source="address.city" label="City" validate={[required('Required field')]}/>
                    <TextInput source="address.zipcode" label="ZipCode"/>
            </FormTab>
            <FormTab label="Geo-Location">

                    <TextInput source="address.geo.lat" label="Latitude" />
                    <TextInput source="address.geo.lng" label= "Longitude" />
 
          </FormTab>
        </TabbedForm>
        
    </Edit>
);