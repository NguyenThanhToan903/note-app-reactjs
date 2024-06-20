import React, { useEffect, useState } from "react";
import {
  ContentState,
  convertFromHTML,
  convertFromRaw,
  EditorState,
} from "draft-js";
import { draftToHtml } from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { useLoaderData } from "react-router-dom";
function Note() {
  const { note } = useLoaderData();

  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  const [rawHtml, setRawHtml] = useState(note.content);

  useEffect(() => {
    const blocksFromHtml = convertFromHTML(note.content);
    const state = ContentState.createFromBlockArray(
      blocksFromHtml.contentBlocks,
      blocksFromHtml.entityMap
    );
    setEditorState(EditorState.createWithContent(state));
  }, [note.id]);

  useEffect(() => {
    setRawHtml(note.content);
  }, [note.content]);

  const handleOnchange = (e) => {
    setEditorState(e);
    setRawHtml(draftToHtml(convertFromRaw(e.getCurrentContent())));
  };

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleOnchange}
      placeholder="Write something!"
    />
  );
}

export default Note;
