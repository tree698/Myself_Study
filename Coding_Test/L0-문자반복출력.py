my_string = 'helloT'
n = 3

def solution(my_string, n):
    answer = ''
    for x in my_string:
        answer = answer + (x * n)
    return answer

def solution2(my_string, n):
    return ''.join(x * n for x in my_string)

print(solution2(my_string, 3))
