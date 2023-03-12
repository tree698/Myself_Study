num_list = [1, 2, 3, 4, 5, 6]

def solution(num_list):
    answer = []
    odd, even = 0, 0
    for x in num_list:
        if x % 2 == 0:
            even += 1
        if x % 2 != 0:
            odd += 1
    answer.append(even)
    answer.append(odd)
    return answer

def solution2(num_list):
    answer = [0, 0]
    for x in num_list:
        answer[x % 2] += 1
    return answer

print(solution2(num_list))