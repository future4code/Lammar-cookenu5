export type Recipe = {
    id: string,
    title: string,
    description: string,
    created_at: string
}

export type RecipeInputDTO = {
    title: string,
    description: string,
    createdAt: string,
    token: string
}
