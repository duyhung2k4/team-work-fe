import React from "react";

interface ProtectedLayoutProps {
  children: React.ReactNode
  params: {
    tag: string
    item: string
  }
}
const ProtectedLayout: React.FC<ProtectedLayoutProps> = (props) => {
  return (
    <main
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      {props.children}
    </main>
  )
}

export default ProtectedLayout;