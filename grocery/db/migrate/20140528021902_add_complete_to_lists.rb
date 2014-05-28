class AddCompleteToLists < ActiveRecord::Migration
  def change
    add_column :lists, :complete, :boolean
  end
end
