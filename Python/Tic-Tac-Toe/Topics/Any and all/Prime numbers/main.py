prime_numbers = []
for i in range(2, 1001):
    chk = True
    if any(j for j in range(2, i-1) if i % j == 0):
        chk = False
    if chk == True:
        prime_numbers.append(i)


