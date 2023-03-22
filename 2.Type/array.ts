{
    // Array 한가지 타입
    const fruits: string[] = ['apple','banana'];
    const scores: number[] = [1, 2, 3];
    const numbers: Array<number> = [1, 2, 3];

    function printArray(fruits: readonly string[]){ // 변경 불가 readonly 일때는 Array<string> 안됨
        // fruits.push  안됨!
    }

    // Tuple 여러 타입의 데이터, 권장 x 가독성 떨어짐 -> interface, type alias, class로 대체
    let student: [string, number];
    student = ['giyoun', 30];
    student[0] // giyoun
    student[1] // 30
    const [name, age] = student; // 구조분해 할당이 인덱싱 보다 가독성 좋음
}