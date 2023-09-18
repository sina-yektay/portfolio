import { DetailTab } from "@/components/DetailTab";
import { PageWrapper } from "@/components/PageWrapper";
import Image from "next/image";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import vc from "../../../../../public/assets/vc.png";
import { memo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CheckIcon from "@mui/icons-material/Check";
import { ScrollingRocket } from "@/components/ScrollingRocket";
import Link from "next/link";
import { useRouter } from "next/router";
import { CustomCarousel } from "@/components/CustomCarousel";
const text1 =
  "Nova Coop, one of the leading retail chains operating in the Piemonte region and a prominent member of the national Coop system, operates as a cooperative consumer organization committed to delivering quality, service, and product safety to its members. Founded in 1990 through the merger of Coop Piemonte and Coop C.P.L., Nova Coop has established a significant presence across the Piemonte region and a limited area in Lombardia. The essence of Nova Coop's cooperative structure lies in its mutualistic purpose and social commitment. Profits and reserves are indivisible and reinvested to serve the interests of consumers and uphold statutory objectives.";
const text2 =
  "Our project with Nova Coop centered around the development of their online presence, with a primary focus on their website. The website serves as a comprehensive platform catering to various aspects of Nova Coop's operations, making it an invaluable resource for both existing members and potential customers. Here are the key components of the website:";
const text3 =
  "The website offers an intuitive store locator feature, enabling users to easily find the nearest Nova Coop outlets in the Piemonte region. This feature enhances accessibility and convenience for members and customers alike";
const text4 =
  "We've integrated a dynamic news and events section that keeps visitors informed about the latest updates, events, and activities related to Nova Coop. This serves as a vital channel for communicating with the community.";
const text5 =
  "Nova Coop's commitment to social responsibility and community engagement is highlighted through a dedicated section showcasing their various social projects and initiatives. This fosters a sense of belonging among members and reinforces the cooperative's mission.";
const text6 =
  "Prospective members can easily access information about Nova Coop's membership program. This section outlines the benefits and processes for becoming a Nova Coop member, promoting active participation in the cooperative.";
const text7 =
  "Users can effortlessly get in touch with Nova Coop through the website, facilitating communication between the cooperative and its members, as well as addressing inquiries from the public.";
const text8 =
  "Our collaboration with Nova Coop was not just about developing a website; it was about enhancing their online presence to better serve their members and uphold their mission of consumer protection and social responsibility. Through this project, we aimed to align their digital platform with their cooperative values, making Nova Coop even more accessible, informative, and engaging for the community it serves.";
const text9 =
  "The primary objectives of this project were to enhance Nova Coop's online presence and provide a flexible content management system. As a junior developer on the team, my focus was on the development of the admin panel and the creation of custom components in the 'visual_components' folder. The main goal was to empower Nova Coop's administrators to create and manage various pages with unique slugs and diverse content.";
const text10 =
  "Through the development of the admin panel and the 'visual_components' components, we aimed to empower Nova Coop's administrators in several ways(below you can also find some visual_components components which are in fact responsible for what we see on novacoop website):";
const text11 =
  "Administrators gained the ability to easily customize the visual appearance of their web pages. They could select and arrange different visual elements, change color schemes, fonts, and layouts, ensuring that the website's style could be tailored for specific occasions, promotions, or branding needs.";
const text12 =
  " The custom components in the 'visual_component folder allowed administrators to have full control over the content displayed on the website. They could add text, images, videos, and other multimedia elements, creating engaging and dynamic content to cater to various events and campaigns.";
const text13 =
  "The system provided administrators with the capability to allocate unique slugs to each page they created. This meant that they could define the URL structure for different sections of the website, making it easier to organize and navigate content. It also allowed for the creation of dedicated landing pages for specific promotions or events, each with its own distinct URL.";
const text14 =
  "In addition to content and style, administrators were empowered to customize the website's footer and menu items through the admin panel. They could easily add, remove, or rearrange menu items, making it simple to update site navigation to reflect new offerings or promotions. The footer could also be customized with relevant information or links as needed.";
const text15 =
  "To ensure that the customized footer and menu data were accessible on the server side and to users, all relevant data, including content, style choices, and menu configurations, were stored in a database. This data could be fetched on the server side and dynamically displayed to users as they navigated to corresponding pages, ensuring a consistent and up-to-date user experience.";
const text16 =
  "By offering these capabilities, Nova Coop's administrators could seamlessly adapt the website's style, content, menus, and footer to suit specific occasions, holidays, marketing campaigns, or other events. This flexibility played a pivotal role in enhancing the online presence of Nova Coop and ensuring that their website remained dynamic and responsive to changing needs and trends.";
const text17 =
  "Description: this section, provides an overview of the project's user interface by showcasing some screenshots from both the admin side and the user side. Highlight the key features, design elements, and user experience.";
const carouselContent = [
  {
    im: "/assets/auth.png",
    ex: "This is the entry point of the admin panel",
    side: "Admin side",
  },
  {
    im: "/assets/hm.png",
    ex: "This is the home page of the admin side, as you see the admin can create a new page using 'AGGIUNGI PAGINA' and then set the content and style of the page using visual components introduced before. for instance as you see the Login page is already created and has 'accesso-soci' as slug, in the future slides the Login page on the user side can be found.",
    side: "Admin side",
  },
  {
    im: "/assets/ped.png",
    ex: "Here is where we can modify or add some content to our page (after clicking on 'MODIFICA' button on last slide we get redirected here) we can add a new custom visual component to the page, also we enabled the administrators not to publish a page on the user side by clicking on 'pagina non publicata', for instance they can remove a page for some occasions and add them again only by clicking on a button.",
    side: "Admin side",
  },
  {
    im: "/assets/cmp.png",
    ex: "These are the visual components that i created and admin can choose them and provide them the required contents(like images, text, link or...) then user can see these contents on the UI.",
    side: "Admin side",
  },
  {
    im: "/assets/ar.png",
    ex: "Administrators also has to create some articles that will be fetched and shown to the user on the user side.",
    side: "Admin side",
  },
  {
    im: "/assets/fo.png",
    ex: "And this is how the admin can dynamically create footer items, there are teo dynamic column for footer that they can add some rows (which has a text and a link to the route) to it, then these values get stored on the mongodb using Node.js mongodb driver on the backend side and they get fetched during the server side rendering and shown to the user on the client side.",
    side: "Admin side",
  },
  {
    im: "/assets/us.png",
    ex: "This is the homepage if the admin doesn't add any visual component to it, just menu and footer fetched from db and shown to the user without any content.",
    side: "User side",
  },
  {
    im: "/assets/nv.png",
    ex: "If you visit the novacoop website (as i've shown above) on (www.novacoop.it) you can see their admin provides some contents to the home page, if you also notice they dynamically added the menu items and footer.",
    side: "User side",
  },
  {
    im: "/assets/rs.png",
    ex: "All pages are also responsive, above is the home page without any content in mobile version (the next slide is the home page with added content in mobile version).",
    side: "User side",
  },
  {
    im: "/assets/hrs.png",
    ex: "Home page with content in mobile version",
    side: "User side",
  },
];
const customCarouselStyles = `
  .carousel .control-arrow:hover {
    background: none !important;
    color: inherit !important;
    opacity: 1 !important;
    cursor: pointer !important;
  }
`;
type NovacoopProps = {};
const tabs = {};
const projectTitles = [
  "Project Overview",
  "Project Details",
  "Project Screenshots",
  "Technologies and Language",
  "Links",
];
const Novacoop = memo(({}: NovacoopProps) => {
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
          Novacoop
        </Typography>

        <DetailTab tabs={projectTitles} />

        <Typography
          id="Project Overview"
          sx={{ paddingTop: isBelowMd ? 5 : 12 }}
          className="homeTitle"
        >
          Project Overview
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          {text1}
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          {text2}
        </Typography>

        <List>
          <ListItem
            key="m1"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Store Locator:</strong> {text3}
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
                  <strong>News and Events: </strong> {text4}
                </>
              }
            />
          </ListItem>

          <ListItem
            key="m3"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Social Initiatives: </strong> {text5}
                </>
              }
            />
          </ListItem>

          <ListItem
            key="m4"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Membership Information: </strong> {text6}
                </>
              }
            />
          </ListItem>

          <ListItem
            key="m5"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong> Contact Information </strong> {text7}
                </>
              }
            />
          </ListItem>
        </List>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          {text8}
        </Typography>

        <Typography
          id="Project Details"
          sx={{ paddingTop: isBelowMd ? 5 : 12 }}
          className="homeTitle"
        >
          Project Details
        </Typography>

        <Typography
          id="Project Details"
          sx={{ paddingTop: 2 }}
          className="homeBody2"
        >
          Project Objectives:
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          {text9}
        </Typography>

        <Typography
          id="Project Details"
          sx={{ paddingTop: 3 }}
          className="homeBody2"
        >
          Empowering Administrators:
        </Typography>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          {text10}
        </Typography>

        <Grid container item>
          <Grid container item md={12} lg={9}>
            <List>
              <ListItem
                key="m1"
                sx={{
                  marginBottom: 1,
                }}
              >
                <ListItemText
                  primary={
                    <>
                      <strong>Style Customization:</strong> {text11}
                    </>
                  }
                />
              </ListItem>

              <ListItem
                key="m1"
                sx={{
                  marginBottom: 1,
                }}
              >
                <ListItemText
                  primary={
                    <>
                      <strong>Content Flexibility:</strong> {text12}
                    </>
                  }
                />
              </ListItem>

              <ListItem
                key="m1"
                sx={{
                  marginBottom: 1,
                }}
              >
                <ListItemText
                  primary={
                    <>
                      <strong>Slug Management:</strong> {text13}
                    </>
                  }
                />
              </ListItem>

              <ListItem
                key="m1"
                sx={{
                  marginBottom: 1,
                }}
              >
                <ListItemText
                  primary={
                    <>
                      <strong>Footer and Menu Customization:</strong> {text14}
                    </>
                  }
                />
              </ListItem>

              <ListItem
                key="m1"
                sx={{
                  marginBottom: 1,
                }}
              >
                <ListItemText
                  primary={
                    <>
                      <strong>Database Integration:</strong> {text15}
                    </>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            container
            item
            md={2.5}
            sx={{
              display: { md: "none", lg: "flex" },
              alignItems: { md: "center", xl: "flex-start" },
            }}
          >
            <Grid item container xs={12} sx={{}}>
              <Image
                src={vc}
                alt={"vc"}
                layout="responsive"
                style={{ objectFit: "contain", maxHeight: "550px" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Typography sx={{ paddingTop: 2 }} className="homeBody">
          {text16}
        </Typography>

        <Typography
          id="Project Screenshots"
          sx={{ marginTop: 4 }}
          className="homeTitle"
        >
          Project Screenshots
        </Typography>

        <Typography
          id="Project Screenshots"
          sx={{ marginTop: 4 }}
          className="homebody"
        >
          {text17}
        </Typography>

        <Stack sx={{ marginTop: 3 }}>
          <CustomCarousel items={carouselContent} />
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
                  <strong>Libraries:</strong> axios ,react-draggable-list
                  ,react-hook-form , react-router-dom...
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

        <Typography
          id="Links"
          sx={{ paddingTop: 5, marginBottom: 1 }}
          className="homeTitle"
        >
          here is the website link
        </Typography>

        <Stack sx={{ marginBottom: 5, marginLeft: 5 }}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.novacoop.it"
          >
            <Typography style={{ fontSize: "25px" }}>
              www.novacoop.it
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </PageWrapper>
  );
});

Novacoop.displayName = "Novacoop";
export default Novacoop;
