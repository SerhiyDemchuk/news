import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button as MUIButton, type ButtonProps } from '@mui/material';

export const Button = memo(
  (props: ButtonProps & { text: string; onClick?: () => void }) => {
    const { text, type = 'button', onClick } = props;
    const { t } = useTranslation();

    return (
      <MUIButton onClick={onClick} type={type} variant="outlined" value="hello">
        {text}
      </MUIButton>
    );
  },
);
