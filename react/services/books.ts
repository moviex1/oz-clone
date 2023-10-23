export const fetchBooks = async (limit = 10) => {
    try {
        const response = await fetch(
            `http://localhost:8081/api/v1/book/?limit=${limit}`
        )
        return response.json()
    } catch {
        throw new Error("failed to fetch")
    }
}
