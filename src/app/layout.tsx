"use client"

import "./globals.css"

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import AuthRouter from "@/pages/auth";

const inter = Inter({ subsets: ["latin"] })

interface AuthProps {
  public: any
  protected: any
}
export type KeyAuth = keyof AuthProps;
export interface RootProps extends AuthProps {
  children: React.ReactNode
  params: {
    tag: string
    item: string
  }
}

export default function RootLayout(props: RootProps) {
  return (
    <html lang="en">
      <head>
        <title>Team work</title>
        <meta name="description" content="Root Page" />
      </head>
      <body
        className={inter.className}
      >
        <Provider store={store}>
          <MantineProvider>
            <AuthRouter {...props}/>
          </MantineProvider>
        </Provider>
      </body>
    </html>
  )
}
