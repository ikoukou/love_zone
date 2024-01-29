a = 'aaa'
b = a
a = 'bbb'
print(a, b, id(a), id(b))

c = 123
d = c
c = c+1
print(c, d, id(c), id(d))

e = (1, 2, 3)
f = e
e = e + (1, 2)
print(e, f, id(e), id(f))

g = [1, 2, 3]
h = g
g.append(5)
print(h, g, id(h), id(g))

i = {'a': 1, 'b': 2, 'c': 3}
j = i
i['d'] = 4
print(i, j, id(i), id(j))
