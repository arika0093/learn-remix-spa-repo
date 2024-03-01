import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix SPA!" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  // page centered content " REMIX SPA! "
  return (
    // flex direction column, align center, justify center, full height, text color gray-400
    <div className="flex flex-col items-center justify-center h-screen text-gray-300 dark:text-gray-700">
      {/* logo.png grayscale */}
      <img src="/logo.png" alt="Remix Logo" className="w-32 mb-2 grayscale" />
      <h1 className="text-2xl font-bold">REMIX SPA!</h1>
      <p>温泉を探してリラックスしよう！</p>
      <br />
      {/* 2 row group buttons */}
      <div className="flex flex-row gap-4">
        {/* link to /from-list, button style, bg color gray-200, dark:bg color gray-800, text color gray-800, dark:text color gray-200 */}
        <Link to="/from-list"
          className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium p-2 rounded-md text-center"
        >
          一覧から探す
        </Link>
        {/* link to /from-images, button style, bg color gray-200, dark:bg color gray-800, text color gray-800, dark:text color gray-200 */}
        <Link to="/from-images"
          className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium p-2 rounded-md text-center"
        >
          画像から探す
        </Link>
      </div>
    </div>
  );
}
