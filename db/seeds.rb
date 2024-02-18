# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts '###' * 10
puts 'Finding a User...'
puts '###' * 10
# NOTE: create a user with email@example.com with devise before running this task
user = User.find_by(email: 'email@example.com')
if user
  ActiveRecord::Base.transaction do
    puts 'Creating Origins...'
    # colombia
    colombia_huila = Origin.create(country: 2, name: 'Huila')
    colombia_narino = Origin.create(country: 2, name: 'Nariño')
    colombia_antioquia = Origin.create(country: 2, name: 'Antioquia')
    # guatemala
    guatemala_antigua = Origin.create(country: 10, name: 'Antigua')
    guatemala_huehuetenango = Origin.create(country: 10, name: 'Huehuetenango')
    guatemala_atitlán = Origin.create(country: 10, name: 'Atitlán')
    # ethiopia
    ethiopia_sidamo = Origin.create(country: 4, name: 'Sidamo')
    ethiopia_yirgacheffe = Origin.create(country: 4, name: 'Yirgacheffe')
    ethiopia_guji = Origin.create(country: 4, name: 'Guji')
    # brasil
    brasil_minas_gerais = Origin.create(country: 0, name: 'Minas Gerais')
    brasil_espirito_santo = Origin.create(country: 0, name: 'Espírito Santo')
    brasil_sao_paulo = Origin.create(country: 0, name: 'São Paulo')
    puts '...'

    puts 'Creating Coffees...'
    user.coffees.create(name: 'Alemayehu Sali', origin_id: ethiopia_guji.id)
    user.coffees.create(name: 'German Ortiz', origin_id: colombia_huila.id)
    user.coffees.create(name: 'Dayana Rivadeneira', origin_id: colombia_narino.id)
    puts '...'
    puts 'Completed!'
  end
else
  puts "Error - Couldn't find a User. Create a User with email@example.com by devise"
  puts "endpoint: http://localhost:3001/signup"
  puts "{\n     'user':  {\n        'email': 'email@example.com',\n        'password': '123456',\n        'name': 'Fake User'\n     }\n}"
end
# NOTE: reset fake data
# User.find_by(email: 'email@example.com').coffees.destroy_all
# Origin.destroy_all
