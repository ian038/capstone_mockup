import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core'
import Badge from 'components/Badge/Badge.js';
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridContainer from "components/Grid/GridContainer.js";

// const useStyles = makeStyles({
//     root: {
//         flexGrow: 1
//     },
//     body: {
//         justifyContent: 'space-between'
//     },
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column'
//     }
// })

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import image from "assets/img/bg3.jpg"; 

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  },
  textRight: {
    textAlign: "right"
  },
  card: {
    display: 'flex',
    flexDirection: 'column'
  }
};

const useStyles = makeStyles(styles)

export default function ProductCard() {
    const classes = useStyles()

    return (
        <GridContainer spacing={4}>
        <GridItem xs={12} sm={6} md={4}> 
            <Card className={classes.card}>
                <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={image}
                alt="Card-img-cap"
                />
                    <CardBody>
                        <h4 className={classes.cardTitle}>Card title</h4>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <hr></hr>
                        <Badge color="info">In Stock</Badge>
                        <p>$10.00</p>
                        <Button color="primary">View Product</Button>
                        <Button className={classes.textRight} color="primary">Add To Cart</Button>
                    </CardBody>
                    <CardFooter className={classes.textMuted}>
                        Quantity: 10
                  </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}> 
            <Card className={classes.card}>
                <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={image}
                alt="Card-img-cap"
                />
                    <CardBody>
                        <h4 className={classes.cardTitle}>Card title</h4>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <hr></hr>
                        <Badge color="info">In Stock</Badge>
                        <p>$10.00</p>
                        <Button color="primary">View Product</Button>
                        <Button className={classes.textRight} color="primary">Add To Cart</Button>
                    </CardBody>
                    <CardFooter className={classes.textMuted}>
                        Quantity: 10
                  </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}> 
            <Card className={classes.card}>
                <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={image}
                alt="Card-img-cap"
                />
                    <CardBody>
                        <h4 className={classes.cardTitle}>Card title</h4>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <hr></hr>
                        <Badge color="danger">Out Of Stock</Badge>
                        <p>$10.00</p>
                        <Button color="primary">View Product</Button>
                        <Button className={classes.textRight} color="primary">Add To Cart</Button>
                    </CardBody>
                    <CardFooter className={classes.textMuted}>
                        Quantity: 10
                  </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}> 
            <Card className={classes.card}>
                <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={image}
                alt="Card-img-cap"
                />
                    <CardBody>
                        <h4 className={classes.cardTitle}>Card title</h4>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <hr></hr>
                        <Badge color="info">In Stock</Badge>
                        <p>$10.00</p>
                        <Button color="primary">View Product</Button>
                        <Button className={classes.textRight} color="primary">Add To Cart</Button>
                    </CardBody>
                    <CardFooter className={classes.textMuted}>
                        Quantity: 10
                  </CardFooter>
            </Card>
        </GridItem>
        </GridContainer>
    )
}
