
export const changeFederation= (fed = null) => {
    return (
        {
            type: 'CHANGE_FEDERATION',
            payload: fed
        }
)
}
export const sportCategory = () => {
    return (
        {
            type: 'SPORTCATEGORY'
        }
    )
}
