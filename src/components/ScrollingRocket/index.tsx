import { memo } from "react";
import { useScrollingRocket } from "./index.hooks";
import RocketIcon from "@mui/icons-material/Rocket";
import { IconButton } from "@mui/material";

type ScrollingRocketProps = { isBelowMd: boolean };

export const ScrollingRocket = memo(({ isBelowMd }: ScrollingRocketProps) => {
  const { isScrolled, handleScrollToTop } = useScrollingRocket();

  return (
    <IconButton
      style={{
        position: "fixed",
        border: "none",
        boxShadow: "none",
        bottom: "10%",
        left: "2.9%",
        display: isBelowMd
          ? "none"
          : !isBelowMd && isScrolled
          ? "block"
          : "none",
        backgroundColor: "transparent",
      }}
      onClick={handleScrollToTop}
    >
      <RocketIcon
        style={{
          color: "rgb(0, 128, 128)",
          fontSize: "70px",
        }}
      />
    </IconButton>
  );
});
ScrollingRocket.displayName = "ScrollingRocket";
