import React from "react";
import {
  Autocomplete,
  AutocompleteProps,
  createStyles,
} from "@mantine/core";

export interface CustomAutoCompleteProps extends AutocompleteProps {}

const useStyle = createStyles(() => {
  return {
    root: {
      "& .mantine-ActionIcon-root": {
        ":hover": {
          backgroundColor: "unset",
        }
      }
    }
  }
})

const CustomAutoComplete: React.FC<CustomAutoCompleteProps> = (props) => {
  const { classes } = useStyle();
  return (
    <React.Fragment>
      <Autocomplete
        {...props}
        className={classes.root}
      />
    </React.Fragment>
  )
}

export default CustomAutoComplete;