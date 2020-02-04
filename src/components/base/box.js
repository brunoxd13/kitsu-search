import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  system,
  typography
} from "styled-system";

export const addPlusProps = {
  d: {
    property: "display"
  },
  textTransform: {
    property: "textTransform"
  },
  w: {
    property: "width"
  },
  minW: {
    property: "minWidth"
  },
  maxW: {
    property: "maxWidth"
  },
  h: {
    property: "height"
  },
  minH: {
    property: "minHeight"
  },
  maxH: {
    property: "maxHeight"
  },
  transform: true,
  transformOrigin: true,
  textDecoration: true
};

const extraConfig = system(addPlusProps);

export const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox
);

const Box = styled("div", {
  shouldForwardProp
})(systemProps, extraConfig);

export default Box;
