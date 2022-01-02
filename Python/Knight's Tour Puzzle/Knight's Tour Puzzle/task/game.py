def check_dimensions():
    while 1:
        try:
            column, row = input("Enter your board dimensions:").split()
            dimensions = [int(column), int(row)]
            assert dimensions[0] > 0 and dimensions[1] > 0
        except (ValueError, AssertionError):
            print('Invalid dimensions!')
            continue
        return dimensions

def check_starting_position(dimensions):
    while 1:
        try:
            x, y = input("Enter the knight's starting position:").split()
            position = [int(x), int(y)]
            assert 1 <= position[0] <= dimensions[0] and 1 <= position[1] <= dimensions[1]
        except (ValueError, AssertionError):
            print("Invalid position!")
            continue
        return position

def calc_cipher(dimensions):
    return len(str(dimensions[0] * dimensions[1]))

def init_board(dimensions, cipher):
    return [['_' * cipher] * dimensions[0] for i in range(dimensions[1])]




def calc_possible_move(dimensions, position):
    possible_move = []
    for i in range(2):
        if position[i] - 2 > 0:
            if i == 0:
                if position[1] + 1 <= dimensions[1]:
                    possible_move.append([position[0]-2, position[1] + 1])
                if position[1] - 1 > 0:
                    possible_move.append([position[0]-2, position[1] - 1])
            if i == 1:
                if position[0] + 1 <= dimensions[0]:
                    possible_move.append([position[0] + 1, position[1]-2])
                if position[0] - 1 > 0:
                    possible_move.append([position[0] - 1, position[1]-2])
        if position[i] + 2 <= dimensions[i]:
            if i == 0:
                if position[1] + 1 <= dimensions[1]:
                    possible_move.append([position[0]+2, position[1] + 1])
                if position[1] - 1 > 0:
                    possible_move.append([position[0]+2, position[1] - 1])
            if i == 1:
                if position[0] + 1 <= dimensions[0]:
                    possible_move.append([position[0] + 1, position[1]+2])
                if position[0] - 1 > 0:
                    possible_move.append([position[0] - 1, position[1]+2])
    return possible_move

def add_position_to_board(dimensions, position, cipher, board, mark):
    for i in range(len(position)):
        board[dimensions[1] - position[i][1]][position[i][0] - 1] = f'{mark}'.rjust(cipher, ' ')
    return board







def print_board(dimensions, cipher, board):
    print('', '-' * (dimensions[0] * (cipher + 1) + 3))
    for num in range(dimensions[1]):
        print('0' * (len(str(dimensions[1])) - len(str(dimensions[1] - num))) + str(dimensions[1] - num), end='')
        print('|', *board[num], '|')
    print('', '-' * (dimensions[0] * (cipher + 1) + 3))
    print('   ', end='')
    for num in range(dimensions[0]):
        print(' ' * (cipher - 1) + str(num + 1), end=' ')

dimensions = check_dimensions()
starting_position = check_starting_position(dimensions)
cipher = calc_cipher(dimensions)
init_board = init_board(dimensions, cipher)
possible_move = calc_possible_move(dimensions, starting_position)
board = add_position_to_board(dimensions, possible_move, cipher, init_board, 'O')
board = add_position_to_board(dimensions, [starting_position], cipher, board, 'X')
print_board(dimensions, cipher, board)

