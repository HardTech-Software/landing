import { StylesProps } from "@/models/styles-props.interface";

export const styles: StylesProps = {
  containerTop: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    flexWrap: "wrap",
    padding: "20px",
  },

  sectionLeft: {
    maxWidth: { md: 350 },
    paddingRight: "20px",
    // backgroundColor: "green",
  },

  sectionCenter: {
    flex: 1,
    // backgroundColor: "red",
  },

  sectionRight: {
    paddingLeft: "20px",
    // backgroundColor: "purple",
  },

  textTop: {
    color: "#003072",
    fontSize: "20px",
    marginBottom: "30px",
  },

  textBottom: {
    color: "#4C526E",
    marginBottom: "20px",
  },

  button: {
    backgroundColor: "#316EC2",
    color: "#fff",
    borderRadius: "0 3px 3px 0",
    height: 56,
  },

  title: {
    color: "#003072",
    fontSize: "20px",
    marginBottom: "30px",
  },

  iconButton: {
    height: 40,
    color: "#fff",
  },

  iconButtonFacebook: {
    backgroundColor: "#3B5998",
    "&:hover": {
      backgroundColor: "#3B5998",
    },
  },
  iconButtonYoutube: {
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  iconButtonLinkedin: {
    backgroundColor: "#0077B5",
    "&:hover": {
      backgroundColor: "#0077B5",
    },
  },
  iconButtonInstagram: {
    backgroundColor: "#405DE6",
    "&:hover": {
      backgroundColor: "#405DE6",
    },
  },

  iconContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
};
