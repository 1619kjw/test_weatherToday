/* DB*/
const weatherData = [
    {
        city: "Seoul", temp: "24℃", desc: "맑음", 
        src:'../images/icon_sunny.png', 
        text: "오늘 날씨는 맑습니다. 점심 식사 후에 가벼운 산책 어떠세요? 에너지를 얻을 수 있는 하루가 될거에요."},
    {
        city: "Busan", temp: "20℃", desc: "흐림", 
        src:'../images/icon_cloudy.png', 
        text: "오늘 날씨는 흐립니다. 달달한 간식을 먹으며 흐린날도 활기차게 보내세요!"},
    {
        city: "Jeju", temp: "22℃", desc: "비", 
        src:'../images/icon_rainy.png', 
        text: "오늘 날씨는 비가 내립니다. 우산을 꼭 챙기시고, 물웅덩이를 조심하세요!"},
];

/* 새로고침 버튼 클릭 시 날씨정보 랜덤출력 */
const refreshBtn = document.querySelector('.refreshBtn');
const region = document.querySelector('.region');
const tem = document.querySelector('.tem');
const weather = document.querySelector('.weather');
const text = document.querySelector('.text');
const weatherIcon = document.querySelector('.icon');

function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

refreshBtn.addEventListener('click',()=>{
    const randomValue = getRandomItem(weatherData);
    region.textContent = randomValue.city;
    tem.textContent = randomValue.temp;
    weather.textContent = randomValue.desc;
    text.textContent = randomValue.text;
    weatherIcon.src = randomValue.src;
})