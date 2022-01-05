export {};

type Pitcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
}

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
}

// 既存の型があるのに再度定義するのはナンセンス
type TwoWayPlayer = {
  throwingSpeed: number;
  battingAverage: number;
}

// intersection型(型合成)
type TwoWayPlayer1 = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer1 = {
  throwingSpeed: 165,
  battingAverage: 0.286
}
