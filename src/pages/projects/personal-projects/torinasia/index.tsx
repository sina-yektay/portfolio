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
import { CustomCarousel } from "@/components/CustomCarousel";

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
const text14 =
  "TorinAsia is a dynamic online Asian food marketplace that caters to the diverse culinary preferences of the Asian student community in Turin, Italy. Established in 2020, this innovative startup has evolved from utilizing social media platforms for sales to launching a sophisticated web platform to provide customers with a seamless shopping experience. The project comprises two Single Page Applications (SPAs), one dedicated to the user side and the other to the admin side, ensuring efficient management and a user-friendly interface.";
const text15 =
  "The admin panel offers comprehensive product management capabilities, allowing administrators to add, edit, or remove products from the platform. This ensures that the product catalog remains up-to-date with the latest offerings.";
const text16 =
  "Admins can efficiently monitor incoming orders, providing real-time insights into customer purchases and order status. This feature enables seamless order processing and delivery coordination.";
const text17 =
  "The admin side provides access to valuable user insights, including shopping history and preferences. This data empowers administrators to tailor promotions and discounts for enhanced customer engagement.";
const text18 =
  "Users can easily search for their desired products using the intuitive search bar at the top of the application. This feature streamlines the shopping experience by quickly locating specific items.";
const text19 =
  "The project's user-centric approach is further emphasized with multi-language support, allowing users to seamlessly switch between Italian and English for enhanced accessibility.";
const text20 =
  "Users can create and manage their accounts, providing a personalized shopping experience. Account management includes editing user profiles and securely storing delivery information.";
const text21 =
  "The application incorporates a user-friendly shopping cart, allowing customers to add selected products for future purchase. Product selections are stored in the Redux store, ensuring a seamless shopping journey.";
const text22 =
  " In the event of a forgotten password, users can utilize the password recovery feature. By entering their email, users receive a password reset token via email, enhancing security and user convenience.";
const text23 =
  "The project is designed with responsiveness in mind, ensuring that all pages adapt seamlessly to various screen sizes and devices, providing a consistent user experience.";
const text24 =
  "Utilized modern web technologies, including React for the frontend development, and Redux for state management.";
const text25 = "Employed Node.js for the server-side logic and data handling.";
const text26 =
  " Leveraged a database system (MongoDB) for storing product and user data.";
const text27 =
  "Integrated Nodemailer to facilitate email notifications and password reset functionality.";
const text28 =
  "Supported both Italian and English languages for a diverse user base.";
