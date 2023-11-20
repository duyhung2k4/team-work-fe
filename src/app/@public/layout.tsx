import React from "react";

interface PublicLayoutProps {
  children: React.ReactNode
  params: {
    tag: string
    item: string
  }
}
const LayoutPublic: React.FC<PublicLayoutProps> = (props) => {
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

export default LayoutPublic;