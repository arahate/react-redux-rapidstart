
import React from 'react';
import { Show, TabbedShowLayout, SimpleForm, Tab,  Edit, TextInput,  TextField, DateInput } from 'react-admin';

//  import IsEmpty from '../Utility/validate.js'; //Directily importing JS function.
 import * as utils from '../Utility/validate.js'; //Importing all function.

{/*  START of Inline Validation */}
// const ValidateUserProfile = (values) => {
//     const errors = {};
//     if (!values.name) {
//         errors.name = ['The User Name is required'];
//     }
   
//     else if (!values.email) {
//         errors.email = ['Email Id is required'];
//     }
//     return errors
// };

{/*  END of Inline Validation */}

{/*  START of validation in external JS File*/}
const ValidateUserProfile = (values) => {
    const errors = {};
    
    if(utils.IsEmpty(values.name))
        errors.name = ['The User Name is required'];
    else if(utils.GreaterThan100(values.name))
        errors.name = ['The User Name cannot be greater than 100 characters'];

    if(utils.IsEmpty(values.email))
        errors.email = ['Email address is required.'];
    else if(!utils.ValidateEmail(values.email))
        errors.email = ['Incorrect email format.'];

    return errors
};

{/*  END of validation in external JS File*/}



{/*  START of Single element validation */}
const StreetRequired = (message = 'Street is Required') =>
    value => value ? undefined : message;

const CityRequired = (message = 'City is Required') =>
value => value ? undefined : message;
{/*  END of Single element validation */}

export const EditUser = (props) => (
    <Edit  {...props}>
   
        <TabbedShowLayout>
            <Tab label="Profile">
                 <SimpleForm validate={ValidateUserProfile} > 
                    <TextField label="ID" source="id" />
                    <TextField source="username" label="User ID"/>
                    <TextInput source="name" label="Name" />
                    <TextInput source="email" label="Email ID" />
                    
                    
                </SimpleForm>
            </Tab>
            <Tab label="Address">
                 <SimpleForm> 
                    <TextInput source="address.street" label="Street" validate={[StreetRequired()]}/>
                    <TextInput source="address.city" label="City" validate={[CityRequired()]} />
                    <TextInput source="address.zipcode" label="ZipCode"/>
                </SimpleForm> 
            </Tab>
            <Tab label="Geo-Location">
                <SimpleForm> 
                    <TextInput source="address.geo.lat" label="Latitude" />
                    <TextInput source="address.geo.lng" label= "Longitude" />
                </SimpleForm> 
          </Tab>
        </TabbedShowLayout>
        
    </Edit>
);