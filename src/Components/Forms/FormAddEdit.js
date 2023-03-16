import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function AddEditForm(props) {
  const [form, setValues] = useState({
    id: 0,
    first: "",
    last: "",
    email: "",
    phone: "",
    location: "",
    hobby: ""
  });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitFormAdd = (e) => {
    console.log(props.item);
    e.preventDefault();
    props.addItemToState(form);
    props.toggle();
  };

  const submitFormEdit = (e) => {
    e.preventDefault();
    props.updateState(form);
    props.toggle();
  };

  useEffect(() => {
    if (props.item) {
      const { id, first, last, email, phone, location, hobby } = props.item;
      setValues({ id, first, last, email, phone, location, hobby });
    }
  }, [props.item]);

  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>
        <Label for="first">Ismingiz</Label>
        <Input
          placeholder="Iltimos ismingizni yozing"
          type="text"
          name="first"
          id="first"
          onChange={onChange}
          value={form.first === null ? "" : form.first}
        />
      </FormGroup>
      <FormGroup>
        <Label for="last">Familiyangiz</Label>
        <Input
          placeholder="Iltimos familyangizni yozing"
          type="text"
          name="last"
          id="last"
          onChange={onChange}
          value={form.last === null ? "" : form.last}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Elektron pochtangiz</Label>
        <Input
          placeholder="Iltimos Elektron pochtangiz yozing"
          type="email"
          name="email"
          id="email"
          onChange={onChange}
          value={form.email === null ? "" : form.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Telefon raqamingiz</Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          onChange={onChange}
          value={form.phone === null ? "" : form.phone}
          placeholder="ex. 99890-xxx-xx-xx"
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Manzilingiz</Label>
        <Input
          type="text"
          name="location"
          id="location"
          onChange={onChange}
          value={form.location === null ? "" : form.location}
          placeholder="Shahar, Davlat"
        />
      </FormGroup>
      <FormGroup>
        <Label for="hobby">Qiziqishingiz</Label>
        <Input
          type="text"
          name="hobby"
          id="hobby"
          onChange={onChange}
          value={form.hobby}
        />
      </FormGroup>
      <Button>Yuborish</Button>
    </Form>
  );
}

export default AddEditForm;
