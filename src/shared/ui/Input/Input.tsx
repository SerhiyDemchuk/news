import { memo } from 'react';
import { type DefaultTFuncReturn } from 'i18next';
import { Input as MUIInput, type InputProps } from '@mui/material';

export const Input = memo(
  (props: InputProps & { placeholder: DefaultTFuncReturn }) => {
    const { placeholder, type, onChange } = props;

    return (
      <MUIInput
        {...props}
        type={type}
        color="primary"
        disabled={false}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  },
);
