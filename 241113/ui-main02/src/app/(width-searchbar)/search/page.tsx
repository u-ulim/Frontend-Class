import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  console.log(q);
  return <div>Search page</div>;
};

export default Page;
