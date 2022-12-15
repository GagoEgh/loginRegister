export  function validLength(value: string): boolean {
    if (value?.length < 3 || value?.length > 10) {
        return true
    }
    return false
}
