function approach(a, b, c) {
    return (a > b) ? Math.max(a - c, b) : Math.min(a + c, b)
}
export default approach