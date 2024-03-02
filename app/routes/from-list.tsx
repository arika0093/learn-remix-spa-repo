import { Link, useLoaderData } from "@remix-run/react";
import { getPostList } from "~/models/posts";

export async function clientLoader() {
	return getPostList();
}

export default function FromList() {
	const datas = useLoaderData<typeof clientLoader>();

	return (
		<div className="p-2">
			<div className="flex flex-col gap-1">
				{datas.map((data) => (
					// on hover background is highlighted
					<Link to={`/spa/${data.id}`} key={data.id}>
						<div className="border p-1 hover:bg-blue-200 dark:hover:bg-blue-800">
							■ {data.title}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
