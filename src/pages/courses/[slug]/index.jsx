import { useRouter } from "next/router";

import Page from "@/ui/page";
import H1 from "@/ui/headings/h1/index";

export default function CoursePage() {
  const router = useRouter();
  return (
    <Page
      title="Welcome to my NextJS app!"
      description="This is my awesome page about next Js and this serves as the landing page"
    >
      <H1>{router.query.slug}</H1>
    </Page>
  );
}
