class Student:

    def __init__(self, name, last_name, birth_year):
        self.name = name
        self.last_name = last_name
        self.birth_year = birth_year
        # calculate the student_id here
    def student_id(self):
        print(self.name[0] + self.last_name + self.birth_year)

a = input()
b = input()
c = input()
stu = Student(a, b, c)
stu.student_id()
