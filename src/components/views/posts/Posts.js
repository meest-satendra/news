import axios from 'axios';
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid } from '@mui/material';
import moment from 'moment';
import { BASE_URL, GET_ARTICLES } from '../../../services/APIS';
import logo1 from '../../assets/logo.png';
import sunset from '../../assets/sunset.jpg';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Posts = () => {
    const [data, setData] = useState([]);


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log(window.scrollY);
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
            const res = await axios.post(BASE_URL + GET_ARTICLES, data, config);
            setData(res.data.responseObject.content)
            console.log(res.data.responseObject.content);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])



    return (
        <div>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} style={{ justifyContent: 'center' }}>
                    {data?.length ? data.map((item, i) => (
                        <Grid item xs={10} sm={6} md={4}>
                            <Card key={i} style={{ borderRadius: '12px', margin: '10px 0px 10px 0px' }}>
                                <Link to={`/post/${item.urlHash}`}>
                                    <CardMedia
                                        component="img"
                                        image={`${sunset}`}
                                        alt="Paella dish"
                                    /></Link>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <img src={logo1} width={70} />, {item.publishDate}
                                    </Typography>
                                    <Link to={`/post/${item.urlHash}`} style={{ textDecoration: 'none' }}>
                                        <Typography variant="h6" style={{
                                            fontWeight: '700',
                                            lineHeight: "1.5em",
                                            height: '3em',
                                            overflow: 'hidden',
                                        }}>
                                            {item.title}...
                                        </Typography>
                                    </Link>

                                    <Typography paragraph style={{
                                        lineHeight: "1.5em",
                                        height: '4em',
                                        overflow: 'hidden'
                                    }} >
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

export default Posts
