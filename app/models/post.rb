class Post < ApplicationRecord
  validates :title, :body, presence: true
  validates :body, length: { minimum: 200 }

  # enum category: [:Sports, :Politics, :Literature, :Music, :Health, :Fitness, :Finance, :Fashion, :Education]

  belongs_to :user
  belongs_to :category
end
