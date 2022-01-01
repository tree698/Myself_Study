while True:
    store = {}
    num_input = input().split()
    num = []
    for n in num_input:
        if '=' in n:
            for i in n:
                num.append(i)
        else:
            num.append(n)
    # m=4


    if len(num) == 0:
        continue
    elif len(num) == 1:
        if num[0] == '/exit':
            print('Bye!')
            break
        elif num[0] == '/help':
            print('The program calculates both addition and substraction')
            continue
        elif not num[0].isalpha():
            print('Invalid identifier')
            continue
        else:
            if num[0] in store:
                print(store[num[0]])
                continue
            else:
                print('Unknown variable')
    elif


 # 1. 변수 저장 (a = 4)
 # 2. 계산 (a + b + c + 4)

# num_input = input().split()
# num = []
# for n in range(len(num_input)):
#     if '=' in num_input[n]:
#         for i in range(len(num_input[n])):
#             if num_input[n][i] == '='
#
#
#         n_new = n.strip('=')
#         num.append(n_new)
#         num.append('=')
#     else:
#         num.append(n)
# print(num)





# while True:
#     num = input()
#     if num.startswith('/'):
#         if num not in ['/exit', '/help']:
#             print('Unknown command')
#             continue
#         elif num == '/exit':
#             print('Bye!')
#             break
#         elif num == '/help':
#             print('The program calculates both addition and substraction')
#             continue
#     elif len(num) == 0:
#         continue
#     try:
#         print(eval(num))
#     except:
#         print('Invalid expression')
#         continue

# while True:
#     s = input()
#     if s == '/exit':
#         break
#     elif s == '/help':
#         print('The program calculates the sum of numbers')
#         continue
#     elif s == '':
#         continue
#     s = s.split()
#     res, sign = 0, 1
#     for el in s:
#         if el.isnumeric() or (el[0] == '-' and el[1:].isnumeric()):
#             res, sign = res + sign * int(el), 1
#         else:
#             for ch in el:
#                 if ch == '-':
#                     sign *= -1
#     print(res)
# print('Bye!')

# while True:
#     data = input().replace('+', '').replace('--', '').replace('- ', '-').split()
#     if not len(data):
#         continue
#     if data[0] == '/exit':
#         print("Bye!")
#         break
#     if data[0] == '/help':
#         print("The program calculates arithmetic expressions")
#         continue
#     print(sum(map(int, data)))