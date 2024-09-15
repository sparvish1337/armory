RegisterNetEvent('armory:addItemToInventory')
AddEventHandler('armory:addItemToInventory', function(item)
  local playerId = source

  --print('Adding item to inventory:', item, 'for player:', playerId)

  local success, response = exports.ox_inventory:AddItem(playerId, item, 1)

  --if success then
  --    print('Item successfully added:', item)
  --else
  --    print('Failed to add item:', response)
  --end
end)
