numbers = [0, 31, 24, 10, 1, 9]

def solution(numbers):
    max_1 = max(numbers)
    numbers.remove(max_1)
    max_2 = max(numbers)
    return max_1 * max_2

print(solution(numbers))