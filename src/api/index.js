import axios from 'axios';

const url = "https://covid-193.p.rapidapi.com";

export const fetchData = async (country) => {
    let con;
    if(country)
    {
        con = country;
    }
    else
    {
        con = "All";
    }
    try {
        const response = await axios.get(`${url}/history`, {
            headers: {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"covid-193.p.rapidapi.com",
                "x-rapidapi-key":"21c81af395msh576535b9213bbe7p199063jsn76a07b108ba6"
            },
            params: {
                "country":con
            }
        });
        return response.data.response;
    } catch (error) {
        console.log(error);
    }
}
export const fetchCountry = async () =>{
    try {
        const response = await axios.get(`${url}/countries`, {
            headers: {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"covid-193.p.rapidapi.com",
                "x-rapidapi-key":"21c81af395msh576535b9213bbe7p199063jsn76a07b108ba6"
            }
        });
        // console.log(response);
        return response.data.response;
    } catch (error) {
        console.log(error);
    }
}
export const fetchDailyData = async (country) => {
    let con;
    if(country)
    {
        con = country;
    }
    else
    {
        con = "All";
    }
    try {
        const response = await axios.get(`${url}/history`, {
            headers: {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"covid-193.p.rapidapi.com",
                "x-rapidapi-key":"21c81af395msh576535b9213bbe7p199063jsn76a07b108ba6"
            },
            params: {
                "country":con
            }
        });
        const modifiedData = response.data.response.map((dailyData) =>({
            confirmed: dailyData.cases.active,
            recovered: dailyData.cases.recovered,
            deaths: dailyData.deaths.total,
            time: dailyData.day
        }))
        // console.log(modifiedData);
        var i,j;
        for(i = 0;i<modifiedData.length-2;i++){
            for(j=i;j<modifiedData.length-2 && modifiedData[j].time===modifiedData[j+1].time;j++)
            {
            }
            modifiedData.splice(i,j-i);
        }
        // console.log(modifiedData.time);
        // console.log(modifiedData);
        modifiedData.reverse();
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}
