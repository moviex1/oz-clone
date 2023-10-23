export const fetchSingleBook = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:8081/api/v1/book/${id}`)
        return response.json()
    } catch {
        throw new Error("failed to fetch")
    }
}
