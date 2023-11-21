import React from "react";
import {
  Select,
  SelectProps,
} from "@mantine/core";

export interface CustomSelectBaseProps extends SelectProps {};

const CustomSelectBase: React.FC<CustomSelectBaseProps> = (props) => {
  return (
    <React.Fragment>
      <Select
        {...props}
      />
    </React.Fragment>
  )
}

export default CustomSelectBase;