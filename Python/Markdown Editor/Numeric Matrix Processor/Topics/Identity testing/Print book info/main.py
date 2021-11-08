def print_book_info(title, author=None, year=None):
    if author is None and year is not None:
        print(f'"{title}" was written in {year}')
    elif year is None and author is not None:
        print(f'"{title}" was written by {author}')
    elif (author is None) and (year is None):
        print(f'"{title}"')
    else:
        print(f'"{title}" was written by {author} in {year}')

