import { useEffect, useState } from "react";
import { octokit } from "@/lib/github";
import { REPO_OWNER, REPO_NAME, CONTENT_PATH, BRANCH } from "@/env";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

type FileEntry = { name: string; content: string; parsed: any };

export function Dashboard() {
  const [files, setFiles] = useState<FileEntry[]>([]);

  useEffect(() => {
    async function loadFiles() {
      const res = await octokit.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: CONTENT_PATH,
        ref: BRANCH,
      });

      if (!Array.isArray(res.data)) return;

      const allFiles = await Promise.all(
        res.data.map(async (file) => {
          const blob = await octokit.request(`GET ${file.download_url}`);
          const { content, data } = matter(blob.data);
          return { name: file.name, content, parsed: data };
        })
      );

      setFiles(allFiles);
    }

    loadFiles();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Markdown Pages</h1>
      {files.map((f) => (
        <div key={f.name} className="mb-8 p-4 border bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">{f.parsed.title ?? f.name}</h2>
          <ReactMarkdown>{f.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}




