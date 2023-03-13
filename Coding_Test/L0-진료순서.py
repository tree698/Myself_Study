emergency = [3, 76, 24]

def solution(emergency):
    answer = [0 for x in emergency]
    sort = sorted(emergency, reverse=True)
    for i, x in enumerate(sort):
        index = emergency.index(x)
        answer[index] = i + 1
    return answer

print(solution(emergency))