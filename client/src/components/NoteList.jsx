import { Box, Card, CardContent, Grid, List, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet, useParams, useLoaderData } from "react-router-dom";

function NoteList() {
  // const folder = { notes: [{ id: "1", content: "<p>This is new note</p>" }] };
  const { noteId } = useParams();
  const [activeNoteId, setActiveNoteId] = useState(noteId);
  const { folder } = useLoaderData();
  console.log("[Note LIST]", { folder });
  return (
    <Grid container height="100%">
      <Grid
        item
        xs={4}
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#F0EBE3",
          height: "100%",
          padding: "10px",
          textAlign: "left",
          overflowY: "auto",
        }}
      >
        <List
          subheader={
            <Box>
              <Typography sx={{ fontWeight: "bold", color: "white" }}>
                Folders
              </Typography>
            </Box>
          }
        >
          {folder.notes.map(({ id, content }) => {
            return (
              <Link
                key={id}
                to={`notes/${id}`}
                style={{ textDecoration: "none" }}
                onClick={() => setActiveNoteId(id)}
              >
                <Card
                  sx={{
                    mb: "5px",
                    backgroundColor:
                      id === activeNoteId ? "rgb(255 211 140)" : null,
                  }}
                >
                  <CardContent
                    sx={{ "&:last-child": { pb: "10px" }, padding: "10px" }}
                  >
                    <div
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                      dangerouslySetInnerHTML={{
                        __html: `${content.substring(0, 30) || "Empty"}`,
                      }}
                    />
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default NoteList;
