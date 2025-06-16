import { api, HydrateClient } from "~/trpc/server";

import Section from "./_components/Section";
import Widget from "./_components/Widget";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const users = await api.post.getUsers();

  console.log("Users", users);

  void api.post.getLatest.prefetch();
  return (
    <HydrateClient>
      <main className="w-[60%] mx-auto flex flex-col">
        {/* Page Title */}
        <div className="px-2 py-5">
          <h1 className="font-extrabold text-3xl">Personal Dashboard</h1>
          <span className="text-gray-400">
            Here are the high-level details for the dashboard
          </span>
        </div>

        {/* Section 0 - Filters */}
        <Section sectionName="Filters" expanded={true}>
          <input type="text" className="border border-black" />
        </Section>

        {/* Section 1 */}
        <Section sectionName="Section 1" expanded={true}>
          <Widget width="50%" />
          <Widget width="50%" />
          <Widget width="50%" />
          <Widget width="100%" />
        </Section>

        {/* Section 2 */}
        <Section sectionName="Section 2" expanded={true}>
          <Widget width="25%" />
          <Widget width="25%" />
          <Widget width="25%" />
          <Widget width="25%" />
        </Section>
      </main>
    </HydrateClient>
  );
}
