import { Box } from "@mui/material";
import { memo, useState } from "react";
import { useDetailTab } from "./index.hooks";
import {} from "@mui/icons-material";
import * as React from "react";

import {
  styled,
  ThemeProvider,
  createTheme,
  SxProps,
} from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

type DetailTabProps = { tabs: string[]; vertical?: boolean; sx?: SxProps };

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const projectTitles = [
  "Project Overview",
  "Project Details",
  "Project Screenshots",
  "Technologies and Language",
  "Links",
];

export const DetailTab = memo(
  ({ tabs, vertical = false, sx }: DetailTabProps) => {
    const { value, handleChange } = useDetailTab(tabs);
    const [open, setOpen] = useState(true);
    return (
      <Box sx={{ display: "flex", marginTop:5 }}>
        <ThemeProvider
          theme={createTheme({
            components: {
              MuiListItemButton: {
                defaultProps: {
                  disableTouchRipple: true,
                },
              },
            },
            palette: {
              mode: "dark",
              primary: { main: "rgb(102, 157, 246)" },
              background: { paper: "rgb(0, 128, 128)" },
            },
          })}
        >
          <Paper
            elevation={0}
            sx={{ width: "auto", padding: 1, paddingLeft: 0 }}
          >
            <FireNav component="nav" disablePadding>
              <ListItemButton component="a">
                <ListItemText
                  sx={{ my: 0 }}
                  primary="Contents"
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: "medium",
                    letterSpacing: 0,
                  }}
                />
              </ListItemButton>
              <Divider />

              <Box
                sx={{
                  bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                  pb: open ? 2 : 0,
                }}
              >
                {projectTitles.map((item, index) => (
                  <ListItemButton
                    key={index}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                  >
                    <ListItemIcon sx={{ color: "#FFFFF", fontWeight: "bold" }}>
                      {index + 1}
                    </ListItemIcon>
                    <ListItemText
                      onClick={() => handleChange(index)}
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                ))}
              </Box>
            </FireNav>
          </Paper>
        </ThemeProvider>
      </Box>
    );
  }
);

DetailTab.displayName = "DetailTab";
