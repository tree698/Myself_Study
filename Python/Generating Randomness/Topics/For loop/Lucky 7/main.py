result = []
for i in range(int(input())):
    n = int(input())
    if n % 7 == 0:
        result.append(n ** 2)
for x in result:
    print(x)
