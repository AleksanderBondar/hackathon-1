import { Blinker } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const blinker = Blinker({ weight: "400", subsets: ["latin"] });

const ENDPOINT = "http://10.1.26.171:8080/graphql";
const REDIRECT_URI = "vscode://myExtension.open";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          query: `query {\n  public {\n    GenerateGithubOAuthLink(redirectUri:"${REDIRECT_URI}")\n  }\n}`,
        }),
      });

      const parsedRes = await res.json();
      console.log(parsedRes);
      if (parsedRes.data?.public?.GenerateGithubOAuthLink) {
        router.push(parsedRes.data.public.GenerateGithubOAuthLink);
      }
    })();
  }, []);

  return <main className={`${blinker.className} w-full relative`}>AUTH</main>;
}
