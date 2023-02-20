import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button as MUIButton, type ButtonProps } from '@mui/material';

export const Button = memo((props: ButtonProps & { text: string }) => {
  const { text, type = 'button' } = props;
  const { t } = useTranslation();

  return (
    <MUIButton type={type} variant="outlined" value="hello">
      {text}
    </MUIButton>
  );
});
