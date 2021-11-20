{
  type Video = {
    id: number;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, 'title' | 'url'>;

  function getVideo(id: number): Video {
    return {
      id,
      title: 'abc',
      url: 'http://',
      data: 'something',
    };
  }

  function getVideoMetadata(id: number): VideoMetadata {
    return {
      title: 'none',
      url: 'http://',
    };
  }
}
