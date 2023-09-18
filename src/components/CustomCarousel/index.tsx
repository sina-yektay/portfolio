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
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useCustomCarousel } from "./index.hooks";
type item = { im: string; ex: string; side: string };
type CustomCarouselProps = { items: item[] };

export const CustomCarousel = memo(({ items }: CustomCarouselProps) => {
  const { currentIndex, goToPrevSlide, goToNextSlide, isBelowMd } =
    useCustomCarousel(items.length);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card  style={{ boxShadow: "0px 0px 10px rgb(0, 128, 128)" }}>
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
            <CardMedia
              component="img"
              alt={items[currentIndex].side}
              src={items[currentIndex].im}
              style={{ 
                width: "100%", objectFit: "contain", height: isBelowMd ? 300 : 500 }}
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
            <CardContent style={{ height: isBelowMd ? "300px" : "200px",display:"flex", justifyContent: "center",alignItems:"center" }}>
              <Stack sx={{width: isBelowMd ? "95%" : "80%", alignItems:"center"}}>
                <Stack>
              <Typography className="homeBody2">
                {items[currentIndex].side}
              </Typography>
              </Stack>
              <Typography className="homeBody" color="text.secondary">
                {items[currentIndex].ex}
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
