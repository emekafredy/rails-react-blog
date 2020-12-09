# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = Category.create([
  { name: 'Sports' },
  { name: 'Politics' },
  { name: 'Literature' },
  { name: 'Music' },
  { name: 'Health' },
  { name: 'Fitness' },
  { name: 'Finance' },
  { name: 'Fashion' },
  { name: 'Education' },
  { name: 'Tech' }
])

3.times do
  User.create do |user|
    user.first_name = Faker::Name.first_name
    user.last_name = Faker::Name.last_name
    user.username  = "#{user.first_name}_#{user.last_name}"
    user.password  = ENV['USER_PASS']
  end
end


30.times do
  Post.create do |post|
    post.user  = User.all.sample
    post.category = categories.sample
    post.title = Faker::Lorem.sentence(word_count: 8)
    post.body  = Faker::Lorem.paragraphs(number: 10)
  end
end