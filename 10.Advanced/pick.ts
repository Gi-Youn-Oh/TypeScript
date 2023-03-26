{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://...',
            data: 'byte-data',
        };
    };

    type VideoMeta = Pick<Video, 'id' | 'title'>
    // pick 원하는 속성과 값만
    // function getVideoMetaData(id: string): Pick<Video, 'id' | 'title'> {
    function getVideoMetaData(id: string): VideoMeta {
        return {
            id: id,
            title: 'title',
        }
    }
}