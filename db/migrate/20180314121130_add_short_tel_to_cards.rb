class AddShortTelToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :short_tel, :string
  end
end
