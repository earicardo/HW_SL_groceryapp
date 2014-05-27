class AddIsHealthyToLists < ActiveRecord::Migration
  def change
    add_column :lists, :is_healthy, :boolean
  end
end
