box = [10,8,6]

def solution(box, n):
    width = box[0] // n
    length = box[1] // n
    height = box[2] // n
    return width * length * height

print(solution(box, 3))
