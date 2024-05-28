import { StylesProps } from "@/models/styles-props.interface";

export const styles: StylesProps = {
  cardContainer: {
    maxWidth: 260,
    backgroundColor: "#F3F8FF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 0,
    margin: "10px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
    },
  },

  cardMedia: {
    width: 55,
    height: "auto",
    paddingTop: "50px",
  },

  text: {
    color: "#003072",
    fontSize: "20px",
    lineHeight: 1.4,

    fontWeight: 500,
    textAlign: "center",
    padding: "20px 20px 0 20px",
  },

  more: {
    color: "#316EC2",
    textTransform: "none",
    fontSize: 16,
    fontWeight: 400,
  },
};
