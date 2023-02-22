import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';

export const LanguageSwitcher = memo(() => {
  const { t, i18n } = useTranslation('translation');
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };
  return <Button onClick={toggleLang} text={t('Language')} />;
});
