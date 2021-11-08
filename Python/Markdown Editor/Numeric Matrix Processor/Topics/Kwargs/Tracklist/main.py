def tracklist(**tracks):
    for key, value in tracks.items():
        print(key)
        for k, v in value.items():
            print(f'ALBUM: {k} TRACK: {v}')

