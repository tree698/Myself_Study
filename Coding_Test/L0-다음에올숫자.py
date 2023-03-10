common1 = [2,4,8]
common2 = [4,3,2]
common3 = [2, 10, 50]

def solution(common):
    r1 = common[1] - common[0]
    r2 = common[2] - common[1]
    if (r1 == r2):
        return common[-1] + r1
    elif(r1 > r2):
        return int(common[-1] * (r1 / r2))
    else:
        return int(common[-1] * (r2 / r1))

# print(solution(common2))


def solution2(common):
    a, b, c = common[:3]
    if(b -a == c -b):
        return common[-1] + (b-a)
    else:
        return common[-1] * (b/a)

print(solution2(common2))