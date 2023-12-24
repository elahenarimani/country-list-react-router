import { Outlet, useParams} from 'react-router-dom';
import React from 'react';
function CountryPage({data}){
    let params = useParams()
    return(
        <div>
           <p>it is {data.find(item => item.cca2 == params.name)?.name?.common}</p>
           <Outlet/>
        </div>
    )
}
export default CountryPage;