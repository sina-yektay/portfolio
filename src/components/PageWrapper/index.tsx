import { FC, PropsWithChildren, memo } from "react";
import { usePageWrapper } from "./index.hooks";
import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Head } from "@/components/Head";

type PageWrapperProps = { home?: boolean };

export const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = memo(
  ({ home = false, children }) => {
    const { segments } = usePageWrapper();
    var route: string;
    return (
      <Box sx={{}}>
        <Head />
        <Stack direction="column" sx={{ height: "100%" }}>
          <Stack sx={{ padding: 5 }}>
            {!home && (
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/">
                  Home
                </Link>
                {segments.map((parameter, index) => {
                  route = parameter.replace(/-/g, " ");
                  var href = "";
                  if (index !== segments.length - 1) {
                    for (const eachRoute of segments) {
                      if (eachRoute === parameter) {
                        href = href.concat("/");
                        href = href.concat(parameter);
                        break;
                      } else {
                        href = href.concat("/");
                        href = href.concat(eachRoute);
                      }
                    }
                    return (
                      <Link key={index} color="inherit" href={href}>
                        {route}
                      </Link>
                    );
                  }
                  return (
                    <Typography
                      key={index}
                      style={{ fontWeight: "bold" }}
                      color="rgb(0, 128, 128)"
                    >
                      {route}
                    </Typography>
                  );
                })}
              </Breadcrumbs>
            )}
          </Stack>

          <Stack sx={{}}>{children}</Stack>
        </Stack>
      </Box>
    );
  }
);
PageWrapper.displayName = "PageWrapper";
