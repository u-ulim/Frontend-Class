import React from "react";
import { BookData } from "@/types";
import BookItem from "@/components/book-item";

// PageProps 인터페이스 정의
interface PageProps {
  searchParams: {
    q: string;
  };
}

const Page = async ({ searchParams }: PageProps): Promise<JSX.Element> => {
  const { q } = searchParams;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default Page;
