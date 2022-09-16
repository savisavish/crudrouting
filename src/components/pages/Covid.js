import React,{useEffect} from 'react';


const Covid = () => {
const getCovidData = async() => {
    const res = await fetch ('https://data.covid19india.org/data.json');
    const actualData = await res.json();
}

useEffect(() => {
    getCovidData()
;}, [])
    return (
        <div>
            <div className="mainDiv">

            </div>
        </div>
    )
}
export default Covid;
