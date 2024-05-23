import Link from "next/link";

import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  return (
    <section>
      <section className="flex justify-between">
        <h1>Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </section>
      <section className="flex flex-col gap-2">
        {snippets.map((snippet) => (
          <Link
            href={`/snippets/${snippet.id}`}
            key={snippet.id}
            className="border rounded p-2 flex justify-between items-center"
          >
            <div>{snippet.title}</div>
            <div>View</div>
          </Link>
        ))}
      </section>
    </section>
  );
}
