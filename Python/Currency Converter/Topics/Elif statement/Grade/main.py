student_score = int(input())
maximum_score = int(input())
s = (100 * student_score) / maximum_score
if 90 <= s:
    print('A')
elif 80 <= s < 90:
    print('B')
elif 70 <= s < 80:
    print('C')
elif 60 <= s < 70:
    print('D')
elif s < 60:
    print('F')