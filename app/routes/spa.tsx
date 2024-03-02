import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getPostList } from "~/models/posts";

export async function clientLoader() {
	return getPostList();
}

export default function FromList() {
	const datas = useLoaderData<typeof clientLoader>();

	return (
		<div className="flex flex-col p-2 overflow-hidden">
			<div className="flex flex-col gap-1 overflow-auto">
				{datas.map((data) => (
					// on hover background is highlighted
					<Link to={`/spa/${data.id}`} key={data.id}>
						<div className="border p-1 hover:bg-blue-200 dark:hover:bg-blue-800">
							■ {data.title}
						</div>
					</Link>
				))}
			</div>
			<div className="flex-1 flex-col gap-1 bg-gray-300 dark:bg-gray-700">
				<Outlet />
			</div>
		</div>
	);
}
