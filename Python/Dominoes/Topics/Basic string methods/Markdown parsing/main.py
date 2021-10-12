s = input()
for i in s:
    if i == '*' or i == '_' or i == '~' or i == '`':
        s = s.strip(i)
print(s)


print(input().strip("*_~`"))
