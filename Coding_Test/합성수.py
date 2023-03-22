def solution(n):
    answer = 0
    count = 0
    for x in range(1, n+1):
        for i in range(1, int(x**0.5)+1):
            if x % i == 0:
                count += 2
                if i == x // i:
                    count -= 1
        if count >= 3:
            answer += 1
        count = 0
    return answer

print(solution(15))