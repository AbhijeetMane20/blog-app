import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Badge from "./Badge";

export default function BlogCard({
  ownerInfo = {
    id: "",
    title: "",
    firstName: "",
    lastName: "",
    picture: "",
  },
  publishDate = "",
  imageUrl = "",
  likes = 0,
  tags = [],
  text = "",
}) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ minWidth: "345px", minHeight: "445px" }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {ownerInfo.firstName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={`${ownerInfo.firstName} ${ownerInfo.lastName}`}
        subheader={publishDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        {tags.map((tag) => (
          <Badge text={tag} />
        ))}
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" title="Likes">
          <FavoriteIcon color="error" />
        </IconButton>
        <Typography variant="body2">{likes}</Typography>
        <IconButton aria-label="share" title="Share">
          <ShareIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
