def range_sum(numbers, start, end):
    answer = 0
    for number in numbers:
        if number >= start and number <= end:
            answer += number
    return answer


input_numbers = list(map(int, input().split()))
a, b = map(int, input().split())
print(range_sum(input_numbers, a, b))
