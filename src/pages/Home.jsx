import { Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { useBlogStore } from "../store/BlogStore";
export default function Home() {
  const [loading, setLoading] = useState(false);
  // const [blogData, setBlogData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [blogData, setBlogData] = useBlogStore((state) => [
    state.blogData,
    state.setBlogData,
  ]);
  const BASE_URL =
    searchInput.length > 0
      ? `https://dummyapi.io/data/v1/tag/${searchInput}/post?limit=100`
      : "https://dummyapi.io/data/v1/tag/nature/post?limit=100";
  const APP_ID = "65426500c7ca97f4db44f8ce";
  useEffect(() => {
    if (!blogData) {
      setLoading(true);
      axios
        .get(`${BASE_URL}/user`, { headers: { "app-id": APP_ID } })
        .then(({ data }) => setBlogData(data))
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [blogData, BASE_URL, setBlogData]);
  return (
    <div className="home">
      <div className="header-container">
        <h1>Blogs</h1>
        <div className="flex-align-center gap-1">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ outline: "none" }}
          />
          <Button variant="contained" onClick={() => setBlogData(null)}>
            Search
          </Button>
        </div>
      </div>
      {!loading ? (
        <div className="card-wrapper">
          {blogData &&
            blogData.data.map((data) => (
              <BlogCard
                ownerInfo={data.owner}
                publishDate={data.publishDate}
                imageUrl={data.image}
                likes={data.likes}
                tags={data.tags}
                text={data.text}
              />
            ))}
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            height: "100%",
            width: "100%",
            placeItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
