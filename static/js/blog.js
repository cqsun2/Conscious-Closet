const dates = document.getElementsByClassName("date")
for (let date of dates) {
    const today = new Date();
    let str = today.toDateString()
    date.innerHTML = `Date: ${str}`
}