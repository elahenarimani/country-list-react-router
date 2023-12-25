import { Outlet, useParams} from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CountryPage(){
   const [countryList , setCountryList] = useState([]);
   useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(result => setCountryList(result.data))
    .catch(err => console.log(err))
   },[])
    let params = useParams()
    
    return(
        <div className='w-full h-full flex flex-col justify-between items-center gap-[30px]'>
            <div className="w-[100px] h-[80px] ">
                <img className="w-full h-full " src={countryList.find(item => item?.name?.common === params.name )?.flags?.png} alt='flag'/>
             </div>
           <p>welcome to {countryList.find(item => item?.name?.common === params.name)?.name?.common}</p>
           <Outlet/>
        </div>
    )
}
export default CountryPage;