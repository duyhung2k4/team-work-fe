import React, { useRef } from "react";
import { TimeInput, TimeInputProps } from "@mantine/dates";

export interface CustomTimeInputProps extends TimeInputProps {}
const CustomTimeInput: React.FC<CustomTimeInputProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <TimeInput 
      ref={ref} 
      {...props}
    />
  );
}

export default CustomTimeInput;