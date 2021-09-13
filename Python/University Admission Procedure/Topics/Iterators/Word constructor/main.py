a, b = input(), input()
names = ''
for i in range(min(len(a), len(b))):
    names += a[i] + b[i]
print(names)