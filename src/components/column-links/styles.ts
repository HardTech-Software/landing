import { StylesProps } from "@/models/styles-props.interface";

export const styles: StylesProps = {
  links: {
    display: "flex",
    typography: "body1",
    "& > :not(style) ~ :not(style)": {
      ml: 2,
    },
    flexWrap: "wrap",
  },
  title: {
    color: "#003072",
    fontSize: "20px",
    marginBottom: "30px",
  },

  itemContainer: {
    display: "flex",
    flexDirection: "column",
  },

  item: {
    color: "#4C526E",
    fontWeight: 300,
    fontSize: "18px",
    textDecoration: "underline transparent",
    transition: ".3s",
    marginBottom: "20px",
  },
};
