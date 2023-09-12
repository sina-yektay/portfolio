import { useRouter } from "next/router";

export const usePageWrapper = () => {
  const router = useRouter();
  const { pathname } = router;
  const segments = pathname.split('/').filter(Boolean);
  return {segments};
};
