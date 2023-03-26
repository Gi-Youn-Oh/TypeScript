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
    // omit 생략 
    type VideoMeta = Omit<Video, 'url' | 'data'>

    function getVideoMetaData(id: string): VideoMeta {
        return {
            id: id,
            title: 'title',
        }
    }
}