class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f'Hello, I am {self.name}!')

a = input()
b = Person(a)
b.greet()
