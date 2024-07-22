import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ModuleModelTitle } from "../moduleModel/ModuleModelTitle";

export const LessonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="moduleModel.id"
          reference="ModuleModel"
          label="ModuleModel"
        >
          <SelectInput optionText={ModuleModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
