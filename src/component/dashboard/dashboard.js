import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
    Grid, Container
} from '@material-ui/core';
function Dashboard() {
    const cardStyle = {
        float: 'left',
        width: '400px',
        margin: '10px',
    }; const data = [
        { title: "title1", subtitle: "subtitle1", date: "May 1" },
        { title: "title2", subtitle: "subtitle2", date: "May 2" },
        { title: "title3", subtitle: "subtitle3", date: "May 3" },
        { title: "title4", subtitle: "subtitle4", date: "May 4" },
        { title: "title1", subtitle: "subtitle1", date: "May 1" },
        { title: "title2", subtitle: "subtitle2", date: "May 2" },
        { title: "title3", subtitle: "subtitle3", date: "May 3" },
        { title: "title4", subtitle: "subtitle4", date: "May 4" },
        { title: "title4", subtitle: "subtitle4", date: "May 4" }
    ];
    return (
            <div className="home">
                <Container className="root-container">
                    <Grid className="sample-grid" container spacing={2}>
                        {data.map((elem) => (
                            <Grid className="feedback-requesters-grid" container item xs={2} md={3} lg={4}>
                                <Card style={{width : "100%"}} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/image.png"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {elem.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {elem.subtitle}
                                                {elem.date}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
    );
}

export default Dashboard;
