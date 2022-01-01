names = input().split()
# for i in sorted(set(names)):
#     print(i)

print(*sorted(set(names)), sep='\n')