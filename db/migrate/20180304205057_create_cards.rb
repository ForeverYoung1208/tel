class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :type
      t.string :name
      t.string :tel
      t.string :email

      t.timestamps
    end
  end
end
