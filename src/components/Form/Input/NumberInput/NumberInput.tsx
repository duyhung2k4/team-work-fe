import React from "react";
import {
  NumberInput,
  NumberInputProps,
} from "@mantine/core";

export interface CustomNumberInputProps extends NumberInputProps {}

const CustomNumberInput: React.FC<CustomNumberInputProps> = (props) => {
  return (
    <React.Fragment>
      <NumberInput
        { ...props }
      />
    </React.Fragment>
  )
}

export default CustomNumberInput;