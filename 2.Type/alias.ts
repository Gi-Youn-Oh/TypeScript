{
    // Type ALiases
    // 내가 타입을 정해서 사용 가능
    type Text = string;
    const name: Text = 'Giyoun'; // 문자열만
    const from: Text = 'korea';
    type num = number;
    type Student = {
        name: string;
        age: num;
    };
    const student: Student ={
        name: 'giyoun',
        age: 30,
    }

    // string literal types
    type Name = 'name'; // Name 타입에는 'name' 만 할당 가능
    let Giyoun: Name;
    Giyoun: 'name';
    type Number = 10;
    const age: Number = 10;

    type Bool = true;
    const isPerson: Bool = true;

}