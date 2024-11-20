"use client";

const ClientComponent = ({ children }: { children: React.ReactNode }) => {
  console.log("ClientComponent 컴포넌트 실행!");
  return <div>{children} </div>;
};

export default ClientComponent;
