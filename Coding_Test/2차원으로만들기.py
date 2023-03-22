num_list = [100, 95, 2, 4, 5, 6, 18, 33, 948]

def solution2(num_list, n):
    answer = []
    num = 0
    while num < len(num_list):   # 참일 경우
        sub_answer = []
        for x in num_list[num: num+n]:  # 슬라이싱
            sub_answer.append(x)
            num += 1
        answer.append(sub_answer)
    return answer

def solution(num_list, n):
    answer = []
    start = 0
    end = start + n
    while start < len(num_list):
        answer.append(num_list[start: end])
        start += n
        end += n
    return answer

print(solution(num_list, 3))



