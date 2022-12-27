function getLeftTime(end) {
    return end - new Date()
}
function getLeftDay(end) {
    return Math.floor((end - new Date()) / 1000 / 60 / 60 / 24)
}
function dateToString(date) {
    let yearString = date.getFullYear()
    let monthString = date.getMonth() + 1 // 1월부터 0,1,2...
    let dateString = date.getDate()
    return yearString + '-' + monthString + '-' + dateString
}
function getPassedPercent(start,end) {
    return Math.floor( (new Date() - start) / (end - start) * 100 )
}
function makePercentBar(percent) {
    let filledCount = Math.floor(percent/10)*2
    return "█".repeat(filledCount) + "░".repeat(20-filledCount)
}
let start = new Date(2022,4-1,11,14)
let end = new Date(2023,10-1,11)
let passedPercent = getPassedPercent(start,end) 
let boxText = `🎉 ROKA 전역(轉役)까지...${getLeftDay(end)}일
⏰ ${dateToString(start)} / ${dateToString(end)}
💌 ${makePercentBar(passedPercent)} ${passedPercent}%`
console.log(boxText)
