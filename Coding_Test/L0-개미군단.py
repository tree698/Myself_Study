hp = 999

def solution(hp):
    answer = 0
    remainder = hp
    for x in [5, 3, 1]:
        if remainder // x > 0:
            answer += remainder // x
            remainder = remainder % x
    return answer

print(solution(hp))