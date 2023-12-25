import '../../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Input from './components/input/Input';
import CountryCart from './components/country-cart/CountryCart'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import CountryPage from '../countryPage/CountryPage'
function HomePage(){
    
  const [countryList ,setCountryList] =useState([])
  const [search , setSearch] = useState("")
  
  useEffect(()=>{ 
    axios.get('https://restcountries.com/v3.1/all')
    .then(result => setCountryList(result.data))
    .catch(error => console.log(error))
},[])
// if ( countryList.length === 0){
//     return(
//         <p>hi</p>
//     )
// }
    return(
        <div className="home-page">
            {/* {countryList.length > 0 && <CountryPage countryData={countryList}/>}
                          {console.log(countryList)}
            {console.log(countryList )} */}
            <div className=' w-full h-full flex flex-col justify-between  '>
                 <header className='search-wrapper  max-w-[500px] max-w-[500px] md:w-full h-[183px] xl:max-w-[1280px]  flex flex-col justify-between items-center pt-[10px] pb-[10px] lg:block lg:relative lg:z-0'>
                     <div className='w-[350px] md:max-w-[500px]  h-auto  pt-[10px]  lg:absolute lg:left-[10px] lg:top-0 lg:z-2'>
                          <img className='w-full h-full'  src='./image/logo.webp' alt='the world'/>
                     </div>
                     <div className='input w-full md:w-full  h-[50px] mt-[10px]  lg:absolute lg:z-2 lg:top-[130px] '>
                         <Input  valueState={search} onChangeHandler={(e) => setSearch(e.target.value)}/>
                     </div>
                 </header>
                 <main className='w-full h-full  mt-[25px] lg:mt-[40px] pt-[10px] lg:pt-[80px] pb-[10px] pr-[10px] pl-[10px] '>
                     <div className='country-wrapper w-full h-full pt-[10px]   pb-[10px] xl:max-w-[1280px] bg-[#AFCDDD] bg-opacity-[0.8] grid justify-between content-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[50px] gap-x-[5px] xl:gap-y-[25px]  rounded-[5px]'>
                          {countryList.filter(item => item?.name?.official.toLowerCase().includes(search)).map(item => (
                                        <Link to={`/countryPage/${item?.name?.common}`}><CountryCart key={item?.cca2} lang={Object.values(item?.languages ?? {})[0] ?? "-"} flag={item?.flags?.png} name={item?.name?.official} capital={item?.capital }  /> </Link>              
                          ))}
                          
                     </div>
                 </main>    
            </div>
            
    </div>
    )
}
export default HomePage;