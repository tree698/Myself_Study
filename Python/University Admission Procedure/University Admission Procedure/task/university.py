# n = int(input())
# with open('applicants.txt') as f:
#     data = [line.strip().split() for line in f.readlines()]
#
# count = {'Chemistry': 0, 'Biotech': 0, 'Engineering': 0, 'Mathematics': 0, 'Physics': 0}
# test = {'Biotech': 'chemistry', 'Chemistry': 'chemistry', 'Engineering': 'computer_science', 'Mathematics': 'math', 'Physics': 'physics'}
# test_num = {'physics': 2, 'chemistry': 3, 'math': 4, 'computer_science': 5}
# result = {'Biotech': [], 'Chemistry': [], 'Engineering': [], 'Mathematics': [], 'Physics': []}
#
# for i in range(6, 9):
#     for department in count.keys():
#         if department == 'Biotech':
#             for applicant in range(len(data)):
#                 data[applicant][3] = str((float(data[applicant][2]) + float(data[applicant][3])) / 2)
#             ranking = sorted(data, key=lambda x: (-float(x[test_num[test[department]]]), x[0], x[1]))
#         elif department == 'Chemistry':
#             ranking = sorted(data, key=lambda x: (-float(x[test_num[test[department]]]), x[0], x[1]))
#         elif department == 'Engineering':
#             for applicant in range(len(data)):
#                 data[applicant][5] = str((float(data[applicant][4]) + float(data[applicant][5])) / 2)
#             ranking = sorted(data, key=lambda x: (-float(x[test_num[test[department]]]), x[0], x[1]))
#         elif department == 'Mathematics':
#             ranking = sorted(data, key=lambda x: (-float(x[test_num[test[department]]]), x[0], x[1]))
#         else:
#             for applicant in range(len(data)):
#                 data[applicant][2] = str((float(data[applicant][2]) + float(data[applicant][4])) / 2)
#             ranking = sorted(data, key=lambda x: (-float(x[test_num[test[department]]]), x[0], x[1]))
#
#         for applicant in ranking:
#             accepted = ' '.join([applicant[0], applicant[1], applicant[test_num[test[department]]]])
#             if count[department] == n:
#                 break
#             if applicant[i] == department:
#                 count[department] += 1
#                 result[department].append(accepted)
#                 data.remove(applicant)
#
# for department in result.keys():
#     with open(f'{department}.txt', 'w') as f:
#         for i in sorted(result[department], key=lambda x: (-float(x.rsplit(' ', 1)[1]), x.rsplit(' ', 1)[0], x[1])):
#             f.write(f'{i}\n')





departments = {'Biotech': [], 'Chemistry': [], 'Engineering': [], 'Mathematics': [], 'Physics': []}
exam = {'Biotech': (2, 3, 6), 'Chemistry': (3, 3, 6), 'Engineering': (4, 5, 6), 'Mathematics': (4, 4, 6), 'Physics': (2, 4, 6)}

max_accepted = int(input())
with open('applicants.txt') as f:
    applicants = [line.split() for line in f]

for i in range(7, 10):  # priority fields in input file
    for dep in departments.keys():
        # applicants_sorted = sorted(applicants, key=lambda x: (-(int(x[exam[dep][0]])+int(x[exam[dep][1]])), x[0], x[1]))
        applicants_sorted = sorted(applicants, key=lambda x: (-max(((int(x[exam[dep][0]])+int(x[exam[dep][1]])) / 2),  int(x[exam[dep][2]])), x[0], x[1]))
        for applicant in applicants_sorted:
            if applicant[i] == dep and len(departments[dep]) < max_accepted:
                score = max(((int(applicant[exam[dep][0]]) + int(applicant[exam[dep][1]])) / 2), int(applicant[exam[dep][2]]))
                departments[dep].append([applicant[0], applicant[1], score])
                applicants.remove(applicant)

for dep in departments.keys():
    with open(f'{dep.lower()}.txt', 'w', encoding='utf-8') as f:
        for student in sorted(departments[dep], key=lambda x: (-x[2], x[0], x[1])):
            print(*student, file=f)