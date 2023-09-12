import { useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";

export const useProjectCard = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  return { isBelowMd, router };
};
