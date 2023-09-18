import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

export const useCustomCarousel = (length: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
  };
  return { currentIndex, goToPrevSlide, goToNextSlide, isBelowMd };
};
