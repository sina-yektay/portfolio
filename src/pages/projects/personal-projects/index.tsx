import { PageWrapper } from "@/components/PageWrapper";
import { ProjectCard } from "@/components/ProjectCard";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { memo } from "react";

const projectsArray = [
  { name: "torinasia", to: "/projects/personal-projects/torinasia" },
];
type PersonalProjectProps = {};
const PersonalProject = memo(({}: PersonalProjectProps) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <PageWrapper>
      <Grid
        container
        spacing={2}
        sx={{ padding: isBelowMd ? 2 : 4.5, paddingTop: 0 }}
      >
        {projectsArray.map((project, index) => {
          return (
            <Grid key={index} item container xs={12} md={6}>
              <ProjectCard
                projectName={project.name}
                to={project.to}
                key={"index"}
              />
            </Grid>
          );
        })}
      </Grid>
    </PageWrapper>
  );
});

PersonalProject.displayName = "PersonalProject";
export default PersonalProject;
