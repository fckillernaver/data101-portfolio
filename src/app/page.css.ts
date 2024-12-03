import { style } from "@vanilla-extract/css";

const url =
  "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const styles = style({
  backgroundImage: `url(${url})`,
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  color: "white",
  position: "relative",
  "::after": {
    content: "",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default styles;
