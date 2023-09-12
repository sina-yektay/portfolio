// import Head from 'next/head'
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Head } from "@/components/Head";
import { PageWrapper } from "@/components/PageWrapper";
import CheckIcon from "@mui/icons-material/Check";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
const text1 =
  "Hi there! i'm sina a frontend developer with two years of experience in building web applications. My journey in web development started in late 2020 when i joined a company in turin(italy) as an intern frontend developer, and this has led me to become proficient in frontend technologies including Typescript, React.js, Redux, MUI, HTML and CSS.";
const text2 =
  "In addition to my frontend expertise, I've also gained intermediate knowledge in Node.js, enabling me to tackle fullstack development challenges. This versatility allows me to seamlessly transition between frontend and fullstack roles, depending on the project's requirements.";
const text3 =
  "My dedication to responsive web design ensures that every project I create looks and works flawlessly on all devices, providing an exceptional user experience.";
const text4 =
  "As you explore this portfolio, you'll discover a collection of my projects, each highlighting different facets of my skills and expertise. The 'Skills' tab provides in-depth information about my technical abilities, including my proficiency in crafting Single Page Applications for a seamless user experience and my knowledge of version control with Git and GitHub.";
const text5 =
  "I'm continually expanding my knowledge base, currently delving into AWS cloud services to leverage the power of cloud computing in web development. I'm excited about the possibilities it brings to the table.";
const text6 =
  "Thank you for visiting my portfolio! Feel free to reach out if you have any questions or if you'd like to collaborate on a project.";

export default function Home() {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <PageWrapper home={true}>
        <Stack
          direction="column"
          sx={{
            padding: 3,
            paddingTop: 0,
            maxWidth: isBelowMd ? "95%" : "80%",
            alignSelf: "center",
            borderLeft: "5px solid rgb(0, 128, 128)",
            borderRight: "5px solid rgb(0, 128, 128)",
          }}
        >
          <Stack sx={{}}>
            <Stack sx={{ paddingBottom: 3 }}>
              <Typography className="homeTitle">
                Welcome to My Portfolio
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography className="homeBody">{text1}</Typography>
          </Stack>
          <Stack sx={{ marginTop: 2 }}>
            <Typography className="homeBody">{text2}</Typography>
          </Stack>
          <Stack sx={{ paddingTop: 5 }}>
            <Typography className="homeTitle">
              What I Bring to the Table
            </Typography>
          </Stack>
          <Stack>
            <List>
              <ListItem
                sx={{
                  marginBottom: 1,
                  borderLeft: isBelowMd ? "4px solid rgb(0, 128, 128)" : "none",
                }}
              >
                <CheckIcon
                  style={{
                    color: "rgb(0, 128, 128)",
                    fontSize: "30px",
                    display: isBelowMd ? "none" : "block",
                  }}
                />
                <ListItemText
                  primary={
                    <>
                      <strong>Languages:</strong> JavaScript, TypeScript, Java
                    </>
                  }
                />
              </ListItem>

              <ListItem
                sx={{
                  marginBottom: 1,
                  borderLeft: isBelowMd ? "4px solid rgb(0, 128, 128)" : "none",
                }}
              >
                <CheckIcon
                  style={{
                    color: "rgb(0, 128, 128)",
                    fontSize: "30px",
                    display: isBelowMd ? "none" : "block",
                  }}
                />
                <ListItemText
                  primary={
                    <>
                      <strong>Frameworks:</strong> Next.js
                    </>
                  }
                />
              </ListItem>

              <ListItem
                sx={{
                  marginBottom: 1,
                  borderLeft: isBelowMd ? "4px solid rgb(0, 128, 128)" : "none",
                }}
              >
                <CheckIcon
                  style={{
                    color: "rgb(0, 128, 128)",
                    fontSize: "30px",
                    display: isBelowMd ? "none" : "block",
                  }}
                />
                <ListItemText
                  primary={
                    <>
                      <strong>Database:</strong> MongoDB, Sql
                    </>
                  }
                />
              </ListItem>

              <ListItem
                sx={{
                  marginBottom: 1,
                  borderLeft: isBelowMd ? "4px solid rgb(0, 128, 128)" : "none",
                }}
              >
                <CheckIcon
                  style={{
                    color: "rgb(0, 128, 128)",
                    fontSize: "30px",
                    display: isBelowMd ? "none" : "block",
                  }}
                />
                <ListItemText
                  primary={
                    <>
                      <strong>Backend:</strong> Knowledge in creating backend
                      APIs, Node.js
                    </>
                  }
                />
              </ListItem>

              <ListItem
                sx={{
                  marginBottom: 1,
                  borderLeft: isBelowMd ? "4px solid rgb(0, 128, 128)" : "none",
                }}
              >
                <CheckIcon
                  style={{
                    color: "rgb(0, 128, 128)",
                    fontSize: "30px",
                    display: isBelowMd ? "none" : "block",
                  }}
                />
                <ListItemText
                  primary={
                    <>
                      <strong>Single Page Applications (SPA):</strong> Crafting
                      seamless and interactive user experiences
                    </>
                  }
                />
              </ListItem>

              <ListItem
                sx={{
                  marginBottom: 1,
                  borderLeft: isBelowMd ? "4px solid rgb(0, 128, 128)" : "none",
                }}
              >
                <CheckIcon
                  style={{
                    color: "rgb(0, 128, 128)",
                    fontSize: "30px",
                    display: isBelowMd ? "none" : "block",
                  }}
                />
                <ListItemText
                  primary={
                    <>
                      <strong>Server-Side Rendering (SSR):</strong> Enhancing
                      SEO and user experience
                    </>
                  }
                />
              </ListItem>

              <ListItem
                sx={{
                  marginBottom: 1,
                  borderLeft: isBelowMd ? "4px solid rgb(0, 128, 128)" : "none",
                }}
              >
                <CheckIcon
                  style={{
                    color: "rgb(0, 128, 128)",
                    fontSize: "30px",
                    display: isBelowMd ? "none" : "block",
                  }}
                />
                <ListItemText
                  primary={
                    <>
                      <strong>AWS Expertise:</strong> AWS EC2, S3 Bucket, SSM,
                      and more
                    </>
                  }
                />
              </ListItem>

              <ListItem
                sx={{
                  marginBottom: 1,
                  borderLeft: isBelowMd ? "4px solid rgb(0, 128, 128)" : "none",
                }}
              >
                <CheckIcon
                  style={{
                    color: "rgb(0, 128, 128)",
                    fontSize: "30px",
                    display: isBelowMd ? "none" : "block",
                  }}
                />
                <ListItemText
                  primary={
                    <>
                      <strong>Version Control:</strong> Proficient in Git and
                      GitHub
                    </>
                  }
                />
              </ListItem>
            </List>
          </Stack>
          <Stack sx={{ paddingTop: 2 }}>
            <Typography className="homeBody">{text3}</Typography>
          </Stack>
          <Stack sx={{ paddingTop: 2 }}>
            <Typography className="homeBody">{text4}</Typography>
          </Stack>
          <Stack sx={{ paddingTop: 2 }}>
            <Typography className="homeBody">{text5}</Typography>
          </Stack>
          <Stack sx={{ paddingTop: 2 }}>
            <Typography className="homeBody">{text6}</Typography>
          </Stack>
        </Stack>
      </PageWrapper>
    </>
  );
}
Home.displayName = "Home";
