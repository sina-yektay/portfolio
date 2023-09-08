import { FC, PropsWithChildren, memo } from "react";
import { usePageWrapper } from "./index.hooks";
import { Breadcrumbs, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Head } from "@/components/Head";

type PageWrapperProps = { home?: boolean };

export const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = memo(
  ({ home = false, children }) => {
    const {} = usePageWrapper();
    return (
      <>
        <Head />
        <Stack direction="column">
          <Stack sx={{ padding: 5 }}>
            {!home && (
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/">
                  Home
                </Link>
                <Link
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
              </Breadcrumbs>
            )}
          </Stack>

          <Stack sx={{}}>{children}</Stack>
        </Stack>
      </>
    );
  }
);
