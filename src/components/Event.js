import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Event({ data }) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {data.events.map((item) => (
        <ImageListItem key={item.sku}>
          <img src={item.thumbnail} alt={item.theme} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
