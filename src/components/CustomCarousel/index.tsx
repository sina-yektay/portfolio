import React, { memo, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useCustomCarousel } from "./index.hooks";
import t1 from "../../../public/assets/t1.png";
import t2 from "../../../public/assets/t2.png";
import t3 from "../../../public/assets/t3.png";
import t4 from "../../../public/assets/t4.png";
import t5 from "../../../public/assets/t5.png";
import t6 from "../../../public/assets/t6.png";
import t7 from "../../../public/assets/t7.png";
import t8 from "../../../public/assets/t8.png";
import t9 from "../../../public/assets/t9.png";
import t10 from "../../../public/assets/t10.png";
import t11 from "../../../public/assets/t11.png";

import e1 from "../../../public/assets/e1.png";
import e2 from "../../../public/assets/e2.png";
import e3 from "../../../public/assets/e3.png";
import e4 from "../../../public/assets/e4.png";
import e5 from "../../../public/assets/e5.png";
import e6 from "../../../public/assets/e6.png";
import e7 from "../../../public/assets/e7.png";
import e8 from "../../../public/assets/e8.png";
import e9 from "../../../public/assets/e9.png";
import e10 from "../../../public/assets/e10.png";
import e11 from "../../../public/assets/e11.png";

import auth from "../../../public/assets/auth.png";
import hm from "../../../public/assets/hm.png";
import ped from "../../../public/assets/ped.png";
import cmp from "../../../public/assets/cmp.png";
import ar from "../../../public/assets/ar.png";
import fo from "../../../public/assets/fo.png";
import us from "../../../public/assets/us.png";
import nv from "../../../public/assets/nv.png";
import rs from "../../../public/assets/rs.png";
import hrs from "../../../public/assets/hrs.png";
import { StaticImageData } from "next/image";

const torinasia = [
  {
    im: t1,
    ex: "This is the home page, where the content dynamically changes and user can choose different groups of products that they are looking for.",
    side: "User side",
  },
  {
    im: t2,
    ex: "Products on discount shown to the user on the homepage as the user scroll down.",
    side: "User side",
  },
  {
    im: t3,
    ex: "All the pages are responsive across all devices.",
    side: "User side",
  },
  {
    im: t4,
    ex: "User can easily find the desired product after a few clicks.",
    side: "User side",
  },
  {
    im: t5,
    ex: "Here is the all products page in which there is a pagination that user can visit different pages.",
    side: "User side",
  },
  {
    im: t6,
    ex: "This is the user's cart, in which user can add, remove the peoducts and see the payment details.",
    side: "User side",
  },
  {
    im: t7,
    ex: "All product page in responsive mode.",
    side: "User side",
  },
  {
    im: t8,
    ex: "Here is where user can modify their account.",
    side: "User side",
  },
  {
    im: t9,
    ex: "Entry point of the admin panel.",
    side: "Admin side",
  },
  {
    im: t10,
    ex: "The torinasia admins can add a new product like above.",
    side: "Admin side",
  },
  {
    im: t11,
    ex: "This is where the admin can delete or edit a product, they also can search among products to find one.",
    side: "Admin side",
  },
];

const excelsiorienta = [
  {
    im: e1,
    ex: "This is the home page of the Excelsiorienta, here the user chooses the student's path or the parent's path, then in next step this is used as a query tom fetch appropriate articles according to the user type.",
    side: "User side",
  },
  {
    im: e2,
    ex: "Here you can see different news articles according to the user type(chosen in home page), but this is the local development and the news articles are not real, in the next slide you can see the same page with the appropriate articles on production.",
    side: "User side",
  },
  {
    im: e3,
    ex: "Here the articles are retrieved from db on the server side.",
    side: "User side",
  },
  {
    im: e4,
    ex: "This is the same page as the last slide but in mobile version, all pages are responsive in this platform.",
    side: "User side",
  },
  {
    im: e5,
    ex: "This is the career page, where the students can choose a pathe to see it's details.",
    side: "User side",
  },
  {
    im: e6,
    ex: "As instance this is the details page for Physicists and Astronomers.",
    side: "User side",
  },
  {
    im: e7,
    ex: "Physicists and Astronomers job details and statistics.",
    side: "User side",
  },
  {
    im: e8,
    ex: "Entry point of the Orienta Game(SPA).",
    side: "User side",
  },
  {
    im: e9,
    ex: "Here the user enter their details to proceed.",
    side: "User side",
  },
  {
    im: e10,
    ex: "User has to choose an avatar and the interested subjects.",
    side: "User side",
  },
  {
    im: e11,
    ex: "And finally here is the start of the game, the user has to finish three steps to receive a personalized suggestion for their career path.",
    side: "User side",
  },
];

