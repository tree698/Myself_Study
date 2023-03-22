my_string = "abCdEfghIJ"

def solution(my_string):
    answer = ''
    for x in my_string:
        if x.islower():
            answer += x.upper()
        elif x.isupper():
            answer += x.lower()
    return answer

print(solution(my_string))