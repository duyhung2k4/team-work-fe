"use client"

import React from "react";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { ROUTER } from "@/constants/router";
import { KeyAuth, RootProps } from "@/app/layout";

const AuthRouter: React.FC<RootProps> = (props) => {
  const profile = useAppSelector((state: RootState) => state.auth.profile);
  const router = useRouter();

  const key: KeyAuth = profile ? "protected" : "public";

  if(key === "public") {
    router.push(ROUTER.PUBLIC.REGISTER.PATH);
  }
  
  return (
    <main>
      {props.params ? props[key] : props.children}
    </main>
  )
}

export default AuthRouter;