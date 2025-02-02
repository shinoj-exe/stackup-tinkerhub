import {useEffect,useState} from 'react'
import {API} from '../../../service/api' 
import Post from './Post'
import {Box, Grid } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';



const Posts = () => {
    const [posts,setPosts]=useState([]);
    const [searchParams]=useSearchParams();
    const category=searchParams.get('category');

    useEffect(() =>{
        const fetchData=async()=>{
            let response=await API.getAllPosts({category:category || '' });
            if(response.isSuccess){
                setPosts(response.data);
            }
        }
        fetchData();
    },[category])

  return (
    <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
           {
                posts && posts.length >0 ? posts.map(post => (
                    <div>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </div>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
    </div>
  )
}

export default Posts