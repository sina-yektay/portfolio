import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCallback, useEffect, useState } from "react";

export const useHead = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled700, setIsScrolled700] = useState(false);
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const toggleDrawer = useCallback((state: boolean) => {
    setDrawerOpen(false);
    setOpen(state);
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2600) {
        setIsScrolled700(true);
      } else if (window.scrollY > 200) {
        setIsScrolled(true);
        setIsScrolled700(false);
      } else {
        setIsScrolled(false);
        setIsScrolled700(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    theme,
    isBelowMd,
    open,
    toggleDrawer,
    handleMenuClick,
    handleDrawerClose,
    drawerOpen,
    isScrolled,
    isScrolled700,
  };
};
