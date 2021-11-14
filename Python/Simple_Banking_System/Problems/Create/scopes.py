x, y = 1, 2

def foo():
    global y
    if y == 2:
        x = 2
        y = 1

foo()

# global x가 적용됨
print(x)
# foo 함수에서 global y가 변경됨
print(y)

if y == 1:
    x = 3
print(x)