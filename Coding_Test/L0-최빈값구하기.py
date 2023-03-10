array = [1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 1, 1, 1, 1, 0, 0, 0, 0]

def solution(array):
    set_array = list(set(array))
    count = [array.count(i) for i in set_array]
    if count.count(max(count)) != 1:
        return -1
    index = count.index(max(count))
    return set_array[index]

print(solution(array))
