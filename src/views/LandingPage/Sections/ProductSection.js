import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import product1 from "assets/img/landing-bg.jpg";
import product2 from "assets/img/landing-bg.jpg";
import product3 from "assets/img/landing-bg.jpg";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            Are you someone who can{"'"}t wait to get their hands on a freshly made hot sauce
            with homemade natural ingredients using an old school Mexican recipe with an
            All American touch? Take a look at some of our products and see for yourself,
            our customers speak for our products. It{"'"}s better, spicier and hotter!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={product1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Product 1
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Product details.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={product2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Product 2
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Product details.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={product3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Product 3
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Product details.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
