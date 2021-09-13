# our class Ship
# class Ship:
#     def __init__(self, name, capacity, destination):
#         self.name = name
#         self.capacity = capacity
#         self.cargo = 0
#         self.destination = destination
#
#     # the old sail method that you need to rewrite
#     def sail(self):
#         return "The {} has sailed for {}".format(self.name, self.destination)
#
#
# black_pearl = Ship("Black Pearl", 800, input())
# print(black_pearl.sail())


# class Ship:
#     def __init__(self, name, capacity):
#         self.name = name
#         self.capacity = capacity
#         self.cargo = 0
#
#     # the old sail method that you need to rewrite
#     def sail(self, destination):
#         return "The {} has sailed for {}".format(self.name, destination)
#
#
# black_pearl = Ship("Black Pearl", 800)
# print(black_pearl.sail(input()))


class Ship:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.cargo = 0

    # the old sail method that you need to rewrite
    def sail(self):
        return "The {} has sailed for {}!".format(self.name, input())


black_pearl = Ship("Black Pearl", 800)
print(black_pearl.sail())