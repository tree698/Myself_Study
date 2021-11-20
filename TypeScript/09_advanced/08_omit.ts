{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 포함되지 않은 'xxx'도 가능하다
  type VideoMetadata = Omit<Video, 'url' | 'data' | 'XXX'>;

  function getVideodata(id: string): VideoMetadata {
    return {
      id,
      title: 'something',
    };
  }

  const result = getVideodata('King');
  console.log(result);
}
