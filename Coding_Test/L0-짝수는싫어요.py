def solution(n):
    answer = [x for x in range(1, n+1) if x % 2 != 0]
    answer.sort()
    return answer


print(solution(13))