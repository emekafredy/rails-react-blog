class Post < ApplicationRecord
  validates :title, :body, :category_id, presence: true
  validates :body, length: { minimum: 200 }

  belongs_to :user
  belongs_to :category
end
