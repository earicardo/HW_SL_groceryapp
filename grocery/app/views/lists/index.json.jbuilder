json.array!(@lists) do |list|
  json.extract! list, :id, :title, :text, :is_healthy, :complete
  json.url list_url(list, format: :json)
end
