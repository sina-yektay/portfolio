import { Card, CardContent, Typography } from "@mui/material";
import router from "next/router";
import { memo } from "react";
import { useProjectCard } from "./index.hooks";

type ProjectCardProps = { projectName: string; to: string };

export const ProjectCard = memo(({ projectName, to }: ProjectCardProps) => {
  const { isBelowMd, router } = useProjectCard();
  return (
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
      onClick={() => router.push(to)}
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
          variant={isBelowMd ? "h5" : "h3"}
        >
          {projectName}
        </Typography>
      </CardContent>
    </Card>
  );
});
ProjectCard.displayName = "ProjectCard";
