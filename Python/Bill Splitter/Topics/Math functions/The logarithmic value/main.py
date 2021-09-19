import math

a, b = int(input()), int(input())
a_1 = abs(a)

if b <= 0 or b == 1:
    print(round(math.log(a_1), 2))
else:
    print(round(math.log(a_1, b), 2))
