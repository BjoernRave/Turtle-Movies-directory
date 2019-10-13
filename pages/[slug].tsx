import dayjs from "dayjs";
import Link from "next/link";
import { SingletonRouter, withRouter } from "next/router";
import React, { FC, FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import movies from "../public/movies.json";

const DetailsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const CommentsWrapper = styled.div`
  overflow-x: auto;
  height: 95%;
`;

const CommentBoxWrapper = styled.section`
  position: relative;
  border: 4px solid black;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  height: 80%;
`;

const CommentInput = styled.input`
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

const CommentForm = styled.form`
  position: absolute;
  bottom: 20px;
  width: 90%;
`;

const Comment = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 24px;

  span:nth-child(2) {
    color: gray;
    font-size: 12px;
    padding-top: 5px;
  }
`;

const BackButton = styled.button`
  align-self: baseline;
  margin-left: 10%;
  margin-bottom: 20px;
`;

const Comments: FC<Props> = ({
  router: {
    query: { slug }
  },
  firestore
}) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ text: string; time: number }[]>(
    []
  );
  const movie = movies.filter(
    movie => movie.title.toLowerCase().replace(/ /g, "-") === slug
  )[0];

  useEffect(() => {
    firestore.ref(`/comments/${slug}`).on("value", value => {
      const data = value.val();

      if (data) {
        const newComments = Object.keys(data).map(value => data[value]);
        setComments(newComments);
      }
    });
  }, []);

  if (!movie) return <h1>Sorry, we coud not find that movie</h1>;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    firestore.ref(`/comments/${slug}`).push({
      text: comment,
      time: Date.now()
    });

    setComment("");
  };

  return (
    <DetailsWrapper>
      <h1>{movie.title} Comment Section</h1>
      <Link href="/">
        <BackButton>Back</BackButton>
      </Link>
      <CommentBoxWrapper>
        <CommentsWrapper>
          {comments.map((comment, ind) => (
            <Comment key={ind}>
              <span> {comment.text} </span>
              <span> {dayjs(comment.time).format("DD.MM.YYYY HH:mm:ss")}</span>
            </Comment>
          ))}
        </CommentsWrapper>
        <CommentForm onSubmit={handleSubmit}>
          <CommentInput
            placeholder="Write a comment..."
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </CommentForm>
      </CommentBoxWrapper>
    </DetailsWrapper>
  );
};

export default withRouter(Comments);

interface Props {
  router: SingletonRouter;
  firestore: firebase.database.Database;
}
