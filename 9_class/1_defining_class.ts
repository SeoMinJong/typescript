/**
 * Class 선언하기
 */

class SampleClass {}

class Game {
    name: string;
    country: string;
    download: number;

    constructor(name: string, country: string, download: number){
        this.name = name;
        this.country = country;
        this.download = download;
    }

    introduc(){
        return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`
    }
}

const lol = new Game('LOL', 'China', 234563);

const retVal = lol.introduc();
// lol.changeGame()