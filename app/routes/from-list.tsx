import { Link, useLoaderData } from "@remix-run/react"

type Post = {
	userId: number
	id: number
	title: string
	body: string
}

export async function clientLoader() {
	const datas = await fetch("https://jsonplaceholder.typicode.com/posts")
	const json: Post[] = await datas.json()
	return json
}

export default function FromList() {
	const datas = useLoaderData<typeof clientLoader>()

	return (
		<div className="p-2">
			<div className="flex flex-col gap-1">
				{datas.map((data) => (
					// on hover background is highlighted
					<Link to={`/spa/${data.id}`} key={data.id}>
						<div className="border p-1 hover:bg-blue-200 dark:hover:bg-blue-800" >
							{data.title}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

