import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Input as MUIInput, type InputProps } from '@mui/material';

export const Input = memo((props: InputProps) => {
  const { placeholder, type, onChange } = props;
  const { t } = useTranslation();

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
});
