'use client';
import PropTypes from 'prop-types';

import { useEffect } from 'react';

// next
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

// project import
import Loader from 'components/Loader';
import { APP_DEFAULT_PATH } from 'config';

// ==============================|| GUEST GUARD ||============================== //

export default function GuestGuard({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/customer/login');
      const json = await res?.json();
      if (json?.protected) {
        let redirectPath = APP_DEFAULT_PATH;
        router.push(redirectPath);
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, [session]);

  if (status === 'loading' || session?.user) return <Loader />;

  return children;
}

GuestGuard.propTypes = { children: PropTypes.any };
