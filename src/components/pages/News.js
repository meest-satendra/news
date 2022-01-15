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
import { BASE_URL, GET_ARTICLES } from '../../services/APIS';

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

const News = () => {
    const [data, setData] = useState([]);


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


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
            const res = await axios.post(BASE_URL+GET_ARTICLES, data, config);
            setData(res.data.responseObject)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])



    return (
        <div>
            {data?.length ? data.map((item, i) => (
                <Container style={{ paddingTop: '10px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                        <Grid item xs={10} sm={6} md={8}>
                            <Card key={i} style={{ borderRadius: '12px' }}>
                                <CardMedia
                                    component="img"
                                    image={item.urlToImage}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {moment(item.publishedAt).format("MMM Do YY")}
                                    </Typography>
                                    <Typography variant="h6" style={{
                                        fontWeight: '700',
                                        lineHeight: "1.5em",
                                        height: '3em',
                                        overflow: 'hidden',
                                        // whiteSpace: 'nowrap',
                                        // textOverflow: 'ellipsis',
                                        // width: '100%',
                                    }}>
                                        {item.title}...
                                    </Typography>
                                    <Typography paragraph style={{
                                        lineHeight: "1.5em",
                                        height: '3em',
                                        overflow: 'hidden'
                                    }}>
                                        {item.description}...
                                    </Typography>
                                </CardContent>
                                {/* <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions> */}
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>

                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            )) : null
            }
        </div >
    );
}

export default News
