type Article = {
	userId: number
	id: number
	title: string
	body: string
}

export async function fetchArticles() {
	const responseData = async (): Promise<Article[]> =>
		await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
	const datas = await responseData()
	return datas.slice(0, 20)
}

export async function fetchArticle(id: number) {
	const responseData = async (): Promise<Article> =>
		await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
	const data = await responseData()
	return data
}
