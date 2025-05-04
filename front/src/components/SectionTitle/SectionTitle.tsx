import React from "react";
import { SectionTitleStyle } from "./SectionTitle.style";
import { SectionTitleProps } from "./SectionTitle.type";

function SectionTitle({ text, sxProps }: Readonly<SectionTitleProps>) {
  return (
    <SectionTitleStyle
      variant="h5"
      textAlign="center"
      sx={{ ...sxProps }}
      gutterBottom
    >
      {text}
    </SectionTitleStyle>
  );
}
export default SectionTitle;
