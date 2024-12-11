import React, { useEffect, useRef } from "react";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import { useStage } from "../hooks/useStage";
import ContentColumn from "./ContentColumn";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";

function Content() {
  const classes = useHomeStyles();

  const { stages } = useStage();

  useEffect(() => {}, [stages]);

  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {isSmallScreen && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <img
            src={left}
            onClick={scrollLeft}
            style={{
              width: "43px",
              height: "43px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          />
          <img
            src={right}
            onClick={scrollRight}
            style={{ cursor: "pointer" }}
          />
        </Box>
      )}
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Grid
          container
          sx={{ mt: 10, flexWrap: isSmallScreen ? "nowrap" : "wrap" }}
        >
          {stages.map((row, index) => (
            <Grid
              item
              xs={6}
              sm={3}
              key={index}
              sx={{
                minWidth: isSmallScreen ? "300px" : "auto",
                flexShrink: 0,
              }}
              className={classes.titleStage}
            >
              {row.title}
              <ContentColumn stage={row.id} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
export default Content;
