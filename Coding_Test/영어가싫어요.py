numbers = "onefourzerosixseven"
def solution(numbers):
    convert_to_num = ''
    found_alpha = ''
    data = {'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'}
    for x in numbers:
        found_alpha += x
        if found_alpha in data:
            convert_to_num += data[found_alpha]
            found_alpha = ''
    return int(convert_to_num)

print(solution(numbers))