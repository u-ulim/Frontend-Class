import React from "react";
import type { BookData } from "@/types";
import Link from "next/link";
import style from "./bookItem.module.css";
const BookItem = ({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <Link className={style.container} href={`/book/${id}`}>
      <img src={coverImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
