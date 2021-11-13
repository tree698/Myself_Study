# our class Ship
class Ship:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.cargo = 0

    # the old sail method that you need to rewrite
    def sail(self):
        return "The {} has sailed for ".format(self.name)


black_pearl = Ship("Black Pearl", 800)
a = str(input())
print(black_pearl.sail() + a + "!")