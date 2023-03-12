def solution(my_string):
    array = [x for x in my_string]
    array.reverse()
    return ''.join(array)


my_string= 'jaron'
print(solution(my_string))