import { StylesProps } from "@/models/styles-props.interface";

export const styles: StylesProps = {
  cardContainer: {
    maxWidth: 400,
    boxShadow: "none",
    margin: "10px",
  },

  cardMedia: {
    height: "auto",
    marginBottom: "5px",
  },

  cardContent: {
    "&.MuiCardContent-root": {
      padding: 0,
      marginTop: "20px",
    },
  },

  title: {
    color: "#003072",
    fontSize: "24px",
    lineHeight: 1.4,
    marginBottom: "12px",
    fontWeight: 500,
  },

  description: {
    color: "#4C526E",
    fontSize: "16px",
    fontWeight: 400,
    marginBottom: "24px",
  },
};
