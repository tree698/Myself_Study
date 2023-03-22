my_str = "abc1Addfggg4556b"

def solution2(my_str, n):
    answer = []
    for x in range(6, len(my_str), n):
        # 인덱스 값이 출력된다
        answer.append(x)
    return answer

def solution(my_str, n):
    answer = []
    start, end = 0, n
    for x in range(0, len(my_str), n):
        answer.append(my_str[start: end])
        start += n
        end += n
    return answer

print(solution(my_str, 6))