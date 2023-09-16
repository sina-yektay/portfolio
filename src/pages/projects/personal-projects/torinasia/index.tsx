import { DetailTab } from "@/components/DetailTab";
import { PageWrapper } from "@/components/PageWrapper";
import { ScrollingRocket } from "@/components/ScrollingRocket";
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
const projectTitles = [
  "Project Overview",
  "Project Details",
  "Project Screenshots",
  "Technologies and Language",
  "Links",
];

const customCarouselStyles = `
  .carousel .control-arrow:hover {
    background: none !important;
    color: inherit !important;
    opacity: 1 !important;
    cursor: pointer !important;
  }
`;

const text1 =
  "TorinAsia is an innovative startup that ventured into the world of online retailing in 2020. Initially, the company utilized social media platforms like Telegram and WhatsApp to connect with customers and sell a diverse range of Asian food products, primarily catering to the West Asian cuisine. As part of its expansion strategy, TorinAsia has launched its very first web platform to provide customers with a seamless shopping experience, allowing them to create accounts, make easy and fast payments, access their purchase history, and enjoy personalized discounts.";
const text2 =
  "To establish a strong online presence for selling Asian food products in the Italian market.";
const text3 =
  "To target the Asian student community in Turin, Italy, and offer them a convenient platform for purchasing their favorite snacks, drinks, and groceries.";
const text4 =
  "To ensure swift and efficient product delivery within a few minutes to the customer's location.";
const text5 =
  "To provide a personalized shopping experience by rewarding customers with discounts based on their shopping history and loyalty.";
const text6 =
  "TorinAsia's online platform allows users to create accounts, providing a personalized and convenient shopping experience. Customers can save their delivery information and payment preferences for future orders.";
const text7 =
  "The platform offers a comprehensive catalog of Asian food products, with a focus on West Asian cuisine. Customers can browse through a wide selection of snacks, drinks, and groceries.";
const text8 =
  "TorinAsia offers secure and quick payment options, making the checkout process seamless. Customers can use various payment methods, including credit/debit cards and online wallets.";
const text9 =
  "The company's unique selling proposition is its lightning-fast delivery service. TorinAsia is committed to delivering products to customers within a few minutes, enhancing the overall customer experience.";
const text10 =
  "Customers can review their previous shopping history on their accounts, making it easier to reorder their favorite products. This feature also helps track expenses and preferences.";
const text11 =
  "TorinAsia rewards loyal customers with personalized discounts and promotions based on their shopping history and customer points. This encourages repeat business and customer loyalty.";
const text12 =
  "The primary target audience for TorinAsia is the Asian student community in Turin, Italy. By focusing on this niche market, the company aims to build a loyal customer base and become the go-to platform for Asian food products.";
const text13 =
  "Since its inception in 2020, TorinAsia has experienced significant growth and customer engagement. The launch of the web platform has enabled the company to expand its reach and enhance its services. In the future, TorinAsia plans to further improve its platform, expand its product range, and explore additional markets to solidify its position as a leading online Asian food marketplace in Italy.";
const text14 = "";
const text15 = "";
const text16 = "";
const text17 = "";
const carouselContent = [
  {
    im: "e1",
    ex: "This is the home page of the Excelsiorienta, here the user chooses the student's path or the parent's path, then in next step this is used as a query tom fetch appropriate articles according to the user type.",
    side: "User side",
  },
  {
    im: " e2",
    ex: "Here you can see different news articles according to the user type(chosen in home page), but this is the local development and the news articles are not real, in the next slide you can see the same page with the appropriate articles on production.",
    side: "User side",
  },
  {
    im: "e3",
    ex: "Here the articles are retrieved from db on the server side.",
    side: "User side",
  },
  {
    im: "e4",
    ex: "This is the same page as the last slide but in mobile version, all pages are responsive in this platform.",
    side: "User side",
  },
  {
    im: "e5",
    ex: "This is the career page, where the students can choose a pathe to see it's details.",
    side: "User side",
  },
  {
    im: "e6",
    ex: "As instance this is the details page for Physicists and Astronomers.",
    side: "User side",
  },
  {
    im: " e7",
    ex: "Physicists and Astronomers job details and statistics.",
    side: "User side",
  },
  {
    im: " e8",
    ex: "Entry point of the Orienta Game(SPA).",
    side: "User side",
  },
  {
    im: "e9",
    ex: "Here the user enter their details to proceed.",
    side: "User side",
  },
  {
    im: "e10",
    ex: "User has to choose an avatar and the interested subjects.",
    side: "User side",
  },
  {
    im: "e11",
    ex: "And finally here is the start of the game, the user has to finish three steps to receive a personalized suggestion for their career path.",
    side: "User side",
  },
];
type TorinasiaProps = {};

