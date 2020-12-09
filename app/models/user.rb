class User < ApplicationRecord
  has_secure_password
  validates :first_name, :last_name, :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4 }

  has_many :posts
end
