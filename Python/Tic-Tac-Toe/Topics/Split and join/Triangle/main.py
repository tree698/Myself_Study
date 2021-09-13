a = int(input())
b = []
for i in range(2 * a - 1):
    b.append('#' * (i + 1))

for i in b:
    if len(i) % 2 != 0:
        print(i.center((2 * a - 1), ' '))
