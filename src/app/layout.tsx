"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { MantineProvider } from "@mantine/core";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const inter = Inter({ subsets: ['latin'] })

interface AuthProps {
  public: any
  protected: any
}
type KeyAuth = keyof AuthProps;
interface RootProps extends AuthProps {
  children: React.ReactNode
  params: {
    tag: string
    item: string
  }
}

export default function RootLayout(props: RootProps) {
  const key: KeyAuth = "protected";

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
            {props.params ? props[key] : props.children}
          </MantineProvider>
        </Provider>
      </body>
    </html>
  )
}
