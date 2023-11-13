import React from "react";
import FormField from "../../Form/FormField/FormField";
import Form from "../../Form/Form";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";

export default function SearchForm(props) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({ mode: 'all' });


  React.useEffect(() => {
    setValue('search', props.search);
  }, [props.search]);

  function onSubmit(data) {
    props.onSearch({
      searchText: data.search
    });
  }

  return (
    <div className="search-form">
      <Form className="form_movies-search"
            onSubmit={ handleSubmit(onSubmit) }
            submitButtonDisabled={ Object.keys(errors).length !== 0 }
            buttonTitle="Поиск"
            name="movies-search">

        <FormField>
          <input placeholder="Фильм"
                 type="text"
                 className="form__field"
                 id="form__field-search"
                 { ...register('search', { required: true, maxLength: 30, minLength: 1 }) }
          />
        </FormField>

        <FormField className="form__field-wrapper_filter-checkbox">
          <FilterCheckbox value={ props.shortMovie } onChangeShortMovie={ props.onChangeShortMovie }
                          title="Короткометражки"/>
        </FormField>

      </Form>


    </div>
  );
}