import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPostDetails } from "~/models/posts";

export async function clientLoader({ params }: LoaderFunctionArgs) {
	invariant(params.id, "Missing id param");
	return getPostDetails(params.id);
}

export default function FromList() {
	const data = useLoaderData<typeof clientLoader>();

	return (
		<div className="p-2">
			<div className="flex flex-col gap-1">
				<div>
					{/* <Button variant="default">
						<Link to={`/spa/${data.id}/edit`}>Edit</Link>
					</Button> */}
				</div>
				<h1>Title: {data.title}</h1>
				<p>{data.body}</p>

				<br />
				<h2>Edit Form</h2>
				<Outlet />
				<div className="flex flex-row gap-2">
					<Link className="" to="./edit">
						<Button variant="default">Edit</Button>
					</Link>
					<Link className="" to="/spa">
						<Button variant="outline">Close</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
