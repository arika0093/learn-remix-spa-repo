type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export async function getPostList() {
	const data = await fetch("https://jsonplaceholder.typicode.com/posts");
	return (await data.json()) as Post[];
}

export async function getPostDetails(id: string) {
	const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return (await data.json()) as Post;
}

export async function updatePostDetails(
	id: string,
	updates: Record<string, FormDataEntryValue>,
) {
	await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: "PUT",
		body: JSON.stringify(updates),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
}
