byte = int(input()).to_bytes(2, byteorder='little')
answer = 0
for i in byte:
    answer += i
print(answer)