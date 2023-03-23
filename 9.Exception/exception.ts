{
    // exception 예상치 못한 에러
    // error state 에상 가능 에러
    // 구분하여 제대로 처리하는 것이 중요!

    // const array = new Array(100000000000000000000);

    // Error Handling: try -> catch -> finally

    function readFile(fileName: string): string {
        if (fileName === 'not exist!') {
            throw new Error(`file not exist! ${fileName}`)
        }
        return 'file contents';
    }

    function closeFile(fileName: string) {

    }

    function run() {
        const fileName = 'not exist!';
        try {
            console.log(readFile(fileName));
        } catch (error) {
            console.log('error catch!');
        } finally {
            closeFile(fileName);
            console.log('finally');
        }
    }

    run();
}