import { StylesProps } from "@/models/styles-props.interface";

export const styles: StylesProps = {
  contained: {
    backgroundColor: "#316ec2",
    color: "#fff",
    padding: "12px 34px",
    fontSize: "17px",
    fontWeight: "400",
    textTransform: "none",
    borderRadius: 0,
    border: "none",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      backgroundColor: "#477cc5",
    },
  },
  outlined: {
    backgrounColor: "transparent",
    color: "#fff",
    padding: "12px 34px",
    fontSize: "17px",
    fontWeight: 400,
    textTransform: "none",
    borderRadius: 0,
    border: "2px solid #fff",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#316ec2",
      borderColor: "#316ec2",
    },
  },
};
