class ListsController < ApplicationController

def new 
end

def create
  @list = List.new(list_params)
 
  @list.save
  redirect_to @list
end
def show
  @list = List.find(params[:id])
end 
private
  def list_params
    params.require(:list).permit(:title, :text)
  end

end
