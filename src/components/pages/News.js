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
    const [data, setData] = useState([{
        "source": {
            "id": null,
            "name": "PRNewswire"
        },
        "author": null,
        "title": "Global Light Vehicle (Premium) Market Report 2022: Increase in Use of Light Weight Material / Upsurge in Use of Electric Vehicles / Involvement of Artificial Intelligence",
        "description": "DUBLIN, Jan. 13, 2022 /PRNewswire/ -- The \"Global Light Vehicle Market with Focus on Premium Segment (Europe, China and NAFTA): Insights & Forecast with Potential Impact of COVID-19 (2021-2025)\" report has been added to ResearchAndMarkets.com's offering. The …",
        "url": "https://www.prnewswire.com/news-releases/global-light-vehicle-premium-market-report-2022-increase-in-use-of-light-weight-material--upsurge-in-use-of-electric-vehicles--involvement-of-artificial-intelligence-301460651.html",
        "urlToImage": "https://mma.prnewswire.com/media/539438/Research_and_Markets_Logo.jpg?p=facebook",
        "publishedAt": "2022-01-13T20:30:00Z",
        "content": "DUBLIN, Jan. 13, 2022 /PRNewswire/ -- The \"Global Light Vehicle Market with Focus on Premium Segment (Europe, China and NAFTA): Insights &amp; Forecast with Potential Impact of COVID-19 (2021-2025)\" … [+5012 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Shiftdelete.net"
        },
        "author": "Veyis Özen Ertuğ",
        "title": "Ünlü sürücüsüz minibüs projesi için sürpriz karar!",
        "description": "Local Motors'un sahibi olduğu Olli sürücüsüz minibüs tarih oldu. 2016 yılında yollara çıkan proje, ikinci versiyonuyla karşımıza çıkacaktı.\nBu içerik ilk olarak Ünlü sürücüsüz minibüs projesi için sürpriz karar! adresinde yayınlandı Teknoloji Haberleri - Shif…",
        "url": "https://shiftdelete.net/olli-surucusuz-3d-minibus-projesi-tarih-oldu",
        "urlToImage": "https://shiftdelete.net/wp-content/uploads/2022/01/olli-surucusuz-3d-minibus-projesi-tarih-oldu.jpg",
        "publishedAt": "2022-01-13T20:28:18Z",
        "content": "Bir dönem oldukça popüler olan Olli sürücüsüz minibüs projesi, tarihin tozlu sayfalarnda yerini ald. lk olarak 2016 ylnda karmza çkan 3D bask ile üretilen proje o dönemde büyük ilgi toplad. Ancak Oll… [+1774 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Seeking Alpha"
        },
        "author": "Bohdan Kucheriavyi",
        "title": "NIO: European Expansion Is A Risky Endeavor",
        "description": "NIO doesn’t have a first-mover advantage in the market. Read why I believe NIO stock won’t be able to establish a solid presence in the European EV market.",
        "url": "https://seekingalpha.com/article/4479515-nio-stock-european-expansion-risky-endeavor",
        "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1190084242/medium_image_1190084242.jpg",
        "publishedAt": "2022-01-13T20:20:00Z",
        "content": "Michael Vi/iStock Editorial via Getty Images\r\nDespite dealing with supply chain issues in the second half of 2021, NIO (NIO) has managed to improve its deliveries in the last couple of months and has… [+8660 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Seeking Alpha"
        },
        "author": "Tradevestor",
        "title": "AT&T: This Is What A Good Start To The Year Means",
        "description": "As good a start AT&T has made to the year, statistics can be used to prove almost any theory. Read more to learn why AT&T stock's technical patterns are sound.",
        "url": "https://seekingalpha.com/article/4479559-t-this-is-what-good-start-to-year-means",
        "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1318505074/medium_image_1318505074.jpg",
        "publishedAt": "2022-01-13T20:17:58Z",
        "content": "Justin Sullivan/Getty Images News\r\nStats may hide more than what they reveal\r\n We'd bet that January is the busiest time of the year for analysts and investors alike. A new wave of optimism hits, bac… [+7951 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CleanTechnica"
        },
        "author": "Johnna Crider",
        "title": "Tesla & Elon Musk Take A Stand For California Homeowners Who Want Solar",
        "description": "It seems that the California Public Utilities Commission wants to tax homeowners for making use of the sun’s existence. I wrote about this last month, noting that the state’s $8 per kilowatt solar tax would punish homeowners for using clean energy, but I’m ju…",
        "url": "https://cleantechnica.com/2022/01/13/tesla-elon-musk-take-a-stand-for-california-homeowners-who-want-solar/",
        "urlToImage": "https://cleantechnica.com/files/2021/06/tesla-solar-roof-scaled-1-e1622856972595.jpg",
        "publishedAt": "2022-01-13T20:16:05Z",
        "content": "It seems that the California Public Utilities Commission wants to tax homeowners for making use of the sun’s existence. I wrote about this last month, noting that the state’s $8 per kilowatt solar ta… [+7599 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Terra.com.br"
        },
        "author": "Reuters",
        "title": "Ford supera US$100 bi em valor de mercado após ação atingir maior nível em 2 décadas",
        "description": "O valor de mercado da Ford superou 100 bilhões de dólares nesta quinta-feira, após a ação da segunda maior montadora dos Estados Unidos atingir o pico em...",
        "url": "https://www.terra.com.br/economia/ford-supera-us100-bi-em-valor-de-mercado-apos-acao-atingir-maior-nivel-em-2-decadas,302ff4dd57e2f916299ded5811217d1b6119by3k.html",
        "urlToImage": "https://p2.trrsf.com/image/fget/cf/1200/628/middle/s1.trrsf.com/atm/3/core/_img/terra-logo-white-bg-v3.jpg",
        "publishedAt": "2022-01-13T20:15:00Z",
        "content": "O valor de mercado da Ford superou 100 bilhões de dólares nesta quinta-feira, após a ação da segunda maior montadora dos Estados Unidos atingir o pico em duas décadas. \r\nO valor de mercado da Ford at… [+548 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Jalopnik"
        },
        "author": "Andy Kalmowitz",
        "title": "Someone Finally Fixed The Tesla Model S Yoke, But It Will Cost You",
        "description": "Someone has finally come up with a solution to Tesla’s much maligned yoke on the Model S Plaid, but it’s going to cost you.Read more...",
        "url": "https://jalopnik.com/someone-finally-fixed-the-tesla-model-s-yoke-but-it-wi-1848354898",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/86fe218aa9c1697607862b935cb45057.png",
        "publishedAt": "2022-01-13T20:14:37Z",
        "content": "Someone has finally come up with a solution to Teslas much maligned yoke on the Model S Plaid, but its going to cost you.\r\nThe yoke has been nothing short of incredibly controversial since it was fir… [+1952 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNA"
        },
        "author": null,
        "title": "Ford crosses US$100 billion in market value for the first time",
        "description": "Ford Motor Co's market value breached US$100 billion for the first time on Thursday, as more investors bet on the Detroit automaker's electrification strategy.The company's shares, which have more than doubled in value last year, were up 3.7per cent in aftern…",
        "url": "https://www.channelnewsasia.com/business/ford-crosses-us100-billion-market-value-first-time-2434516",
        "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--SWBW_sE---/fl_relative%2Cg_south_east%2Cl_one-cms:core:watermark:reuters%2Cw_0.1/f_auto%2Cq_auto/c_fill%2Cg_auto%2Ch_676%2Cw_1200/v1/one-cms/core/2022-01-13t200856z_2_lynxmpei0c10d_rtroptp_3_ford-tariffs.jpg?itok=trcja8ec",
        "publishedAt": "2022-01-13T20:14:26Z",
        "content": "Ford Motor Co's market value breached US$100 billion for the first time on Thursday, as more investors bet on the Detroit automaker's electrification strategy.\r\nThe company's shares, which have more … [+1818 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yourmileagemayvary.net"
        },
        "author": "Your Mileage May Vary",
        "title": "Surprise! Rental Car Companies Created Another Fee",
        "description": "Reading a car rental receipt can seem like trying to understand another language. Besides your rental fee, there’s an endless list of mandatory and optional charges depending on where you…",
        "url": "https://yourmileagemayvary.net/2022/01/13/surprise-rental-car-companies-created-another-fee/",
        "urlToImage": "https://yourmileagemayvary.net/wp-content/uploads/2017/12/carrental.jpg",
        "publishedAt": "2022-01-13T20:12:23Z",
        "content": "Reading a car rental receipt can seem like trying to understand another language. Besides your rental fee, there’s an endless list of mandatory and optional charges depending on where you are renting… [+3608 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Forbes"
        },
        "author": "Robert Goulder, Contributor, \n Robert Goulder, Contributor\n https://www.forbes.com/sites/taxnotes/people/robertgoulder/",
        "title": "Why Does Ireland Need To Change Its Tax Regime?",
        "description": "Robert Goulder writes that Ireland, or any other country thinking about territorial tax reforms, should kick the tires before they commit to fundamental change.",
        "url": "https://www.forbes.com/sites/taxnotes/2022/01/13/why-does-ireland-need-to-change-its-tax-regime/",
        "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61e06d4cd239dbc9027ac53b%2F0x0.jpg",
        "publishedAt": "2022-01-13T20:12:17Z",
        "content": "Map of Ireland. Selective Focus. \r\ngetty\r\nA recent Tax Notes International article provides a useful reminder about the nature of global tax competition: The Irish government might soon adopt a parti… [+5205 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "3dnews.ru"
        },
        "author": null,
        "title": "Tesla Model Y стал самым продаваемым кроссовером премиум-класса в Китае в 2021 году",
        "description": "Электромобиль Tesla Model Y, продажи которого стартовали в Китае в начале 2021 года, продолжает достигать новых высот. В декабре 2021 года электрический кроссовер был признан самым продаваемым кроссовером премиум-класса в Поднебесной, обойдя как машины на эле…",
        "url": "https://3dnews.ru/1057968/tesla-model-y-stal-samim-prodavaemim-krossoverom-premiumklassa-v-kitae-v-2021-godu",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2022/01/13/1057968/43243243.jpg",
        "publishedAt": "2022-01-13T20:06:00Z",
        "content": "Tesla Model Y, 2021 , . 2021 - , , .\r\n: Marc Urbano/Car And Driver\r\nTesla Model 3 Model Y, , . Tesla 70 847 . 437 078 , Tesla 2020 .\r\nTesla Model Y , . (CPCA), 2021 40 500 Tesla Model Y, . Li ONE 14 … [+124 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Ford crosses $100 bln in market value for the first time - Reuters",
        "description": "Ford Motor Co's <a href=\"https://www.reuters.com/companies/F.N\" target=\"_blank\">(F.N)</a> market value breached $100 billion for the first time on Thursday, as more investors bet on the Detroit automaker's electrification strategy.",
        "url": "https://www.reuters.com/business/autos-transportation/ford-crosses-100-bln-market-value-first-time-2022-01-13/",
        "urlToImage": "https://www.reuters.com/resizer/tF08s_5iJHRf7Vy9SbQZQi03gx0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BU5GNWHD5ROCREGDMPKS7AS6II.jpg",
        "publishedAt": "2022-01-13T20:05:00Z",
        "content": "Jan 13 (Reuters) - Ford Motor Co's (F.N) market value breached $100 billion for the first time on Thursday, as more investors bet on the Detroit automaker's electrification strategy.\r\nThe company's s… [+1919 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hotnews.ro"
        },
        "author": "https://www.facebook.com/www.hotnews.ro",
        "title": "Moment istoric pentru Ford: Producătorul auto a urcat la o valoare de 100 de miliarde de dolari pentru prima dată în istoria sa",
        "description": "Capitalizarea de piață a Ford Motors a urcat joi la 100 de miliarde de dolari pentru prima dată în istoria sa, ambițiile electrice anunțate de producătorul auto american ducând prețul acțiunilor sale la maximul ultimilor 20 de ani, relatează Markets Insider.",
        "url": "https://economie.hotnews.ro/stiri-auto-25298908-moment-istoric-ford-producatorul-auto-ajuns-valoare-100-miliarde-dolari-prima-data-istoria.htm",
        "urlToImage": "http://media.hotnews.ro/media_server1/image-2021-12-4-25222229-70-logo-ford.jpg",
        "publishedAt": "2022-01-13T20:04:00Z",
        "content": "Capitalizarea de pia a Ford Motors a urcat joi la 100 de miliarde de dolari pentru prima dat în istoria sa, ambiiile electrice anunate de productorul auto american ducând preul aciunilor sale la maxi… [+1437 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Daily Caller"
        },
        "author": "Sebastian Hughes",
        "title": "Chinese Spy Suspected To Have Infiltrated UK Parliament",
        "description": "The U.K.&#039;s domestic spy service, MI5, informed the House of Commons speaker that a woman is suspected to have been used by China to exert influence over British lawmakers.",
        "url": "https://dailycaller.com/2022/01/13/chinese-spy-uk-parliament-christine-lee/",
        "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2022/01/GettyImages-493455880-e1642101484796.jpg",
        "publishedAt": "2022-01-13T20:03:02Z",
        "content": "The U.K.’s domestic spy service, MI5, informed the House of Commons speaker that a woman is suspected to have been used by China to exert influence over British lawmakers, Agence France Presse (AFP) … [+2297 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Forbes"
        },
        "author": "Alan Ohnsman, Forbes Staff, \n Alan Ohnsman, Forbes Staff\n https://www.forbes.com/sites/alanohnsman/",
        "title": "Ford’s Amped Up Electric Vehicle Strategy Boost Shares, Tops GM’s Market Cap",
        "description": "The carmaker's plan to accelerate production of its electric crossover and pickup have lifted its shares more than 20% in January.",
        "url": "https://www.forbes.com/sites/alanohnsman/2022/01/13/fords-amped-up-electric-vehicle-strategy-boost-shares-tops-gms-market-cap/",
        "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61e0822d1c39dbdbf334b4ef%2F0x0.jpg",
        "publishedAt": "2022-01-13T20:01:28Z",
        "content": "Ford CEO Jim Farley with the electric F-150 Lightning truck in Dearborn, Michigan. \r\nBill Pugliano/Getty Images\r\nFord Motor Co.s plans to accelerate production and sales of battery-powered crossovers… [+2943 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Electrek"
        },
        "author": "Scooter Doll",
        "title": "Nikola Tre gets board approval as a ZEV, qualifying for a $120,000 incentive for California customers",
        "description": "American Zero-emission vehicle manufacturer Nikola Motors recently shared news that its Tre BEV semi truck has received eligibility from the California Air Resources Board (CARB) to be classified as a Zero-Emission Vehicle (ZEV) in the state, thus qualifying …",
        "url": "https://electrek.co/2022/01/13/nikola-tre-gets-board-approval-as-a-zev-qualifying-for-a-120000-incentive-for-california-customers/",
        "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/01/Nikola-Tre-Cass.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-01-13T19:58:09Z",
        "content": "American Zero-emission vehicle manufacturer Nikola Motors recently shared news that its Tre BEV semi truck has received eligibility from the California Air Resources Board (CARB) to be classified as … [+2390 chars]"
    },
    {
        "source": {
            "id": "rt",
            "name": "RT"
        },
        "author": "RT en Español\n , RT en Español",
        "title": "Tesla elimina de su página web todas las pistas sobre el calendario de producción de la Cybertruck",
        "description": "",
        "url": "https://actualidad.rt.com/actualidad/416833-tesla-eliminar-pagina-web-2022-cybertruck",
        "urlToImage": "https://cdni.rt.com/actualidad/public_images/2022.01/original/61e082f659bf5b68237ad84c.jpg",
        "publishedAt": "2022-01-13T19:52:22Z",
        "content": "El fabricante automotriz Tesla ha eliminado cualquier mención del año 2022 del sitio web de la Cybertruck, una mala señal para cualquier persona que espere tener en sus manos la camioneta eléctrica e… [+425 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Electrek"
        },
        "author": "Jo Borrás",
        "title": "National Auto Dealer Assoc. says it’s all in on EVs. Will dealers step in line?",
        "description": "The National Automobile Dealers Association (NADA) has said they’re “all-in” on electric cars, but $30,000 price hikes and generalized dealer shenanigans about reservations in the face of ongoing inventory concerns have led some automakers to put their franch…",
        "url": "https://electrek.co/2022/01/13/national-auto-dealer-assoc-says-its-all-in-on-evs-will-dealers-step-in-line/",
        "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/01/Electric_Vehicles.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-01-13T19:47:59Z",
        "content": "The National Automobile Dealers Association (NADA) has said they’re “all-in” on electric cars, but $30,000 price hikes and generalized dealer shenanigans about reservations in the face of ongoing inv… [+11284 chars]"
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": "Bloomberg",
        "title": "Lucid Outperforms Tesla Year-to-Date; What's Next?",
        "description": "Electric vehicle maker Lucid Motors has been on a tear over the last six months. It's stock has outperformed the likes of Apple, Tesla and Ford. Ed Ludlow explains on Quicktake. (Source: Bloomberg)",
        "url": "https://www.bloomberg.com/news/videos/2022-01-13/lucid-outperforms-tesla-year-to-date-what-s-next-video",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijLyCq6QzMNw/v3/-1x-1.jpg",
        "publishedAt": "2022-01-13T19:38:54Z",
        "content": "Beginning of dialog window. Escape will cancel and close the window.\r\nText\r\nColor\r\nWhite\r\nBlack\r\nRed\r\nGreen\r\nBlue\r\nYellow\r\nMagenta\r\nCyanTransparency\r\nOpaque\r\nSemi-Transparent\r\nBackground\r\nColor\r\nBlac… [+566 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hackaday"
        },
        "author": "Chris Lott",
        "title": "Exploring Tesla Model S High Voltage Cabling",
        "description": "When he’s not busy with his day job as professor of computer and automotive engineering at Weber State University, [John Kelly] is a prolific producer of educational videos. We found …read more",
        "url": "https://hackaday.com/2022/01/13/exploring-tesla-model-s-high-voltage-cabling/",
        "urlToImage": "https://hackaday.com/wp-content/uploads/2022/01/hv-feature.png",
        "publishedAt": "2022-01-13T19:30:24Z",
        "content": "When he’s not busy with his day job as professor of computer and automotive engineering at Weber State University, [John Kelly] is a prolific producer of educational videos. We found his video tracin… [+1904 chars]"
    }]);


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    // const getData = async (e) => {
    //     try {
    //         const config = {
    //             Headers: {
    //                 'accept': 'application/json',
    //                 'DEVICE- TYPE': 'Web',
    //                 'VER': '12',
    //                 'ApiKey': 'DEVICE-TYPE'
    //             }
    //         }
    //         const res = await axios.post('http://demoportal.nubit.in/vistory/api/v1/articles/getArticles?direction=ASC&pageNumber=0&pageSize=10', data, config);
    //         setData(res.data.articles)
    //         console.log(res.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     getData();
    // }, [])



    return (
        <div>
            {data.length ? data.map((item, i) => (
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
                                        overflow: 'hidden',
                                        // whiteSpace: 'nowrap',
                                        // textOverflow: 'ellipsis',
                                        // width: '100%',
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
