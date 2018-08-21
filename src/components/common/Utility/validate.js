
export  function IsEmpty (value) {
    
    if(value.length  == 0)
        return true;
    else
        return false;
}



export  function GreaterThan100(value) {
    
    if(value.length > 100)
        return true;
    else
        return false;
}


export function ValidateEmail(email) {
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email` 9).toLowerCase());
}