import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const users = await api.post.getUsers();

  console.log("Users", users);

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex flex-col items-center justify-center">
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
      </main>
    </HydrateClient>
  );
}
