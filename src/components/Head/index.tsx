import { memo } from "react";
import { useHead } from "./index.hooks";
import pages from "@/pages";
import { NextRouter, useRouter } from "next/router";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Stack,
  Button,
  Divider,
  Paper,
  Skeleton,
  SwipeableDrawer,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { CustomDivider } from "../CustomDivider";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
type HeadProps = {};
const drawerBleeding = 56;
export const Head = memo(({}: HeadProps) => {
  const {
    theme,
    isBelowMd,
    open,
    toggleDrawer,
    handleMenuClick,
    handleDrawerClose,
    drawerOpen,
    isScrolled,
    isScrolled700,
  } = useHead();
  const router: NextRouter = useRouter();

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        boxShadow: "0px 8px 16px rgba(7, 4, 4, 0.5)",
        justifyContent: "center",
        backgroundColor: "rgb(0, 128, 128)",
        height: isScrolled700
          ? 0
          : isScrolled && !isBelowMd
          ? "110px"
          : isBelowMd && isScrolled
          ? "60px"
          : isBelowMd
          ? "80px"
          : "150px",
        transition: "height 0.3s ease-in-out",
      }}
    >
      <Stack
        direction={"row"}
        spacing={2}
        sx={{ display: isScrolled700 ? "none" : "flex", paddingX: "20px" }}
      >
        <Stack sx={{ justifyContent: "center" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "6px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SINA YEKTAY
          </Typography>
        </Stack>
        {isBelowMd ? (
          <Stack style={{ marginLeft: "auto" }}>
            <IconButton onClick={handleMenuClick}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <List sx={{ width: "189px" }}>
                <ListItem
                  sx={{ cursor: "pointer" }}
                  onClick={() => router.push("/projects")}
                >
                  <ListItemText primary="Projects" />
                </ListItem>
                <Divider style={{ height: "3px" }} />
                <ListItem
                  sx={{ cursor: "pointer" }}
                  onClick={() => router.push("/skills")}
                >
                  <ListItemText primary="Skills" />
                </ListItem>
                <Divider style={{ height: "3px" }} />
                <ListItem
                  onClick={() => router.push("/interests")}
                  sx={{ cursor: "pointer" }}
                >
                  <ListItemText primary="Interests" />
                </ListItem>
                <Divider style={{ height: "3px" }} />

                <ListItem
                  sx={{ cursor: "pointer" }}
                  onClick={() => toggleDrawer(true)}
                >
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </Stack>
        ) : (
          <>
            <CustomDivider isScrolled700={isScrolled700} />
            <Stack sx={{}}>
              <Button
                onClick={() => router.push("/projects")}
                style={{
                  fontSize: "20px",
                  textTransform: "none",
                  border: "outlined",
                  color: "white",
                }}
              >
                Projects
              </Button>
            </Stack>
            <CustomDivider isScrolled700={isScrolled700} />
            <Stack sx={{}}>
              <Button
                onClick={() => toggleDrawer(true)}
                style={{
                  fontSize: "20px",
                  textTransform: "none",
                  border: "outlined",
                  color: "white",
                }}
              >
                Contact
              </Button>
            </Stack>
            <CustomDivider isScrolled700={isScrolled700} />
            <Stack sx={{}}>
              <Button
                style={{
                  fontSize: "20px",
                  textTransform: "none",
                  border: "outlined",
                  color: "white",
                }}
                onClick={() => router.push("/skills")}
              >
                Skills
              </Button>
            </Stack>
            <CustomDivider isScrolled700={isScrolled700} />
            <Stack sx={{}}>
              <Button
                style={{
                  fontSize: "20px",
                  textTransform: "none",
                  border: "outlined",
                  color: "white",
                }}
                onClick={() => router.push("/interests")}
              >
                Interests
              </Button>
            </Stack>
          </>
        )}
      </Stack>

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Stack
            direction={isBelowMd ? "column" : "row"}
            sx={{ justifyContent: "space-around", padding: isBelowMd ? 2 : 7 }}
          >
            <Stack direction="row">
              <Stack sx={{ justifyContent: "center" }}>
                <MailOutlineIcon
                  style={{
                    fontSize: isBelowMd ? "25px" : "34px",
                    color: "rgb(0, 128, 128)",
                  }}
                />
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    p: 2,
                    fontWeight: "bold",
                    fontSize: isBelowMd ? "20px" : "24px",
                    color: "rgb(0, 128, 128)",
                  }}
                >
                  sina.yektay1990@gmail.com
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Stack sx={{ justifyContent: "center" }}>
                <CallIcon
                  style={{
                    fontSize: isBelowMd ? "25px" : "34px",
                    color: "rgb(0, 128, 128)",
                  }}
                />
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    p: 2,
                    fontWeight: "bold",
                    fontSize: isBelowMd ? "20px" : "24px",
                    color: "rgb(0, 128, 128)",
                  }}
                >
                  +39 3891299102
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Skeleton variant="rectangular" height="100%" />
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
});

Head.displayName = "Head";
