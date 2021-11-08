def forming_matrix(order=''):
    print(f'Enter size of {order} matrix: ')
    m, n = map(int, input().split())
    print(f'Enter {order} matrix: ')
    # matrix = [list(map(float, input().split())) for i in range(m)]
    matrix_input = [input().split() for i in range(m)]
    matrix = []
    for i in range(len(matrix_input)):
        row_matrix = []
        for j in range(len(matrix_input[i])):
            if matrix_input[i][j].isdigit():
                row_matrix.append(int(matrix_input[i][j]))
            else:
                row_matrix.append(float(matrix_input[i][j]))
        matrix.append(row_matrix)
    return matrix, m, n

def adding_matrix(matrix_1, matrix_2):
    matrix = []
    for i in range(len(matrix_1)):
        row_matrix = []
        for j in range(len(matrix_1[i])):
            row_matrix.append(matrix_1[i][j] + matrix_2[i][j])
        matrix.append(row_matrix)
    return matrix

def multiply_by_constant(m, n, constant):
    return [[matrix[i][j] * constant for j in range(n)] for i in range(m)]

def multiply_matrix(matrix_1, matrix_2):
    matrix = []
    for i in range(len(matrix_1)):
        row_matrix = []
        for j in range(len(matrix_2[i])):
            sum = 0
            for k in range(len(matrix_2)):
                sum += matrix_1[i][k] * matrix_2[k][j]
            row_matrix.append(sum)
        matrix.append(row_matrix)
    return matrix

def transpose_main(matrix):
    transposed = []
    for i in range(len(matrix)):
        sub_transposed = []
        for j in range(len(matrix[1])):
            sub_transposed.append(matrix[j][i])
        transposed.append(sub_transposed)
    return transposed

def transpose_side(matrix):
    transposed = []
    for i in range(len(matrix)-1, -1, -1):
        sub_transposed = []
        for j in range(len(matrix[1])-1, -1, -1):
            sub_transposed.append(matrix[j][i])
        transposed.append(sub_transposed)
    return transposed

def transpose_vertical(matrix):
    transposed = []
    for i in range(len(matrix)):
        sub_transposed = []
        for j in range(len(matrix[1]) - 1, -1, -1):
            sub_transposed.append(matrix[i][j])
        transposed.append(sub_transposed)
    return transposed

def transpose_horizontal(matrix):
    transposed = []
    for i in range(len(matrix) -1, -1, -1):
        sub_transposed = []
        for j in range(len(matrix[1])):
            sub_transposed.append(matrix[i][j])
        transposed.append(sub_transposed)
    return transposed

def getMatrixMinor(m, i, j):
    return [row[:j] + row[j + 1:] for row in (m[:i] + m[i + 1:])]

def calculate_determinant(matrix):
    if len(matrix) == 1:
        return matrix[0][0]

    if len(matrix) == 2:
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]

    determinant = 0
    for c in range(len(matrix)):
        determinant += ((-1) ** c) * matrix[0][c] * calculate_determinant(getMatrixMinor(matrix, 0, c))
    return determinant

def transposeMatrix(m):
    return list(map(list,zip(*m)))

def getMatrixInverse(m):
    determinant = calculate_determinant(m)
    #special case for 2x2 matrix:
    if len(m) == 2:
        return [[m[1][1]/determinant, -1*m[0][1]/determinant],
                [-1*m[1][0]/determinant, m[0][0]/determinant]]

    #find matrix of cofactors
    cofactors = []
    for r in range(len(m)):
        cofactorRow = []
        for c in range(len(m)):
            minor = getMatrixMinor(m,r,c)
            cofactorRow.append(((-1)**(r+c)) * calculate_determinant(minor))
        cofactors.append(cofactorRow)
    cofactors = transposeMatrix(cofactors)
    for r in range(len(cofactors)):
        for c in range(len(cofactors)):
            cofactors[r][c] = cofactors[r][c]/determinant
    return cofactors

def showing_result(result):
    print('The result is: ')
    for row in result:
        print(*row)

while True:
    print('1. Add matrices\n2. Multiply matrix by a constant\n3. Multiply matrices\n4. Transpose matrix\n5. Calculate a determinant\n6. Inverse matrix\n0. Exit')
    user_choice = int(input('Your choice: '))
    if user_choice == 0:
        break
    elif user_choice == 1:
        matrix_1, m1, n1 = forming_matrix('first')
        matrix_2, m2, n2 = forming_matrix('second')
        if m1 != m2 or n1 != n2:
            print('The operation cannot be performed.')
            continue
        result = adding_matrix(matrix_1, matrix_2)
        showing_result(result)
    elif user_choice == 2:
        matrix, m, n = forming_matrix()
        constant = input('Enter constant: ')
        if constant.isdigit():
            constant_t = int(constant)
        constant_t = float(constant)
        result = multiply_by_constant(m, n, constant_t)
        showing_result(result)
    elif user_choice == 3:
        matrix_1, m1, n1 = forming_matrix('first')
        matrix_2, m2, n2 = forming_matrix('second')
        if n1 != m2:
            print('The operation cannot be performed.')
            continue
        result = multiply_matrix(matrix_1, matrix_2)
        showing_result(result)
    elif user_choice == 4:
        print('1. Main diagonal\n2. Side diagonal\n3. Vertical line\n4. Horizontal line')
        t_choice = int(input())
        if t_choice == 1:
            matrix, m, n = forming_matrix(order='')
            result = transpose_main(matrix)
            showing_result(result)
        elif t_choice == 2:
            matrix, m, n = forming_matrix(order='')
            result = transpose_side(matrix)
            showing_result(result)
        elif t_choice == 3:
            matrix, m, n = forming_matrix(order='')
            result = transpose_vertical(matrix)
            showing_result(result)
        elif t_choice == 4:
            matrix, m, n = forming_matrix(order='')
            result = transpose_horizontal(matrix)
            showing_result(result)
    elif user_choice == 5:
        matrix, m1, n1 = forming_matrix()
        determinant = calculate_determinant(matrix)
        print(f'The result is:\n{determinant}')
    elif user_choice == 6:
        matrix, m1, n1 = forming_matrix()
        determinant = calculate_determinant(matrix)
        if determinant == 0:
            print('This matrix doesn\'t have an inverse.')
            continue
        result = getMatrixInverse(matrix)
        showing_result(result)






