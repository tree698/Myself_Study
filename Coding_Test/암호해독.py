cipher = "pfqallllabwaoclk"

def solution(cipher, code):
    answer = ''
    n = 0
    while n < len(cipher):
        n += code
        sub_cipher = cipher[:n]
        answer += sub_cipher[-1]
    if code == 1:
        return cipher[0]
    return answer

print(solution(cipher, 2))