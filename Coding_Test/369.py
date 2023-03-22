def solution(order):
    three = str(order).count('3');
    six = str(order).count('6');
    nine = str(order).count('9')
    return three + six + nine

# print(solution(3))

s = "pythonisawesome"
r = sorted(s)
print(r)