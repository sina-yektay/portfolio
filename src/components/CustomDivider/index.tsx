import { Divider, Paper } from "@mui/material";
import { memo } from "react";

type CustomDividerProps = { isScrolled700?: boolean };

export const CustomDivider = memo(
  ({ isScrolled700 = false }: CustomDividerProps) => {
    return !isScrolled700 ? (
      <Paper
        elevation={0}
        style={{
          width: "1px",
          background: "white",
          boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.2)",
          height: "100%",
        }}
      >
        <Divider />
      </Paper>
    ) : null;
  }
);

CustomDivider.displayName = "CustomDivider";
