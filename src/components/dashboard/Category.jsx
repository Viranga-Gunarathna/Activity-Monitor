import "./category.css"
import CategoryDetails from "./CategoryDetails.js"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Category() {
    return (
        <div className = "category_main">
            <div className="category_wrapper">
                <h3>Categories</h3>
                {CategoryDetails.map(CategoryDetails => {
                  
                    return (
                        <div  className="column">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {CategoryDetails.category}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Web sites count {CategoryDetails.siteCount}
                                        <br/>
                                        Toal number of visit {CategoryDetails.no_of_totalVisit}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                   )
                })}
            </div>
        </div>
    )
}