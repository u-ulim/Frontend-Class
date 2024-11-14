import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";

const Page = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;

  return <h1>Search : {q}</h1>;
};

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
