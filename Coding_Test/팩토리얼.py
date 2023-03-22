def solution(n):
    result = 1
    count = 0
    while result <= n:
        count += 1
        result *= count
    return count - 1

print(solution(3628800))