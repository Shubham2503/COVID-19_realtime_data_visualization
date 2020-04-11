import axios from 'axios';

const url = "https://covid-193.p.rapidapi.com/history";

export const fetchData = async () => {
    try {
        const response = await axios.get(url, {
            headers: {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"covid-193.p.rapidapi.com",
                "x-rapidapi-key":"21c81af395msh576535b9213bbe7p199063jsn76a07b108ba6"
            },
            params: {
                "country":"all"
            }
        });
        return response.data.response;
    } catch (error) {
        console.log(error);
    }

}

