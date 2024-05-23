import React from "react";
import { redirect } from "next/navigation";
import { db } from "@/db";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    // This needs to be a server action
    "use server";

    // Check the user's inputs and make sure they are valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    // Redirect the user to the root route
    redirect("/");
  }
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
