import React ,{useEffect}from 'react'
import {  Col, Row } from 'antd';
import {Link} from "react-router-dom";
import Axios from 'axios';
import { Card } from 'antd';
import Pagination from './Pagination';

const { Meta } = Card;

const Cards = () => {
    const[newsData , setNewsData]= React.useState([]);
    useEffect(() => {
        Axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=e2800f92664e4b2f8e4c810f6922c84e').then(res => setNewsData(res.data.articles));
    }, [])
   console.log(newsData);
    const [showPerPage , setShowPerPage] = React.useState(8);
   const[pagination , setPagination] = React.useState({start:0,end:showPerPage});

   const onPaginationChange = (start, end) =>{

    console.log(start, end);
    setPagination({start:start ,end:end});
   }
    return (

        <div className="container">
   <Row gutter={[16, 16]}>
       {newsData.slice(pagination.start,pagination.end).map((eachData) => <Col sm={{ span: 12 }} md= {{span: 12}}lg={{ span: 6}}>
            <a href={eachData.url} target="_blank">  <Card
        hoverable
        style={{height:'320px'}}
        cover={<img alt={eachData.title} src={eachData.urlToImage} />}
        key={eachData.title}
      >
        <Meta title={eachData.title} description={"Published On :"+eachData.publishedAt} />
      </Card>
      </a>
            </Col>
       )}
 
</Row>

<Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={newsData.length}/>
  </div>
    )
}

export default Cards
