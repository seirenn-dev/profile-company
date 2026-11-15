import CategoriesForm from "../categories-form"

export default async function EditCategoryPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <CategoriesForm categoryId={id} />
}