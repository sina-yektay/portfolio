import { PageWrapper } from "@/components/PageWrapper";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { memo } from "react";

type InterestsProps = {};
const text1 =
  "As a passionate frontend developer with a growing curiosity for the broader world of web development, I continually seek opportunities to expand my skill set and contribute to innovative projects. My interests span various aspects of web development and cloud technology, showcasing my dedication to staying at the forefront of the industry.";
const text2 =
  "I'm deeply intrigued by AWS cloud technology and its potential to revolutionize web development. My interest lies in understanding how AWS services can seamlessly integrate with web applications, enhancing scalability, security, and performance.";
const text3 =
  "I thrive on bridging the worlds of web development and AWS cloud solutions. I'm passionate about finding elegant solutions that harness the power of cloud technology to enhance web applications, making them more robust and efficient.";
const text4 =
  "I'm constantly exploring the ever-evolving landscape of frontend technologies. Currently, I'm delving into Server-Side Rendering (SSR) to improve user experiences, and I'm committed to optimizing SEO practices to boost website visibility and reach.";
const text5 =
  "To broaden my skill set, I'm immersing myself in Express.js, a powerful backend framework. My goal is to develop full-stack applications where I can seamlessly integrate my frontend expertise with a robust backend powered by Express.js.";
const text6 =
  "I'm enthusiastic about the prospect of collaborating on full-stack projects where Java serves as the backend technology. My strong grasp of Java complements my frontend skills, enabling me to contribute effectively to comprehensive web development projects.";

const Interests = memo(({}: InterestsProps) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <PageWrapper>
      <Stack
        direction="column"
        sx={{
          padding: 3,
          paddingTop: 0,
          width: isBelowMd ? "95%" : "80%",
          alignSelf: "center",
          borderLeft: "5px solid rgb(0, 128, 128)",
          borderRight: "5px solid rgb(0, 128, 128)",
          marginBottom: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            marginBottom: 4,
          }}
        >
          Interests
        </Typography>
        <Typography sx={{ fontSize: "17px", fontFamily: "sans-serif" }}>
          {text1}
        </Typography>
        <Typography
          sx={{ fontSize: "17px", fontFamily: "sans-serif", marginTop: 3 }}
        >
          <strong>1. AWS Cloud Technology:</strong>
        </Typography>
        <Typography
          sx={{ marginTop: 1.5, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text2}
        </Typography>

        <Typography
          sx={{ marginTop: 3, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>2. Bridging the Gap:</strong>
        </Typography>
        <Typography
          sx={{ marginTop: 1.5, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text3}
        </Typography>

        <Typography
          sx={{ marginTop: 3, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>3. Exploring New Frontend Technologies:</strong>
        </Typography>
        <Typography
          sx={{ marginTop: 1.5, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text4}
        </Typography>

        <Typography
          sx={{ marginTop: 3, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>4. Deepening My Backend Skills:</strong>
        </Typography>
        <Typography
          sx={{ marginTop: 1.5, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text5}
        </Typography>

        <Typography
          sx={{ marginTop: 3, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>5. Embracing Java in Fullstack Development:</strong>
        </Typography>
        <Typography
          sx={{ marginTop: 1.5, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text6}
        </Typography>
      </Stack>
    </PageWrapper>
  );
});

Interests.displayName = "Interests";
export default Interests;
