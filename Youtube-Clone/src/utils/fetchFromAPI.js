import axios from "axios";
const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
      url: BASE_URL,
      params: {
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key':'66c99070f5mshfb7871b66cddc41p13715fjsna2e943948e8c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
};
export  const fetchFromAPI=async(url)=>{
      const {data}=await axios.get(`${BASE_URL}${url}`,options);
      return data;
}