import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { t } = useTranslation();

  return <div>ProfilePage</div>;
});

export default ProfilePage;