const Torinasia = memo(({}: TorinasiaProps) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
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
        <Typography sx={{ paddingBottom: 3 }} className="homeTitle">
          Torinasia
        </Typography>

        <DetailTab tabs={projectTitles} />

        <Typography
          id="Project Overview"
          sx={{ paddingTop: isBelowMd ? 5 : 12 }}
          className="homeTitle"
        >
          Project Overview
        </Typography>

        <Typography sx={{ paddingTop: 3 }} className="homeBody2">
          {" "}
          TorinAsia - Online Asian Food Marketplace
        </Typography>
        <Typography sx={{ paddingTop: 1 }} className="homeBody">
          {text1}
        </Typography>

        <Typography sx={{ paddingTop: 3 }} className="homeBody2">
          Business Objectives:
        </Typography>

        <List>
          <ListItem
            key="m1"
            sx={{
              marginBottom: 0,
            }}
          >
            <CheckIcon
              style={{
                color: "rgb(0, 128, 128)",
                fontSize: "30px",
                display: "block",
              }}
            />
            <ListItemText primary={<>{text2}</>} />
          </ListItem>
          <ListItem
            key="m2"
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
            <ListItemText primary={<>{text3}</>} />
          </ListItem>
          <ListItem
            key="m2"
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
            <ListItemText primary={<>{text4}</>} />
          </ListItem>
          <ListItem
            key="m2"
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
            <ListItemText primary={<>{text5}</>} />
          </ListItem>
        </List>

        <Typography sx={{ paddingTop: 3 }} className="homeBody2">
          Key Features:
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          <strong>1. User Account Creation</strong>
        </Typography>
        <Typography sx={{ paddingTop: 1 }} className="homeBody">
          {text6}
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          <strong>2. Product Catalog</strong>
        </Typography>
        <Typography sx={{ paddingTop: 1 }} className="homeBody">
          {text7}
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          <strong>3. Easy and Fast Payment</strong>
        </Typography>
        <Typography sx={{ paddingTop: 1 }} className="homeBody">
          {text8}
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          <strong>4. Fast Delivery</strong>
        </Typography>
        <Typography sx={{ paddingTop: 1 }} className="homeBody">
          {text9}
        </Typography>
        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          <strong>5. Purchase History</strong>
        </Typography>
        <Typography sx={{ paddingTop: 1 }} className="homeBody">
          {text10}
        </Typography>
        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          <strong>6. Personalized Discounts</strong>
        </Typography>
        <Typography sx={{ paddingTop: 1 }} className="homeBody">
          {text11}
        </Typography>
        <Typography sx={{ paddingTop: 3 }} className="homeBody2">
          Target Audience:
        </Typography>
        <Typography sx={{ paddingTop: 0.5 }} className="homeBody">
          {text12}
        </Typography>
        <Typography sx={{ paddingTop: 3 }} className="homeBody2">
          Impact and Future Plans:
        </Typography>
        <Typography sx={{ paddingTop: 0.5 }} className="homeBody">
          {text13}
        </Typography>

        <Typography
          id="Project Details"
          sx={{ paddingTop: 4 }}
          className="homeTitle"
        >
          Project Details
        </Typography>

        <Typography sx={{ paddingTop: 5 }} className="homeBody2">
          My Role:
        </Typography>
        <Typography sx={{ marginTop: 1 }} className="homeBody">
          {text9}
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          <strong>
            1. Frontend Development with React, Redux, and Next.js:{" "}
          </strong>
          {text10}
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          <strong>2. Backend API Handling: </strong>
          {text11}
        </Typography>

        <Typography sx={{ paddingTop: 4 }} className="homeBody2">
          Orienta Game: Enhancing User Experience
        </Typography>

        <Typography sx={{ marginTop: 2 }} className="homeBody">
          {text12}
        </Typography>
        <Typography sx={{ marginTop: 3 }} className="homeBody2">
          Game Overview:
        </Typography>
        <Typography sx={{ marginTop: 1 }} className="homeBody">
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
        <Typography className="homeBody">
          <strong>User Experience: </strong>
          {text17}
        </Typography>

        <Stack id="Project Screenshots">
          <Typography
            sx={{ marginTop: 5, marginBottom: 4.5 }}
            className="homeTitle"
          >
            Project Screenshots
          </Typography>

          <style>{customCarouselStyles}</style>
          <Carousel showArrows>
            {carouselContent.map((slide, index) => {
              return (
                <Box
                  key={index}
                  sx={{ backgroundColor: "rgb(0, 128, 128)", height: "100%" }}
                >
                  <Grid container>
                    <Grid
                      container
                      item
                      xs={12}
                      sx={{ paddingX: 3.5, paddingTop: 0.5, marginTop: 3 }}
                    >
                      {/* <Image
                            src={slide.im}
                            alt={"vc"}
                            layout="responsive"
                            style={{ objectFit: "contain", maxHeight: 600 }}
                          /> */}
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sx={{
                        marginX: 5,
                        marginBottom: 0,
                        justifyContent: "center",
                      }}
                    >
                      <Grid
                        xs={12}
                        container
                        item
                        sx={{
                          marginTop: 2,
                          minHeight: isBelowMd ? 240 : 100,
                          justifyContent: "center",
                          alignItems: isBelowMd ? "center" : "flex-start",
                          marginBottom: isBelowMd ? 3 : 1,
                        }}
                      >
                        <Box>
                          <Typography style={{ color: "white" }}>
                            {slide.ex}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Carousel>
        </Stack>

        <Stack id="Technologies and Language" sx={{ paddingTop: 2 }}>
          <Typography className="homeTitle">
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
                  <strong>Framework:</strong> Next.js
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
                  <strong>Libraries:</strong> React, axios, react-router-dom...
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
          <Typography className="homeTitle">
            here is the website link
          </Typography>
        </Stack>

        <Stack sx={{ marginBottom: 5, marginLeft: 5 }}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://excelsiorienta.unioncamere.it"
          >
            <Typography style={{ fontSize: "25px" }}>
              www.excelsiorienta.unioncamere.it
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </PageWrapper>
  );
});

Torinasia.displayName = "Torinasia";
export default Torinasia;
