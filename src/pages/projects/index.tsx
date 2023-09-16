import { PageWrapper } from "@/components/PageWrapper";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { memo } from "react";

type ProjectsProps = {};

const Projects = memo(({}: ProjectsProps) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  return (
    <PageWrapper>
      <Grid item container sx={{}}>
        <Grid item container md={6} xs={12} sx={{ justifyContent: "center" }}>
          <Grid
            item
            container
            sx={{ width: "80%", marginBottom: isBelowMd ? 3 : 0 }}
          >
            <Card
              sx={{
                cursor: "pointer",
                backgroundColor: "rgb(0, 128, 128)",
                width: "100%",
                height: isBelowMd ? "150px" : "280px",
                justifyContent: "center",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgb(0, 100, 100)",
                },
              }}
              onClick={() => router.push("/projects/personal-projects")}
            >
              <CardContent
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  display: "flex",
                }}
              >
                <Box sx={{}}>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontsize: isBelowMd ? "25px" : "55px",
                    }}
                    variant={isBelowMd ? "h5" : "h4"}
                  >
                    Personal Projects
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item container md={6} xs={12} sx={{ justifyContent: "center" }}>
          <Grid item container sx={{ width: "80%" }}>
            <Card
              sx={{
                cursor: "pointer",
                backgroundColor: "rgb(0, 128, 128)",
                width: "100%",
                height: isBelowMd ? "150px" : "280px",
                justifyContent: "center",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgb(0, 100, 100)",
                },
              }}
              onClick={() => router.push("/projects/projects-done-in-team")}
            >
              <CardContent
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  display: "flex",
                }}
              >
                <Typography
                  sx={{ color: "white", fontWeight: "bold" }}
                  variant={isBelowMd ? "h5" : "h4"}
                >
                  Team Projects
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  );
});

Projects.displayName = "Projects";
export default Projects;
