age = 23

def solution(age):
    alpa = 'abcdefghijklomopqrstuvwxyz'
    age_array = [alpa[int(x)] for x in str(age)]
    return ''.join(age_array)

print(solution(age))