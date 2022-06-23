import React from "react";
import {
  FormContainer,
  Form,
  TextInput,
  TextArea,
  FieldSet,
  Error,
} from "./ContactElements";
import { Button } from "../../components/Button/ButtonElement";

const Contact = () => {
  return (
    <FormContainer id="contact">
      <Form>
        <TextInput>
          <TextArea>
            <Button>
              <FieldSet>
                <Error></Error>
              </FieldSet>
            </Button>
          </TextArea>
        </TextInput>
      </Form>
    </FormContainer>
  );
};

export default Contact;
