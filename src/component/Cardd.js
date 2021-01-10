import React,{useEffect} from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const Cardd = () => {

  const[newsData , setNewsData]= React.useState([]);
    useEffect(() => {
        Axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=e2800f92664e4b2f8e4c810f6922c84e&name=ABC&category=technology').then(res => setNewsData(res.data.articles));
    }, [])
   console.log(newsData);

    return (
<>Test </>
   
    )
}

export default Cardd;
