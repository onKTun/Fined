import ClientSideLandingPage from "src/components/landing-page/ClientsideLandingPage";
import { getUserAndCache } from "utils/supabase/user";
export default async function LandingPage() {
  const user = await getUserAndCache();

  let isLoggedIn = false;
  if (user != null) {
    isLoggedIn = true;
  }
  return <ClientSideLandingPage loggedIn={isLoggedIn} />;
}
