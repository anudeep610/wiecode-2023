import React from 'react';

// Creating the context object and passing the default values.
const userContext = React.createContext({
    teamName:"",
    teamSize:0,
    domain:"",
    teamDetails:[]
});

export default userContext;