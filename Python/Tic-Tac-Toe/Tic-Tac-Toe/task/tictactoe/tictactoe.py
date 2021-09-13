def arrange(a):
    print('---------')
    print('|', ' '.join(a[:3]), '|')
    print('|', ' '.join(a[3:6]), '|')
    print('|', ' '.join(a[6:]), '|')
    print('---------')

def position(c, d):
    e = (c - 1) + ((3 - d) * 3)
    if e == 6:
        return 0
    elif e == 3:
        return 1
    elif e == 0:
        return 2
    elif e == 7:
        return 3
    elif e == 4:
        return 4
    elif e == 1:
        return 5
    elif e == 8:
        return 6
    elif e == 5:
        return 7
    elif e == 2:
        return 8


grid = '         '
arrange(grid)
n = 1
while True:
    try:
        a, b = input('Enter the coordinates: ').split()
    except:
        print('You should enter numbers!')
        a, b = input('Enter the coordinates: ').split()
    if not a.isdecimal() or not b.isdecimal():
        print('You should enter numbers!')
    else:
        c, d = int(a), int(b)
        p = position(c, d)
        if c < 1 or c > 3 or d < 1 or d > 3:
            print('Coordinates should be from 1 to 3!')
        elif grid[p] == 'O' or grid[p] == 'X':
            print('This cell is occupied! Choose another one!')
        else:
            grid_list = [i for i in grid]
            if n % 2 == 1:
                grid_list[p] = 'X'
                n += 1
            else:
                grid_list[p] = 'O'
                n += 1
            grid = ''.join(grid_list)
            arrange(grid)
        straights = [grid[:3], grid[3:6], grid[6:], grid[0:9:3], grid[1:9:3], grid[2:9:3], grid[0:9:4], grid[2:7:2]]
        if 'XXX' in straights:
            print('X wins')
            break
        elif 'OOO' in straights:
            print('O wins')
            break
        elif grid.count(' ') == 0 and ('XXX' not in straights and 'OOO' not in straights):
            print('Draw')
            break
