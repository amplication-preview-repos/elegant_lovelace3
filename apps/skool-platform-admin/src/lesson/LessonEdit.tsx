import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ModuleModelTitle } from "../moduleModel/ModuleModelTitle";

export const LessonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
