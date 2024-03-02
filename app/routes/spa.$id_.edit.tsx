import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirectDocument, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPostDetails, updatePostDetails } from "~/models/posts";

export async function clientLoader({ params }: LoaderFunctionArgs) {
	invariant(params.id, "Missing id param");
	return getPostDetails(params.id);
}

export async function clientAction({ params, request }: ActionFunctionArgs) {
	invariant(params.id, "Missing id param");
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);
	await updatePostDetails(params.id, updates);
	return redirectDocument(`/spa/${params.id}`);
}

export default function FromList() {
	const data = useLoaderData<typeof clientLoader>();

	return (
		<div className="p-2">
			<div className="flex flex-col gap-1">
				<Form method="POST">
					<Input type="text" name="title" defaultValue={data.title} />
					<Input name="body" defaultValue={data.body} />
					<Button variant="default">Save</Button>
				</Form>
			</div>
		</div>
	);
}
