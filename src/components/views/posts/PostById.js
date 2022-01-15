import axios from 'axios';
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import moment from 'moment';
import { BASE_URL, GET_ARTICLES, GET_POST_BY_HASH } from '../../../services/APIS';
import logo1 from '../../assets/logo.png';
import sunset from '../../assets/sunset.jpg';
import { useParams } from 'react-router-dom';

const PostById = (props) => {
    const [data, setData] = useState([]);
    const { id } = useParams();



    const getData = async (e) => {
        try {
            const config = {
                headers: {
                    'accept': 'application/json',
                    'DEVICE-TYPE': 'Web',
                    'VER': '12',
                    'ApiKey': 'DEVICE-TYPE'
                }
            }
            const res = await axios.post(BASE_URL + GET_POST_BY_HASH, data, config);
            setData(res.data.responseObject.content)
            console.log(res.data.responseObject.content);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData(); console.log(id);
    }, [])



    return (
        <div>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} style={{ justifyContent: 'center' }}>
                    {data?.length ? data.map((item, i) => (
                        <Grid item xs={12} sm={12} md={12}>
                            <Card key={i} style={{ borderRadius: '12px', margin: '10px 0px 10px 0px' }}>
                                <CardMedia
                                    component="img"
                                    image={`${sunset}`}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <img src={logo1} width={70} />, <span >{item.publishDate}</span>
                                    </Typography>
                                    <Typography variant="h5" style={{
                                        fontWeight: '700',
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <Typography paragraph >
                                        <span dangerouslySetInnerHTML={{ __html: item.contentBody }} />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )) : null}
                </Grid>
            </Container>
        </div >
    );
}

export default PostById
