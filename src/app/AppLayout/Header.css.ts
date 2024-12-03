import { style } from "@vanilla-extract/css";

const ul = style({
  listStyleType: "none",
});
const styles = {
  header: style({
    position: "fixed",
    top: 0,
    left: 0,
    width: "calc(100% - 40px)",
    height: 100,
    zIndex: 100,
    border: "1px solid lightgray",
    borderRadius: 20,
    margin: 20,
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(255, 255, 255, .5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  }),
  ul,
  li: style({
    selectors: {
      [`${ul} > &:hover`]: {
        color: "royalblue",
      },
    },
  }),
};

export default styles;
