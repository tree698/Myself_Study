# please work with the preset variable `word`
forward = word
# backward = ''.join(reversed(forward))
backward = forward[::-1]

if forward == backward:
    print("Yes")
else:
    print("No")