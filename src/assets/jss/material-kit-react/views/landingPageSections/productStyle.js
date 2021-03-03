import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const productStyle = {
  ...imagesStyle,
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle
};

export default productStyle;
