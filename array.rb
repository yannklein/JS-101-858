# ARRAY CRUD
students = ['Azat', 'Yuki', 'Nana']

# Create
students << "Kyle"
students.push("Devin")
p students

# Read
p students[1]

# Update
students[1] = "Super Yuki"
p students

# Delete
students.delete_at(1)
students.delete("Kyle")
p students

# Iterate
students.each do |student|
  puts "#{student} is amazing!"
end