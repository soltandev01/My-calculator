const display = document.getElementById('display')
function deleteFunc() {
    display.value = display.value.slice(0, -1)
}
function deleteAllFunc() {
    display.value = ''
}