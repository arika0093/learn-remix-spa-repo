import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { Form, redirectDocument, useLoaderData } from "@remix-run/react"
import invariant from "tiny-invariant";
type PostDetails = {
	userId: number
	id: number
	title: string
	body: string
}

export async function clientLoader({ params }: LoaderFunctionArgs) {
	invariant(params.id, "Missing id param");
	const datas = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	)
	const json: PostDetails = await datas.json()
	return json
}

export async function clientAction({ params, request }: ActionFunctionArgs) {
	invariant(params.id, "Missing id param");
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);
	await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
		method: 'PUT',
		body: JSON.stringify(updates),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	return redirectDocument(`/spa/${params.id}`)
}

export default function FromList() {
	const data = useLoaderData<typeof clientLoader>()

	return (
		<div className="p-2">
			<div className="flex flex-col gap-1">
				<Form method="POST">
					<Input type="text" name="title" defaultValue={data.title} />
					<Input name="body" defaultValue={data.body} />
					<Button variant="default">
						Save
					</Button>
				</Form>
			</div>
		</div>
	)
}

