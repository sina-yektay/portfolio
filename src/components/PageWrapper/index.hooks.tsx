import { useRouter } from "next/router";

export const usePageWrapper = () => {
  const router = useRouter();
  const { slug } = router.query;
  return {};
};
