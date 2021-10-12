class Person:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def __iadd__(self, n):
        # self.name = other.name
        self.height += n
        return self

    def __isub__(self, n):
        # self.name = other.name
        self.height -= n
        return self

