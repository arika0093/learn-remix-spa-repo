import { Button } from "@/components/ui/button";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react"
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

export default function FromList() {
	const data = useLoaderData<typeof clientLoader>()

	return (
		<div className="p-2">
			<div className="flex flex-col gap-1">
				<div>
					<Form action="edit">
						<Button variant="default">
							Edit
						</Button>
					</Form>
					{/* <Button variant="default">
						<Link to={`/spa/${data.id}/edit`}>Edit</Link>
					</Button> */}
				</div>
				<h1>Title: {data.title}</h1>
				<p>{data.body}</p>
			</div>
		</div>
	)
}

