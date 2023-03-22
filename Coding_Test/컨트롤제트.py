s = "1 2 Z 3"

def solution(s):
    answer = 0
    s_list = s.split()
    for i, x in enumerate(s_list):
        if x != 'Z':
           answer += int(x)
    return answer

print(solution(s))