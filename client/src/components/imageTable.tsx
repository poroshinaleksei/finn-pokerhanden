import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ItemData } from "../types/itemData";

interface Props {
  itemData?: ItemData[];
}

export const StandardImageList = ({ itemData }: Props) => {
  if (!itemData) {
    return null;
  }

  return (
    <ImageList sx={{ width: 700, height: 450 }} cols={5} rowHeight={164}>
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
