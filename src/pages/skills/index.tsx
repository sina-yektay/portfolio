import { PageWrapper } from "@/components/PageWrapper";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { memo } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

type SkillsProps = {};

const Skills = memo(({}: SkillsProps) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <PageWrapper>
      <Grid container sx={{ padding: isBelowMd ? 1 : 5 }}>
        <Grid
          direction={"column"}
          item
          container
          xs={12}
          md={6}
          sx={{ alignItems: "center" }}
        >
          <Box sx={{ width: isBelowMd ? "100%" : "60%" }}>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Skills
            </Typography>
            <Divider />
            <Box sx={{ borderTop: "5px rgb(0, 128, 128) solid" }}>
              <List>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Typescript"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </ListItemIcon>
                </ListItem>

                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="React"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </ListItemIcon>
                </ListItem>

                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Redux, Saga"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Next.js"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Html, Css"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Angular"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Node.js"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Git"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Mongodb"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="AWS(EC2, S3, ALB)"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid
          direction={"column"}
          item
          container
          xs={12}
          md={6}
          sx={{ alignItems: "center", marginTop: isBelowMd ? 8 : 0 }}
        >
          <Box sx={{ width: isBelowMd ? "100%" : "60%" }}>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Scholastic skills
            </Typography>
            <Divider />
            <Box sx={{ borderTop: "5px rgb(0, 128, 128) solid" }}>
              <List>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Java"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </ListItemIcon>
                </ListItem>

                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="C"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>

                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Spring Boot"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontSize: "22px", fontWeight: "bold" },
                    }}
                    primary="Sql"
                  />
                  <ListItemIcon>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageWrapper>
  );
});
Skills.displayName = "Skills";
export default Skills;
