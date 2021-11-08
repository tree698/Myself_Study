# def heading(string, num=1):
#     if num > 6:
#         num = 6
#     elif num < 1:
#         num = 1
#     mark = '#' * num
#     return f'{mark} {string}'

def heading(string, level=1):
    mark = max(min(level, 6), 1) * '#'
    return f'{mark} {string}'