const carouselContent = [
  {
    im: "/assets/t1.png",
    ex: "This is the home page, where the content dynamically changes and user can choose different groups of products that they are looking for.",
    side: "User side",
  },
  {
    im: "/assets/t2.png",
    ex: "Products on discount shown to the user on the homepage as the user scroll down.",
    side: "User side",
  },
  {
    im: "/assets/t3.png",
    ex: "All the pages are responsive across all devices.",
    side: "User side",
  },
  {
    im: "/assets/t4.png",
    ex: "User can easily find the desired product after a few clicks.",
    side: "User side",
  },
  {
    im: "/assets/t5.png",
    ex: "Here is the all products page in which there is a pagination that user can visit different pages.",
    side: "User side",
  },
  {
    im: "/assets/t6.png",
    ex: "This is the user's cart, in which user can add, remove the peoducts and see the payment details.",
    side: "User side",
  },
  {
    im: "/assets/t7.png",
    ex: "All product page in responsive mode.",
    side: "User side",
  },
  {
    im: "/assets/t8.png",
    ex: "Here is where user can modify their account.",
    side: "User side",
  },
  {
    im: "/assets/t9.png",
    ex: "Entry point of the admin panel.",
    side: "Admin side",
  },
  {
    im: "/assets/t10.png",
    ex: "The torinasia admins can add a new product like above.",
    side: "Admin side",
  },
  {
    im: "/assets/t11.png",
    ex: "This is where the admin can delete or edit a product, they also can search among products to find one.",
    side: "Admin side",
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
        <Typography
          sx={{
            paddingBottom: 3,
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Torinasia
        </Typography>

        <DetailTab tabs={projectTitles} />

        <Typography
          id="Project Overview"
          sx={{
            paddingTop: isBelowMd ? 5 : 12,
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Project Overview
        </Typography>

        <Typography
          sx={{ paddingTop: 3, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          {" "}
          TorinAsia - Online Asian Food Marketplace
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text1}
        </Typography>

        <Typography
          sx={{ paddingTop: 3, fontSize: "21px", fontFamily: "sans-serif" }}
        >
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

        <Typography
          sx={{ paddingTop: 3, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Key Features:
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>1. User Account Creation</strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text6}
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>2. Product Catalog</strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text7}
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>3. Easy and Fast Payment</strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text8}
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>4. Fast Delivery</strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text9}
        </Typography>
        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>5. Purchase History</strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text10}
        </Typography>
        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>6. Personalized Discounts</strong>
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text11}
        </Typography>
        <Typography
          sx={{ paddingTop: 3, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Target Audience:
        </Typography>
        <Typography sx={{ paddingTop: 0.5 }} className="homeBody">
          {text12}
        </Typography>
        <Typography
          sx={{ paddingTop: 3, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Impact and Future Plans:
        </Typography>
        <Typography
          sx={{ paddingTop: 0.5, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text13}
        </Typography>

        <Typography
          id="Project Details"
          sx={{
            paddingTop: 4,
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Project Details
        </Typography>

        <Typography
          sx={{ paddingTop: 5, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Project Details: TorinAsia - Online Asian Food Marketplace
        </Typography>
        <Typography
          sx={{ marginTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          {text14}
        </Typography>

        <Typography
          sx={{ paddingTop: 4, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Admin SPA Features:
        </Typography>

        <List>
          <ListItem
            key="m-4"
            sx={{
              marginBottom: 0,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Product Management:</strong> {text15}
                </>
              }
            />
          </ListItem>
          <ListItem
            key="m-3"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Order Monitoring:</strong> {text16}
                </>
              }
            />
          </ListItem>
          <ListItem
            key="m-2"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>User Analytics:</strong> {text17}
                </>
              }
            />
          </ListItem>
        </List>
        <Typography
          sx={{ paddingTop: 4, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          User SPA Features:
        </Typography>

        <List>
          <ListItem
            key="m-1"
            sx={{
              marginBottom: 0,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Product Search:</strong> {text18}
                </>
              }
            />
          </ListItem>
          <ListItem
            key="m0"
            sx={{
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={
                <>
                  <strong>Multi-Language Support:</strong> {text19}
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
                  <strong>User Accounts:</strong> {text20}
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
                  <strong>Shopping Cart: </strong> {text21}
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
                  <strong>Password Recovery: </strong> {text22}
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
                  <strong>Responsive Design: </strong> {text23}
                </>
              }
            />
          </ListItem>
        </List>

        <Typography
          sx={{ marginTop: 2, fontSize: "21px", fontFamily: "sans-serif" }}
        >
          Technology Stack:
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>Frontend: </strong>
          {text24}
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>Backend: </strong>
          {text25}
        </Typography>

        <Typography
          sx={{ paddingTop: 2, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>Database: </strong>
          {text26}
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>Email Notifications: </strong>
          {text27}
        </Typography>
        <Typography
          sx={{ paddingTop: 1, fontSize: "17px", fontFamily: "sans-serif" }}
        >
          <strong>Languages: </strong>
          {text28}
        </Typography>

        <Typography
          id="Project Screenshots"
          sx={{
            marginTop: 5,
            marginBottom: 5,
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Project Screenshots
        </Typography>
        <Stack sx={{ marginTop: 3 }}>
          <CustomCarousel project={"torinasia"} />
        </Stack>

        <Stack id="Technologies and Language" sx={{ paddingTop: 5 }}>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
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
                  <strong>Libraries:</strong> axios ,nodemailer ,
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
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            here is the website link and github repo
          </Typography>
        </Stack>

        <Stack sx={{ marginBottom: 5, marginLeft: 5 }}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://torinasia.com"
          >
            <Typography style={{ fontSize: "25px" }}>
              www.torinasia.com
            </Typography>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sina-yektay/mercato-persiano"
          >
            <Typography style={{ fontSize: "23px" }}>
              Visit the code on my github
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </PageWrapper>
  );
});

Torinasia.displayName = "Torinasia";
export default Torinasia;
