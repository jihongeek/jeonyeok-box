import { Octokit } from "octokit";
import fs from 'fs';
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
    let filledCount = Math.floor(percent / 5)
    if (percent >= 100)
    {
        filledCount = 20
    }
    return "█".repeat(filledCount) + "░".repeat(20 - filledCount)
}

const data = fs.readFileSync('config.json', 'utf8')
const config = JSON.parse(data)

let startDateList = config.startDate.split("-").map(x => parseInt(x))
startDateList[1] -= 1
let endDateList = config.endDate.split("-").map(x => parseInt(x))
endDateList[1] -= 1

let start = new Date(toKoreanTime(new Date(...startDateList, 11, 14)))
let end = new Date(toKoreanTime(new Date(...endDateList, 11)))
let passedPercent = getPassedPercent(start, end)

let boxText = `🎉 ${config.militaryType} 전역(轉役)${getLeftDay(end) < 0 ? "한 지" : "까지"}...${getLeftDay(end) < 0 ? -getLeftDay(end) : getLeftDay(end)}일
⏰ ${dateToString(start)} / ${dateToString(end)}
💌 ${makePercentBar(passedPercent)} ${passedPercent}%`

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
})
const gistDescription = getLeftDay(end) < 0 ? "감사합니다! 열심히 살게요~✨" : "토..통신보안?"
await octokit.request(`PATCH /gists/${process.env.GIST_ID}`, {
    gist_id: process.env.GIST_ID,
    description: gistDescription,
    files: {
        'my_jeonyeok_box.md': {
            content: boxText
        }
    }
})


