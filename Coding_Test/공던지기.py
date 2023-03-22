numbers = [1, 2, 3, 4, 5, 6]

def solution(numbers, k):
    turn = 1 + (k -1) * 2
    answer = turn % len(numbers)
    if answer == 0:
        return numbers[-1]
    return answer