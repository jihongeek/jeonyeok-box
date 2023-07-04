<p align="center">
    <img src="https://user-images.githubusercontent.com/34394165/213867792-4e78e3d2-1e56-4ed4-8a21-d59aa223ecf8.png" alt="screenshot" width="500">
  <h3 align="center">🏡jeonyeok-box</h3>
</p>

<p align="center">
   <img src="https://img.shields.io/badge/language-javascript-blue?style"/>
   <img src="https://img.shields.io/github/license/jihongeek/jeonyeok-box"/>
   <img src="https://img.shields.io/github/stars/jihongeek/jeonyeok-box"/>
   <img src="https://img.shields.io/github/forks/jihongeek/jeonyeok-box"/>
</p>
<p align="center">
   
</p>

---

> 이 프로젝트는 [productive-box](https://github.com/maxam2017/productive-box) 에서 영감을 받았습니다.

## 개요
Github Actions를 이용해 날마다 전역일을 자동으로 계산해서 Gist에 반영해주는 간단한 프로젝트     
## 사용법

### 시작 전
1. 새 퍼블릭 [Gist](https://gist.github.com/)를 만든다
2. `gist`만 수정할 수 있는 토큰을 만들고 복사한다. (https://github.com/settings/tokens/new)

### 프로젝트 설정

1. 레포지토리 포크 하기
2. 포크된 레포지토리에서 `config.json`  파일을 수정한다.
   - 입대일, 전역일을 `YYYY-MM-DD` 형식으로 입력한다.
   - 군 타입을 적는다. (ROKA,ROKAF,ROKMC 등) 
3. "Actions" 탭을 포크된 레포지토리에서 열고, "enable" 버튼을 누른다.
4. 레포지토리에 **Settings > Security > Secrets and variable> Actions** 에 들어간다.
5. 2개의 토큰을 추가한다:
   - **GH_TOKEN:** The GitHub token generated above.
   - **GIST_ID:** Gist 링크 뒤에 붙어있는 이상한? 문자열이 Gist ID다.
     `https://gist.github.com/jihongeek/`**`d6291be4514ce2886ec30273c3f12e09`**`
6. [새로만든 Gist를 프로필에 고정한다.](https://help.github.com/en/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)
7. 그럼 하루에 한번씩 전역일이 계산되어 적용된다. 코딩하면서 전역의 꿈🎇을 꿔보자!(전역 98일전! 무야호!)  

