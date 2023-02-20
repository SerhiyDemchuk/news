import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {}

const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { t } = useTranslation();

  return <div>NotFoundPage</div>;
});

export default NotFoundPage;
