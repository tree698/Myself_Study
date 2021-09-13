n = []
s = 0
while 1:
    m = int(input())
    n.append(m)
    if sum(n) == 0:
        for i in n:
            s += i**2
        break
print(s)