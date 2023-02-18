import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface NewsPageProps {}

const NewsPage = memo((props: NewsPageProps) => {
  const { t } = useTranslation();

  return <div>NewsPage</div>;
});

export default NewsPage;
