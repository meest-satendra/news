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
import Stories from '../stories/Stories';

const PostById = (props) => {
    const [data, setData] = useState(
        {
            "id": 311,
            "urlHash": "04b6302f749a584773d6c426018b0d8f",
            "lang": "1",
            "category": "Automobile",
            "mainIgmage": "Jaisalmer_002.jpg",
            "title": "JAISALMER – The Golden City of Rajasthan",
            "description": "The mirage-like golden city of Jaisalmer, in Rajasthan's Thar desert, conjures up images of an Arabian Nights fable. A former medieval trading center,",
            "contentBody": "<p>The mirage-like golden city of Jaisalmer, in Rajasthan&#39;s Thar desert, conjures up images of an Arabian Nights fable. A former medieval trading center, the most notable characteristic of the town is the abundance of structures built using distinctive yellow sandstone&mdash;making any location a picture- perfect spot.</p>\r\n\r\n<p><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_003.jpg\" style=\"height:400px; width:700px\" /></p>\r\n\r\n<p>To avoid the searing summer desert heat, it&#39;s best to visit between September and mid-March. The best time to experience the full splendor of the city is if you go during the annual Jaisalmer Desert Festival, usually held in early February or late January.</p>\r\n\r\n<p>The well said line in Bollywood movie-Kabhi aao humari haveli per! Explore Jaisalmer Fort and Palace Museum</p>\r\n\r\n<h3><strong>Jaisalmer fort</strong></h3>\r\n\r\n<p><strong><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_006.jpg\" style=\"height:400px; width:700px\" /></strong></p>\r\n\r\n<p>Jaisalmer&#39;s ethereal sandstone fort, which resembles a massive sandcastle rising from the desert, is the city&#39;s focal point.</p>\r\n\r\n<p>The fort was built in 1156 by Rajput ruler Jaisal, who also founded the city at the same time. What really makes it unusual is that it&#39;s one of the few living forts in the world. Thousands of people reside inside its walls. It&#39;s also home to numerous hotels, guesthouses, temples, handicraft stores, restaurants, and the former maharaja&#39;s palatial palace.</p>\r\n\r\n<p>Tickets cost 250 rupees for foreigners, including an audio guide. You&#39;ll need to pay 50 rupees extra to take your camera inside or 100 rupees for a video camera. Jaisalmer Magic runs a daily, three- hour heritage walking tour through the fort.</p>\r\n\r\n<p>Unfortunately, the condition of the fort is deteriorating, as drain water is seeping into its foundations. Hence, many people choose to stay outside the fort in hotels with evocative views of the structure.</p>\r\n\r\n<h3><strong>Jain temples at Jaisalmer</strong></h3>\r\n\r\n<p><strong><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_010.jpg\" style=\"height:400px; width:700px\" /></strong></p>\r\n\r\n<p>One of the main attractions inside the fort is a stunning series of seven interconnected Jain temples that date back to the 15th and 16th centuries.</p>\r\n\r\n<p>Carved out of sandstone, the detail on them rivals that of the marble Jain temple complex at Ranakpur. You&#39;ll need to remove your shoes and all leather items before entering. The temples are open daily from 8 a.m. until 12 p.m., although timings are prone to change, so do check first.</p>\r\n\r\n<p>Tickets cost 10 rupees for foreigners, and while locals don&#39;t have to pay, there is a camera charge for everyone (50 rupees for camera and 100 rupees for video camera).</p>\r\n\r\n<h3><strong>Walk Through Havelis</strong></h3>\r\n\r\n<p><strong><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_005.jpg\" /></strong></p>\r\n\r\n<p>Upward view of Patwa ki Haveli, Jaisalmer</p>\r\n\r\n<p>Jaisalmer is also known for the fairy-tale architecture of its magnificent historic havelis (mansions), located both inside and out of the fort. Many can be found in the narrow lanes about 10 minutes&rsquo; walk north of the fort.</p>\r\n\r\n<p>In this area, the 19th century Patwa Haveli is the city&#39;s biggest and most important one. It&#39;s actually a cluster of five mansions built by a wealthy Jain trader and his sons. Kothari&rsquo;s Patwa Haveli is particularly impressive, with its breathtaking intricate stonework and artwork, and has been converted to a museum.</p>\r\n\r\n<p>The entry fee is 100 rupees for foreigners and 50 rupees for Indians. In the same area, the distinctively shaped Salim Singh Haveli and extraordinary Nathmal Haveli are worth visiting as well. Inside Nathmal Haveli, the beautiful gold paintings are a highlight.</p>\r\n\r\n<h3><strong>Ride a Camel</strong></h3>\r\n\r\n<p><strong><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_004.jpg\" style=\"height:400px; width:700px\" /></strong></p>\r\n\r\n<p>Most tourists take a camel safari&mdash;it&#39;s the quintessential Jaisalmer experience. A camel safari will also give you the opportunity to witness the rustic, rural desert life of India.</p>\r\n\r\n<p>It&#39;s possible to go on a quick one-day safari or a hardcore safari as long as 30 days. However, choose the provider carefully as the safari business is extraordinarily competitive and tourists definitely get what they pay for. A few recommended vendors are Sahara Travels (next to the Fort gate), Trotters Independent Travel, and Real Desert Man Camel Safaris.</p>\r\n\r\n<h3><strong>Sand Dunes and Desert National Park</strong></h3>\r\n\r\n<p><strong><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_012.jpg\" style=\"height:400px; width:700px\" /></strong></p>\r\n\r\n<p>Hordes of people head to the famous and picturesque Sam Sand Dunes, around 50 minutes west of Jaisalmer, at sunset. Cultural performances and camel rides create a carnival atmosphere.</p>\r\n\r\n<p>It&#39;s also possible to stay overnight close to the Sam Dunes in a unique, non-touristy experience by bunking at a desert camp for glamping. On the way to the Dunes, Kuldhara Abandoned Village is a spooky but interesting place to visit.</p>\r\n\r\n<p>If you&#39;d prefer a more peaceful desert sojourn, the dunes around Khuri village in Desert National Park an hour southwest of Jaisalmer are more suitable. Accommodations are available in traditional- style huts (Badal House is recommended for an authentic local experience) and small resorts. You can go on a camel safari there as well.</p>\r\n\r\n<h3><strong>Eat Breakfast with Peacocks at Khaba Fort</strong></h3>\r\n\r\n<p><strong><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_007.jpg\" style=\"height:400px; width:700px\" /></strong></p>\r\n\r\n<p>Peacock in Rajasthan near Jaisalmer. If you don&#39;t mind getting up early, it&#39;s possible to have breakfast at the ruins of an old fort in the desert while marvelling over the remarkable spectacle of a huge flock of peacocks coming to be fed by a local boy.</p>\r\n\r\n<p>The magnificent birds arrive at sunrise at Khaba Fort in an abandoned Paliwal village, about 40 minutes west of Jaisalmer (towards the Sam Sand Dunes). As well as seeing the peacocks, you&#39;ll get an evocative view over the village and can explore the fort afterward. To sign up, contact the luxurious Suryagarh Hotel.</p>\r\n\r\n<h3><strong>Sunset point, Jaisalmer</strong></h3>\r\n\r\n<p>Vyas Chhatri, on the edge of Jaisalmer north of the Fort, is dedicated to the great sage Vyasa who authored the Hindu epic The Mahabharata. This haunting place is used as a cremation ground for Pushkarna Brahmins and contains many cenotaphs (empty tombs) erected in honour of notable ones. The cenotaphs are referred to as chhatris because of their domes, which look like umbrellas (chhatris). Go there for spectacular sunsets over the city.</p>\r\n\r\n<h3><strong>Bada Bagh at sunset in Jaisalmer</strong></h3>\r\n\r\n<p><strong><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_008.jpg\" style=\"height:400px; width:700px\" /></strong></p>\r\n\r\n<p>Jaisalmer has another group of similar looking cenotaphs, in a large unkempt garden around five kilometres further out, erected in honour of the city&#39;s royal rulers from the 16th to 20th centuries.</p>\r\n\r\n<p>The last cenotaph to be built is dedicated to Maharaja Jawahar Singh, who reigned after India&rsquo;s Independence. However, it remains incomplete due to his death a year after Independence, which was viewed as a bad omen by the family.</p>\r\n\r\n<p>Most intriguing are the plaques on the cenotaphs. The plaques showing both maharaja and maharani together indicate that the queen committed sati (threw herself on her husband&#39;s funeral pyre). In contrast to the cenotaphs, modern wind turbines now populate the breezy hill as well, to generate electricity.</p>\r\n\r\n<h3><strong>Paddle a Boat at Gadsisar Lake</strong></h3>\r\n\r\n<p><strong><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_009.jpg\" style=\"height:400px; width:700px\" /></strong></p>\r\n\r\n<p>Gadsisar Lake, also called Gadisar Lake, is a huge artificial reservoir built by Maharawal Gadsi Singh in the 14th century and situated on the southeast edge of the city. It provided the only water supply to the town until 1965.</p>\r\n\r\n<p>The many small temples and shrines that surround the lake make it an inviting place to relax and spend some time. Migratory waterfowl are an added attraction in winter, along with numerous catfish in the water that love to be fed. Boats are available for hire nearby too.</p>\r\n\r\n<p>Jaisalmer is known for its mirrorwork embroidered garments and carpets, blankets and shawls, woollen pattu, carpets made from camel hair, tapestry, oil lamps, finely cut antiques, old stonework, silver jewellery and silk and cotton textiles.</p>\r\n\r\n<p><img alt=\"\" src=\"https://nubit.in/api/upload/ckeditor_images/Jaisalmer_011.jpg\" style=\"height:400px; width:700px\" /></p>\r\n\r\n<p>There are several good restaurants in Jaisalmer you must visit on your trip. Not only good quality and authentic taste of food but also the splendid view which you can enjoy from several of the restaurants in Jaisalmer makes it worth visiting. It is sure to give you some amazing unforgettable memory. Foodies with every preference can find a place to dine in Jaisalmer.</p>\r\n",
            "publishDate": "01-13-2022 18:03:42 000 +0000",
            "liveDate": "01-14-2022 02:23:50 000 +0000",
            "status": 1
        }
    );
    const { id } = useParams();



    // const getData = async (e) => {
    //     try {
    //         const config = {
    //             headers: {
    //                 'accept': 'application/json',
    //                 'DEVICE-TYPE': 'Web',
    //                 'VER': '12',
    //                 'ApiKey': 'DEVICE-TYPE'
    //             }
    //         }
    //         const res = await axios.get(BASE_URL + GET_POST_BY_HASH, config);
    //         setData(res.data.responseObject)
    //         console.log(res.data.responseObject);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     getData(); console.log(id);
    // }, [])



    return (
        <div>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} style={{ justifyContent: 'center' }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card style={{ borderRadius: '12px', margin: '10px 0px 10px 0px' }}>
                            <CardMedia
                                component="img"
                                image={`${sunset}`}
                                alt="Paella dish"
                                style={{ maxHeight: '500px' }}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    <img src={logo1} width={70} />, <span >{data.publishDate}</span>
                                </Typography>
                                <Typography variant="h5" style={{
                                    fontWeight: '700',
                                }}>
                                    {data.title}
                                </Typography>
                                <Typography paragraph >
                                    <span dangerouslySetInnerHTML={{ __html: data.contentBody }} />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Stories />
            </Container>
        </div >
    );
}

export default PostById
