{
    // type alias vs interface
    // interface = 규격 사항 , 누군가 구현할 상황이 있다면 예를들어 빈메소드 설정해두고 각자 클래스가 설정
    // Type 어떠한 데이터를 담을 수 있을지 데이터의 모습 타입 정의 예를 들면 포지션 {x, y} 데이터를 담을 목적! 
    // position에서 interface를 쓰면 포지션을 구현하는 어떤 클래스가 있나? 오해하게 됨

    type PositionType = {
        x: number;
        y: number;
    }

    interface PositionInterface {
        x: number;
        y: number;
    }

    // Both ★
    const obj1: PositionType = {
        x: 1,
        y: 2,
    }

    const obj2: PositionInterface = {
        x: 1,
        y: 2,
        z: 1,
    }

    // class Both ★
    class Pos1 implements PositionType {
        x: number;
        y: number;
    }

    class Pos2 implements PositionInterface {
        x: number;
        y: number;
        z: number;
    }

    // Extends Both ★
    // 상속으로 구현
    interface ZPositionInterface extends PositionInterface {
        z: number;
    }

    // 초기에는 불가능 타입으로는 할 수 있는 것이 많지 않았지만 더 많아지고 있다.
    type ZPositionType = PositionType & { z: number };

    // only Interface (1)
    // 또 추가로 만들기 가능 
    // 대신 추가하면 x, y, z 다 써야한다.
    interface PositionInterface {
        z: number;
    }

    // type 은 안됨! (1)
    type PositionType {

    }

    // Only Type (2)
    // Type aliases can use computed properties
    type Person = {
        name: string,
        age: string,
    }

    type Name = Person['name']; // name = 바로 string

    // 새로운 타입 정의 Only Type (3)
    type NumberType = number;
    // Union Type Only Type (4)
    type Direction = 'left' | 'right'
}