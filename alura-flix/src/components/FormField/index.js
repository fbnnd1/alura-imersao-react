import React from "react";
import styled from 'styled-components';

const LabelField = styled.span`
  display: inline-block;
  width: 20%;
`;

const Label = styled.label`
  width: default;
`;

const FieldContainer = styled.div`
   margin-bottom: 10px;
`;

function FormFieldTextarea(label, name, value, onChange) {
  return (
    <FieldContainer>
      <Label>
      <LabelField>{label}:&nbsp;</LabelField>
        <textarea
          value={value}
          name={name}
          onChange={onChange}
        />
      </Label>
    </FieldContainer>
  )
}

function FormFieldInput(label, type, name, value, onChange) {
  return (
    <FieldContainer>
      <Label>
        <LabelField>{label}:&nbsp;</LabelField>
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </Label>
    </FieldContainer>
  );
}

function FormField({ label, type, name, value, onChange }) {

  if (type === "textarea") {
    return FormFieldTextarea(label, name, value, onChange);
  } else {
    return FormFieldInput(label, type, name, value, onChange);
  }
  
}

export default FormField;