function toKoreanTime(date) {
    const koreanTime = date.getTime() + (-date.getTimezoneOffset() + 540) * 1000 * 60
    return koreanTime
}
function getLeftTime(end) {
    let nowServerTime = new Date()
    const nowKoreanTime = nowServerTime.getTime() + (-nowServerTime.getTimezoneOffset() + 540) * 1000 * 60
    return end - nowKoreanTime
}
function getLeftDay(end) {
    let nowServerTime = new Date()
    let nowKoreanTime = nowServerTime.getTime() + (-nowServerTime.getTimezoneOffset() + 540) * 1000 * 60
    return Math.floor((end - nowKoreanTime) / 1000 / 60 / 60 / 24)
}
function dateToString(date) {
    let yearString = date.getFullYear()
    let monthString = date.getMonth() + 1 // 1월부터 0,1,2...
    let dateString = date.getDate()
    return yearString + '-' + monthString + '-' + dateString
}
function getPassedPercent(start, end) {
    let nowServerTime = new Date()
    const nowKoreanTime = nowServerTime.getTime() + (-nowServerTime.getTimezoneOffset() + 540) * 1000 * 60
    return Math.floor((nowKoreanTime - start) / (end - start) * 100)
}
function makePercentBar(percent) {
    let filledCount = Math.floor(percent / 10) * 2
    return "█".repeat(filledCount) + "░".repeat(20 - filledCount)
}
let start = new Date(toKoreanTime(new Date(2022, 4 - 1, 11, 14)))
let end = new Date(toKoreanTime(new Date(2023, 10 - 1, 11)))
let passedPercent = getPassedPercent(start, end)
let boxText = `🎉 ROKA 전역(轉役)까지...${getLeftDay(end)}일
⏰ ${dateToString(start)} / ${dateToString(end)}
💌 ${makePercentBar(passedPercent)} ${passedPercent}%`


