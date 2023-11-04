import React from "react";
import FormField from "../../Form/FormField/FormField";
import Form from "../../Form/Form";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <section className="search-form">
      <Form className="form__movies-search" buttonTitle="Поиск" name="movies-search">

        <FormField>
          <input placeholder="Фильм"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="search"
                 className="form__field"
                 id="form__field-search"
                 required/>
        </FormField>

        <FormField className="form__field-wrapper_filter-checkbox">
          <FilterCheckbox title="Короткометражки"/>
        </FormField>

      </Form>


    </section>
  );
}