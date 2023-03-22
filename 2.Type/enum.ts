{
    // Enum Types
    // 여러 상수 값들은 한 곳에 모아

    // JavaScript 존재 x
    const MAX_NUM = 6;
    const MAX_STUDENS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({'MONDAY': 0, 'TUESDAY': 1, "WEDNESDAY": 2})
    const daysOfToday = DAYS_ENUM.MONDAY;

    // TypeScript

    enum Days { // 첫 글자만 대문자 나머지 소문자로
        Monday, // 자동 값 주어짐 0부터 Monday =1 로 지정도 가능, 문자열도 할당 가능하지만 수동적으로 각각 다 할당해 주어야 한다.
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Friday);
    let day: Days = Days.Saturday;
    day = Days.Saturday;
    day = 10; // 다른 어떤 숫자도 새로 할당 가능 -> 문제!!
    console.log(day);

    // enum은 다른 네이티브 모바일 앱 통신 아니면 type으로 설정해두고 고정값을 사용하는 것이 안전하다.
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayOfWeek: DaysOfWeek = 'Monday';
    dayOfWeek = 'Wednesday'; // 해당값만 보장 가능
}