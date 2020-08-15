import React, {useEffect, useRef, useState} from 'react';

import {TextInput} from 'react-native';
import {useField} from '@unform/core';
import {BaseFormWrapper} from './styles';
import {BaseFormLabel} from './styles';
import {BaseFormInput} from './styles';
import {BaseFormError} from './styles';

function Input({name, placeholder, type, label, ...rest}) {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue, error} = useField(name);
  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({text: value});
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <BaseFormWrapper>
        {label ? <BaseFormLabel>{label}</BaseFormLabel> : false}
      </BaseFormWrapper>

      <BaseFormInput
        ref={inputRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        placeholderTextColor="#002e77"
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
      {error && <BaseFormError>{error}</BaseFormError>}
    </>
  );
}
export default Input;
