numbers = [1, 2, 3]

def solution(numbers, direction):
    if direction == 'left':
        numbers.append(numbers[0])
        del numbers[0]
        return numbers
    elif direction == 'right':
        numbers.insert(0, numbers[-1])
        del numbers[-1]
        return numbers

print(solution(numbers, 'left'))