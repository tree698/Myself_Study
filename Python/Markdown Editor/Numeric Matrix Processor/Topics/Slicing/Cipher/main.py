string = "no clouds here to spy on pets"

result =''
for i in string[::5]:
    result = i + result
print(result)