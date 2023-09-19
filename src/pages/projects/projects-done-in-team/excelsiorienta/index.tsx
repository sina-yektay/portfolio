import { DetailTab } from "@/components/DetailTab";
import { PageWrapper } from "@/components/PageWrapper";
import { ScrollingRocket } from "@/components/ScrollingRocket";
import Image from "next/image";
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import CheckIcon from "@mui/icons-material/Check";
import { CustomCarousel } from "@/components/CustomCarousel";

const text1 =
  "As a frontend developer, I had the privilege of working on the Excelsiorienta project, a cutting-edge platform conceived by Unioncamere to empower students in navigating the complexities of the job market. This digital bridge leverages the rich data and experience of the Excelsior Information System to establish a seamless connection between the world of education and the world of work.";
const text2 =
  "From middle school to high school, Excelsiorienta is tailored to assist young individuals in discovering career paths that align with their interests and aptitudes.";
const text3 =
  "Equipping them with the tools and information needed to guide and mentor the younger generation as they become more aware of both educational and professional landscapes.";
const text4 =
  "Imagine needing a compass to navigate your unique educational and career journey; that's exactly what OrientaGame provides. Designed as a self-assessment quiz, it helps users uncover their strengths, recognize their passions, and identify the motivations driving them to take action. The quiz delves into three key areas: Values, Attitudes, and Skills. By answering these questions, users receive a personalized 'work personality' profile—a valuable starting point for aligning their choices with their true selves.";
const text5 =
  "The platform offers a structured and comprehensive database showcasing all the professions in the Italian job market, along with the educational paths to develop one's potential. Whether you're interested in entrepreneurship or traditional employment, the Career Guidance section provides invaluable advice, insights, and recommendations for honing entrepreneurial skills and launching your own business.";
const text6 =
  "If you aspire to become an entrepreneur, Excelsiorienta's Entrepreneurship Guidance section is your go-to resource. It offers practical tips, directions, and useful insights to deepen your entrepreneurial competencies and embark on your business journey.";
const text7 =
  "Remaining up-to-date with the ever-evolving job market is crucial. Excelsiorienta keeps users informed through news updates and editorial content, providing the latest labor market data, highlighting ongoing trends, and assisting users in making well-informed choices regarding their educational and professional paths.";
const text8 =
  "In summary, Excelsiorienta is not just a platform; it's a guiding light for students, parents, and teachers alike. My role as a frontend developer in this project was to ensure that the user experience was seamless, intuitive, and accessible. I take pride in contributing to a platform that empowers the next generation to make informed choices and embark on their educational and professional journeys with confidence.";
const text9 =
  "As the frontend developer on the Excelsiorienta project, I played a pivotal role in shaping the user-facing components and ensuring a seamless digital experience. My responsibilities encompassed:";
const text10 =
  " I was responsible for developing and maintaining the frontend of the Excelsiorienta platform using modern technologies such as React, Redux, and Next.js. These technologies allowed us to build dynamic and highly performant user interfaces.";
const text11 =
  "In addition to frontend development, I occasionally handled backend tasks using Next.js API routes, ensuring that data retrieval and manipulation were efficiently managed.";
const text12 =
  "One of the standout features of the Excelsiorienta platform is the Orienta Game, which I played a central role in developing. The Orienta Game is a separate single-page application (SPA) designed to provide an immersive and engaging experience for users.";
const text13 =
  "The Orienta Game is an interactive quiz designed to help users explore their career interests and strengths. It consists of three main fields, each translated into Italian:";
const text14 =
  "Users are guided through a series of steps to identify their core values and what matters most to them in their future careers.";
const text15 =
  "This section focuses on assessing the user's attitudes and tendencies, helping them recognize their natural inclinations and strengths.";
const text16 =
  "Users evaluate their skillsets and abilities, pinpointing the areas where they excel and excel.";
const text17 =
  "Users progress through these fields by completing specific steps and answering questions tailored to each category. At the end of the game, they receive a personalized 'work personality' profile. This profile serves as a valuable starting point for aligning their career choices with their true selves.";

const projectTitles = [
  "Project Overview",
  "Project Details",
  "Project Screenshots",
  "Technologies and Language",
  "Links",
];

type ExcelsiorientaProps = {};

