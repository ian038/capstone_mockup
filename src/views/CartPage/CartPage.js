import React from 'react'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Badge from 'components/Badge/Badge.js';
import Checkout from './Checkout'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import image from "assets/img/bg3.jpg";

const useStyles = makeStyles(styles);

export default function CartPage({ props }) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Black Sun Sauces"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/bg2.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer spacing={4} style={{ width: '100%' }}>
            <GridItem xs={12} sm={6} md={4}>
              <h3>Cart Summary</h3>
              <Card className={classes.card}>
                <img
                  style={{ height: "180px", width: "100%", display: "block" }}
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
                  <Button className={classes.textRight} color="danger">Remove Product</Button>
                </CardBody>
                <CardFooter className={classes.textMuted}>
                  Adjust Quantity: <input type="number" min="10"></input>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={8}>
              <h3>Cart Checkout</h3>
              <h4>Total: $10.00</h4>
              <p>Shiiping Address:</p>
              <CustomInput
                labelText="Shipping Address"
                id="address"
                formControlProps={{
                  fullWidth: true
                }}
              />
              <p>Card Information</p>
              <CustomInput
                labelText="Card Number"
                id="username"
                formControlProps={{
                  fullWidth: true
                }}
              />
              <CustomInput
                labelText="Expiration Date"
                id="username"
                formControlProps={{
                  fullWidth: true
                }}
              />
              <CustomInput
                labelText="CVV"
                id="username"
                formControlProps={{
                  fullWidth: true
                }}
              />
              <Checkout />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}