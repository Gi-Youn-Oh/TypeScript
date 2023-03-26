{
    type Video = {
        title: string;
        author: string;
        // description: string; // 하나 수정하면 아래 다 수정
    }


    // Map type = 재사용성 높음
    [1, 2].map(item => item * item); // [1, 4]
    type Optional<T> = {
        [P in keyof T]?: T[P] // key 순회 = like for...in
    };

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    };

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'giyoun',
    };

    // video.author = // readonly 변경 불가

    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: null,
        author: null,
    }

    type VideoOptional = Optional<Video>;

    const videoOp: VideoOptional = {
        title: 'hi',
        // animal: 다른 타입은 안됨
    }

    type Animal = {
        name: string;
        age: number;
    }

    const animal: Optional<Animal> = {
        name: 'dog',
    }

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    //     description?: string;
    // }

    // type VieoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    // readonly description: string;
    // }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }
}