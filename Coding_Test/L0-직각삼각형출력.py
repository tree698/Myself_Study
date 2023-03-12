def solution2(n):
    for i in range(n):
        for j in range(n):
            if i >= j:
                print("*", end='')
        print()

n = int(input())
for i in range(1, n+1):
    print(i*"*")

# print(solution(3))