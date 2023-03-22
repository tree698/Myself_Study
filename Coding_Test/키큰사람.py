array = [149, 180, 192, 170, 167, 167]

def solution(array, height):
    array.append(height)
    array.sort()
    index = array.index(height)
    answer = len(array[index:])
    return answer - array.count(height)

# print(solution(array, 167))

def solution2(n):
    if n == 1:
        return 1;
    elif (n**0.5)*(n**0.5) == n or n == 1:
        return 1
    return 2
print(solution2(1000000))