a = input()
b = int(input())
c = sum(b.to_bytes(2, byteorder='little'))
result = []
for i in a:
    result.append(chr(ord(i) + c))
print(''.join(result))