const novacoop = [
  {
    im: auth,
    ex: "This is the entry point of the admin panel",
    side: "Admin side",
  },
  {
    im: hm,
    ex: "This is the home page of the admin side, as you see the admin can create a new page using 'AGGIUNGI PAGINA' and then set the content and style of the page using visual components introduced before. for instance as you see the Login page is already created and has 'accesso-soci' as slug, in the future slides the Login page on the user side can be found.",
    side: "Admin side",
  },
  {
    im: ped,
    ex: "Here is where we can modify or add some content to our page (after clicking on 'MODIFICA' button on last slide we get redirected here) we can add a new custom visual component to the page, also we enabled the administrators not to publish a page on the user side by clicking on 'pagina non publicata', for instance they can remove a page for some occasions and add them again only by clicking on a button.",
    side: "Admin side",
  },
  {
    im: cmp,
    ex: "These are the visual components that i created and admin can choose them and provide them the required contents(like images, text, link or...) then user can see these contents on the UI.",
    side: "Admin side",
  },
  {
    im: ar,
    ex: "Administrators also has to create some articles that will be fetched and shown to the user on the user side.",
    side: "Admin side",
  },
  {
    im: fo,
    ex: "And this is how the admin can dynamically create footer items, there are teo dynamic column for footer that they can add some rows (which has a text and a link to the route) to it, then these values get stored on the mongodb using Node.js mongodb driver on the backend side and they get fetched during the server side rendering and shown to the user on the client side.",
    side: "Admin side",
  },
  {
    im: us,
    ex: "This is the homepage if the admin doesn't add any visual component to it, just menu and footer fetched from db and shown to the user without any content.",
    side: "User side",
  },
  {
    im: nv,
    ex: "If you visit the novacoop website (as i've shown above) on (www.novacoop.it) you can see their admin provides some contents to the home page, if you also notice they dynamically added the menu items and footer.",
    side: "User side",
  },
  {
    im: rs,
    ex: "All pages are also responsive, above is the home page without any content in mobile version (the next slide is the home page with added content in mobile version).",
    side: "User side",
  },
  {
    im: hrs,
    ex: "Home page with content in mobile version",
    side: "User side",
  },
];

type ProjectName = "torinasia" | "excelsiorienta" | "novacoop";
type ProjectData = {
  [key in ProjectName]: {
    im: StaticImageData;
    ex: string;
    side: string;
  }[];
};
const projects = {
  torinasia,
  excelsiorienta,
  novacoop,
};

type CustomCarouselProps = { project: ProjectName };
export const CustomCarousel = memo(({ project }: CustomCarouselProps) => {
  const { currentIndex, goToPrevSlide, goToNextSlide, isBelowMd } =
    useCustomCarousel(projects[project].length);
  const currentProjectData = projects[project][currentIndex];
  const { im, ex, side } = currentProjectData;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card style={{ boxShadow: "0px 0px 10px rgb(0, 128, 128)" }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <IconButton
              aria-label="Previous Slide"
              style={{
                backgroundColor: "rgb(0, 128, 128)",
                position: "absolute",
                left: 0,
                top: isBelowMd ? "35%" : "50%",
                transform: "translateY(-50%)",
              }}
              onClick={goToPrevSlide}
            >
              <ArrowBack sx={{ fontSize: isBelowMd ? "20px" : "40px" }} />
            </IconButton>
            {/* <CardMedia
              component="img"
              alt={side}
              src={im}
              style={{
                width: "100%",
                objectFit: "contain",
                height: isBelowMd ? 300 : 500,
              }}
            /> */}

            <Image
              src={im}
              alt={side}
              
              style={{ objectFit: "contain", height: isBelowMd ? 300 : 500, width:"100%" }}
            />

            <IconButton
              aria-label="Next Slide"
              style={{
                backgroundColor: "rgb(0, 128, 128)",
                position: "absolute",
                right: 0,
                top: isBelowMd ? "35%" : "50%",
                transform: "translateY(-50%)",
              }}
              onClick={goToNextSlide}
            >
              <ArrowForward sx={{ fontSize: isBelowMd ? "20px" : "40px" }} />
            </IconButton>
            <Divider />
            <CardContent
              style={{
                height: isBelowMd ? "300px" : "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{ width: isBelowMd ? "95%" : "80%", alignItems: "center" }}
              >
                <Stack>
                  <Typography className="homeBody2">{side}</Typography>
                </Stack>
                <Typography className="homeBody" color="text.secondary">
                  {ex}
                </Typography>
              </Stack>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
});

CustomCarousel.displayName = "CustomCarousel";
