# puts "Hello everyone"

# p "42".to_i
# p 42.to_s

student = "bOra"

# # re-assignement
# student = "Super Bora"

# puts "Hello #{student}!"

# p student.length
# p student.size
# p student.first # only on arrays!s
# p student[0]

# p student.first(2) # only on arrays!
# p student[0...2] # from index 0 to index 2 excluded
# p student[0..1] # from index 0 to index 1 included
# p student[..1] # from index 0 to index 1 included
# p student.slice(0,2) # from index 0 to index 2 excluded
# p student.slice(2) # index 2

p student.downcase
p student.upcase
p student.capitalize

students = ["Shingo", "Celso", "Harry"]

tilde_student = students.join("~~~")

p tilde_student.split
p tilde_student.split("~~~")