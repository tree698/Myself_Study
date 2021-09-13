a = input()
b = [int(i) for i in a]
average = []
i = 0
while i < len(b) - 1:
    c = (b[i] + b[i + 1]) / 2
    average.append(c)
    i += 1
print(average)
