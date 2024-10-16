"use client";
import Button from "src/components/button/Button";
import { signOut } from "utils/supabase/signout";

//test component for the temp site-map
export default function SignOutButton() {
  return (
    <Button
      ftSize={1}
      heightWidth={{}}
      text="sign out"
      style={"blue"}
      onClick={() => {
        signOut();
      }}
    />
  );
}
