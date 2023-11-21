import React from "react";
import CustomTextInput, { CustomTextInputProps } from "../Input/TextInput";
import CustomTextArea, { CustomTextAreaProps } from "../Input/TextArea";
import CustomMultiSelect, { CustomMultiSelectProps } from "../Input/MultiSelect";
import CustomAutoComplete, { CustomAutoCompleteProps } from "../Input/AutoComplete";
import CustomRadio, { CustomRadioProps } from "../Input/Radio";
import CustomRadioGroup, { CustomRadioGroupProps } from "../Input/RadioGroup";
import CustomDatePicker, { CustomDatePickerProps } from "../Input/DatePicker";
import CustomNumberInput, { CustomNumberInputProps } from "../Input/NumberInput/NumberInput";
import CustomPasswordInput, { CustomPasswordInputProps } from "../Input/PasswordInput";
import CustomSwitch, { CustomSwitchProps } from "../Input/Switch";
import CustomSelectBase, { CustomSelectBaseProps } from "../Input/SelectBase";
import CustomUnType, { CustomUnTypeProps } from "../Input/UnType";
import CustomTimeInput, { CustomTimeInputProps } from "../Input/TimeInput";

export type CustomFormFieldType =
  | "textinput"
  | "textarea"
  | "selectbase"
  | "multiselect"
  | "autocomplete"
  | "radio"
  | "radiogroup"
  | "datepicker"
  | "timeinput"
  | "numberinput"
  | "passwordinput"
  | "switch"
  | "untype";

interface FieldBaseProps {
  typeinput: CustomFormFieldType
}

interface FieldTextInputProps extends CustomTextInputProps, FieldBaseProps {
  typeinput: "textinput"
}
interface FieldTextAreaProps extends CustomTextAreaProps, FieldBaseProps {
  typeinput: "textarea"
}
interface FieldSelectBaseProps extends CustomSelectBaseProps, FieldBaseProps {
  typeinput: "selectbase"
}
interface FieldMultiSelectProps extends CustomMultiSelectProps, FieldBaseProps {
  typeinput: "multiselect"
}
interface FieldAutoCompleteProps extends CustomAutoCompleteProps, FieldBaseProps {
  typeinput: "autocomplete"
}
interface FieldRadioProps extends CustomRadioProps, FieldBaseProps {
  typeinput: "radio"
}
interface FieldRadioGroupProps extends CustomRadioGroupProps, FieldBaseProps {
  typeinput: "radiogroup"
}
interface FieldDatePickerProps extends CustomDatePickerProps, FieldBaseProps {
  typeinput: "datepicker"
}
interface FieldTimeInputProps extends CustomTimeInputProps, FieldBaseProps {
  typeinput: "timeinput"
}
interface FieldNumberInputProps extends CustomNumberInputProps, FieldBaseProps {
  typeinput: "numberinput"
}
interface FieldPasswordInputProps extends CustomPasswordInputProps, FieldBaseProps {
  typeinput: "passwordinput"
}
interface FieldSwitchProps extends CustomSwitchProps, FieldBaseProps {
  typeinput: "switch"
}
interface FieldUnTypeProps extends CustomUnTypeProps, FieldBaseProps {
  typeinput: "untype"
}


export type CustomFormFieldProps =
  | FieldTextInputProps
  | FieldTextAreaProps
  | FieldSelectBaseProps
  | FieldMultiSelectProps
  | FieldAutoCompleteProps
  | FieldRadioProps
  | FieldRadioGroupProps
  | FieldDatePickerProps
  | FieldTimeInputProps
  | FieldNumberInputProps
  | FieldPasswordInputProps
  | FieldSwitchProps
  | FieldUnTypeProps;

const CustomFormField: React.FC<CustomFormFieldProps> = (props) => {
  switch (props.typeinput) {
    case "textinput":
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomTextInput
          {...newProps}
        />
      )
    case "textarea": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomTextArea
          {...newProps}
        />
      )
    }
    case "selectbase": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomSelectBase
          {...newProps}
        />
      )
    }
    case "multiselect": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomMultiSelect
          {...newProps}
        />
      )
    }
    case "autocomplete": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomAutoComplete
          {...newProps}
        />
      )
    }
    case "radio": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomRadio
          {...newProps}
        />
      )
    }
    case "radiogroup": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomRadioGroup
          {...newProps}
        />
      )
    }
    case "datepicker": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomDatePicker
          {...newProps}
        />
      )
    }
    case "timeinput": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomTimeInput
          {...newProps}
        />
      )
    }
    case "numberinput": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomNumberInput
          {...newProps}
        />
      )
    }
    case "passwordinput": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomPasswordInput
          {...newProps}
        />
      )
    }
    case "switch": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomSwitch
          {...newProps}
        />
      )
    }
    case "untype": {
      let { typeinput: _, ...newProps } = props;
      return (
        <CustomUnType
          {...newProps}
        />
      )
    }
  }
}

export default CustomFormField;