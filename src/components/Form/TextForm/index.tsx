import React, { useEffect } from "react";
import CustomFormField, { CustomFormFieldProps } from "../FormField";
import { Box, Grid, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import CustomUnType from "../Input/UnType";

type FieldSize = {
  xs: number
  key: string
  validate?: (value: any) => any;
}

export type CustomTextFormFieldProps = FieldSize & CustomFormFieldProps;

export interface CustomTextFormProps {
  fields: CustomTextFormFieldProps[]
  id: string
  onSubmit?: (values: any) => void
  autoUpdate?: {
    state: boolean
    delay: number
  }
}

const CustomTextForm: React.FC<CustomTextFormProps> = (props) => {
  const { classes } = useStyles();

  const defaultValue: any = {};
  const validate: any = {};

  props.fields.forEach((field: CustomTextFormFieldProps) => {
    if (field.typeinput !== "untype") {
      defaultValue[field.key] = (field as any)?.defaultValue || undefined;
    }
    if (field.typeinput !== "untype" && field.validate) {
      validate[field.key] = field.validate;
    }

    if (field.typeinput === "numberinput") {
      defaultValue[field.key] = field.defaultValue;
    }

    if(field.typeinput === "switch") {
      defaultValue[field.key] = field.defaultChecked;
    }
    
    if (
      field.typeinput === "datepicker" &&
      field.defaultValue !== undefined &&
      dayjs(field.defaultValue).format("DD/MM/YYYY") === "01/01/1"
    ) {
      defaultValue[field.key] = undefined;
    }
  })

  const form = useForm({
    initialValues: defaultValue,
    validate: validate,
  });

  useEffect(() => {
    if (props.autoUpdate === undefined) return;
    if (props.autoUpdate.state === false) return;

    const update = setTimeout(() => {
      props.onSubmit?.call(props.onSubmit, form.values);
    }, props.autoUpdate.delay || 3000);

    return () => {
      clearTimeout(update);
    }
  }, [form.values]);

  return (
    <React.Fragment>
      <Box>
        <form
          name={props.id}
          className={classes.root}
          id={props.id}
          onSubmit={form.onSubmit((values) => props?.onSubmit?.call(props.onSubmit, values))}
        >
          <Grid>
            {
              props.fields.map((field: CustomTextFormFieldProps, index: number) => {
                let { xs: _, ...propsOfField } = field;
                return (
                  <Grid.Col key={index} span={field.xs}>
                    {
                      propsOfField.typeinput !== "untype" ?
                        <CustomFormField
                          {...propsOfField}
                          {...form.getInputProps(field.key)}
                        />
                        : <CustomUnType {...propsOfField} values={form.values} />
                    }
                  </Grid.Col>
                )
              }
              )
            }
          </Grid>
        </form>
      </Box>
    </React.Fragment>
  )
}

const useStyles = createStyles(() => {
  return {
    root: {

      "& .mantine-InputWrapper-error": {
        textAlign: "left",
      },
      "& .mantine-Input-input": {
        borderRadius: "8px",
      },
    }
  }
});

export default CustomTextForm;