const Excelsiorienta = memo(({}: ExcelsiorientaProps) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  return (
    <PageWrapper>
      <ScrollingRocket isBelowMd={isBelowMd} />
      <Stack
        direction="column"
        sx={{
          padding: 3,
          paddingTop: 0,
          maxWidth: isBelowMd ? "95%" : "80%",
          minWidth: isBelowMd ? "95%" : "80%",
          alignSelf: "center",
          borderLeft: "5px solid rgb(0, 128, 128)",
          borderRight: "5px solid rgb(0, 128, 128)",
        }}
      >
        <Typography
          sx={{
            paddingBottom: 3,
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Excelsiorienta
        </Typography>

        <DetailTab tabs={projectTitles} />

        <Typography
          id="Project Overview"
          sx={{
            paddingTop: isBelowMd ? 5 : 12,
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Project Overview
        </Typography>

        <Typography
          sx={{ paddingTop: 3, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          {" "}
          Excelsiorienta - Bridging Education and Career Exploration
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text1}
        </Typography>

        <Typography
          sx={{ paddingTop: 3, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Target Audience:
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          The Excelsiorienta portal serves two primary user groups:
        </Typography>

        <List>
          <ListItem
            key="m1"
            sx={{
              marginBottom: 0,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Students:</strong> {text2}
                </>
              }
            />
          </ListItem>
          <ListItem
            key="m2"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Parents and Teachers:</strong> {text3}
                </>
              }
            />
          </ListItem>
        </List>

        <Typography
          sx={{ paddingTop: 3, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Key Features:
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>1. OrientaGame: Charting Your Course</strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text4}
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>2. Career Guidance: Navigating the Landscape</strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text5}
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>
            3. Entrepreneurship Guidance: Paving the Way to Self-Employment
          </strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text6}
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>4. Staying Informed: Current Job Market Dynamics</strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text7}
        </Typography>
        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text8}
        </Typography>

        <Typography
          id="Project Details"
          sx={{
            paddingTop: 4,
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Project Details
        </Typography>

        <Typography
          sx={{ paddingTop: 5, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          My Role:
        </Typography>
        <Typography
          sx={{ marginTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text9}
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>
            1. Frontend Development with React, Redux, and Next.js:{" "}
          </strong>
          {text10}
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>2. Backend API Handling: </strong>
          {text11}
        </Typography>

        <Typography
          sx={{ paddingTop: 4, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Orienta Game: Enhancing User Experience
        </Typography>

        <Typography
          sx={{ marginTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text12}
        </Typography>
        <Typography
          sx={{ marginTop: 3, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Game Overview:
        </Typography>
        <Typography
          sx={{ marginTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text13}
        </Typography>

        <List>
          <ListItem
            key="m1"
            sx={{
              marginBottom: 0,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Valori (Values):</strong> {text14}
                </>
              }
            />
          </ListItem>
          <ListItem
            key="m2"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Attitudini (Attitudes):</strong> {text15}
                </>
              }
            />
          </ListItem>
          <ListItem
            key="m2"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Competenze (Skills):</strong> {text16}
                </>
              }
            />
          </ListItem>
        </List>
        <Typography sx={{ fontSize: "17px", fontFamily: "sans-serif" }}>
          <strong>User Experience: </strong>
          {text17}
        </Typography>

        <Typography
          id="Project Screenshots"
          sx={{
            marginTop: 5,
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Project Screenshots
        </Typography>

        <Stack sx={{ marginTop: 7 }}>
          <CustomCarousel project={"excelsiorienta"} />
        </Stack>

        <Stack
          id="Technologies and Language"
          sx={{ paddingTop: 2, marginTop: 5 }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
              fontFamily: "sans-serif",
            }}
          >
            Technologies and Language
          </Typography>
        </Stack>
        <List>
          <ListItem
            sx={{
              marginBottom: 1,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
              }}
            />
            <ListItemText
              primary={
                <>
                  <strong>Language:</strong> TypeScript
                </>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: 1,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
              }}
            />
            <ListItemText
              primary={
                <>
                  <strong>Frontend:</strong> React, Next.js
                </>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: 1,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
              }}
            />
            <ListItemText
              primary={
                <>
                  <strong>Backend:</strong> Node.js
                </>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: 1,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
              }}
            />
            <ListItemText
              primary={
                <>
                  <strong>Libraries:</strong> axios ,react-dnd ,
                  react-router-dom...
                </>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: 1,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
              }}
            />
            <ListItemText
              primary={
                <>
                  <strong>Db:</strong> Mongodb
                </>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: 1,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
              }}
            />
            <ListItemText
              primary={
                <>
                  <strong>State manager:</strong> Redux
                </>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: 1,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
              }}
            />
            <ListItemText
              primary={
                <>
                  <strong>Style:</strong> Mui, Css
                </>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: 1,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
              }}
            />
            <ListItemText
              primary={
                <>
                  <strong>Package Manager:</strong> npm
                </>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: 1,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
                display: "block",
              }}
            />
            <ListItemText
              primary={
                <>
                  <strong>Version Control:</strong> Git
                </>
              }
            />
          </ListItem>
        </List>

        <Stack id="Links" sx={{ paddingTop: 5, marginBottom: 1 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
              fontFamily: "sans-serif",
            }}
          >
            here is the website link
          </Typography>
        </Stack>

        <Stack sx={{ marginBottom: 5, marginLeft: isBelowMd ? 2 : 5 }}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://excelsiorienta.unioncamere.it"
          >
            <Typography style={{ fontSize: isBelowMd ? "15px" : "25px" }}>
              www.excelsiorienta.unioncamere.it
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </PageWrapper>
  );
});

Excelsiorienta.displayName = "Excelsiorienta";
export default Excelsiorienta;
