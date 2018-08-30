
import React from 'react';
import { 
            Edit, 
            SimpleForm,
            DisabledInput,
            TextInput,
            BooleanInput ,
            SelectInput,
            FormDataConsumer,
            ReferenceInput
      } 
      from 'react-admin';



      
function getCitiesFor(countryid){
    debugger;
    var cityDetails = [
        { id: '1', name: 'Programming C#' },
        { id: '0', name: 'Lifestyle in Metro' },
        { id: '1', name: 'Photography - Wildlife' },
     ];

     //JSON.stringify(city);
     

     cityDetails = cityDetails.filter(obj=>obj.id==countryid)

     return cityDetails;
}



export const CityEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput label="Country Name" source="id" reference="country">
                <SelectInput optionValue="id"  optionText="countryname" />
            </ReferenceInput>

            {/* <FormDataConsumer>
                {({ formData, ...rest }) =>
                     <SelectInput 
                         source="city"
                         choices={getCitiesFor(formData.id)}
                         {...rest}
                     />
                }
            </FormDataConsumer> */}
        </SimpleForm>
    </Edit>
); 