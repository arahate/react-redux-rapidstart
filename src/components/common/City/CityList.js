import React from 'react';
import { List, Datagrid, TextField, EditButton, BooleanField, ReferenceField } from 'react-admin';



export const CityList = (props) => (
     <List title="City List"  {...props} >
        <Datagrid>
            <TextField source="id" label="ID"/>
            <TextField source="cityname" />
            <TextField source="country_id" />
            {/* <ReferenceField label="Country Name" source="country_id" reference="country">
                    <TextField source="countryname" />
            </ReferenceField> */}
            <BooleanField  source="isActive" />
            <EditButton />
        </Datagrid>
    </List>
);