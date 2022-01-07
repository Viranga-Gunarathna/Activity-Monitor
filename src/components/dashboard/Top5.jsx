import "./top5.css";
import Top5Details from "./Top5Details";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Top5() {
    return (
        <div className = "top5_main">
            <div className="top5_wrapper">
                <h3>Top five web sites</h3>
                
                {Top5Details.map(Top5Details => {                    
                    return (
                        <div  className="column">
                            <div className = "card_main">
                                <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="100"
                                    image={Top5Details.thumbnail}
                                    alt="Thumbnail"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {Top5Details.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Visited times {Top5Details.no_of_visit}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Card>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}