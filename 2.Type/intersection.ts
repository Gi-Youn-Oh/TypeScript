{
    // Intersection Types: &
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function interWork(person: Student & Worker){
        console.log(person.name, person.employeeId, person.work()); // 다 접근 가능
    }
    // 인자로 두 타입의 모든 데이터를 전달해야 한다.
    interWork({
        name: 'Giyoun',
        score: 100,
        employeeId: 1,
        work: () => {},
    });
}